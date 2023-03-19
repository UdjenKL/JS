setTimeout(function () {
    console.log('TimeOut 4 sec');
}, 4000);

setTimeout(function () {
    let body = document.querySelector('body');
    body.style.backgroundColor = "blue";
} , 5000);

function LoadScript(src) {
    let script = document.createElement('script');
    script.src = src;
    console.log(script);
    document.head.append(script);
}

LoadScript('./testScript.js');