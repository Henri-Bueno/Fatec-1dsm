function converter(entrada){
    let textos = entrada.split(";")
 let obj =
    "lugradouro": textos[0].trim(),
    "bairro": textos[1].trim(),
    "municipio": textos[2].trim(),
    "uf": textos[3].trim(),
    "cep":textos[4].trim()
 
}
const nros = aleatorio(10);
console.log(nros);