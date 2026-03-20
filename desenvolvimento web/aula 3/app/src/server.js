const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    quiet: true,
    path: path.resolve(__dirname, ".." , ".env")
});

const app = express();

const PORT = process.env.PORT
const publicPath = path.join(__dirname, "..", "public")
const pagesPath = path.join(publicPath, "pages")
const assetsPath = path.join(publicPath, "assets")

app.listen(PORT, function(){
    console.log(`Rodando em http://localhost:${PORT}`)
})

app.get("/", express.static(pagesPath))
app.use("/assets", express.static(assetsPath))