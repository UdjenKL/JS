let myObject = {
    name: 'Yauhen',
    age: 35,
    colors: {
        eyes: 'brown',
        hair: 'black'
    }
};
console.log(Object.values(myObject)); // создает массив из объекта

let { eyes, hair } = myObject.colors; // деструктуризация
console.log(eyes);
console.log(hair);

for (let key in myObject) {

    if (typeof (myObject[key]) === 'object') {
        for (let i in myObject[key]) {
            console.log(`свойство ${i} имеет значение ${myObject[key][i]}`);
        }
    } else
        console.log(`свойство ${key} имеет значение ${myObject[key]}`);
}

