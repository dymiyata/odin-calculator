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

function updateDisplay(displayText) {
    if (displayText == Infinity) {
        displayElem.innerHTML = "Nice Try";
        return;
    }
    const isTooBig = Number(displayText) >= 10 ** 11;
    if (isTooBig) {
        displayElem.innerHTML = "OVERFLOW";
        return;
    }
    const displayString = String(displayText);
    displayElem.innerHTML = Number(displayString.slice(0, 11));
}

function doNumberButtonAction(event) {
    let displayString = displayElem.innerHTML;
    if (isNaN(displayString)) {
        return;
    }
    if (isNewNumber) {
        displayString = "0";
        isNewNumber = false;
    }
    displayString = String(Number(displayString + event.target.value));
    updateDisplay(displayString);
}

function doOperatorButtonAction(event) {
    if (operation != "equals" && !isNewNumber) {
        const result = operate(operation, firstArgument, Number(displayElem.innerHTML));
        updateDisplay(result);
    }
    firstArgument = Number(displayElem.innerHTML);
    operation = event.target.id;
    isNewNumber = true;
}

let firstArgument = 0;
let secondArgument = "none";
let operation = "equals"
let isNewNumber = false;

const displayElem = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.getElementById("clear");
const allClearButton = document.getElementById("all-clear");

clearButton.addEventListener("click", () => {
    if (isNaN(displayElem.innerHTML)) {
        return;
    }
    updateDisplay(0);
});

allClearButton.addEventListener("click", () => {
    updateDisplay(0);
    firstArgument = "0";
    operation = "equals";
    isNewNumber = false;
});

for (const button of operatorButtons) {
    button.addEventListener("click", event => doOperatorButtonAction(event));
}

for (const button of numberButtons) {
    button.addEventListener("click", event => doNumberButtonAction(event));
}
