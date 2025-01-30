const { EMAIL_PASS, EMAIL_USER } = process.env;
const nodemailer = require("nodemailer");
const convertPathToPdf = require("../../../utils/convertToPdf");
const BoletaDePagos = require("../../../models/RecursosHumanos/BoletaDePago");
const dayjs = require("dayjs");

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
    const { default: PQueue } = await import("p-queue");
    const queue = new PQueue({ concurrency: 3 }); // Instanciar PQueue con 'new'
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
          const fs = require("fs");
          const pdfBuffer = fs.readFileSync(archivoUrl);

          const mailOptions = {
            from: `Pruebas Locales <${EMAIL_USER}>`,
            to: email,
            subject: "Boleta de Pago",
            text: "Boleta de Pago",
            attachments: [
              {
                filename: "Boleta_de_Pago.pdf",
                content: pdfBuffer,
                encoding: "base64",
              },
            ],
            html: `        <!DOCTYPE html>
            <html lang="es">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Boleta de Pago</title>
            <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 20px;
                }
                .container {
                  background-color: #ffffff;
                  border-radius: 5px;
                  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                  padding: 20px;
                  max-width: 600px;
                  margin: auto;
                }
                h1 {
                  color: #4CAF50; /* Verde */
                }
                p {
                  color: #555;
                  line-height: 1.5;
                }
                .button {
                  display: inline-block;
                  background-color: #FFC107; /* Amarillo */
                  color: #ffffff;
                  padding: 10px 15px;
                  text-decoration: none;
                  border-radius: 5px;
                  margin-top: 20px;
                }
                .footer {
                    margin-top: 20px;
                    font-size: 12px;
                    color: #777;
                  }
                  </style>
              </head>
              <body>
                  <div class="container">
                <h1>Estimado/a ${colaborador},</h1>
                <p>Le informamos que su boleta de pago correspondiente al mes de ${fechaBoletaDePago} ha sido generada.</p>
                <p>Si tiene alguna pregunta o necesita más información, no dude en ponerse en contacto con el departamento de recursos humanos.</p>
                <p>Saludos cordiales,</p>
                <p>${empresa}</p>
                <div class="footer">
                <p>Este es un correo automático, por favor no responda.</p>
                <img src="http://localhost:3001/api/recepcionBoleta?boletaId=${boletaId}" style="display:none;" alt="pixel de seguimiento" />
      
                </div>
                </div>
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

    await queue.onIdle();
    console.log("Errores:", errores);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = enviarBoleta;
