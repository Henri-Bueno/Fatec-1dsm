// importando a biblioteca
const prompt = require("prompt-sync")();

// criar o JSON vazio
const pessoa = {};



// ler do teclado
pessoa.nome = prompt("Entre com o nome:");
pessoa.idade = prompt("Entre com a idade:");
pessoa.peso = prompt("Entre com o peso:");
pessoa.doador = prompt("Entre com o doador:");

// imprimir na tela
console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Peso: ${pessoa.peso}, Doador: ${pessoa.doador}`);