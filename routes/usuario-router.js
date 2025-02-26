'use strict'
const { Router } = require("express");
const route = Router();
const _usuarioController = require("../controller/usuario-controller");

const usuarioController = new _usuarioController();

route.get("/", usuarioController.get);
route.get("/:id", usuarioController.getById);
route.post("/", usuarioController.post);
route.put("/:id", usuarioController.put);
route.delete("/:id", usuarioController.delete);

module.exports = route;