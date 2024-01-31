const convertBtn = document.getElementById("convert-btn");

const convertToRoman = () => {
  const numberInput = document.getElementById("number").value;
  const output = document.getElementById("output");

  if (numberInput === "") {
    output.innerText = "Please enter a valid number";
    return;
  }

  const num = parseInt(numberInput);

  if (isNaN(num) || num < 1 || num > 3999) {
    output.innerText = "please enter a number between 1 and 3999";
    return;
  }

  // Number stuff
};

convertBtn.addEventListener("click", convertToRoman);
