'use strict'
const { mongoose, Schema } = require('mongoose');

const usuarioModel = new Schema({
    nome: { type: String, required: true, trim: true, index: true },
    email: { type: String, required: true },
    senha : { type: String, required: true },
    foto: { type: String },
    ativo: { type: Boolean, required: true },
    dataCriacao: { type: Date, default: Date.now }
}, { versionKey: false });

//verificacao antes de salvar
usuarioModel.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriacao) {
        this.dataCriacao = agora;
    }
    next();
});module.exports = mongoose.model('usuario', usuarioModel);