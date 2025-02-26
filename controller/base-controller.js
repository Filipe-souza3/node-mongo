'use strict'

// const _repository = require("../repositories/base-respository");
const _validador = require("../validation/validation");

class BaseController {


   constructor(_repository) {
      this.repository = _repository;
      this.validation = new _validador();
      this.post = this.post.bind(this);
      this.get = this.get.bind(this);
      this.getById = this.getById.bind(this);
      this.put = this.put.bind(this);
      this.delete = this.delete.bind(this);
   }

   //se nao quiser usar o bind usa arrow function
   // post = async (req, res) => {
   async post(req, res) {
      try {
         this.validation.isValid(req, res, "Erro com algum dos campos");
         return res.status(201).send(await this.repository.create(req));
      } catch (error) {
         console.log(error);
         return res.status(500).send("erro ao tentar registrar");
      }
   }

   async get(req, res) {
      try {
         return res.status(200).send(await this.repository.find());
      } catch (error) {
         console.log(error);
         return res.status(500).send("erro ao tentar buscar elementos");
      }
   }

   async getById(req, res) {
      try {
         if (req.params.id) {
            return res.status(200).send(await this.repository.findByid(req));
         }
         return res.status(406).send("valor como parametro invalido");

      } catch (error) {
         console.log(error);
         return res.status(500).send("erro ao tentar buscar");
      }
   }

   async put(req, res) {
      try {
         if (this.validation.isValid(req)) {
            return res.status(202).send(await this.repository.update(req));
         }
         return res.status(202).send("valores invalidos");

      } catch (error) {
         console.log(error);
         return res.status(406).send("erro ao tentar atualizar");
      }
   }

   async delete(req, res) {
      try {
         if (req.params.id) {
            this.repository.delete(req);
            return res.status(204).send();
         }
         return res.status(406).send("parametro invalido");

      } catch (error) {
         console.log(error);
         return res.status(500).send("erro ao tentar deletar");
      }
   }
}

module.exports = BaseController;