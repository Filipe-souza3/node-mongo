const express = require('express');
const categoriaRoute = require('../routes/categoria-router');
const produtoRoute = require('../routes/produto-router');
const usuarioRoute = require('../routes/usuario-router');
const mongoose = require('mongoose');
const variables = require('./configuration/variables');

const app = express();

//conectando com mongodb
mongoose.connect(variables.database.connection);

app.use(express.json());
app.use('/api/categorias', categoriaRoute);
app.use('/api/produtos', produtoRoute);
app.use('/api/usuarios', usuarioRoute);

module.exports = app;
