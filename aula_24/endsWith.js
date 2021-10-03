/* Métodos de busca e comparação - método endsWith */

const stringTeste = "Essa é uma string de teste do canal do Paulo Raoni braziliandev. Se inscreva no canal !!!"

console.log(stringTeste.endsWith("!!!"));  // Retorna true se encontrar a string no final da string de teste

console.log(stringTeste.endsWith("uma", 10));  // Retorna true se, a partir da posição 9 (10 - 1), encontrar a string no final da string de texte

