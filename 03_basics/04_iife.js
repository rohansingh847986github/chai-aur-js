// Immediately Invoked Function Expressions (IIFE)
// This is named IIFE function because it has function name like here db
 (function db(){
    console.log(`Database Connected`);
 })(); // IIFE is used to avoid Global pollution and to execute function without any affect

// This is unnamed IIFE function because it doesn't have function name here
 (()=>{
    console.log(`Database Disconnected`);
 })(); //Semi-colon is used explecitely to stop function execution

 ((name)=>{
    console.log(`Hello ${name}`);
    
 })('Rohan');