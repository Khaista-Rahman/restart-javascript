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
console.log(this);// but this will be show in terminal empty curly brackets but if you this code in browser this will be show window all properties what you want .


//+++++++++++++++++++++++++++++++ arrow function ++++++++++++++++++++++++++++++
// acutally this function you can store in a veriable and if you think this is a shortcut of function .

const chai = () => {
  console.log("i am khaista rahman from pakistan");
}
chai();

;
