// For-Loop
for (let i = 0; i <= 10; i++) {
  let item = i;
  if (item == 5) {
    // console.log('5 is best number');
  }
  // console.log(item);
}

for (let i = 1; i <= 10; i++) {
  // console.log(`Outer Loop value: ${i}`);

  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner Loop value: ${j} and Outer Loop value: ${i}`);
    // console.log(i + '*' + j + ' = ' + i*j);
  }
}

let arr = ["rohan", "shreya", "soni", "aryan"];
// console.log(`The length of array : `, arr.length);

for (let i = 0; i < arr.length; i++) {
  let item = arr[i];
//   console.log(`Index value of array ${i} : `, item);
}

// break and continue keywords in for-loop
for(let i = 1; i <= 20; i++){
    if(i == 5){
        // console.log('Detected 5');
        break;
    }
    // console.log(`Value of i is ${i}`);
}

for(let i = 1; i <= 20; i++){
    if(i == 5){
        // console.log('Detected 5');
        continue;
    }
    // console.log(`Value of i is ${i}`);
}
