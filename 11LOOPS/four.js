// Reduce () is very important and especially use in shopping card.

const shoppingCard = [
  {
    courseName : "cpp course",
    price : 2999
  },
  {
    courseName : "py course",
    price : 4999
  },
  {
    courseName : "js course",
    price : 1999
  },
  {
    courseName : "java course",
    price : 5999
  },
  {
    courseName : "swift course",
    price : 7999
  },
]


let totalPrice = shoppingCard.reduce( (remain, currPrice) => {
  return remain + currPrice.price

} , 0);

console.log(totalPrice)

// and Here i finish hetish sir one chapter thank you sir for this series .
