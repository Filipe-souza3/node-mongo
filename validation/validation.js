'use strict'

class Validation {

    
    constructor() {
        this.valid = true;
     }

    isValid(req, res, msg) {
        if (Object.keys(req.body).length < 1) {
            this.valid = false;
            return res.status(404).send(msg);
        }
    }

    isRequired(val, res, msg){
        if(!val){
            this.valid = false;
            return res.status(404).send(msg);
        }
    }

    isOk(){
        return this.valid;
    }

}

module.exports = Validation;