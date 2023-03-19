console.log("------------------------------NEW RUN-----------------------------");
const otherFunc = (u1,u2,u3) => {
    console.log(u1,u2,u3);
}
function hello (p1,p2, ...other) {
    otherFunc(...other);
}

const hello2 = function (t1,t2) {
    console.log(t1+t2);
}
const hello3 = (y1,y2) => {
    console.log(y1*y2);
}

hello(1,"🐭🐭🐭️","🐢🐢🐢",4,'🇺🇦🇺🇦');
console.log(10,88 );
console.log(9,9);
