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

console.log(typeof Name);
console.log(typeof age);
console.log(typeof isFollow);
console.log(typeof address);
console.log(typeof contact);
console.log(typeof cost);
console.log(typeof password);


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

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive) , Heap (non-primitive)

// stack (primitive)
// if you want to change value of veriable so this will be give you a copy of that value not orignal .

// Heap (non-primitive)
// if you want to change value of veriable so this will be give you change in orignal value not copy .

let myName = "khaista rahman";

let yourName = myName;
yourName="bakhti ur rahman";
// console.log(yourName);

let obj = {
  name:"khaista rhaman",
  bankAccount: "732497"
}
let ourName = obj.name
ourName="shahid zada";
// console.log(obj.name)
// console.log(ourName);
console.log(`my name is ${obj.name} and my father name is bakhti ur rahman and my mamu name is ${ourName}`);