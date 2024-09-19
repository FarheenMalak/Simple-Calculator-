let resultField = document.getElementById('result');
let currentInput = '';

document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') {
            clearResult();
        } else if (button.id === 'equals') {
            calculateResult();
        } else {
            appendToResult(button.textContent);
        }
    });
});

function appendToResult(value) {
    currentInput += value;
    resultField.value = currentInput;
}

function clearResult() {
    currentInput = '';
    resultField.value = '';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        resultField.value = currentInput;
    } catch (error) {
        resultField.value = 'Error';
        currentInput = '';
    }
}
