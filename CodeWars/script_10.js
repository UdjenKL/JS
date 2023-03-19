

/* Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее). Исп. Рекурсию.*/

function summNumbers(number) {
    var sum = 0;
    var arr = String(number).split('');
    for (var i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
    }

    if (sum > 9) {
        return summNumbers(sum);
    } else {
        return sum;
    }
}


let number = 123;
let result = summNumbers(number);
console.log(`Итоговое число =  ${result} `);


123 = 1+2+3 = 12
1+6 = 7