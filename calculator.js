function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        return NaN;
    }
    return a / b;
}

function operate(operation, a, b) {
    return operation(a, b);
}

let firstArgument = 0;
let operation = "None"
let secondArgument = 0;
let isNewNumber = false;

const displayElem = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number");

for (const button of numberButtons) {
    button.addEventListener("click", () => {
        let stringToDisplay = displayElem.innerHTML;
        if (isNewNumber) {
            stringToDisplay = "0";
            isNewNumber = false;
        }
        stringToDisplay = String(Number(stringToDisplay + button.value));
        displayElem.innerHTML = stringToDisplay;
    })
}
