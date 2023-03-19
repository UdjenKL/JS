let arr = [1,2,44,789,3,3,56,34,234,3,5,6,7,8,9,0];

let result = arr.reduce((prev, item, index) => {
    if (item > prev[1]) {
        prev += item;
        return [index,item];
    } else {
        return prev;
    }
},[0,arr[0]]);

console.log(result);