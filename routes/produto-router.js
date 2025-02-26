'use strict'
const { Router } = require("express");
const route = Router();
const _produtoController = require("../controller/produto-contoller");

const produtoController = new _produtoController();

route.get("/", produtoController.get);
route.get("/:id", produtoController.getById);
route.post("/", produtoController.post);
route.put("/:id", produtoController.put);
route.delete("/:id", produtoController.delete);

module.exports = route;