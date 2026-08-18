function aleatorio(a,b,c){
    let itens = []
    for (i = 0; i < a; i++){
        itens[i] =Math.floor(Math.random() *( c - b) + b)
}
itens.sort((a, b) => a - b)

return itens
}
// gerar 10 números aleatórios no intervalo [40,69]
const nros = aleatorio(10,40,70);
console.log(nros);