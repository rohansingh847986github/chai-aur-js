// For-Of Loop
// ['', '', '']
// [{}, {}, {}]

const arr = [1,2,3,4,5]
for (const val of arr) {
    // console.log(val);
}

const greetings = 'Hello World'
for (const greet of greetings) {
    // console.log(greet);
}

// Maps
const map = new Map()
map.set('Rohan', 'Singh')
map.set('Shreya', 'Roy')
map.set('Riya', 'Chatterjee')
map.set('Aryan', 'Khan')
map.set('Aryan', 'Khan')// Duplicate values are not allowed in map
// console.log(map);

// Looping on map
for (const item of map) {
    // console.log(item);
}

// To show indivisual value as key and value pairs by destructing array in square bracket []
for (const [key, value] of map) {
    console.log(key, '-' , value);
}

// For-Of on object
//  const obj ={
//     name: 'Rohan',
//     age: 26,
//     email: 'rohan123@gmail.com'
//  }
 const obj ={
    'name': 'Rohan',
    'age': 26,
    'email': 'rohan123@gmail.com'
 }

//  This is not working on Object
//  for (const [key,value] of obj) {
//     console.log(key, '-', value);
//  }
