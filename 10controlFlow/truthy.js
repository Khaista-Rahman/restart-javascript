
// falsey values
// flase , 0 , -0 , bigint , 0n , "" , null , undefined , NaN

// anthing you code in stringe this will be truthy . even space will be.
// truthy values
// "0" , "false" , " " , [] , {} , function(){}

// here is the examples of truthy and falsey

// let a = "";
let b = "0";
if (b) {
  console.log("this is truthy")
} else {
  console.log("this is falsey");
}
// you can practice in this to find truthy values and falsey values

const poo = null ?? 12;
console.log(poo)

const pooo = undefined ?? 34;
console.log(pooo)

let num = undefined ?? 13 ?? 323;
console.log(num)
// if there is alot of number or values this will be excute what the find first.

// ?? this is called nullish coalscing operator .
// this is always execute the right side oprand otherwise the left side oprand is null or undefined .
