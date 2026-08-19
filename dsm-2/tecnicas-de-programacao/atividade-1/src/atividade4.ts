interface X {
    a: number,
    b: number,
};

interface Y extends X {
    c: number
};

function cadastro(w: Y & { d: string }) {
    console.log(w);
}

const meuObj:Y & {d:string} = {
    d: "teste",
    a: 21,
    b: 21,
    c: 54
}

cadastro(meuObj)