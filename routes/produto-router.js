'use strict'
const _controller = require("../controller/produto-contoller");
const baseRouter = require("./base-router");

class route extends baseRouter{
    constructor(){
        super(new _controller(), true);
    }
}
module.exports = route;
