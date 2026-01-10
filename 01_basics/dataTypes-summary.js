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

const array = ['Rohan', 26]
const obj = {
    name: 'Rohan',
    age: 26
}

const myFunction = function(){
    console.log('Hello World');
    
}
