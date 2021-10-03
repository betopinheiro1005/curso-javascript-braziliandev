/*
* Quando não estiver no modo strict, o this apontará para o objeto global
 */

function thisNoStrict(){
  console.log(this)
}

thisNoStrict()

/*
* Em modo strict, o valor de this permanece seja qual for o definido ao entrar no contexto de execução.
* No exemplo seguir, this por padrão será indefinido (undefined)
 */

function thisStrict(){
  'use strict'
  console.log(this)
}

thisStrict()