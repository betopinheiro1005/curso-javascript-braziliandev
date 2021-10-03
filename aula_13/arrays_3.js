/* Deletar elementos de um array */

const arrayDel = ['a', 'b', 'c', 'd']

console.log(arrayDel)

/* delete não retira o espaço ocupado pelo elemento. Apenas exclui o dado que estava nesse espaço, e coloca "undefined" */

delete arrayDel[1]

console.log(arrayDel)

console.log('-------------------------')

