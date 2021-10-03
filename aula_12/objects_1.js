/*
Objetos podem ser inicializados usando: new Object(), Object.create() ou usando a notação literal []
Uma função dentro de um objeto é um método.
*/

/* Inicializando um objeto usando a notação literal */

const dotNotation = {
  prop1: "Sou uma propriedade que será acessada usando dot notation",
  metodo: function(){
    return "Sou o retorno de um método, ou seja, uma função dentro de um objeto"
  }
}

/* Acessando a propriedade e o método */
console.log(dotNotation.prop1)
console.log(dotNotation.metodo())
