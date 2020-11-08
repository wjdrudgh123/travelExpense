const price = document.querySelector("#price");

const calculatorPrice = () => {
  const incomes = document.querySelectorAll(".income_price");
  let income = 0;
  for (let i = 0; i < incomes.length; i++) {
    const text = incomes[i].innerText;
    const removeComma = Number(text.replace(/\,/g, ""));
    income += removeComma;
  }

  const outcomes = document.querySelectorAll(".outcome_price");
  let outcome = 0;
  for (let i = 0; i < outcomes.length; i++) {
    const text = outcomes[i].innerText;
    const removeComma = Number(text.replace(/\,/g, ""));
    outcome += removeComma;
  }
  return income - outcome;
};

const init = () => {
  const balance = calculatorPrice();
  const commaBalance = String(balance).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  price.innerText = commaBalance;
};

init();
