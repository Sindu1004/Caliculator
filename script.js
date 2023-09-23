const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let operator = "";
let previousInput = "";

buttons.forEach(button => {
    button.addEventListener("click", handleClick);
});

function handleClick(e) {
    const value = e.target.innerText;

    if (!isNaN(value) || value === ".") {
        currentInput += value;
        updateResult();
    } else if (value === "AC") {
        clear();
    } else if (value === "=") {
        calculate();
    } else {
        operator = value;
        previousInput = currentInput;
        currentInput = "";
    }
}

function updateResult() {
    result.value = currentInput;
}

function clear() {
    currentInput = "";
    operator = "";
    previousInput = "";
    updateResult();
}

function calculate() {
    let calculationResult = 0;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (operator) {
        case "+":
            calculationResult = num1 + num2;
            break;
        case "-":
            calculationResult = num1 - num2;
            break;
        case "*":
            calculationResult = num1 * num2;
            break;
        case "/":
            calculationResult = num1 / num2;
            break;
        case "%":
            calculationResult = num1 % num2;
            break;
    }

    currentInput = calculationResult.toString();
    operator = "";
    previousInput = "";
    updateResult();
}
