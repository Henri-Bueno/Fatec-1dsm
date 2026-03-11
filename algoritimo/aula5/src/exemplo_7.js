function somar(a, b){
    const r = a + b;
    return {operador1:a, operador2:b, resultado:r};
}

const r = somar(2,3);
console.log(r);