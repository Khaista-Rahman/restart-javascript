let Name = "khaista rahman";
let mood = "sad !"
console.log(`this is my name in upperCase ${Name.toUpperCase()}`);
console.log(`this is my name in lowerCase ${Name.toLowerCase()}`);
console.log(`in my name r index number is ${Name.indexOf('r')}`);
console.log(`in my name the character of 3 letter is ${Name.charAt(3)}`);
console.log(`from my name cut a slice 2 to 7 is ${Name.slice(2 , 7)}`);
console.log(`my all name letter is ${Name.length}`);
console.log(`remove all white spaces from start and end in name ${Name.trim()}`);
console.log(Name.substring(0 , 5));
console.log(`my name is ${Name} and my mood is right now ${mood.repeat(3)}`)
console.log(mood.replace("sad !" , "happy"));

let sweetNames = "khaista zain shahid haris azan mustafa sana";
console.log(sweetNames.split(" "))

// here repesenting the new string 

const language = new String("pushto");
console.log(`my language is ${language}`);



const myself = new String("my name is khaista rahman and my father name is bakhti ur rahman");
let nowmymood = "happy";
console.log(myself.toUpperCase());
console.log(myself.toLowerCase());
console.log(myself.slice(2 , 34));
console.log(myself.trim());
console.log(myself.split(" "))
