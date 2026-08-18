function converter(a){
    let textos = a.split(",")
 let nros = []
    for (i = 0; i <textos.length; i++){
        nros[i] = parseInt(textos[i])
}
    return nros
}

const teste = "30,60,50,10,20,40";
const resposta = converter(teste);
console.log(resposta);