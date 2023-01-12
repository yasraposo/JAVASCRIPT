//muito usado para definir um valor padrão dos parâmentros.

let n  = 1

n = n || 10

console.log(n)

let isValid = false

// if (isValid) {
//     console.log("é válido")
// }

isValid && console.log("é válido")
isValid || console.log("não é válido")
