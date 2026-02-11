// const email = 'rohan123@gamil.com'
// if (email) {
//     console.log(`Yes`);
// }else{
//     console.log(`No`);
// }

//Falsy value => '', false, 0, -0, Bigint(0n), null, undefined, NaN
// const email = ''
// if (email) {
//     console.log(`Yes`);
// }else{
//     console.log(`No`);
// }

// Truthy value => [], '0', 'false', ' ', {}, function(){}
// const email = []
// if (email) {
//     console.log(`Yes`);
// }else{
//     console.log(`No`);
// }

const arr = []

// if (arr.length === 0) {
//     console.log(`Empty Array`);
// }

// const obj = {}

// if (Object.keys(obj).length === 0) {
//     console.log(`Empty Object`);  
// }

// Nullish Coalescing opearator (??) : null or undefined
let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 15 //It prints first value if he gets first place
val1 = null ?? undefined ?? 10
// console.log(val1);

// Terniary Operator
// condition ? true : false
 const teaPrice = 100
 teaPrice >=80 ? console.log('More than 80') : console.log('Less than 80');
 
 
