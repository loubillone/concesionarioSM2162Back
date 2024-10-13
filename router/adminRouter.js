const express = require("express");
const {
  crearVehiculo,
  listaUsuarios,
  listaVehiculos,
  editarVehiculo,
  eliminarVehiculo,
} = require("../controllers/adminControllers");
const routerAdmin = express.Router();

routerAdmin.post("/crearVehiculo", crearVehiculo);
routerAdmin.get("/listaUsuarios", listaUsuarios);
routerAdmin.get("/listaVehiculos", listaVehiculos);
routerAdmin.put("/editarVehiculo", editarVehiculo);
routerAdmin.delete("/eliminarVehiculo/:id", eliminarVehiculo);

module.exports = routerAdmin;
