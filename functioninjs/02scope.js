// Here we learn about scope . that what is scope .{} in this curly brackets we anthing code this will be called scope.

var a = 10;
let b = 20;
const c = 30;
console.log(a);
console.log(b);
console.log(c);

// for example.
// there is two type of scopes one is called blockscope . and other is called golbal scope. in curly brackets we anthing code this is called blockscope. and without curly brackets we anthing code this is called global scope.


// {} in this brackets we code anthing this will be not related with global scope and also not updatedbal without var . var will be update therefore we can't use the var.
// here is the example.
if (true) {
  var a = 40;
  let b = 50;
  const c = 60;
  console.log("the inner a:", a)
};
console.log(a);

// so this is how we can't use the var veraible. this updatedable in any scope.


///+++++++++++++++++++++++++++ intersting +++++++++++++++++++++++++++++++++++++

function one(){
  const user_Name = "shahid"
  function two(){
    const website = "youtube";
    console.log(user_Name);
  }
  // console.log(website);// here this will be error because we excute the blockscope veriable in the other block scope. but here is one more problem the child will be excute the parent veriable but parent will be not excute the child veriable.
  two()
}
one();



// Here is the two type of to decaler functions. onces you can store the function in veriable and other is simply function method.

three();
function three(){
  console.log("my name is khaista rahman");
}
// you can everywhere callback to this function this will be called. after the function and before this will be work.




// four();// ofcourse this will be error. because we call them before the function.
const four = function(){
  console.log("my name is shahid zada");
};
four();
// this function you can't call before the function this will be error . the only way to this function call this will be after .