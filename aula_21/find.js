/* método find */

const arr1 = [3, 10, 7, 1, 5, 6, 8, 0, 11, 2, 9, 4]

const arr2 = [
  { a: 2, b: 2 },
  { a: 1, b: 1 },
  { a: 5, b: 0 },
  { a: 8, b: 3 },
  { a: 10, b: 4 },
];

const find1 = arr1.find(function (el) {
  if (el == 7)
    return el;
})
console.log(find1)

console.log("-------------------")

const find2 = arr2.find(el => el.a == 10)
console.log(find2)