var jwt = require("jsonwebtoken");

const validarJWT = async (req, res, next) => {
  //recibimos el token a traves de los header y definimos un nombre

  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      msg: "no hay token en la petición",
    });
  }

  try {
    //verificamos el válido
    const payload = jwt.verify(token, process.env.SECRET_JWT);
  } catch (error) {
    return res.status(401).json({
      msg: "Token no válido",
    });
  }

  //next deja ejecutar el siguiente middleware y si no hay más middleware ejecuta la función del flujo
  next();
};

module.exports = validarJWT;
