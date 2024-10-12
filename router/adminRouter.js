const express = require("express");
const {
  crearVehiculo,
  listaUsuarios,
} = require("../controllers/adminControllers");
const routerAdmin = express.Router();

routerAdmin.post("/crearVehiculo", crearVehiculo);
routerAdmin.get("/listaUsuarios", listaUsuarios);
// routerAdmin.put("/editarVehiculo");
// routerAdmin.delete("/eliminarVehiculo/:id");
// routerAdmin.get("/enviarVehiculos");
// routerAdmin.get("/enviarUsuarios");

module.exports = routerAdmin;
