const names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

for (humanName of names) {

  
  if (humanName.toLowerCase().charAt(0) === 'j') {
    window.buy.speak(humanName);
    
  } else {
    window.hello.speak(humanName);

  }
  
}

console.log("\n\n");

let stillNotAtHome;
  for (let i = names.length - 1; i >= 0; i--) {
    if (names[i].toLowerCase().charAt(0) != 'j') {
      window.buy.speak(names[i]);
      
    } else {
      stillNotAtHome = Math.random() < 0.5;
      if(stillNotAtHome){
        window.goHome.speak(names[i]);
      }
  
    }
}
