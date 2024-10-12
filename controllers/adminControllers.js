const Usuario = require("../models/usuario_model");
const Vehiculo = require("../models/vehiculo_model");

const crearVehiculo = async (req, res) => {
  const { foto, nombre, color, modelo, precio } = req.body;

  if (!foto || !nombre || !color || !modelo || !precio) {
    res.status(400).json({
      msg: "Todos los campos son obligatorios",
    });
  }

  try {
    let vehiculo = new Vehiculo(req.body);

    await vehiculo.save();

    res.status(201).json({
      msg: "Vehículo creado",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Por favor contactarse con el administrador",
    });
  }
};

module.exports = crearVehiculo;
