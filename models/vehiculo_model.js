const { Schema, model } = require("mongoose");

const VehiculoSchema = Schema({
  foto: {
    type: String,
    required: true,
  },

  nombre: {
    type: String,
    required: true,
  },

  color: {
    type: String,
    required: true,
  },

  modelo: {
    type: String,
    required: true,
  },

  precio: {
    type: Number,
    required: true,
  },
});

module.exports = model("Vehiculos", VehiculoSchema);
