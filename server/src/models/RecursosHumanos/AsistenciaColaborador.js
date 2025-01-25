const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const asistenciaColaboradorSchema = new Schema({
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
  },
  minTarde: {
    type: Number,
  },
  minExtras: {
    type: Number,
  },
});

const AsistenciaColaborador = mongoose.model(
  "AsistenciaColaborador",
  asistenciaColaboradorSchema
);

module.exports = AsistenciaColaborador;
