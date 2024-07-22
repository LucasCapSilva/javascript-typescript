const usuario: [string, number] = ['Márcia da Silva', 30];
console.log(...usuario);
console.log(usuario);
// Se necessário
const numeros: Array<number> = new Array<number>(1, 2, 3, 4, 5, 6)
const [...resto] = numeros;
console.log(...resto)