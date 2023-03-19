const arr = [134,13,3,52];

arr.sort((function (a,b) {
    return a-b;
}));

console.log(arr);