// importando a biblioteca express
const express = require("express");

// cria uma aplicação Express
const app = express();

app.listen(3000, function(){
    console.log("Rodando na porta 3000...");
});

const x = function(req,res){
    res.send("oie");
};

app.get("/", x);
