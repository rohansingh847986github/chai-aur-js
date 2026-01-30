let myDate = new Date()

// console.log(typeof myDate);
// console.log(myDate);
// console.log((myDate.toISOString()));
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let myDate1 = new Date(2026,0,14)
// console.log(myDate.toDateString());

// let myDate2 = new Date(2026,0,14, 5, 3)
// console.log(myDate2.toLocaleString());

// let myDate3 = new Date("2026-01-14")
let myDate3 = new Date("01-14-2026")
// console.log(myDate3.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myDate3.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getMonth());
// console.log(newDate.getMonth() + 1);
// console.log(`${newDate.getDay()} and the time`);

 let c = newDate.toLocaleString('default', {
    weekday: "long"
})
console.log(c);










