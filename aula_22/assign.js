/* método assign - classe Object */

const destino = { a: 1, b: 2 }
const origem = { b: 4, c: 5 }

const destinoRetornado = Object.assign(destino, origem)

console.log(destinoRetornado, destino)

/* ===================================================== */

/* Fazendo a cópia de um objeto para outro objeto */

const obj = { a: 1 }

const copia = Object.assign({}, obj)

console.log(copia)

/* ===================================================== */

const o1 = { a: 1 }
const o2 = { b: 2 }
const o3 = { c: 3 }

const obj2 = Object.assign({}, o1, o2, o3)

console.log(obj2, o1)

