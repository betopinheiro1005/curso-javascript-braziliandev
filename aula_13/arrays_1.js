/* arrays são objetos */

/* criando um array de forma literal */

let frutas = []

frutas = ["maçã","banana"];

console.log(frutas)

console.log('-------------------------')

/* -------------------------------------  */

/* Outra maneira seria usando o operador new que constrói um novo objeto por meio da função construtora do Array */

let frutas2 = new Array("laranja", "abacaxi", "pera")

let tamanho2 = frutas2.length;

console.log(frutas2)
console.log(tamanho2)

console.log('-------------------------')

/* -------------------------------------  */

let frutas3 = new Array(10)

let tamanho3 = frutas3.length;

console.log(frutas3)
console.log(tamanho3)

console.log('-------------------------')