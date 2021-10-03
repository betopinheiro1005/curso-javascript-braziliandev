/* método fromEntries - classe Object */

/* Transformando um array de arrays em um objeto */

const arrayDeEntrada = [
  ['abc', 2],
  ['def', 4]
]

const obj = Object.fromEntries(arrayDeEntrada)

console.log(obj)

