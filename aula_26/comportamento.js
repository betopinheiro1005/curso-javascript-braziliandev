const numberIncrement = document.querySelector("#number-increment");

const incrementar = () => {
  const num = parseInt(numberIncrement.textContent);
  numberIncrement.textContent = num + 1;
}

const decrementar = () => {
  const num = parseInt(numberIncrement.textContent);
  numberIncrement.textContent = num - 1;
}