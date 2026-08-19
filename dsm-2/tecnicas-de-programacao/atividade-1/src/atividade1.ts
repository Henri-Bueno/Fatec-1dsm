type X = {
    a: number,
    b: number,
};
type Y = {
    c: number,
};
function cadastro(w: X & Y & { d: string }) {
    console.log(w);
}

cadastro({a:2, b:2, c:4, d:"teste"})