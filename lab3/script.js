const names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

for (humanName in names) {

  
  if (names[humanName].toLowerCase().charAt(0) === 'j') {
    console.log(window.buy.speak(names[humanName]));
    
  } else {
    console.log(window.hello.speak(names[humanName]));

  }
}