/*
* Arrow function - função de seta
* Nas arrow functions (funções de seta) o this é definido localmente,
* isto é, seu valor é definido pelo contexto de onde está inserido.
* Em um código global, this assume o objeto global.
*/

/* Contexto de criação global */

const arrowFunctionThis1 = () => {
  console.log(this)
}

/* Contexto de criação objeto // errado */

const arrowFunctionThis2 = {
  prop: 150,
  arrowF: () =>{
    console.log(this)
  }
}

/* Contexto de criação objeto // correto */

const obj1 = {
  exemplo1: 'exemplo1',
  mostraThis: function() {
    const f = (() => this)()  /* IIFE */
    console.log(f)
  }
}

arrowFunctionThis1()
arrowFunctionThis2.arrowF()
obj1.mostraThis()
