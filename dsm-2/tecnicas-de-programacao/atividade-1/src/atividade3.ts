interface X {
    a: number,
    b: number,
};

interface Y {
    c: number,
};


interface Z {dado:X|Y};

function print(w: Z & { d: string }) {
    console.log(w);
}

const meuObj: Z & {d:string} = {
    d: "teste",
    dado: {
        a:18,
        b:14
    }
}

print(meuObj)