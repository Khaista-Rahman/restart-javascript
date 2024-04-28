let newDate = new Date();
console.log(newDate);
console.log(newDate.toLocaleString());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getMilliseconds());

let updateDate = new Date("2024 , 3 , 4");
console.log(updateDate.toLocaleString());

let seconds = new Date(2030,4,23);
console.log(seconds.toLocaleString());
console.log(seconds.getFullYear());
console.log(seconds.getMonth());
console.log(seconds.getDate());

let nowDate = new Date();
console.log(nowDate.getUTCDate());


let newTime = new Date("2,5,1990");
console.log(newTime.getDate());
console.log(newTime.getMonth());
console.log(newTime.getFullYear());