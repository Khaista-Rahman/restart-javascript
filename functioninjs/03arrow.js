const user = {
  userName : "khaista",
  price : 332,

  welcomeMessage : function(){
    console.log(`${this.userName} , welcome to website`);
    // console.log(this);// acutally this will be show you what do you code in this block scope .
  }
};

user.welcomeMessage();
user.userName = "shahid";
user.welcomeMessage()
console.log(this);// but this will be show in terminal empty curly brackets but if you this code in browser this will be show window with all properties what you want .


//+++++++++++++++++++++++++++++++ arrow function ++++++++++++++++++++++++++++++
// acutally this function you can store in a veriable and if you think this is a shortcut of function .

const chai = () => {
  console.log("i am khaista rahman from pakistan");
}
chai();

const one = () =>
{
  console.log(this);
}
one();

// there is one another way to create function in one line.

// const addtwo = (num1 , num2) => num1 + num2;// this is very important and remember it the return key is not allowed here.



// const addtwo = (num1 , num2) => (num1 + num2);// you can hold this scope in prantieses.

// if you want in this function create a object . so this also possible.
const addtwo = (num1 , num2) => ({Name: "khaista rahman"});
console.log(addtwo(2,6)); 