const names = ["Ada", "Brendan", "Ali"];
const event = ["birthday"];

function writeCards(names,event){
for (let i = 0 ; i < names.length; i++){
  console.log(`Thank you, ${names[i]}, for the wonderful ${event[0]} gift`);
}
return names;
}

writeCards(names,event);
