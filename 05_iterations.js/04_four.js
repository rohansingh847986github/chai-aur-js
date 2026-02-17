const myObj = {
    js: 'javascript',
    cpp : 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObj) {
    // console.log(key);
    // console.log(myObj[key]);
    // console.log(`key: ${key} and value: ${myObj[key]}`);
}

const subject = ['Eng','Beng','Sci']
for (const key in subject) {
    // console.log(key);
    // console.log(subject[key]);

}

const map = new Map()
map.set('Rohan', 'Singh')
map.set('Shreya', 'Roy')
map.set('Riya', 'Chatterjee')
map.set('Aryan', 'Khan')
map.set('Aryan', 'Khan')

for (const key in map) {
    console.log(map[key]);
}