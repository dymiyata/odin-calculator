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
    if (operation == "add") {
        return add(a, b);
    }
    if (operation == "multiply") {
        return multiply(a, b);
    }
    if (operation == "subtract") {
        return subtract(a, b);
    }
    if (operation == "divide") {
        return divide(a, b);
    }
}

function doNumberButtonAction(event) {
    let stringToDisplay = displayElem.innerHTML;
    if (isNewNumber) {
        stringToDisplay = "0";
        isNewNumber = false;
    }
    stringToDisplay = String(Number(stringToDisplay + event.target.value));
    displayElem.innerHTML = stringToDisplay;
}

function doOperatorButtonAction(event) {
    if (operation != "None") {
        displayElem.innerHTML = operate(operation, firstArgument, Number(displayElem.innerHTML));
    }
    firstArgument = Number(displayElem.innerHTML);
    operation = event.target.id;
    isNewNumber = true;
}

let firstArgument = 0;
let operation = "None"
let secondArgument = 0;
let isNewNumber = false;

const displayElem = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

for (const button of operatorButtons) {
    button.addEventListener("click", event => doOperatorButtonAction(event));
}

for (const button of numberButtons) {
    button.addEventListener("click", event => doNumberButtonAction(event));
}
