// Учитывая массив целых чисел в виде строк и чисел, верните сумму значений массива, как если бы все они были числами.
//
// Верните свой ответ в виде числа.



function sumMix(x){
    let result = 0;
    for (let n of x) {
        result += parseInt(n);
    }
    return result;
}

sumMix((['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);