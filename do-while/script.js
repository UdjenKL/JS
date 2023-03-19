let userName;

do {
  userName = prompt("Ваше имя");
} while (!userName); // преобразует значение в логический тип перед его отрицанием.
console.log(userName);
