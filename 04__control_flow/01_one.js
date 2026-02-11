// >,<,>=,<=,==,===,!=,!==
// const temp = 41
// if (temp === 41) {
//     console.log(`Less than 50`);
// }
// console.log(`More than 50`);

// const temp = 41;
// if (temp === 41) {
//   console.log(`Less than 50`);
// } else {
//   console.log(`More than 50`);
// }

// const score =200
// if (score>100) {
//     const userPower = 'fly'
//     console.log(`User Power ${userPower} and Score: ${score}`);
// }else{
//     console.log(`User has no power`);
// }

const balance = 5000;
// Implecite Scope because it has one line code
// if (balance >500) console.log(`User balance`)

//  if (balance >500) console.log(`User balance`),
//  console.log('test2'); //Not recommended for good coding

// Nesting condition
// if (balance < 500) {
//     console.log(`Less than 500`);
// }else if (balance < 750) {
//     console.log(`Less than 750`);
// } else if ( balance < 900){
//     console.log(`Less than 900`);
// } else{
//     console.log(`Less than 1200`);
// }
 
const userLoggedin = true
const debitcard = true

if (userLoggedin && debitcard) {
    // console.log(`Allow to buy course`);
}

const loggedInFromGoogle = false
const loggedInfromEmail = true

if (loggedInFromGoogle || loggedInfromEmail) {
    // console.log(`User logged in`);
}


 