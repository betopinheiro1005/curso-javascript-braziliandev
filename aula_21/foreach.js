/* método foreach */

const arr1 = [3, 10, 7, 1, 5, 6, 8, 0, 11, 2, 9, 4]

const arr2 = [
  { a: 2, b: 2 },
  { a: 1, b: 1 },
  { a: 5, b: 0 },
  { a: 8, b: 3 },
  { a: 10, b: 4 },
];

let novo_array1 = []

const forEach1 = arr1.forEach(function (el) {
  novo_array1.push((el + 0.2) * 0.5)
})

console.log(novo_array1)

console.log("-----------------------------------------")

const forEach2 = arr2.forEach(el => console.log(`a: ${el.a + 0.1}, b: ${el.b + 0.5}`))


