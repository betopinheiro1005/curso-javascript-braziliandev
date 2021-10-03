/*
bracket notation (notação de colchetes)
Uma outra forma de acessar componentes de um objeto é por meio de notação de colchetes
 */

const bracketNotation = {
  prop1:"Sou uma propriedade que será acessada usando bracket notation",
  metodo: function(){
    return "Sou o retorno de um método, ou seja, uma função dentro de um objeto"
  }
}

/* Acessando os elementos do objeto por meio de bracket notation */

console.log( bracketNotation['prop1'] )
console.log( bracketNotation['metodo']() )
