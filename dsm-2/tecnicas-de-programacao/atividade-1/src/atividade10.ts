interface Pessoa {
    nome: string;
    idade: number;
}
type Carro = {
    modelo: string;
    ano: number;
};

const pessoa: Pessoa & { peso: number} = {
    nome: "Ana",
    idade: 21,
    peso: 61.23
};

const carro: Carro & { marca: string} = {
    modelo: "Gol",
    ano: 2010,
    marca: "VW"
};