'use strict'

const BaseRepository = require("./base-respository");
// const usuarioModel = require("../Models/usuario-model");
const md5 = require("md5");

class UsuarioRepository extends BaseRepository {

   constructor(m, proj) {
      super(m, proj);
      // this.model = m;
      //   this.projecao = proj;
      this.authenticate = this.authentication.bind(this);
      this.create = this.create.bind(this);
   }

   async emailExists(Email) {
      return this.model.findOne({ email: Email }, this.projecao);
   }

   async authentication(Email, Senha) {
      let hash = md5(Senha);
      return this.model.findOne({ email: Email, senha: hash }, this.projecao);
   }


   async create(req, res) {
      let hash = md5(req.body.senha);
      req.body.senha = hash;
      let usu = await super.create(req);
      return await super.findByid(usu.id);
   }

}

module.exports = UsuarioRepository;