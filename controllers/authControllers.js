const Usuario = require("../models/usuario_model");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const crearUsuario = async (req, res) => {
  const { name, email, password } = req.body;

  // console.log(req.body);

  if (!name || !email || !password) {
    return res.status(400).json({
      msg: "Todos los campos son obligatorios",
    });
  }

  try {
    let usuario = await Usuario.findOne({ email });
    // console.log(usuario);

    if (usuario) {
      return res.status(400).json({
        msg: "El email ya está registrado",
      });
    }

    usuario = new Usuario(req.body);

    const salt = bcrypt.genSaltSync(10);
    usuario.password = bcrypt.hashSync(password, salt);

    // console.log(usuario.password);

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

    if (!validarPassword) {
      return res.status(400).json({
        msg: "Usuario o contraseña no son correctos",
      });
    }

    //Generamos el token

    // Creamos un objeto el cual definimos los datos que queremos guardar en el token
    const payload = {
      name: usuario.name,
      id: usuario._id,
      rol: usuario.rol,
    };

    // //Creamos el token y definimos cuanto tiempo queremos que dure

    const token = jwt.sign(payload, process.env.SECRET_JWT, {
      expiresIn: "1h",
    });

    console.log(token);
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
