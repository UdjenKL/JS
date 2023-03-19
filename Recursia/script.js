
function printArray (array) {
    
    if (i < array.length){ 
        console.log(array[i]);
        i++;
        printArray(array);
    }     
}

let i = 0;
let arr = [1,22,33,42,0,9,8,7,42];

printArray(arr);