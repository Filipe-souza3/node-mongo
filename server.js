'use strict'
const express = require('../food.Api/bin/express');
const variables = require('../food.Api/bin/configuration/variables');

express.listen(variables.api.port, () => {
    console.info(`Api iniciada na porta ${variables.api.port}`);
});