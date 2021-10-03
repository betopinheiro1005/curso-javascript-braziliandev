/* ALERTA: Prática altamente perigosa!!! */
/* Escopo global automático sem uso das palavras reservadas let, const e var */

/* Exemplo 1 */

let obj = {func: function(){
  a = 10
  console.log(a)
}}

obj.func()

console.log("---------------------------------")

/* Exemplo 2 */

/* a função não cria outra variável. Ela apenas faz uma nova atribuição à variável que já foi criada na primeira execução */

obj.func2 = () => {
  b = 50
  console.log(b)
}

b = 10

obj.func2()  /* retorna 50 */

/* Em outras palavras, eu modifiquei o valor da "variável maliciosa" tanto de fora para dentro como de dentro para fora */

console.log("---------------------------------")

/* Exemplo 3 */

obj.func3 = () => {
  let c = 50
  console.log(c)
}

obj.func3()  /* retorna 50 */





