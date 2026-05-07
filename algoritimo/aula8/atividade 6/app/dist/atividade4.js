"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function adicionarPessoa(fila, nome) {
    fila.push(nome);
    return fila;
}
function listarFila(fila) {
    if (fila.length == 0) {
        console.log("Fila Vazia");
    }
    else {
        for (let i = 0; i = fila.length - 1; i++) {
            console.log(fila[i]);
        }
    }
}
// Dados de teste
const filaAtendimento = [];
adicionarPessoa(filaAtendimento, "Ana");
adicionarPessoa(filaAtendimento, "Bruno");
adicionarPessoa(filaAtendimento, "Carla");
adicionarPessoa(filaAtendimento, "Diego");
console.log("-----------------------------");
//# sourceMappingURL=atividade4.js.map