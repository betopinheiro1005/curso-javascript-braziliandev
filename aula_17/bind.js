/* O método bind cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido,
* com uma sequência determinada de argumentos precedendo quaisquer outros que seja fornecidos quando a nova função é chamada.
*/

/* Exemplo */

/* Com o 'use strict' o this não aponta para nada (undefined) */
/* Sem o 'use strict' o this aponta para o objeto global */

function thisBindExemplo(){
  console.log(this)
}

const obj = {exemplo: "exemplo"}

thisBindExemplo = thisBindExemplo.bind(obj)

thisBindExemplo()