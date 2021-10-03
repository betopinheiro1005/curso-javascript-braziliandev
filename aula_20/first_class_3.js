/* Retornar uma função */

function printaBrDev() {
  return function () {
    console.log("BrDev!")
  }
}

/* Usando uma variável */

const myFunc = printaBrDev()
myFunc()

/* Usando parenteses duplo */

printaBrDev()()

