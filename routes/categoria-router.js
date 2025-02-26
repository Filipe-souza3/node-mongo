'use strict'

const {Router} = require('express');
const route = Router();
const _categoriaController = require('../controller/categoria-controller');
const controller = new _categoriaController();

route.get('/', controller.get);
route.get('/:id', controller.getById);
route.post('/', controller.post);
route.put('/:id', controller.put);
route.delete('/:id', controller.delete);

module.exports = route;