//  primitive
// there are 7 primitive types in javascript .
// string , Number , boolean , null , undefined , bigInt , symbol 

let Name = "Khaista rahman";
let age = 20;
let isFollow = true;
let address = null;
let contact ;
let cost = 7329857983n;
let password = Symbol('4114');// this is also called uniqe ,

// console.log(typeof Name);
// console.log(typeof age);
// console.log(typeof isFollow);
// console.log(typeof address);
// console.log(typeof contact);
// console.log(typeof cost);
// console.log(typeof password);


// refreance (non primitive)
// there are three types of non primitive in javascript .
// Array, object , function .

let heroes = ["iron man ", "hulk" , "captain america" , "wanda"];
console.log(heroes);
console.log(typeof heroes);
// [] in this brackets you will anthing code this will be called array .
// also this is the typeof function .

let myobj = {
  Name: "khaista rahman",
  age: 20,
  fatherName : "bakhti ur rahman"
}
console.log(myobj)
console.log(typeof myobj)
// {} in this brackets you will be anthing code this will be called object .
// and also this is the typeof function .

const myfunction = function(){
  console.log("shahid zada")
}
myfunction();
console.log(typeof myfunction)
// this is called function and also called object function .