// importar a biblioteca
prompt = require("prompt-sync")();

// inicializando o array vazio
nomes = [];

entrada = "a"; // inicializa a variável com "a"

// repetir enquanto entrada tiver uma string diferente de ""
while( entrada != "" ){
    entrada = prompt("Entre com o nome:");
    if( entrada != "" ){
        nomes.push(entrada);
    }
}
// percorre o array para imprimir
i = 0
while(i < nomes.length){
console.log(i, nomes[i]);
i = i + 1
}