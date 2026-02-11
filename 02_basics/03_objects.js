// Singleton
// Object.create

// object literals

const mySym = Symbol('key1')

const JsUser = {
    name: 'Rohan',
    "sir name": "Singh",
    [mySym]: 'key1', //define a symbol and takes as a key in a object and print it
    age: 27,
    location: "Kolkata",
    email:'rohan123@gmail.com',
    loggedin:['Monday','Sunday'],
}

// console.log(JsUser.age);
// console.log(JsUser.name);
// console.log(JsUser['sirname']);
// console.log(JsUser.loggedin);
// console.log(JsUser['loggedin'][1]);
// console.log(JsUser[mySym], typeof[mySym]);

// Change value in object
// console.log(JsUser);
// JsUser.email = 'rohansingh@gmail.com'
// console.log(JsUser['email']);
// console.log(JsUser);

// Lock the value 
// Object.freeze(JsUser)
// JsUser.email = 'rohansingh@gmail.com'
// console.log(JsUser);

JsUser.greetingOne = function () {
    console.log('Hello');
}

JsUser.greetingTwo = function () {
    console.log(`Hello ${this.name}`);
    
}

// console.log(JsUser.greeting);
console.log(JsUser.greetingOne());
console.log(JsUser.greetingTwo());












