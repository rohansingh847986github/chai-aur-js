// Primitive Datatypes - Call by value
// 7 types - String, Number, Boolean, Null, Undefined, Symbol, BigInt

const Name = 'Rohan'
const age = '16'
const male = true
const hobby = null
let phoneNum; // let phoneNum = undefined
const id = Symbol('123')
// console.log(id);
const bigNumber = 563472634737653723n
// console.log(bigNumber);

// Non-Primitive Datatypes - call by reference
// Array, Object, Function

// const array = ['Rohan', 26]
// const obj = {
//     name: 'Rohan',
//     age: 26
// }

// const myFunction = function(){
//     console.log('Hello World');
// }
// console.log(myFunction);

// ------ Stack Memory & Heap Memory --------

// Primitive Datatypes use Stack Memory - Stack Memory gives you copy of variable and make changes in copy of variable
let myName = 'Rohan Singh'
let myNickName = myName
myNickName = 'X'
console.log(myName);
console.log(myNickName);

// Non-Primitive Datatypes use Heap Memory - Heap Memory gives you reference of that variable and direct changes in variable in the memoroy
let userOne = {
    email: 'rohan123@gmail.com',
    upi:'user@bl'
}

let userTwo = userOne
userTwo.email = 'rohansingh@gmail.com'
console.log(userOne);
console.log(userTwo);
