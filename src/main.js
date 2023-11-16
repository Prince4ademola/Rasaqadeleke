let currentInput = '';
let currentOperation = null;
let previousInput = '';

function clearDisplay() {
    document.getElementById('display').value = '';
    currentInput = '';
    currentOperation = null;
    previousInput = '';
}

function deleteLastCharacter() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function calculatePercentage() {
    if (currentInput !== '') {
        const percentageValue = parseFloat(currentInput) / 100;
        currentInput = percentageValue.toString();
        updateDisplay();
    }
}

function setOperation(operation) {
    if (currentInput !== '') {
        if (operation === '%') {
            calculatePercentage();
        } else {
            calculateResult();
            previousInput = currentInput;
            currentInput = '';
            currentOperation = operation;
        }
    }
}

function calculateResult() {
    if (previousInput !== '' && currentInput !== '') {
        let result;
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);

        switch (currentOperation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                break;
        }

        clearDisplay();
        currentInput = result.toString();
        updateDisplay();
        previousInput = '';
        currentOperation = null;
    }
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
