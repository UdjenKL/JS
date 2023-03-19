// Найти максимальное и минимальное число в строке


function highAndLow(numbers){
    let arr = numbers.split(/\D/).map(Number);
    return Math.max(...arr) + ' ' + Math.min(...arr);
}
let result = highAndLow("1, 22, 33, 4, 2, 5, 6, 3");
console.log(result);