// + - * / % ** 
let n1 = 10;
let n2 = 5;
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2);
console.log(2 ** 3);

/* OPERADOR LÓGICO - EXEMPLO

Para uma pessoa viajar para o exterior:

precisa ser maior de 18 anos 
OU 
acompanhado com os pais
E
ter comprado o bilhete */

let idade = 21;
let paisPresentes = false;
let comprouBilhete = false;
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;
console.log(`Pode viajar: ${podeViajar}`);
