const express = require('express');
const _categoriaRoute = require('../routes/categoria-router');
const _produtoRoute = require('../routes/produto-router');
const _usuarioRoute = require('../routes/usuario-router');
const mongoose = require('mongoose');
const variables = require('./configuration/variables');

const app = express();

//conectando com mongodb
mongoose.connect(variables.database.connection);

app.use(express.json());
app.use('/api/categorias', new _categoriaRoute().returnRouter());
app.use('/api/produtos', new _produtoRoute().returnRouter());
app.use('/api/usuarios', new _usuarioRoute().returnRouter());

module.exports = app;
