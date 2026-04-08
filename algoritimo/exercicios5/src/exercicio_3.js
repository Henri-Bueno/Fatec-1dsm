function aleatorio(entrada){
    let itens = []
    for (i = 0; i < entrada; i++){
        itens[i] =Math.floor(Math.random() * 100)
}
return itens
}
const nros = aleatorio(10);
console.log(nros);