// console.log("Hello, world!");

// const sum = (a,b) => a + b;

// function sum1(a,b){
//     return a + b;
// }

// setTimeout(() => {
//     console.log('in side setTimeout function');
// },1000)

// console.log(sum(1,2));
// console.log(sum1(2,2));

// Module fs - filesystem
const fs = require('fs');

const content = 'Hello, world!';
const content1 = [1,2,3];


// //write file
// fs.writeFile('test.txt', content.toString() ,{flag: 'a'}, (err) => {
//   if (err) {
//     console.error(err);
//   }
//   // file written successfully
// });

//read file
fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
    console.log(typeof data);
});


//Own Module
// const {sub, sum, multi} = require('./math')

// console.log(sub(10,2));
// console.log(sum(10,2));
// console.log(multi(10,2));
