// importar a biblioteca
prompt = require("prompt-sync")();
// declarando a função
function letraFinal( nome ){
    i = nome.length
    return nome[i - 1];
}

//coloca a entrada na função 
entrada = prompt("coloque seu nome: ")

r = letraFinal(entrada);

console.log(`sua ultima letra: ${r}`);