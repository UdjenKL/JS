/* myApp calculator */
let firstValue = '';
let secondValue = '';
let sign = ''; // знак операции
let finish = false;

const digit = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const action = ['-', '+', 'X', '/'];

// экран
const out = document.querySelector('.calc-screen p');

function clearAll() {
    firstValue = ''; //first number and result
    secondValue = ''; //second number
    sign = ''; // знак
    finish = false;
    out.textContent = '0';
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    // нажата не кнопка
    if (!event.target.classList.contains('btn')) return;
    // нажата кнопка ас
    if (event.target.classList.contains('ac')) return;

    out.textContent = '';
    // получаем нажатую кнопку
    const key = event.target.textContent;
    console.log(key);

    // если нажата клавиша 0-9 или .
    if (digit.includes(key)) {
        if (firstValue === '' && sign === '') {
            firstValue += key;
            out.textContent = firstValue;
        } else if (firstValue !== '' && secondValue !== '' && finish) {

        } else {
            secondValue += key;
            out.textContent = firstValue;
        }
    }
    // если нажата клавиша '-','+','X','/'
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        return;
    }

    // =
    if (key === '=') {
        switch (sign) {
            case "+":
                firstValue = (+firstValue) + (+secondValue);
                break;
            case "-":
                firstValue = (+firstValue) - (+secondValue);
                break;
            case "X":
                firstValue = (+firstValue) * (+secondValue);
                break;
            case "/":
                firstValue = (+firstValue) / (+secondValue);
                break;
        }
        finish = true;
        out.textContent = firstValue;
    }
}
