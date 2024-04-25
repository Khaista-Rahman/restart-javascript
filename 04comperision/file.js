// = this comperision will be check that the number is equal to this number
// == this comperision will be check this the number is equal to this number or nOt .
// === but this comperision will be check the number are equal to this number or not but also check datatype for example the one number will be code in string and one are code in number this will false . there result always give you in boolean type true or false .

// < this sign is called less than . 
// > this sign is called greater than .


let num = 67;
const num2 = "67";

if (num == num2) {
  console.log(true)
}else{
  console.log(false)
}

if (num === num2) {
  console.log(true);
}else{
  console.log(false)
}

if (num != num2){
  console.log(true)
}else{
  console.log(false)
}

if (num !== num2) {
  console.log(true)
}else{
  console.log(false)
}

if (num < num2) {
  console.log(true)
} else {
  console.log(false)
}

if (num > num2) {
  console.log(true)
} else {
  console.log(false)
}

if (num <= num2) {
  console.log(true)
} else {
  console.log(false)
}

if (num >= num2) {
  console.log(true)
} else {
  console.log(false)
}