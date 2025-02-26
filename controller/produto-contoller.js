'use strict'

const produto = require("../Models/produto-model");
const repository = require("../repositories/base-respository");
const BaseController = require("./base-controller");

class produtoController extends BaseController{

    constructor(){
        super(new repository(produto, null));
    }
}


module.exports = produtoController;