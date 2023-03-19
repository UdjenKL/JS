/* Напишите функцию, которая разбивает строку и преобразует ее в массив слов.
Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]
"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

function stringToArray(string){
	return string.split(' ');

}

console.log(stringToArray("Robin Singh"));