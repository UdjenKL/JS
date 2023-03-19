
/* cумма чисел между нулями*/

let arr = [1,8,0,13,5,2,3,4,6,34,5,0,34,3];
let start = arr.indexOf(0);
let end = arr.lastIndexOf(0);
sum = 0;

if (start !== -1 && end !== -1) {
    for (; start < end; start++) {
        sum += arr[start];
    }
    console.log(sum);
} else {
    console.log(sum);
}