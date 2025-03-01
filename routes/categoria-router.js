'use strict'
const _controller = require('../controller/categoria-controller');
const baseRouter = require('./base-router');

class route extends baseRouter{
    constructor(){
        super(new _controller(), true);
    }
}
module.exports = route;

// route.get('/', controller.get);
// route.get('/:id', controller.getById);
// route.post('/', controller.post);
// route.put('/:id', controller.put);
// route.delete('/:id', controller.delete);

// module.exports = route;