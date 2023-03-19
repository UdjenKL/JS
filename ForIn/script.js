const myObject = {
  x: 10,
  y: true,
  z: "abc",
};
for (const key in myObject) {
  console.log(key, myObject[key]);
}
console.log("--------------------");
Object.keys(myObject).forEach((key) => {
  console.log(key, myObject[key]);
});
console.log("--------------------");
Object.values(myObject).forEach((value) => {
  console.log(value);
});
