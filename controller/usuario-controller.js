'use strict'

const BaseController = require("../controller/base-controller");
const repository = require("../repositories/usuario-repository");
const usuario = require("../Models/usuario-model");
const jwt = require("jsonwebtoken");
const variables = require("../bin/configuration/variables");

class usuarioController extends BaseController {


    constructor() {
        super(new repository(usuario, "nome email _id ativo dataCriacao"));
        this.post = this.post.bind(this);
        this.authentication = this.authentication.bind(this);
    }

    async authentication(req, res) {
        this.validation.isValid(req.body, res, "Erro com algum dos campos");
        this.validation.isRequired(req.body.email, res, "Email obrigatório");
        this.validation.isRequired(req.body.senha, res, "Senha obrigatório");
        if (this.validation.isOk()) {
            let user = await this.repository.authentication(req.body.email, req.body.senha);
            if (user) {
                return res.status(200).send({
                    usuario: user,
                    token: jwt.sign({usuario: user}, variables.security.secretKey)
                });
            } else {
                return res.status(401).send({ msg: "erro ao logar" });
            }
        }
        return res.status(401).send({msg:"erro ao logar"});
    }

    async post(req, res) {
        this.validation.isValid(req.body, res, "Erro com algum dos campos");
        this.validation.isRequired(req.body.nome, res, "Nome obrigatório");
        this.validation.isRequired(req.body.email, res, "Email obrigatório");
        this.validation.isRequired(req.body.senha, res, "Senha obrigatório");
        this.validation.isRequired(req.body.ativo, res, "Ativo obrigatório");
        if (this.validation.isOk()) {
            let user = await this.repository.emailExists(req.body.email);
            if (user && user.email) {
                return res.status(404).send("Esse email já existe");
            }
            super.post(req, res);
        }
    }

    async put(req, res) {
        if (req.body.senha) {
            delete req.body.senha;
        }
        let user = await this.repository.update(req.params.id, req.body);
        return res.status(200).send(user);
    }
}


module.exports = usuarioController;