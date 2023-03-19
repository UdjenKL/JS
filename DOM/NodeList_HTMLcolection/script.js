// NodeList
const elementList_1 = document.querySelectorAll('.one');
console.log(elementList_1);
// HTML collection
const elementList_2 = document.getElementsByClassName('two'); // при данной записи точка не ставится!!!
console.log(elementList_2);

document.querySelector('.section').innerHTML += '<p class="one">4</p>';
document.querySelector('.section').innerHTML += '<p class="two">24</p>';


// NodeList
console.log('-------------- For ------------!')
for (let i=0; i < elementList_1.length; i++) {
    console.log(elementList_1[i]);
}
// for of
console.log('-------------- For of ---------')
for (let item of elementList_1) {
    console.log(item);
}
console.log('-------------- Foreach---------')
// foreach
elementList_1.forEach(item => console.log(item));
// map
console.log('Map + делаем из NodeList массив')
// elementList_1.map(item => console.log(item)); // ---
Array.from(elementList_1).map(item => console.log(item)); // +++