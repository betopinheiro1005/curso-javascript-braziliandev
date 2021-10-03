/* Atribuir uma função como um argumento */

function dizOla() {
  return 'Olá, '
}

function apresentacao(funcaoMensagemOla, nome) {
  console.log(funcaoMensagemOla() + nome)
}

apresentacao(dizOla, "JavaScript")