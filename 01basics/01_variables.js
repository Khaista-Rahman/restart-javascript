const accountId = 12442;
let accountEmail = "khaista3@gmail.com";
var accountPassword = '7398';
accountCity = "islamabad";
let accountState;// this will be undefine .

// let them to do changing

// accountId = 251234;//this will be absoultly error because the const value is never ever change or update.
accountEmail = "rahman3@gmail.com";//this all will be update and changeable.
accountPassword = "8729";
accountCity = "khyberpukhtunkhawa";// this method is not fine but this is possible in javascript .

// console.log(accountId);
console.log(accountEmail);
console.table([accountEmail , accountId , accountPassword, accountCity]);



// perfer not use the var 
// because this will be issue in block scope and funtional scope



//{
// in this brackets will be written anthing this will be scope
// }