let selectedCurrOne = document.querySelector(".select-left");
let selectedCurrTwo = document.querySelector(".select-right");
let inputLeft = document.querySelector(".input-left");
let inputRight = document.querySelector(".input-right");
let switchBtn = document.getElementsByTagName("button")[0];

function convert(e) {
  let firstCurr = selectedCurrOne.value;
  let secondCurr = selectedCurrTwo.value;
  let valueToConvert = inputLeft.value;

  if (
    selectedCurrOne.value != "" &&
    selectedCurrTwo.value != "" &&
    inputLeft.value != ""
  ) {
    fetch(
      `https://v6.exchangerate-api.com/v6/0370c9cde9c0ae5fd42c2a82/latest/${firstCurr}`
    )
      .then((response) => response.json())
      .then((data) => {
        let conversionRates = data.conversion_rates;
        let index = conversionRates[secondCurr];
        let result = Number(inputLeft.value) * index;
        inputRight.placeholder = result;
      });
  }

  if (e.target.id === "switch-currencies") {
    let x = selectedCurrOne.value;
    selectedCurrOne.value = selectedCurrTwo.value;
    selectedCurrTwo.value = x;

    fetch(
      `https://v6.exchangerate-api.com/v6/0370c9cde9c0ae5fd42c2a82/latest/${selectedCurrOne.value}`
    )
      .then((response) => response.json())
      .then((data) => {
        conversionRates = data.conversion_rates;
        index = conversionRates[selectedCurrTwo.value];
        // ako direkno go stavav ova da ednakvo na inputRight.value ili na inputRight.placeholder, javuvase greska na 1 od 10 obidi, ne znam zosto
        let result = Number(inputLeft.value) * index;
        inputRight.value = result;
      });
  }
}
