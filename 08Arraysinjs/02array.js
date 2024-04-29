const marvel_heros = ["Iron man", "spider Man", "thor", "loki"];
const dc_heros = ["super man", "bat man", "flash", "wander women"];
const allNames = ["khaista", "shahid", "zain", "papa"];
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

// here one more thing to concat the arrays in eachothers it's called spride.

const allheros1 = [...allHeros, ...dc_heros, ...allNames];
console.log(allheros1);

// the spride is more useful from concat.
// but by the way the way you can use concat. but spirde is very easy and simple.


const anotherArray = [1,2,3,4,5,6,7,8,9,1,2,3,4,[45,23,534,[5,6,[7,8,9]]]];
const realArray = anotherArray.flat(Infinity);
console.log(realArray);

// ok so flat() is simply use to all array concating in one array .

console.log(Array.isArray("shahid zada"));
// this will be give you answar in boolean type.
console.log(Array.from("khaista rahman"));// intersting


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));

// this is how you string or numbers to move on arrays .


