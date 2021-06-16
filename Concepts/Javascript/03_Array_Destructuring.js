
function removeFirstTwo(list) {
  const [value1, value2] = list;
  console.log("value1 is: " + value1)
  console.log("value2 is: " + value2)
  const [, , ...arr] = list;
  return arr;
}
var arrLiteral = [8, 9, 10, 11, 12]
console.log("arr contains: " + removeFirstTwo(arrLiteral))