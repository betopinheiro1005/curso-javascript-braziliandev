/* método reduce */

const arr1 = [3, 10, 7, 1, 5, 6, 8, 0, 11, 2, 9, 4]

const arr2 = [
  { a: 2, b: 2 },
  { a: 1, b: 1 },
  { a: 5, b: 0 },
  { a: 8, b: 3 },
  { a: 10, b: 4 },
];

const reduce1 = arr1.reduce(function (a, b) {
  return (a + b)
})

console.log(reduce1)

const reduce2 = arr2.reduce((acc, curr) => acc = acc + curr.a, 0)
console.log(reduce2)
