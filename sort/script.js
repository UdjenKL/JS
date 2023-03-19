let arr = [7, 3, 5, 8, 1, 2, 1, 0];

arr.sort(function (a, b) {
    return a - b;
});

let myArr = [
    {one: 1, two: 2},
    {one: 12, two: 12},
    {one: 13, two: 22},
    {one: 4, two: 2},
    {one: 7, two: 21},
    {one: 12, two: 21},
    {one: 144, two: 2},
];

myArr.sort(function (a, b) {
    return a.one - b.one;

});

console.log(arr);
console.log(myArr);
