const arr = [1, 2, 3, 4, 5, 6, 7];
// const val = arr.reduce((a, b) => {
//     console.log(`a: ${a} and b: ${b}`);
//   return a + b
// },0);
// console.log(val);

const item = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);
// console.log(item);

const cartData = [
  {
    items: "Laptop",
    price: 10000,
  },
  {
    items: "Mobile",
    price: 15000,
  },
  {
    items: "Washing Machine",
    price: 20000,
  },
];

let totalPrice = cartData.reduce((acc, item) => {
  return acc + item.price;
}, 0);
console.log(totalPrice);

