/* os métodos call e apply tem uma síntaxe idêntica. A diferença é que call() aceita uma lista de argumentos,
* enquanto apply() aceita um array de argumentos
*/

/* O método call chama uma função com um dado "this" e argumentos passados individualmente.
* O call() permite que uma função/método pertencente a um dado objeto, seja atribuído e chamado por um objeto diferente.
* Dessa forma podendo reutilizar o método de um objeto em diversos outros objetos.
*/

const obj1 = {
  exemplo1: "exemplo1",
  mostraThis: function (){
    console.log(this)
  }
 }

obj1.mostraThis()

const obj2 = {exemplo2: "exemplo2"}

obj1.mostraThis.call(obj2)