/* You get an array of numbers, return the sum of all of the positives ones.
 Example [1,-4,7,12] => 1 + 7 + 12 = 20
 Note: if there is nothing to sum, the sum is default to 0.
 */

function positiveSum(arr) {
    let summ = 0;
    arr.map(function (item) {
        if (item > 0) {
            summ += item;
        } else {
            summ += 0;
        }
    });
    return summ;
}

let arr = [1, 2, 3, 4, 5];
console.log(positiveSum(arr));