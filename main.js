let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    currentInput += operator;
    updateDisplay();
}

function appendFunction(func) {
    currentInput += func + '(';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function calculate() {
    try {
        currentInput = currentInput.replace(/sqrt/g, 'Math.sqrt');
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error de sintaxis';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('resultado').value = currentInput;
}
