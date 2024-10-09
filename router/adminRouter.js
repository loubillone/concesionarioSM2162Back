const express = require("express");
const routerAdmin = express.Router();

routerAdmin.post("/crearVehiculo");
// routerAdmin.put("/editarVehiculo");
// routerAdmin.delete("/eliminarVehiculo/:id");
// routerAdmin.get("/enviarVehiculos");
// routerAdmin.get("/enviarUsuarios");

module.exports = routerAdmin;
