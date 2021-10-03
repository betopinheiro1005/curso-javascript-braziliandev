function Ventilador(velMax){
  this.velocidadeMaxima = velMax
  this.ligado = false
}

const ventilador1 = new Ventilador(3)

/* prototype */

/* Adicionando a função "liga"  por meio do protótipo para que seja aplicada a todos os objetos */

function liga(){
  this.ligado = true
}

Ventilador.prototype.ligar = liga
