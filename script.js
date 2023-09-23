function parseEquation(currentExpression) {
    let newExpression = '';
    for (let i = 0; i < currentExpression.length; i++) {
        if (i + 1 < currentExpression.length && currentExpression.charAt(i) === "√") {
            let squaredExpression = 'Math.sqrt';
            const start = i;
            i++;
            if (currentExpression.charAt(i) !== '(') {
                squaredExpression += '(';
                while (i < currentExpression.length && !isNaN(Number(currentExpression.charAt(i)))) {
                    squaredExpression += currentExpression.charAt(i);
                    i++;
                }

            } else {
                while (i < currentExpression.length && currentExpression.charAt(i) !== ')') {
                    squaredExpression += currentExpression.charAt(i);
                    i++;
                }
                i++;
            }
            squaredExpression += ")";
            const firstSection = currentExpression.substring(0, start);
            const secondSection = currentExpression.substring(i);
            newExpression = firstSection + squaredExpression + secondSection;
        }
    }
    return newExpression;
}

function populateDisplay(event) {
    const currentChoice = event.target.value;
    if (currentChoice === "AC") {
        currentExpression = "";
        display.textContent = "|";
    } else if (currentChoice === "=") {
        currentExpression = parseEquation(currentExpression);
        currentExpression = Function("return " + currentExpression)();
        display.textContent = currentExpression;
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
