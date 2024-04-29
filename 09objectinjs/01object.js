// objects
// always remember that the object key is always in string form .


const mysymbol = Symbol("key1")

const user = {
  Name: "khaista",
  "full name":"khaista rahman",
  [mysymbol]:"mykey1",
  age: 18,
  email:"khaista@google.com",
  isFollow: false,
  address: "swat pakistan",
  contact: null
}
console.log(user);
// console.log(user."full name"); this will be not execute .
console.log(user["full name"]);
console.log(user["email"]);

// if i want to change name or email in object that we will do that easily.
user.age = 20;
console.log(user["age"]);
// there is one another way to excute the object keys .
console.log(user.Name);
// ofcourse this will be work .

// according to hitesh. that some time in interve will ask that take a unique symbol and code that in object and console that but one condition the symbol will the typeof symbol.not a string.

console.log(user[mysymbol]);
console.log(typeof user[mysymbol])
// if we check the typeof the symbol this will be a typeof symbol not a string.



// if you want to this object execute in function , then do this .

user.greeting = function(){
  console.log("hello world");
}

console.log(user.greeting());

user.greetingTwo = function(){
  console.log(`hello world! my name is ${this["full name"]}`);
  console.log(`hello world! my name is ${this.Name}`);
}
console.log(user.greetingTwo());

// so this is the basics code of object . hopely i will keep this code in my mind hehehehehehehehe okay enough hehehehe sorry.
