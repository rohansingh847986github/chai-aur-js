const myNumbers = [1, 2, 3, 4, 5, 6, 7];
// Map Method
const newNums = myNumbers.map((num) => num + 10);
// console.log(newNums);
// Chaining
const newNums1 = myNumbers.map((val)=> val+10).map((val)=> val+2).filter((val)=> val >= 14 )
console.log(newNums1);

