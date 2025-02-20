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
        currentInput = currentInput.replace(/\^/g, '**');
        currentInput = currentInput.replace(/\√/g, 'Math.sqrt(');

        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error en la sintaxis';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('resultado').value = currentInput;
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}
