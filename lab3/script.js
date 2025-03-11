const names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

for (humanName of names) {

  
  if (humanName.toLowerCase().charAt(0) === 'j') {
    window.buy.speak(humanName);
    
  } else {
    window.hello.speak(humanName);

  }
}
