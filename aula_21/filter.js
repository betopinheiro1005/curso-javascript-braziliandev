/* método filter */

const arr1 = [3, 10, 7, 1, 5, 6, 8, 0, 11, 2, 9, 4]

const arr2 = [
  { a: 2, b: 2 },
  { a: 1, b: 1 },
  { a: 5, b: 0 },
  { a: 8, b: 3 },
  { a: 10, b: 4 },
];

// console.log(arr1)

const filtered1 = arr1.filter(function (el) {
  if (el > 5) {
    return el;
  }
})
console.log(filtered1)

console.log("-----------------------------------------------------")

// console.log(arr2)

const filtered2 = arr2.filter(el => el.a > 3)
console.log(filtered2)



