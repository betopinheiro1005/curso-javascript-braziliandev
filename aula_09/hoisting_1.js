/*
Hoisting é um comportamento do Javascript de mover declarações para o topo de um escopo (o escopo global).
*/

/* Exemplo 1 */

foo = 2;
console.log(foo);
var foo;

/* ======================== */

/* Exemplo 2 */

hoisted();

function hoisted() {
  console.log("foo");
}

/* ======================== */

