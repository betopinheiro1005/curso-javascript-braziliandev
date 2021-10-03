/*
 Em JavaScript existem dois tipos de escopo:
- Escopo global
- Escopo local

Escopo de função -> var
Escopo de bloco -> let e const
 */

/* Exemplo de escopo local */

/* código aqui não pode usar nomeCarro */
// console.log(nomeCarro)

function carros(){
  var nomeCarro = 'Ferrari'

  /* código aqui pode usar nomeCarro */
  console.log(nomeCarro)
}

carros()