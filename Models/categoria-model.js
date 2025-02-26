'use strict'
const mongoose = require("mongoose");
const schema = mongoose.Schema;
// const { mongoose, Schema } = require('mongoose');

const categoriaModel = new schema({
    titulo: { trim: true, index: true, required: true, type: String },
    descricao: { type: String },
    foto: { type: String, required: true },
    ativa: { type: Boolean, required: true },
    dataCriacao: { type: Date, default: Date.now }
}, { versionKey: false });



//verificacao antes de salvar
categoriaModel.pre('save', next => {
    let agora = new Date();
    if(!this.dataCriacao){
        this.dataCriacao = agora;
    }
    next();
});

module.exports = mongoose.model('categoria', categoriaModel);