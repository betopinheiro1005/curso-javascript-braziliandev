/* O método apply() chama uma função com um dado valor this, e argumentos passados como um array (ou um objeto)
* Em outras palavras é um call que aceita argunentos por meio de um array ao invés de serem passados individualmente
*/

const obj1 = {
  exemplo1: "exemplo1",
  mostraThis: function(a, b, c){
    console.log(this)
  }
}

obj1.mostraThis()

const obj2 = {
  exemplo2: "exemplo2"
}

obj1.mostraThis.apply(obj2, [1, 2, 3])