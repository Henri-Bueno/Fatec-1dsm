type X = {
    a: number,
    b: number,
};
type Y = {
    c: number,
};
type Z = X | Y;
function print(w: Z & { d: string }) {
    console.log(w);
}
print({ a: 1, b: 2, d: "oi" }); // correto
print({ c: 1, d: "oi" }); // correto

// print({ a: 1, d: "oi" }); // incorreto, pois trata-se de uma função de interseção entre Z e {d: ...}, ou seja, devemos cumprir as exigências de pelo menos um tipo que copõe Z (X ou Y). 

// print({ d: "oi" }); // incorreto, não construimos nenhum tipo de Z na f