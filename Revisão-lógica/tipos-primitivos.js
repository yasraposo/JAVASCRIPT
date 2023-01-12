/* strings, number(int, floats), boolean (true/false)
 undefined, null, symbol (ES2015) 
 var1 = 10 -> únicos caracteres aceitos _ e $ (podem iniciar a variavel) */ 

let minhaVar =  "minha string";
let minhaVar2 = 'minha "string" com aspas duplas'; 
var minhavar3 = `minha template literal`;  

let idade = 40;
// let msg = "eu possuo " + idade + " anos";
let msg = `eu possuo ${idade} anos`; // sintaxe mais moderna e mais usada 

console.log(msg);
console.log("Hello " + "world");
console.log(typeof msg, typeof idade, typeof minhaVar); // typeof -> verificar o tipo de dado

const n1 = 10; 
const n2 = 1.1;
console.log(`o tipo de n1 é ${typeof n1} e seu valor é ${n1}`);
console.log(`o tipo de n2 é ${typeof n2} e seu valor é ${n2}`);

const isValid = true;
console.log(`isValid: ${isValid}`);

let varTeste = null;
console.log(varTeste);
console.log(typeof varTeste);
varTeste = 10;
console.log(typeof varTeste, varTeste);
