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
        return "division by zero";
    }
    return a / b;
}

function operate(operation, a, b) {
    return operation(a, b);
}