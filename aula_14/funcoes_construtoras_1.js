/* Funções construtoras são funções usadas para construir objetos */

/* O exemplo abaixo é de uma função construtora de ventiladores */

function Ventilador(velMax){
  this.velocidadeMaxima = velMax
  this.ligado = false
}

/* Instâncias */

/* Para criar uma instância de um objeto do tipo "Ventilador" usamos a palavra reservada "new" seguida da chamada da função */

const ventilador1 = new Ventilador(3)

/* Acessando propriedades */

/* Para acessar propriendades, usamos o "."  */

console.log("Velocidade máxima: " + ventilador1.velocidadeMaxima)