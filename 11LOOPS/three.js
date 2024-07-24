// For each lOop

let marvelheroes = ["iron man" ,"wanda", "captain america", "thor", "Hulk"];


// foreach loop always need a callback function we called him arrow function we also create in simple function but arrow funcion is easy .

marvelheroes.forEach( (parameter) => {
  // console.log(parameter)
})

// there is another example .

const myArr = [
  {
    productName : "laptop",
    price : 128743,
    brand : "apple"
  },
  {
    productName : "mobile",
    price : 13999,
    brand : "chaina"
  },
  {
    productName : "headphones",
    price : 10999,
    brand : "apple"
  },
  {
    productName : "keyboard",
    price : 1283,
    brand : "HP"
  },
];

function printMe(item) {// this trick use for alot of arrays 
  console.log(item)
}

marvelheroes.forEach(printMe)// only give him a refrence.

myArr.forEach( (item) => {
  console.log(`product Name is => ${item.productName} : product price is =>  ${item.price} : brand of => ${item.brand} `)
})

// filter()

let nums = [1,2,3,4,5,6,7,8,9,10];

let newNum = nums.filter( (item) => item > 4);
console.log(newNum)

let totalNum = nums.filter( (num) => {// this is a scope therefore the return word is very important in this scope.
  return num > 2
});
console.log(totalNum)

// a large example of this filter  .


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


shoppingCard.filter( (item) => {
  console.log(item.courseName)
  console.log(item.price);
})