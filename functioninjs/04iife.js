// (IIFE) Imedidatly Invoked Function Expression .
// in the prantieses you create function with sefty to global veriable can't invoke in function for example.

(function chai(){
  console.log("i am khaista rahman")
})(); // simply this is the callback of function .

// you can create this iife in arrow function .

( () => {
   console.log("i am muhammad zain khan")
})();// in last the semicolon is very important in iife.

// you can also give him expression .
((Name) =>{
   console.log(`my name is ${Name}`);
})("khaista Rahman");

// so the iife is very easy to create function and also keep safe from global veriables and global polution .

