/* Para uma pessoa viajar para o exterior:

precisa ser maior de 18 anos 
OU 
acompanhado com os pais
E
ter comprado o bilhete */

let idade = 27;
let paisPresentes = false;
let comprouBilhete = true;
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;

console.log(`Pode viajar: ${podeViajar}`);

// let msgMaiorIdade = ""
// if(idade >= 18){
//     msgMaiorIdade = "É maior de idade"
// } else {
//     msgMaiorIdade = "É menor de 18 anos"
// }

FIXME /* operador ternário */

let msgMaiorIdade = (idade >= 18) ? "É maior de idade" : "É menor de 18 anos"

if (!comprouBilhete) {
    console.log(" Não Comprou o bilhete")
} else {
    console.log(msgMaiorIdade)
}

let n1 = 0
let n2 = 7
let media = (n1+n2) / 2
console.log(`media: ${media}`);

if(n1 === 0 || n2 === 0) {
    console.log("Reprovado")
} else if (media < 7) {
    console.log("Recuperação")
} else {
    console.log("Aprovado")
}

console.log("saiu do bloco if")