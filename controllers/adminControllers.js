const Usuario = require("../models/usuario_model");
const Vehiculo = require("../models/vehiculo_model");

const listaUsuarios = async (req, res) => {
  try {
    const listaUsuarios = await Usuario.find();

    res.status(200).json({
      listaUsuarios,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Por favor contactarse con el administrador",
    });
  }
};

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

const listaVehiculos = async (req, res) => {
  try {
    const listaVehiculos = await Vehiculo.find();

    res.status(200).json({
      listaVehiculos,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Por favor contactarse con el administrador",
    });
  }
};

const editarVehiculo = async (req, res) => {
  try {
    const editarVehiculo = await Vehiculo.findById(req.body._id);

    if (!editarVehiculo) {
      res.status(400).json({
        msg: "El vehículo a editar no existe",
      });
    }

    await Vehiculo.findByIdAndUpdate(req.body._id, req.body);

    res.status(200).json({
      msg: "Vehiculo editado",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Por favor contactarse con el administrador",
    });
  }
};

const eliminarVehiculo = async (req, res) => {
  try {
    const eliminarVehiculo = await Vehiculo.findById(req.params.id);

    console.log(eliminarVehiculo);
  } catch (error) {}
};

module.exports = {
  crearVehiculo,
  listaUsuarios,
  listaVehiculos,
  editarVehiculo,
  eliminarVehiculo,
};
