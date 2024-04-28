let newDate = new Date();
// console.log(newDate);
// console.log(newDate.toLocaleString());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(newDate.getMilliseconds());

let updateDate = new Date("2024 , 3 , 4");
// console.log(updateDate.toLocaleString());

let seconds = new Date(2030,4,23);
// console.log(seconds.toLocaleString());
// console.log(seconds.getFullYear());
// console.log(seconds.getMonth());
// console.log(seconds.getDate());

let nowDate = new Date();
// console.log(nowDate.getUTCDate());

let lunchTime = new Date('2, 11, 2025');
const timer = (setTimeout((lunchTime) => {
  lunchTime;
}, 4000));
console.log(timer);