const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const asistenciaVisitanteSchema = new Schema({
  fecha: {
    type: String,
    required: true,
  },
  ingreso: {
    type: String,
  },
  salida: {
    type: String,
  },
  inicioAlmuerzo: {
    type: String,
  },
  finAlmuerzo: {
    type: String,
  },
  colaborador: {
    type: Schema.Types.ObjectId,
    ref: "Employee",
    required: true,
  },
});

const AsistenciaVisitante = mongoose.model(
  "AsistenciaVisitante",
  asistenciaVisitanteSchema
);

module.exports = AsistenciaVisitante;
