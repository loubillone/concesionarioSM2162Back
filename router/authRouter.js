const express = require("express");
const routerAuth = express.Router();

routerAuth.post("/crearUsuario");
// routerAuth.post("/login");

module.exports = routerAuth;
