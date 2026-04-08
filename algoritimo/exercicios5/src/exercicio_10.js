function contamultiplo (elementos, a, b){
    let contador = 0
    for (i = 0; i < elementos.length; i++){
        if(elementos[i]% a == 0 || elementos[i]% b == 0)
        contador++
}
return {contador}
}

const nros = [21,12,18,15,28,19,23,14];
const resultado = contamultiplo(nros , 3, 4);
console.log(resultado);