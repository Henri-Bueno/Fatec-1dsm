// importar o express
const express = require("express");
// importar o dotenv
const dotenv = require("dotenv");
// importar o path
const path = require("path");

// carregar o arquivo .env no servidor
dotenv.config({quiet:true});

// process.env é ambiente do sistema
const PORT = process.env.PORT;

const publicPath = path.join(__dirname,"public");
const pagesPath = path.join(publicPath,"pages");

console.log("pagesPath", pagesPath);
// construir o servidor
const app = express();

// subir o servidor
app.listen(PORT, function(){
    console.log(`Rodando em http://localhost:${PORT}`);
});

app.get("/", function(_req,res){
    res.sendFile( path.join(pagesPath,"index.html") );
});
