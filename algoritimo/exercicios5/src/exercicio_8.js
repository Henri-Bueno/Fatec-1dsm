function multiplo (elementos, a, b){
    let itens = []
    for (i = 0; i < elementos.length; i++){
        if(elementos[i]% a == 0 || elementos[i]% b == 0)
        itens.push(elementos[i])
}
return itens
}

const nros = [21,12,18,15,28,19,23,14];
const resultado = multiplo(nros , 3, 4);
console.log(resultado);