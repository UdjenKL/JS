
const myArray = ["first", "second", "third"];
myArray.forEach((element, index) => {
  console.log(element, index);

  let numberArray = [1, 2, 3, 4, 5, 2, 3, 1];

  numberArray.forEach(function (currentValue, index, array) {
    console.log(`${index}: ${currentValue} внутри массива ${array}`);
    console.log(currentValue * 2);

  });
