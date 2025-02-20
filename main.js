let currentInput = '';

function appendNumber(number) {
    if (currentInput === 'Error en la sintaxis 🤬') {
        currentInput = '';
    }
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput === 'Error en la sintaxis 🤬') {
        currentInput = '';
    }
    currentInput += operator;
    updateDisplay();
}

function appendFunction(func) {
    if (currentInput === 'Error en la sintaxis 🤬') {
        currentInput = '';
    }
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
        currentInput = currentInput.replace(/\√/g, 'Math.sqrt');

        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error en la sintaxis 🤬';
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

function buttonClickAnimation(event) {
    const button = event.target;
    button.classList.add('button-animate');
    button.addEventListener('animationend', () => {
        button.classList.remove('button-animate');
    }, { once: true });
}

document.querySelectorAll('.botones button').forEach(button => {
    button.addEventListener('click', buttonClickAnimation);
});

