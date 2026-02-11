function myName() {
    console.log("Rohan");
}

// myName // This function reference
// myName() //This function call or execution

// function add (num1, num2){
//     console.log(num1 + num2);
// }
// add(3, 4)

function subtract(num1, num2){
    // let result = num1 - num2
    // return result
     return num1 - num2
}

const result = subtract(10, 3)
// console.log(result);

function user(username) {
    // return `${username} just loggedIn`
    if (username === undefined) {
        // console.log('Please enter username');
        return
    }
    return `${username} just loggedIn`
}
// console.log(user());

function user(username) {
    if (!username) {
        // console.log('Please enter username');
        return
    }
    return `${username} just loggedIn`
}
// console.log(user());

function user(username='Unknown user') {
    // return `${username} just loggedIn`
    if (username === undefined) {
        // console.log('Please enter username');
        return
    }
    return `${username} just loggedIn`
}
// console.log(user());

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(2,20,10));

function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(2,20,10,40));

const userCart = {
    username: 'Rohan Singh',
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(userCart) //Give object as argument

// handleObject({username: 'Test User', price: 299}) //Give object directly as 
//argument    

let array = ['Rohan', '26', 'Developer']

function handleArray(getArray){
    // return getArray
    return array[0]
}

console.log(handleArray(array));


// handleObject([1,2,3,4]) //Give array directly as argument



