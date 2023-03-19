const employee = {
  firstName: "Marko",
  lastName: "Polo",
  position: "Software Developer",
  yearHired: 2017,
};
// деструктуризация
let { firstName: Yauhen, lastName, position, yearHired } = employee;
console.log(yearHired);
