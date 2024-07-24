// i don't know about map but we pratice on this .


let map = new Map()

map.set("pak" , "pakistan");
map.set("UAE" , "united Arab emirates");
map.set("In" , "India");
map.set("FR" , "france");
map.set("USA" , "United states of america");

map.forEach( (item , key) => {
  console.log(`${key} is used for => ${item}`)
})