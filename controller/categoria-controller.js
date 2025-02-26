'use strict'
const BaseController = require('./base-controller');
const categoria = require('../Models/categoria-model');
const repository = require("../repositories/base-respository");
// const categoria = mongoose.model('categoria');

// function categoriaController() { }

// categoriaController.prototype.post = async (req, res) => { 
// let modelo = new categoria(req.body);
//     let result = await modelo.save();
//     return res.status(201).send(result);
//  };

// categoriaController.prototype.put = async (req, res) => { 
//     await categoria.findByIdAndUpdate(req.params.id, {$set: req.body});
//     let result = await categoria.findById(req.params.id);
//     return res.status(202).send(result);
//  };

// categoriaController.prototype.get = async (req, res) => {
//     let list = await categoria.find().catch((e)=>{console.info(e)});
//     res.status(200).send(list);
//  };
// categoriaController.prototype.getById = async (req, res) => { 
//     let result = await categoria.findById(req.params.id);
//     return res.status(200).send(result);
//  };

// categoriaController.prototype.delete = async (req, res) => { 
//     await categoria.findByIdAndDelete(req.params.id);
//     return res.status(204);  
//  };


// module.exports = categoriaController;


class categoriaController extends BaseController {

    constructor() {
        super(new repository(categoria, null));
    }

    // async get (req, res){
    //     return super.get(categoria, req, res);
    // }



    // async post(req, res) {
    //     let modelo = new categoria(req.body);
    //     let result = await modelo.save();
    //     return res.status(201).send(result);
    // }

    // async put(req, res) {
    //     await categoria.findByIdAndUpdate(req.params.id, { $set: req.body });
    //     let result = await categoria.findById(req.params.id);
    //     return res.status(202).send(result);
    // }

    // async get(req, res) {
    //     let list = await categoria.find().catch((e) => { console.info(e) });
    //     res.status(200).send(list);
    // }

    // async getById(req, res) {
    //     let result = await categoria.findById(req.params.id);
    //     return res.status(200).send(result);
    // }

    // async delete(req, res) {
    //     await categoria.findByIdAndDelete(req.params.id);
    //     return res.status(204);
    // }

}

module.exports = categoriaController;