// var, let, const -> formas de declarar a variavel

// var -> ES5 - cross-browser
// let e const -> ES2015 
// usar o let é mais seguro (consegue reatribuir um valor)
// const "não é permitido reatribuir um valor

let teste = "minha string";  // pode ser usado aspas simples ou duplas
teste = 10;

let teste2 = 10;

let teste3;

console.log(teste2);

teste3 = 20;
console.log(teste3);

const teste4 = "eu sou imutavel";
console.log(teste4);