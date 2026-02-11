// global Scope
// var a = 10
// let b = 20
// const c = 30

// Block Scope
let b = 100;
if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
  // console.log('Local Scope: ', a);
}

// console.log('Global Scope', b);
// console.log(b);
// console.log(c);

// Nested Scope

function one() {
  const username = "rohan";
  function two() {
    const website = "youtube";
    // console.log(username);
  }
  // console.log(website);
  two();
}
// one()

if (true) {
  const username = "rohan singh";
  if (username === "rohan singh") {
    const website = " youtube";
    // console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);

// ...... ........
console.log(addOne(5));

function addOne(num) {
  return num + 1;
}

addTwo(5);
let addTwo = function addTwo(num) {
  return num + 2;
};
