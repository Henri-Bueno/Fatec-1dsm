prompt = require("prompt-sync")();

idadeString = prompt("Entre com sua idade: ");
idade = parseInt(idadeString)

if(idade < 18){
    console.log("De menor")
}
else{
    if(idade > 65){
        console.log("Aposentado")
    }
    else{
        console.log("Trabalhador")
    }
}