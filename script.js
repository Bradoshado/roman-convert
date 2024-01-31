const convertBtn = document.getElementById("convert-btn");

const convertToRoman = () => {
  const numberInput = document.getElementById("number").value;
  let displayOutput = document.getElementById("output");
  const num = parseInt(numberInput);

  if (isNaN(num)) {
    displayOutput.innerText = "Please enter a valid number";
    return;
  }
  if (num < 1) {
    displayOutput.innerText =
      "Please enter a number greater than or equal to 1";
    return;
  }
  if (num > 3999) {
    displayOutput.innerText =
      "Please enter a number less than or equal to 3999";
    return;
  }

  const romanNumerals = [
    ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    ["", "M", "MM", "MMM"],
  ];

  const thousands = Math.floor(num / 1000);
  const hundreds = Math.floor((num % 1000) / 100);
  const tens = Math.floor((num % 100) / 10);
  const ones = num % 10;

  const result =
    romanNumerals[3][thousands] +
    romanNumerals[2][hundreds] +
    romanNumerals[1][tens] +
    romanNumerals[0][ones];

  displayOutput.innerText = result;
};

convertBtn.addEventListener("click", convertToRoman);
