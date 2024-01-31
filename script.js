const convertBtn = document.getElementById("convert-btn");

const convertToRoman = () => {
  const inputNumber = document.getElementById("number").value;
  const displayOutput = document.getElementById("output");
  const parsedNumber = parseInt(inputNumber);

  if (isNaN(parsedNumber) || parsedNumber < 1 || parsedNumber > 3999) {
    displayOutput.innerText = "Please enter a valid number between 1 and 3999";
    return;
  }

  const result = getRomanNumeral(parsedNumber);
  displayOutput.innerText = result;
};

const getRomanNumeral = (num) => {
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

  return (
    romanNumerals[3][thousands] +
    romanNumerals[2][hundreds] +
    romanNumerals[1][tens] +
    romanNumerals[0][ones]
  );
};

convertBtn.addEventListener("click", convertToRoman);
