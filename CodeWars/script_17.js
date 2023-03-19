/* Завершите функцию квадратной суммы, чтобы она возводила в квадрат каждое переданное ей число, а затем суммировала
 результаты. Например, для [1, 2, 2] он должен вернуть 9, потому что 1^2 2^2 2^2 = 9.
 */
function squareSum(numbers) {
    let arr = numbers.reduce((accum, item) => {
        accum += Math.pow(item, 2);
        return accum;
    },0);
    return arr;
}


console.log(squareSum([]));