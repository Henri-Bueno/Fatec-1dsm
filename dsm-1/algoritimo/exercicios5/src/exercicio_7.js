function multiplo (elementos, divisor){
    let itens = []
    for (i = 0; i < elementos.length; i++){
        if(elementos[i]% divisor == 0)
        itens.push(elementos[i])
}
return itens
}

const nros = [21,12,18,15,28,19,23,14];
const resultado = multiplo(nros, 4);
console.log(resultado);