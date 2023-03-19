/* Sam Harris => S.H
patrick feeney => P.F
 */
function abbrevName(name){
  return name.split(" ").map(element => element[0]).join('.').toUpperCase();
}
console.log(abbrevName('Sam Harris'));