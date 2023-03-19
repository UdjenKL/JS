//  пример 1. Вычислить сумму числел
let a = [1,2,3,4,5];

let sum = 0;
for (let i = 0; i< a.length; i++) {
    sum += a[i];
}
console.log(sum);

// prev - вычисляемое значение
// prev = a[0] !!!

let b = a.reduce(function (prev, item, index){
    return prev + item;
},0);

console.log(b);


// пример 2. Найти максимальный элемент массива.
let arr2 = [1,2,99,3,4,5];

let max = a[0];
for (let i = 0; i < a.length; i++) {
    if (arr2[i] > max) {
        max = arr2[i];
    }
}

console.log(max);

let c = arr2.reduce((prev, item) => {
    if (prev < item )  {
        return item;
    }
    else {
    return prev;
}
});

console.log(c);


// индекс максимального элемента

max = a[0];
let index = 0;
for (let i = 0; i < a.length; i++) {
    if (arr2[i] > max) {
        max = arr2[i];
        index = i;
    }
}

console.log(index);

let d = arr2.reduce ((prev, item , index) => {
    if ( item > prev[1]) {
        return [index,item];
    }
    else {
        return prev;
    }
}, [0,a[0]]);

console.log(d);

// создать одномерный массив.
const data = [[1,2,3], [3,4,5], [5,6,7]];
const flat = data.reduce((prev,item)=>{
    return prev.concat(item);
},[]);
console.log(flat);