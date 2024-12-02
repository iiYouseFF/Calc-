let resultField = document.getElementById('result');

function appendNumber(number) {
    resultField.value += number;
}

function appendOperator(operator) {
    resultField.value += operator;
}

function clearResult() {
    resultField.value = '';
}

function calculate() {
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        alert('Error');
        clearResult();
    }
}