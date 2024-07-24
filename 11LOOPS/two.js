// for of loop

let names = ["mobile", "laptop", "mouse", "keyboard"];
// whenever i console like that that will be excute all array but we need only values of this array . therefore we use for of loop in this situation.

console.log(names);

for(let val of names){
  console.log(val)// this will be give us only values of arrays not all array.
};
// this is most use for arrays . but not born for that hehehehe....


// for in loop

let myObject = {
  name : "dilwala",
  age : 32,
  email : "fhfh4$#@gmail.com",
  contact : undefined
}
// if i want to direct execute this will be give me all object but we need only key or values .

console.log(myObject);

for(let key in myObject){
  console.log(key)
  
  // for keys and values we use backticks 

  console.log(`${key} => ${myObject[key]}`)
};
