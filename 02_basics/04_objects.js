// Non-Singleton
// const insta = {}
// console.log(insta);

// Singleton
const tinder = {}
tinder.id = '123abc'
tinder.name ='rohan'
tinder.loggedin = false
// console.log(tinder);

const user = {
    email:'rohan1232@gmail.com',
    fullname:{
        usersfullname:{
            firstname: 'rohan',
            lastname:'singh'
        }
    }
}

// console.log(user);
// console.log(user.fullname.usersfullname.firstname);

const obj1 = {1:'a', 2:'b', 3:'c'}
const obj2 = {4:'d',5:'e',6:'f'}
// const obj3 = {obj1, obj2}
// console.log(obj3);
// const obj3 = Object.assign(obj1, obj2)
// console.log(obj3);
// const obj3 = Object.assign({},obj1, obj2)
// Spread operator
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// Data from database
const customer = [
    {
        id:1,
        email:'rohan@gmail.com',
    },
    {
        id:2,
        email:'rahul@gmail.com',
    }
]

const data = customer[1].id
// console.log(data);

// console.log(tinder);
// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));
// console.log(tinder.hasOwnProperty('name'));


const course = {
    coursename: 'js',
    price: '999',
    teacher:'Hitesh'
}

// course.teacher
// De-Structure
// const {teacher} = course

// You can give your name in de-structure
// const {teacher: t} = course
// console.log(t);












