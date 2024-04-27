const number = 37.34;
console.log(number.toFixed(2));
console.log(number.toString());

let balance = new Number(1000000)
console.log(balance.toLocaleString('en-IN'));
console.log(balance.toExponential(3));
console.log(balance.toPrecision(7))
let amount = 1000998987;
console.log(amount.toLocaleString());


//++++++++++++++++++++ Maths ++++++++++++++++++++++++++

console.log(Math.floor(Math.random()*6) +1);

console.log(Math.abs(-100));// this will remove subtract sign from number
// the result will be 100.

console.log(Math.ceil(7.34));// this will remove in points numbers
// the result will be only 7.

console.log(Math.ceil(43));

console.log(Math.ceil(9));

console.log(Math.ceil(-7));

let count = [32 ,423 ,3 , 43 ,53, 3, 4, 244,];
console.log(Math.min(...count));
console.log(Math.max(...count));
// this will be find highest number or lower number in your array or in anthing.

console.log(Math.round(9.58));
console.log(Math.round(4.32));
console.log(Math.round(1.75));
// this will be give you total number with plus points numbers , if one number greater than .50 this will be the next number .(1.50) this will be 2.


const khaista = 10;
const shahid = 20;

console.log(Math.floor(Math.random() * (shahid - khaista) + khaista));

// this line is very important .


