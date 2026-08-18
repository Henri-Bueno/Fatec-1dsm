// importando a biblioteca
const prompt = require("prompt-sync")();
// ler do teclado
const nome = prompt("Entre com o nome:");
const idade = prompt("Entre com a idade:");
const peso = prompt("Entre com o peso:");
const doador = prompt("Entre com o doador:");
// guardar no formato JSON
const pessoa = {nome:nome, idade:idade, peso:peso, doador:doador};
// imprimir na tela
console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Peso: ${pessoa.peso}, Doador: ${pessoa.doador}`);