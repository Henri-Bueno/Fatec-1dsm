// importar a biblioteca
prompt = require("prompt-sync")();
// declarando a função
function letra1( nome ){
    return nome[0];
}
//coloca a entrada na função 
entrada = prompt("coloque seu nome: ")
r = letra1(entrada);
console.log(`primeira letra: ${r}`);

