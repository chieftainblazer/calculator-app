const INPUT_1_TURN = 1;
const INPUT_0_TURN = 0;

function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

function operate(number1, number2, operator) {
    if (operator === "/") {
        return divide(number1, number2);
    }
    if (operator === "x") {
        return multiply(number1, number2);
    }
    if (operator === "-") {
        return subtract(number1, number2);
    }
    if (operator === "+") {
        return add(number1, number2);
    }
    if (operator === "/") {
        
    }
    if (operator === "/") {
        
    }
    if (operator === "/") {
        
    }
    if (operator === "/") {
        
    }
    if (operator === "/") {
        
    }
}

function populateDisplay(event) {
    const currentChoice = event.target.value;
    if (currentChoice === "AC") {
        currentExpression = "";
        display.textContent = "|";
    } else if (currentChoice === "=") {
        display.textContent = Function("return " + currentExpression)();
    } else {
        currentExpression += currentChoice;
        display.textContent = currentExpression;
    }
}

let currentExpression = "";
const display = document.querySelector('.display');

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', populateDisplay)
});
