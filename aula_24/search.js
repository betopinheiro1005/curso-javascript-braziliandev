/* Métodos de busca e comparação - método search */

/* O método search retorna o índice na string do primeiro trecho que satisfaz a expressão regular.
Do contrário, o valor -1 será retornado. */

/* Um objeto contendo uma expressão regular. Se um objeto for passado como parâmetro e não for do tipo RegExp,
ele será implicitamente convertido para uma RegExp através da instrução new RegExp(obj). */

var str1 = "NaN significa 'não é um número'. Infinity contem -Infinity e +Infinity em JavaScript."
var str2 = "Meu avô tem 65 anos e minha avô tem 63."
var str3 = "O contrato foi declarado null (nulo) e void (sem efeito)";

console.log(str1.search("número"));
console.log(str1.search(NaN));
console.log(str1.search(Infinity));
console.log(str1.search(+Infinity));
console.log(str1.search(-Infinity));
console.log(str2.search(65));
console.log(str2.search(+65));
console.log(str3.search(null));