function arrayCreation() {
  let arrayWithInitSize = new Array(4);
  let arrayWithOneValue = new Array("5");
  let arrayWithPreset = new Array(5, 6);
  let arrayWithInitValue = Array.of(4);
  let arrayWithInitValues = Array.of(4, 5, 6);
  let simpleWayArray = [55, 2, 4, 1, 53, 87, 17, 10, 1000];

  console.log("arrayWithInitSize:", arrayWithInitSize);
  console.log("arrayWithInitValue:", arrayWithOneValue);
  console.log("arrayWithPreset:", arrayWithPreset);
  console.log("arrayWithInitValue:", arrayWithInitValue);
  console.log("arrayWithInitValues:", arrayWithInitValues);
  console.log("simpleWayArray:", simpleWayArray);

  
}
// arrayCreation();

// sum array
let simpleWayArray = [55, 2, 4, 1, 53, 87, 17, 10, 1000];

function sumArray(array) {
  logEachElement(array);
    let summ = 0;
    for (let i = 0; i < array.length; i++) {
       summ += array[i];
    }
  }
  sumArray(simpleWayArray);

  function logEachElement(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`[Element with index ${i}] + is ${array[i]}`);
    }
  }