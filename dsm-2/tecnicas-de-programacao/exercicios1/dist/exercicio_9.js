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
//R: Correta, possui os necessarios de X, Y e o E necessarios no W
//2-
testar({
    a: 10,
    b: 20,
    c: 30,
    e: "oi"
});
//R: Correta, possui o b adicional que pode ou não ser incluido, portanto funciona completamente
//3-
// testar({
//     a: 10,
//     d: 40,
//     e: "oi"
// });
// //R: Incorreto, esta faltando a propriedade de c que é necessaria para o funcionamento
// //4-
// testar({
//     c: 30,
//     e: "oi"
// });
//R: //R: Incorreto, esta faltando o a propriedade obrigatoria de X
//# sourceMappingURL=exercicio_9.js.map