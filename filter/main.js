let arr = [1,2,3,4,5,66,1961];

let myArr = arr.filter(item => {
    if (item % 2 === 0) {
        return true;
    }
})

myArr.sort((a,b )=> (a-b));
console.log(myArr);