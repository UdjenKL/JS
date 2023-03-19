const array = [1,2,3,4,5,6,7,342,34,12,9,0]

function linearSearch(array,item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i
        }
    }
    return null
}

console.log(linearSearch(array,342));
