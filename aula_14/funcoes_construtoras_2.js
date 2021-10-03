/* Funções construtoras são funções usadas para construir objetos */

/* O exemplo abaixo é de uma função construtora de ventiladores */

function Ventilador(velMax){
  this.velocidadeMaxima = velMax
  this.ligado = false
}

/* Instâncias */

/* Para criar uma instância de um objeto do tipo "Ventilador" usamos a palavra reservada "new" seguida da chamada da função */

const ventilador1 = new Ventilador(3)

/* Diferente de outras linguagens orientadas a objetos, podemos adicionar propriedades e métodos em tempo de execução */

ventilador1.cor = "branco"

console.log("Cor: " + ventilador1.cor)

console.log("-----------------------------------------")

ventilador1.ligaDesliga = function(){
  if(this.ligado)
    this.ligado = false
  this.ligado = true
}

ventilador1.ligaDesliga()

console.log("ventilador 1 está ligado?: " + ventilador1.ligado)

console.log("-----------------------------------------")

console.log(ventilador1)
