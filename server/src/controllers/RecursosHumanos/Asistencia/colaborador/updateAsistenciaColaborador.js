const AsistenciaColaborador = require("../../../../models/RecursosHumanos/AsistenciaColaborador");

const updateAsistenciaColaborador = async (req, res) => {
  const {
    _id,
    colaborador,
    fecha,
    ingreso,
    salida,
    inicioAlmuerzo,
    finAlmuerzo,
  } = req.body;
  try {
    if (!_id) {
      return res.status(400).json({ message: "El _id es requerido" });
    }
    const findAsistenciaColaborador = await AsistenciaColaborador.findById(_id);
    if (!findAsistenciaColaborador) {
      return res
        .status(404)
        .json({ message: "AsistenciaColaborador no encontrada" });
    }
    if (colaborador) findAsistenciaColaborador.colaborador = colaborador;
    if (fecha) findAsistenciaColaborador.fecha = fecha;
    if (ingreso) findAsistenciaColaborador.ingreso = ingreso;
    if (salida) findAsistenciaColaborador.salida = salida;
    if (inicioAlmuerzo)
      findAsistenciaColaborador.inicioAlmuerzo = inicioAlmuerzo;
    if (finAlmuerzo) findAsistenciaColaborador.finAlmuerzo = finAlmuerzo;

    await findAsistenciaColaborador.save();

    res.status(200).json({
      message: "AsistenciaColaborador actualizada",
    });
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports = updateAsistenciaColaborador;
