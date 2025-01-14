import axios from "../../../../api/axios";
import documentoCloudinary from "../../../../api/cloudinaryDocument";
import convertDocx from "../../../../utils/convertDocx";

const renderDoc = async (boleta) => {
  try {
    console.log("Boletas de pago:", boleta);

    const formattedData = {
      ruc_empresa: "20123456789",
      razonSocial_empresa: "LABORATORIO DE INSTRUMENTOS AMBIENTALES S.A.C",
      fechaBoletaDePago: "2024-12-01",
      tipoD: "DNI",
      numeroD: "12345678",
      colaborador: "Juan Perez",
      situacion: "Planilla",
      ingreso: "",
      tipoT: "Empleado",
      regimen: "AFP",
      días: 30,
      horas: 240,
      ingresos: [
        {
          isFirst: true,
          codigo: "0120",
          concepto: "REMUNERACIÓN POR CUMPLEAÑOS",
          tipo: "INGRESOS",
          monto: 200,
        },
        {
          isFirst: false,
          codigo: "0130",
          concepto: "BONO EXTRAORDINARIO",
          tipo: "INGRESOS",
          monto: 300,
        },
      ],
      descuentos: [
        {
          isFirst: true,
          codigo: "0200",
          concepto: "CONTRIBUCIÓN PREVISIONAL",
          tipo: "APORTES DEL TRABAJADOR",
          monto: 150,
        },
        {
          codigo: "0210",
          concepto: "DESCUENTO POR INASISTENCIAS",
          tipo: "APORTES DEL TRABAJADOR",
          monto: 50,
        },
        {
          codigo: "0210",
          concepto: "DESCUENTO POR INASISTENCIAS",
          tipo: "APORTES DEL TRABAJADOR",
          monto: 50,
        },
        {
          codigo: "0210",
          concepto: "DESCUENTO POR INASISTENCIAS",
          tipo: "APORTES DEL TRABAJADOR",
          monto: 50,
        },
        {
          codigo: "0210",
          concepto: "DESCUENTO POR INASISTENCIAS",
          tipo: "APORTES DEL TRABAJADOR",
          monto: 50,
        },
        {
          codigo: "0210",
          concepto: "DESCUENTO POR INASISTENCIAS",
          tipo: "APORTES DEL TRABAJADOR",
          monto: 50,
        },
        {
          codigo: "0210",
          concepto: "DESCUENTO POR INASISTENCIAS",
          tipo: "APORTES DEL TRABAJADOR",
          monto: 50,
        },
      ],
      aportes: [
        {
          codigo: "0210",
          concepto: "DESCUENTO POR INASISTENCIAS",
          monto: 50,
        },
        {
          codigo: "0210",
          concepto: "DESCUENTO POR INASISTENCIAS",
          monto: 50,
        },
        {
          codigo: "0210",
          concepto: "DESCUENTO POR INASISTENCIAS",
          monto: 50,
        },
      ],

      total: 600, // Total neto a pagar
    };
    const archivo =
      "https://res.cloudinary.com/ddci9jvnh/raw/upload/v1736441604/MENBRETE_DE_LABORATORIO_1_ehqrzl.docx";

    const convertir = await convertDocx(
      formattedData,
      archivo,
      "Boleta_de_Pago"
    );
    if (!convertir)
      throw new Error(
        "No se pudo completar el proceso de renderizado de la boleta",
        "Error"
      );
    return convertir;
  } catch (error) {
    console.error("Error al renderizar la boleta:", error);
    throw new Error(error, "Error");
  }
};

export default renderDoc;
