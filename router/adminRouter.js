const express = require("express");
const {
  crearVehiculo,
  listaUsuarios,
  listaVehiculos,
  editarVehiculo,
  eliminarVehiculo,
} = require("../controllers/adminControllers");
const validarJWT = require("../middleware/validarJWT");

const routerAdmin = express.Router();

routerAdmin.post("/crearVehiculo", validarJWT, crearVehiculo);
routerAdmin.get("/listaUsuarios", validarJWT, listaUsuarios);
routerAdmin.get("/listaVehiculos", validarJWT, listaVehiculos);
routerAdmin.put("/editarVehiculo", validarJWT, editarVehiculo);
routerAdmin.delete("/eliminarVehiculo/:id", validarJWT, eliminarVehiculo);

module.exports = routerAdmin;
