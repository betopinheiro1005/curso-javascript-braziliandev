/* Escopo de função e escopo de bloco */

/* usando let i, a variável i só existe dentro da função */

for(let i = 0; i < 10; i++){
  console.log(i)
}

/* usando var j, a variável j existe memso fora da função */

for(var j = 0; j < 10; j++){
  console.log(j)
}

if (typeof i === 'undefined' ) {
  console.log("A variável i não existe")
} else {
  console.log("A variável i existe: i = " + i)
}

if (typeof j === 'undefined' ) {
  console.log("A variável j não existe")
} else {
  console.log("A variável j existe: j = " + j)
}
