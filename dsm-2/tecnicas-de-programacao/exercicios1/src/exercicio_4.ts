interface X {
    a: number,
    b: number,
};
interface Y extends X{
    c: number,
};
function cadastro(w: Y & { d: string }) {
    console.log(w);
}

cadastro({a:2, b:2, c:4, d:"teste"})