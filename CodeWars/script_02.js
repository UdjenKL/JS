/* Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6] */

function maps(x){
   
    return x.map(_=>_ * 2);
}
let arr = [1,3,4,2,55,6,9];
console.log(maps(arr));