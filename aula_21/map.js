/* método map */

const arr1 = [3, 10, 7, 1, 5, 6, 8, 0, 11, 2, 9, 4]

const arr2 = [
  { a: 2, b: 2 },
  { a: 1, b: 1 },
  { a: 5, b: 0 },
  { a: 8, b: 3 },
  { a: 10, b: 4 },
];

const maped1 = arr1.map(function (el) {
  return (el * 2) + 1
})

console.log(maped1)

const maped2 = arr2.map(el => el.a += 1)
console.log(maped2)
