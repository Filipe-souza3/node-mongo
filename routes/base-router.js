'use strict'
const { Router } = require("express");
const _auth = require('../middleware/authentication');

class baseRouter{

    constructor(controller, auth){
        this.auth = auth;
        this.controller = controller;
        this.router = Router();
        this.authentication = new _auth();
        this.returnRouter = this.returnRouter.bind(this);

    }

    setRouter(){
        this.router.get("/", this.authentication.auth, this.controller.get);
        this.router.get("/:id", this.authentication.auth, this.controller.getById);
        this.auth == true ? this.router.post("/", this.authentication.auth, this.controller.post) : this.router.post("/", this.controller.post);
        this.router.put("/:id", this.authentication.auth, this.controller.put);
        this.router.delete("/:id", this.authentication.auth, this.controller.delete);
    }

    returnRouter(){
        this.setRouter();
        return this.router;
    }
}

module.exports = baseRouter;