import promptSync from 'prompt-sync';

const prompt = promptSync();

const x = parseInt(prompt('Digite um número x: '));
const y = parseInt(prompt('Digite um número y: '));

if (x < y) {
    console.log(x);
} else {

    const numeros: number[] = new Array(x).fill(undefined);

    numeros.forEach((_, i) => {
        numeros[i] = i + 1;
    });

    console.log(numeros);
}
