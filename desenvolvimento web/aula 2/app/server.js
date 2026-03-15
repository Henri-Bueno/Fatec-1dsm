// importar o express
const express = require("express");
// importar o dotenv
const dotenv = require("dotenv");
// carregar o arquivo .env no servidor
dotenv.config({quiet:true});
// importar o path
const path = require("path");



// process.env é ambiente do sistema
const PORT = process.env.PORT;

// construir o servidor
const app = express();

const publicPath = path.join(__dirname,"public");
const pagesPath = path.join(publicPath,"pages");

// mapeando a pasta /assets para a URL /assets
app.use("/assets", express.static(path.join(publicPath,"assets")));

// subir o servidor
app.listen(PORT, function(){
    console.log(`Rodando em http://localhost:${PORT}`);
});

app.get("/", function(_req,res){
    res.sendFile( path.join(pagesPath,"index.html") );
});

app.get("/login", function(_req,res){
    res.sendFile( path.join(pagesPath,"login.html") );
});

app.get("/cadastro", function(_req,res){
    res.sendFile( path.join(pagesPath,"cadastro.html") );
});

app.use(function(_req,res){
    res.status(404).sendFile( path.join(pagesPath,"404.html") );
});