// сумма элементов массива которые >0

let a = [-1,-22,-1,2, -1, 4, -5, 7, -6, 2];

let b = a.reduce((accum, item)=>{
    if (item > 0) {
        accum += item;
    }
    return accum;
},0);

console.log(b);

