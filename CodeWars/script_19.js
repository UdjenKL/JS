// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x) {
   let result = x.reduce((acc, item) => {
       acc += Math.pow(item , 2);
       return acc;
   },0);
    return result;
}

let arr = [1,2,3];
console.log(grow(arr));
