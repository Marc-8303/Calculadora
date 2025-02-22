let currentInput = '';
let isDegreeMode = true;

function toggleDegreeMode() {
    isDegreeMode = !isDegreeMode;
    document.getElementById("degreeToggle").textContent = isDegreeMode
        ? "Deg" : "Rad";
}

function convertAngle(angle) {
    return isDegreeMode ? `(${angle} * Math.PI/180)` : angle;
}

/**/
function appendNumber(number) {
    if (currentInput === 'Error en la sintaxis 🤬') {
        currentInput = '';
    }
    if (currentInput === 'Infinity') {
        currentInput = '';
    }
    if (currentInput === 'NaN') {
        currentInput = '';
    }
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput === 'Error en la sintaxis 🤬') {
        currentInput = '';
    }
    if (currentInput === 'Infinity') {
        currentInput = '';
    }
    if (currentInput === 'NaN') {
        currentInput = '';
    }
    currentInput += operator;
    updateDisplay();
}

function appendFunction(func) {
    if (currentInput === 'Error en la sintaxis 🤬') {
        currentInput = '';
    }
    if (currentInput === 'Infinity') {
        currentInput = '';
    }
    if (currentInput === 'NaN') {
        currentInput = '';
    }
    if (func === 'logBase') {
        currentInput += 'log(';
    } else {
        currentInput += func + '(';
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function calculate() {
    try {
        currentInput = currentInput
            .replace(/\^/g, '**')
            .replace(/\√/g, 'Math.sqrt')
            .replace(/abs/g, 'Math.abs')
            .replace(/sin\((.*?)\)/g, (match, angle) => `Math.sin(${convertAngle(angle)})`)
            .replace(/cos\((.*?)\)/g, (match, angle) => `Math.cos(${convertAngle(angle)})`)
            .replace(/tan\((.*?)\)/g, (match, angle) => `Math.tan(${convertAngle(angle)})`)
            .replace(/cot\((.*?)\)/g, (match, angle) => `(1/Math.tan(${convertAngle(angle)}))`)
            .replace(/sec\((.*?)\)/g, (match, angle) => `(1/Math.cos(${convertAngle(angle)}))`)
            .replace(/csc\((.*?)\)/g, (match, angle) => `(1/Math.sin(${convertAngle(angle)}))`)
            .replace(/ln\((.*?)\)/g, `Math.log($1)`)
            .replace(/log\((.*?)\)/g, `Math.log10($1)`)
            .replace(/log\((.*?),(.*?)\)/g, `(Math.log($2)/Math.log($1))`);

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

/*StackOverflow*/
document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (event.ctrlKey || event.altKey || event.metaKey) return;

    const keyActions = {
        'Enter': () => calculate(),
        'Backspace': () => backspace(),
        'Escape': () => clearDisplay(),
        '+': () => appendOperator('+'),
        '-': () => appendOperator('-'),
        '*': () => appendOperator('*'),
        '/': () => appendOperator('/'),
        '%': () => appendOperator('%'),
        '(': () => appendNumber('('),
        ')': () => appendNumber(')'),
        '.': () => appendNumber('.'),
        '^': () => appendOperator('^'),
        '√': () => appendFunction('√')
    };

    if (/[0-9]/.test(key)) {
        appendNumber(key);
    }

    else if (keyActions[key]) {
        event.preventDefault();
        keyActions[key]();
    }
});

function openTrigModal() {
    document.getElementById('trigModal').style.display = 'block';
}

function closeTrigModal() {
    document.getElementById('trigModal').style.display = 'none';
}

function openLogModal() {
    document.getElementById('logModal').style.display = 'block';
}

function closeLogModal() {
    document.getElementById('logModal').style.display = 'none';
}

function openParModal() {
    document.getElementById('parModal').style.display = 'block';
}

function closeParModal() {
    document.getElementById('parModal').style.display = 'none';
}
