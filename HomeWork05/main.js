function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Введите оба числа";
    } else {
        switch (operation) {
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
            case '**':
                result = Math.pow(num1, num2);
                break;
            default:
                result = "Неизвестная операция";
        }
    }

    document.getElementById('result').innerText = `Результат: ${result}`;
}

function calculateRoot() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Введите оба числа";
    } else {
        result = Math.pow(num1, 1 / num2);
    }

    document.getElementById('result').innerText = `Результат: ${result}`;
}
