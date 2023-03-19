let html = document.documentElement;
let head = document.head;
let title = document.title;
//
// console.log(html, head, title);
// console.log('*****************');

// for (let i=0; i < document.body.childNodes.length; i++) {
//     console.log(document.body.childNodes[i]);
// }

for (let child of document.body.childNodes) {
    console.log(child);
}