function myfunction(){
  console.log("my name is khaista rahman");
}
//myfunction// simply this is called refreance of function not excute.
myfunction()// this called callback of function.

// add two numbers in function .

function addTwoNumbers(num1, num2){
     console.log(num1 + num2)
}
addTwoNumbers()// the expected result will be NAN means not a number because we did'nt give arguments in callback/.

addTwoNumbers(3 ,5)// the expected result is 8 .

// here is one more concept of interpulation in function so will do that.

function addNumbers(num1, num2){
  console.log(`The Result is : ${num1 + num2}`)
}
addNumbers(22,44)


// The Return concept .

function myfun(userName){
    return `${userName} is logged in`;// after this return you anthing code that will be not excute . we should be try this hehehe
    console.log("shahid zada")

}
console.log(myfun())// the expected excute will be undefined.
console.log(myfun("shahid zada"));

// i did'nt learn about if else but now we will practice this in function to learn will functions .


function userFunction(userName){
    if(!userName){
      console.log("please enter a user Name");
    }
    return userName;
}

console.log(userFunction());

// my practice .

const myArray = ["shahid", "khaista", "zain"];
function myfunction2(userName){
  if(!userName){// ! this mean not .
    console.log(`my Name is ${myArray[2]}`);
  }
  return `my name is ${userName}`
}
console.log(myfunction2("khaista rahman"));
myfunction2();

const myObject ={
  Name : "saqib",
  age: 23,
  email: null,
  address: "pakistan swat"
}

function myfunction3(){
  console.log(`my name is ${myObject.Name} and my age is ${myObject.age} and my email is ${myObject.email} and i belongs to ${myObject.address}`)
}
myfunction3()
// here we learn about functions and how to inject the array or object in functions . 

const myNewArray = [200 , 300 , 400 , 500];
function returnTheArray(myArray){
    return myArray[1];
}
console.log(returnTheArray(myNewArray));// the expacted result is 300;


const myNewObject = {
  userName: "khaista",
  age: 21
}

function returnTheObject(myObject){
  return `my name is ${myObject.userName}`
}

console.log(returnTheObject(myNewObject));

// this how we learn about inject the object and array in function.