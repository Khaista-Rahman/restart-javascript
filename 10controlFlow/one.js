// first of all the if statement  .
// remember this is the basic always if(true) and else (false)

let user1 = true;

if (user1) {
  console.log("user is loggedin")
}

// there is one another checking operation its called else .

let user2 = false;

if (user1) {
  console.log("user is loggedIn");
} else {
  console.log("please enter your email");
}
// this means if is not true in this sitauation you excute else statement.


// nested if statement

let score = 1000;

if(score < 500){
  console.log("less than 500");
}else if(score < 750){
  console.log("less than 750");
}else if(score < 900){
  console.log("less than 900");
}else if(score < 1100){
  console.log("less than 1100");
}

// there is one another checking condition called ternary operator  .

let score2 = 12;
(score2 > 10) ? console.log("greater than "):console.log("less than");

// this is also working like if statement but this is use for a short checking condition.

//_++++++++++++++++++++++++++++++++++++++++++++++++++
// for multiple checking condition you can use && .
// but on one condition all condition will be true .

let carditeCard = true;
let contact = true;

if (carditeCard && contact) {
  console.log("you can buy now")
};


// there is one another its called or represented from this ||
// its use for that one thing is true from all condition then execute the program .

let userLoggedFromGoogle = true;
let userLoggedFromEmail = true;

if (userLoggedFromGoogle || userLoggedFromEmail) {
  console.log("user is LoggedIn");
}

