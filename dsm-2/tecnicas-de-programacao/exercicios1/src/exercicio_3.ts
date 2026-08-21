interface X {
    a: number,
    b: number,
};

interface Y {
    c: number,
};


interface Z extends X, Y{}


function print(w: Z & { d: string }) {
    console.log(w);
}
