/* развернуть используя while и reverse */

let arr = [12, false , 'Text' , 4 , 2, -5, 0];
let i = arr.length - 1;
let result = [];

while ( i >= 0) {
result.push(arr[i].toString().split('').reverse().join(''));
i--;
}

console.log(result);


