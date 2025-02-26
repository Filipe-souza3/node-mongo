'use strict'

const BaseController = require("../controller/base-controller");
const repository = require("../repositories/usuario-repository");
const usuario = require("../Models/usuario-model");

class usuarioController extends BaseController{


    constructor(){
        super(new repository(usuario,"nome email _id ativo dataCriacao"));
        this.post = this.post.bind(this);
    }

    async post(req, res){
        try {
            this.validation.isRequired(req.body.nome, res, "Nome obrigatório");
            this.validation.isRequired(req.body.email, res, "Email obrigatório");
            this.validation.isRequired(req.body.senha, res, "Senha obrigatório");
            if(this.validation.isOk()){
                return res.status(201).send(await this.repository.create(req));
            }
         } catch (error) {
            console.log(error);
            return res.status(500).send("erro ao tentar registrar");
         }
    }
}

module.exports = usuarioController;