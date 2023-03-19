// Метод shift - удаляет элемент в начале,
// так что второй элемент становится первым.
let arr = ['Ваня', 'Иштван' , 'Оля',];
arr.shift();
console.log(arr);

// Метод unshift - добавляет элемент в начало массива
let arr2 = ['Windows 11' , 'Winsows 10',];
arr2.unshift('MacOs' , 'Linux Mangaro');
console.log(arr2);

//Удаляем элемент
let arr3 = ['WoW' , 'AA' , 'CS',];
arr3.splice(1, 1);
console.log(arr3);

//Удяляем элемент и возвращаем его в переменную
let arrTwo = ['C#','JS','C++','C',];
let removed = arrTwo.splice(1,1);
console.log(removed);

//Заменяем элементы
let arrThree = ['C#','JS','C++',];
//Начиная с нулевой позиции (С#) , заменяем один элемент
arrThree.splice(0,1,'swift');
console.log(arrThree);

//Добавляем элементы 
let arrFour = ['C#','JS','C++',];
//Начиная с первой позиции (перед js), добавляем два элемента 
arrFour.splice(1,0,'Pascal','Delphi',);
console.log(arrFour);

//Удаляем элемент 
let arrFive = ['C#','JS','C++','Pascal','Delphi',];
arrFive.splice(-1,1);
console.log(arrFive);

//Копируем часть массива
let arr6 = ['C#','JS','C++','Pascal','Delphi',];
//Начиная с 1й позиции 'JS' до 2й позиции 'С++' (не включая)
let arr6Copy = arr6.slice(1,2);
console.log(arr6Copy);

//Копирует весь массив SLICE()
let arr6Fullcopy = arr6.slice();
console.log(arr6Fullcopy);

//Копируем весь масиив + дополняем его CONCAT
let arr7 = arr6.concat('Ruby');
console.log(arr7);

// ПОИСК В МАССИВЕ //
let arr8 = ['C#','JS','C++',];
// indexOf
console.log(arr8.indexOf('JS'));
console.log(arr.indexOf('php'));
console.log(arr.indexOf('C#',1));

console.log(arr8.includes('JS'));
console.log(arr.includes('php'));
console.log(arr.includes('C#',1));

// СОРТИРОВКА МАССИВОВ
let arr9 = ['Иштван','Ваня','Оля'];
console.log(arr9.sort());

// Сортировка чисел
let arr10 = [8,99,1,2,55,232,12,13,14];
console.log(arr10.sort());

//Функция сортировки
function compareNumber(a,b) {
    console.log(`Сравниваем ${a} и ${b}`);
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
    //return a - b
}
console.log(arr10.sort(compareNumber));
// console.log(arr10.sort((a,b) => a - b));

// REVERSE
 let arr11 = ['first','second','therd'];
 console.log(arr11.reverse());


 // Метод MAP
 let arr12 = ['first','second','therd'];
 let result = arr12.map(function(item,index,array) {
    return item[0];
 });
 console.log(result);