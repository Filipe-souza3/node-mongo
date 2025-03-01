'use strict'
const _controller = require("../controller/usuario-controller");
const baseRouter = require("./base-router");

class route extends baseRouter {

    constructor() {
        super(new _controller(), false);
    }

    createRouteAuth(){
        this.router.post("/auth", this.controller.authentication);
    }

    returnRouter(){
        this.setRouter();
        this.createRouteAuth();
        return this.router;
    }
}
module.exports = route;

// const usuarioController = new _usuarioController();
// const authentication = new _auth();

// route.post("/auth", usuarioController.authentication);
// route.get("/",authentication.auth, usuarioController.get);
// route.get("/:id",authentication.auth,  usuarioController.getById);
// route.post("/", usuarioController.post);
// route.put("/:id", authentication.auth, usuarioController.put);
// route.delete("/:id", authentication.auth, usuarioController.delete);


// module.exports = route;