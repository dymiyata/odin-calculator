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

const displayElem = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number");

for (const button of numberButtons) {
    button.addEventListener("click", () => {
        displayElem.innerHTML += button.value;
    })
}
