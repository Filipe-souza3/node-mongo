'use strict'

const jwt = require("jsonwebtoken");
const variables = require("../bin/configuration/variables");

class authentication {

    constructor() { }

    async auth(req, res, next) {
        let token = req.body.token || req.query.query || req.headers['x-access-token'];
        if (token) {
            try {
                let decode = await jwt.verify(token, variables.security.secretKey);
                req.usuarioLogado = decode;
                console.log(decode);
                next();
            } catch (error) {
                res.status(401).send({ msg: "token invalido" });
                return;
            }

        } else {
            res.status(401).send({ msg: "sem acesso" });
            return;
        }
    }

}

module.exports = authentication;