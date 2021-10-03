/* Métodos de busca e comparação - método match */

/* Quando o parâmetro regexp é uma string ou um número, ele é convertido implicitamente em um RegExp usando o new RegExp(regexp). */

var str1 = "NaN significa 'não é um número'. Infinity contem -Infinity e +Infinity em JavaScript."
var str2 = "Meu avô tem 65 anos e minha avô tem 63."
var str3 = "O contrato foi declarado null (nulo) e void (sem efeito)";

console.log(str1.match("número"));   // "número" é um string. retorna ["número"]
console.log(str1.match(NaN));        // o tipo de NaN é um número. retorna ["NaN"]
console.log(str1.match(Infinity));   // o tipo de Infinity é um número. retorna ["Infinity"]
console.log(str1.match(+Infinity));  // retorna ["Infinity"]
console.log(str1.match(-Infinity));  // retorna ["-Infinity"]
console.log(str2.match(65));         // retorna ["65"]
console.log(str2.match(+65));        // Um número com sinal positivo. retorna ["65"]
console.log(str3.match(null));       // retorna ["null"]