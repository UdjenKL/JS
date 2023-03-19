// Создадим новый экземпляр даты:
const currentDate = new Date();

console.log(currentDate);
console.log(currentDate.getDate());
console.log(currentDate.getHours());
console.log(currentDate.getTime());
console.log(currentDate.getFullYear());
console.log(currentDate.toISOString());

// Установим новую дату:
currentDate.setMonth(0,1);
console.log(currentDate.toLocaleTimeString());

