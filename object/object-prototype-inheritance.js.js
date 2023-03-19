// создаем объект-прототип
const personPrototipe = {
    name: '',
    age: 0,
    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
    },
    secret() {
        return 'I am secret'
    }
}

// создаем новый объект person с помощью Object.create()
const person = Object.create(personPrototipe);

// устанавливаем значения свойств name и age для person
person.name = 'Yauhen';
person.age = 35;

// вызываем метод greet для person
person.greet();
person.secret();

for (let i = 0; i < 10; i++) {
    console.log(person.secret());
}
