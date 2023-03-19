// Удалить все гласные из строки

function disemvowel(str) {
    let result = str.replace(/[aeiou]/gi , '@')
    return result;
}
console.log(disemvowel('rubin and ps'));