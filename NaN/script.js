console.log(false === 0);
console.log(isNaN('123'));
console.log(isNaN(false));
console.log(isNaN(NaN));
console.log(isNaN(10));
console.log(isNaN("10"));
console.log(isNaN("blue"));   // true  — не может быть преобразовано в число
console.log('true is NaN? ' + isNaN(true));     // false — может быть преобразовано в число 1

console.log(Number(true));

