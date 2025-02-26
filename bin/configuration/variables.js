const variables = {
    api:{
        port: process.env.port || 3000 // process.env.port usa par quando inciar o serv e passar parametro port ele reconhece e pega primeiro ex : node serve --port 4000
    },
    database:{
        connection: process.env.connection || 'mongodb://admin:admin@localhost:27017/food?authSource=admin'
    }
}

module.exports = variables;