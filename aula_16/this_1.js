/*
* Chamar o this diretamente no console nos traz o objeto global do contexto em o JavaScript está executando.
 */

/*
* O "this" no devtools do Chrome nos traz o objeto "window", no Node nos traz o objeto "global"
 */

console.log(this.document === document)
console.log(this === window)
this.a = 37
console.log(window.a)

