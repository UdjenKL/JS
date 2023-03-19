let str = "JavaScript";
let s = "Hello, world";

// Получение порций строки
console.log(str.substring(1, 4)); // => "ava": 2-й, 3-й, 4-й символы.
console.log(str.slice(1, 4)); // => "ava"
console.log(str.slice(-3)); // => "ice": последние 3 символа.
console.log(s.split(", ")); // => ["Hello", "world"]: разбивает по строке разделителя

// Поиск в строке
console.log(str.indexOf("S")); // => 4: позиция первой буквы "S"
console.log(str.indexOf("a", 3)); // позиция первой буквы "a" начиная с 3-й позиции
console.log(str.indexOf("ZZ", 0)); // => -1; s не включает подстроку "zz"
console.log(str.lastIndexOf("p")); // => 8 позиция последней буквы "p"

// Булевские функции поиска в ES6 и последующих версиях
console.log(str.startsWith("Java")); // => true: строка начинается с этого
console.log(str.endsWith("!")); // => false: str не оканчивается этим
console.log(str.includes("Javat")); // => false: str не включает подстроку "Javat"

// Создание модифицированных версий строки
console.log(str.replace("JavaScript", "javascript")); // => "javascript"
console.log(str.toLowerCase("JavaScript"));
console.log(str.toUpperCase("JavaScript"));

// Инспектирование индивидуальных (16-битных) символов строки
console.log(str.charAt(2)); // => "v"
console.log(str.charAt(str.length - 1)); // => "t": последний символ
console.log(str.charCodeAt(0)); // => 74: 16-битное число в указанной позиции

// Функции дополнения строк в ES2017
console.log("X".padStart(3)); // => "  X": добавляет пробеллы слева до длинны 3
console.log("X".padEnd(3)); // => "X  ": добавляет пробеллы справа до длинны 3
console.log("X".padStart(3, "*")); // => "**X": добавляет звездочки слева до длинны 3
console.log("X".padEnd(3, "-")); // => "X--": добавляет дефисы справа до длинны 3

// Функции усечения пробеллов
console.log(" test ".trim()); // => "test": удаляет пробеллы в начале и в конце
console.log(" test ".trimStart()); // => "test ": удаляет пробеллы слева (trimLeft)
console.log(" test ".trimEnd()); // => " test": удаляет пробеллы справа (trimRight)

// Cмешанные методы строк
console.log("<js>".repeat(5)); // => "<js><js><js><js><js>": выполняет конкатенацию n копий. ES6
console.log(str.concat("!")); // => "JavaScript!": взамен просто используйте операцию +

// Реверс строки
const str2 = "map";
const reverse = str2.split("").reverse().join("");
console.log(reverse); // pam
