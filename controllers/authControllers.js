const Usuario = require("../models/usuario_model");
const bcrypt = require("bcrypt");

const crearUsuario = async (req, res) => {
  const { name, email, password } = req.body;

  console.log(req.body);

  if (!name || !email || !password) {
    return res.status(400).json({
      msg: "Todos los campos son obligatorios",
    });
  }

  try {
    let usuario = await Usuario.findOne({ email });
    console.log(usuario);

    if (usuario) {
      return res.status(400).json({
        msg: "El email ya está registrado",
      });
    }

    usuario = new Usuario(req.body);

    const salt = bcrypt.genSaltSync(10);
    usuario.password = bcrypt.hashSync(password, salt);

    console.log(usuario.password);

    await usuario.save();

    res.status(201).json({
      msg: "Usuario registrado",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Por favor contactarse con el administrador",
    });
  }
};

const loginUsuario = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      msg: "Todos los campos son obligatorios",
    });
  }

  try {
    let usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(400).json({
        msg: "Usuario o contraseña no son correctos",
      });
    }

    const validarPassword = bcrypt.compareSync(password, usuario.password);

    // console.log(validarPassword);

    if (!validarPassword) {
      return res.status(400).json({
        msg: "Usuario o contraseña no son correctos",
      });
    }

    res.status(200).json({
      modal: "sucess",
      msg: "Usuario logueado",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Por favor contactarse con el administrador",
    });
  }
};

module.exports = {
  crearUsuario,
  loginUsuario,
};
