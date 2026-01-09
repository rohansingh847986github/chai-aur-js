const accountId = 12345
let email = 'rohansingh123@gmail.com'
var password = '123456'
city = 'kolkata'
let state;

console.log(accountId);

// accountId = 123 // Not allwoed
// console.log(accountId);

/* Prefer not to use var because of issue in block and functional scope */

email = 'rohan123@gmail.com'
password = '321'
city = 'Dehli'
console.table([accountId, email, password, city, state])


