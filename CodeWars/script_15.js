// Задача: перевернуть все слова в строке.

function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}

console.log(reverseWords('hello world'));