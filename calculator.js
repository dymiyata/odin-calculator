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

function roundToNCharacters(num, totalNumCharacters) {
    let numDigitsBeforeDecimal = Math.abs(num) > 10
        ? Math.floor(Math.log10(Math.abs(num))) + 1
        : 1;
    let numDigitsAfterDecimal = num < 0
        ? Math.max(0, totalNumCharacters - numDigitsBeforeDecimal - 2)
        : Math.max(0, totalNumCharacters - numDigitsBeforeDecimal - 1);
    return Number(num.toFixed(numDigitsAfterDecimal));
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
    const isTooBig = Math.abs(Number(displayText)) >= 10 ** 10;
    if (isTooBig) {
        displayElem.innerHTML = "OVERFLOW";
        return;
    }
    displayElem.innerHTML = roundToNCharacters(Number(displayText), 10);
}

function doNumberButtonAction(event) {
    let displayString = displayElem.innerHTML;
    if (isNewNumber) {
        displayString = "0";
        isNewNumber = false;
    }
    if (isNaN(displayString)) {
        return;
    }
    if (displayString.length < 10) {
        displayString = String(Number(displayString + event.target.value));
    }
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
const decimalButton = document.getElementById("decimal");
const negativeButton = document.getElementById("negative");

negativeButton.addEventListener("click", (event) => {
    let displayString = displayElem.innerHTML;
    if (isNaN(displayString)) {
        return;
    }
    updateDisplay(-1 * Number(displayString));
});

decimalButton.addEventListener("click", (event) => {
    let displayString = displayElem.innerHTML;
    if (isNewNumber) {
        displayString = "0";
        isNewNumber = false;
    }
    if (displayString.length < 11) {
        displayString = displayString + event.target.value;
    }
    if (isNaN(displayString)) {
        return;
    }
    displayElem.innerHTML = displayString;
});

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
