const { Response, Request, Router } = require('express');
const express = require('express');

const app = express();
const route = Router();

app.use(express.json());

var users = [
    {
        id:1,
        nome:"joao11",
        login:"joao123",
        senha:"123"
    },
    {
        id:2,
        nome:"maria",
        login:"maria123",
        senha:"456"
    },
    {
        id:3,
        nome:"jose",
        login:"jose123",
        senha:"789"
    }
];

var user = {
    nome:"joao11",
    login:"joao123",
    senha:"123"
}

route.get("/", (req, res)=>{
    res.status(200).send(users);
});

route.post("/", (req, res)=>{
    console.log(req.body);
    users.push(req.body);
    res.status(200).send(req.body);
});

route.put("/:id", (req, res)=>{
    users.map((e)=>{
        if(e.id == req.params.id){
            if(req.body.nome){
                e.nome = req.body.nome;
            }
            if(req.body.login){
                e.login = req.body.login;
            }
            if(req.body.senha){
                e.senha = req.body.senha;
            }
        }
    });
    res.status(200).send(req.body);
});

route.delete("/:id", (req, res)=>{
    let index = users.findIndex((e)=> e.id == req.params.id );
    users.pop(index);
    res.status(200).send();
});



app.use(route);
app.listen(3000,()=>{
    console.log("api funcionando");
});