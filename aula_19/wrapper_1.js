/* Criar uma string */

const str1 = String("Brazilian Dev1")
const str2 = new String("Brazilian Dev2")
console.log(`str1 ${str1}
str2 ${str2}`)

console.log(`str1 dividida = ${str1.split('')}
str2 dividida = ${str2.split('')}`)

const str2Convertido = str2.valueOf()
console.log(typeof str2Convertido)

