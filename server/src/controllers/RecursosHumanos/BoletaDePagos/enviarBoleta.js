const { EMAIL_PASS, EMAIL_USER } = process.env;
const nodemailer = require("nodemailer");
const convertPathToPdf = require("../../../utils/convertToPdf");
const BoletaDePagos = require("../../../models/RecursosHumanos/BoletaDePago");
const dayjs = require("dayjs");
const PQueue = require("p-queue"); // Manejo de colas

const enviarBoleta = async (req, res) => {
  const { datosBoleta } = req.body;
  console.log("datosBoleta", datosBoleta);

  try {
    if (!datosBoleta || datosBoleta.length === 0) {
      return res.status(400).json({ message: "Faltan datos para procesar." });
    }

    const newData = datosBoleta.map(async (data) => {
      const newUrl = await convertPathToPdf(data.archivoUrl);
      return {
        ...data,
        archivoUrl: newUrl,
      };
    });
    const datosBoletaDePago = await Promise.all(newData);

    // Responder inmediatamente al cliente
    res.status(200).json({
      message: "El proceso de envío de correos ha comenzado.",
    });

    // Configurar transporte de nodemailer
    const transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
      connectionTimeout: 5000, // 5 segundos
      sendTimeout: 10000, // 10 segundos
    });

    const errores = [];
    const queue = new PQueue({ concurrency: 2 }); // Máximo 2 correos simultáneos

    // Iterar sobre cada boleta y agregar la tarea a la cola
    for (const {
      email,
      colaborador,
      empresa,
      fechaBoletaDePago,
      boletaId,
      archivoUrl,
    } of datosBoletaDePago) {
      queue.add(async () => {
        try {
          if (
            !email ||
            !colaborador ||
            !empresa ||
            !fechaBoletaDePago ||
            !boletaId ||
            !archivoUrl
          ) {
            errores.push({ email, error: "Faltan datos." });
            return;
          }

          const findBoleta = await BoletaDePagos.findById(boletaId);
          if (!findBoleta) {
            throw new Error("Boleta no encontrada");
          }
          if (findBoleta.envio) {
            errores.push({ email, error: "La boleta ya fue enviada." });
            return;
          }

          const mailOptions = {
            from: `Pruebas Locales <${email}>`,
            to: email,
            subject: "Boleta de Pago",
            text: "Boleta de Pago",
            attachments: [
              {
                filename: "Boleta_de_Pago.pdf",
                content: archivoUrl,
                encoding: "base64",
              },
            ],
            html: `
              <html>
                <body>
                  <h1>Estimado/a ${colaborador},</h1>
                  <p>Le informamos que su boleta de pago correspondiente al mes de ${fechaBoletaDePago} ha sido generada.</p>
                  <p>${empresa}</p>
                </body>
              </html>
            `,
          };

          await transporter.sendMail(mailOptions);
          findBoleta.envio = dayjs().format("DD/MM/YYYY hh:mm A");
          await findBoleta.save();
        } catch (error) {
          console.log("Error enviando el correo a:", email);
          errores.push({ email, error: error.message });
        }
      });
    }

    // Esperar a que todos los correos se procesen en la cola
    await queue.onIdle();
    console.log(`Correos enviados con ${errores.length} error(es).`);
  } catch (error) {
    console.error(error);
  }
};

module.exports = enviarBoleta;
