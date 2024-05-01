// // singleton is simply create in this method.

// // const User1 = new Object();
// const User1 = {}
// User1.Name = "khaista rahman";
// User1.Age = 20;
// User1.IsLoggedIn = true;

// // console.log(User1)


// const User2 ={
//   email: "rahamn@gmail.com",
//   User:{
//     Full_Name:{
//       Name: "shahid zada",// this is called nested object means inside the object of object.
//       Age: 22
//     }
//   }
// };
// console.log(User2.User.Full_Name.Age);

// const regularCustomar1 ={
//   Name : "khaista Rahman",
//   age: 30,
//   email: 'rahman@gamil.com'
// }

// const regularCustomar2 = {
//   Name: "shahid zada",
//   age : 20,
//   email: "zada@gmail.com"
// }
// const obj4 = Object.assign(regularCustomar1,regularCustomar2);
// console.log(obj4);


// const combine1 = {...regularCustomar1,...regularCustomar2};
// console.log(combine1);


// const obj1 = {1: "a" , 2: "b"};
// const obj2 = {3: "a" , 4: "b"};
// const obj3 = Object.assign(obj1,obj2);
// console.log(obj3);

// const khaista = {
//   full_Name: "khaista rahman",
//   full_email: "rahman@gmail.com",
//   phone: null
// }
// const shahid = {
//   Name: "shahid zada",
//   email: "zada@gmail.com",
//   contact: null
// }

// const combine = {...khaista,...shahid}
// console.log(combine);

// const tinderuser = {
//  user1: [
//     full_Name,"khaista",
//     email, "h@gamil.com"
//   ],
//   user2: [
//     full_Name,"khaista",
//     email, "h@gamil.com"
//   ],
//   user3: [
//     full_Name,"khaista",
//     email, "h@gamil.com"
//   ],
// }


// console.log(Object.keys(User1));
// console.log(Object.values(User1));
// console.log(Object.entries(User1));
// // console.log(User1.hasOwnproperty("isloogini"))



// const users = [
//   {
//     email: "ra@gmail.com",
//     contact: null
//   },
//   {
//     email: "ra@shs.com",
//     contact: null
//   },
//   {
//     email: "ra@23423.com",
//     contact: "null"
//   }
// ];
// console.log(users[1].email);
// console.log(users[2].email);



const course = {
  courseName: "js in hindi",
  price: "1099",
  courseTeacher: "hitesh Choudhary"
}

console.log(course.courseTeacher);
const {courseName} = course;
console.log(courseName);

// if you want to change the key name in object to do this .

const {courseTeacher: Teacher} = course;
console.log(Teacher);


// actullay this process is called distructering and this is very usefully in react . so basically we can do distucturing in array and object . but the array disturctering is very rearly .