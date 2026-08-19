"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function testar(w) {
    console.log(w);
}
//1-
testar({
    a: 10,
    c: 30,
    e: "oi"
});
//R: Todas as cláusulas de X e Y são atendidas (apenas as obrigatórias), juntamento com a de W.
//2-
testar({
    a: 10,
    b: 20,
    c: 30,
    e: "oi"
});
//R: //R: Todas as cláusulas de X e Y são atendidas (obrigatórias e não obrigatórias), juntamento com a de W.
//3-
// testar({
//     a: 10,
//     d: 40,
//     e: "oi"
// });
// //R: //R: Cláusula obrigatória de Y não é atendida, apenas atributos de X foram atendidos. 
// //4-
// testar({
//     c: 30,
//     e: "oi"
// });
//R: //R: Cláusula obrigatória de X não é atendida, apenas atributos de Y foram atendidos.
//# sourceMappingURL=atividade9.js.map