const user = {
  username: "Rohan Kr Singh",
  price: 199,
  welcomeMessage: function () {
    console.log(`${this.username}, 'Welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = 'Rahul'
// user.welcomeMessage()
// console.log(this);

function one() {
  let username = "Rohan";
  console.log(this.username);
}
// one()

// Arrow Function
const Two = () => {
  ((username = "Rohan"), (age = 26));
  console.log(`${username}`);
  console.log(this.username);
  console.log(this);
};
// Two();
// Explecite Return
let add = (num1, num2) => {
  return num1 + num2;
};
//  console.log(add(3,4));

// Implecite Return
let sub = (num1, num2) => num1 - num2;
//  console.log(sub(4,2));

let multi = (num1, num2) => (
    num1 * num2
);
// console.log(multi(4, 2));

let objFunc = ()=>(
    {username:'Rohan'}
)
// console.log(objFunc());



