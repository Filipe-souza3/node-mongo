'use strict'

const BaseRepository = require("./base-respository");
// const usuarioModel = require("../Models/usuario-model");
const md5 = require("md5");

class UsuarioRepository extends BaseRepository {

    constructor(m, proj) {
        super(m, proj);
        // this.model = m;
        this.projecao = proj;
        this.authenticate = this.authenticate.bind(this);
        this.create = this.create.bind(this);
     }

     async emailExists(Email){
      return this.model.findOne({email:Email}, this.projecao);
     }

     async authenticate(Email, Senha){
        let hash = md5(Senha);
        this.model.findOne({email:Email, senha:hash}, this.projecao);
     }


     async create(req, res){
      let hash = md5(req.body.senha);
      req.body.senha = hash;
      let usuario = await this.model.create(req.body);
      return this.model.findById(usuario.id, this.projecao);
     }


}

module.exports = UsuarioRepository;