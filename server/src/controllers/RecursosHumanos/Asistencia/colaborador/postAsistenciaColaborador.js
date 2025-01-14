const AsistenciaColaborador = require("../../../../models/RecursosHumanos/AsistenciaColaborador");

const postAsistenciaColaborador = async (req, res) => {
  const { colaborador, fecha, ingreso, salida, inicioAlmuerzo, finAlmuerzo } =
    req.body;
  try {
    const findAsistencia = await AsistenciaColaborador.findOne({
      colaborador,
      fecha,
    });
    if (findAsistencia) {
      return res
        .status(400)
        .json({ message: "Asistencia de Colaborador en este día ya existe" });
    }
    const asistencia = new AsistenciaColaborador({
      colaborador,
      fecha,
      ingreso,
      salida,
      inicioAlmuerzo,
      finAlmuerzo,
    });
    await asistencia.save();
    return res
      .status(201)
      .json({ message: "Asistencia de Colaborador creada" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = postAsistenciaColaborador;
