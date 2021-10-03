/* JSON - método parse */

/* Converte uma string JSON em um objeto */

const json = '{"result": true, "count": 42}';
const obj = JSON.parse(json);

console.log(obj);
console.log(obj.count);  // expected output: 42
console.log(obj.result);   // expected output: true


