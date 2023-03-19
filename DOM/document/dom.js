// создать div
const div = document.createElement('div');

// добавить к нему класс wrapper
div.classList.add('wrapper');

// поместить его внутрь тега body
const body = document.querySelector('body');
body.appendChild(div);

// создать заголовок h1 "DOM Document object model"
const header = document.createElement('h1');
header.textContent = "DOM (Document object model)";
div.insertAdjacentElement('beforebegin',header);

// создать список <ul></ul>
// добавить в него 3 элемента с текстом : один , два , три
const ul = `
<ul>
<li>Один</li>
<li>Два</li>
<li>Три</li>
</ul>
`;
// поместить список внутрь элемента с классом wrapper
div.innerHTML = ul;

// -------------------------------------------------------------

// cоздать изображение
let img = document.createElement('img');
console.log(img);

// добавить атрибут source
img.src = 'https://picsum.photos/240';
// добавить атрибут width со значением 40
img.width = 240;
// добавить класс super
img.classList.add('super');
// добавить св-во alt со значением "super-man"
img.alt = "super-man";
//  поместить изображение внутрь элементра с классом wrapper
div.appendChild(img);

// ---------------------------------------------------------------

// использую HTML строку создать DIV c классом 'pDIV' + c двумя параграфами
const elemHTML = `
<div class="pDiv">
<p>Параграф 1</p>
<p>Параграф 2</p>
</div>  
`;

// поместить этот DIV до элемента ul
const ulList = document.querySelector('ul');
ulList.insertAdjacentHTML("beforebegin", elemHTML);

// добавить для второго параграфа класс text
const pDiv = document.querySelector('.pDiv');
console.log(pDiv);
pDiv.children[1].classList.add('text');

// смотрим что вернет getElementByClassName
const nodeList = document.getElementsByClassName('pDiv');
console.log(nodeList);

// удалить 1-й параграф
// pDiv.firstElementChild.remove();



