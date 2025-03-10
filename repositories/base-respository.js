'use strict'

class BaseRepository {

    projecao = undefined;

    constructor(m, proj) {
        this.model = m;
        if (proj) {
            this.projecao = proj;
        }
        this.create = this.create.bind(this);
        this.find = this.find.bind(this);
        this.findByid = this.findByid.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async create(req) {
        let modelo = new this.model(req.body);

        return await modelo.save({}, this.projecao);
    }

    async find() {
        return await this.model.find({}, this.projecao);
    }

    async findByid(id) {
        return await this.model.findById(id, this.projecao);
    }


    async update(id, data) {
        await this.model.findByIdAndUpdate(id, { $set: data },);
        return await this.model.findById(id, this.projecao);
    }

    async delete(req) {
        await this.model.findByIdAndDelete(req.params.id).catch((e) => { console.info(e) });
    }
}

module.exports = BaseRepository;