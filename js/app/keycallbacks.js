define(['jquery', 'specialKeys'], function($,specialKeys) {


let numKeys = document.querySelectorAll("li").length;

/* Event Listener that handles clicks 
   it gabs all the li elements and swaps
    the class *** CALL BACK **** */
for (var i = 0; i<numKeys; i++) {
  document.querySelectorAll("li")[i].addEventListener("click",function() {
    if (this.classList.contains('beenClicked')) {
      this.setAttribute("class", "key");
    } else {
      this.setAttribute("class", "beenClicked key");
    }
  });
}
/*  handles the keyboard
    First it converts digits to string
    Then it converts SpecialCharacters from specialKeys.js
    Finally the main condition can transform the buttons
    ***CALL BACK WITHIN EVENT LISTENER***
  */
document.addEventListener("keydown", function(event) {
  console.log(event);
  let keyString = event.key;
  let keyNum = Number(keyString);

  /* Handles Digits */
  if (keyNum >= 0 || keyNum < 10) {
    keyString = 'digit' + keyString;
  } else if (keyString in specialKeys.dictionary) {
    keyString = specialKeys.dictionary[keyString];
  }

  /* main condition */
  console.log(keyString);
  let currentKey = document.querySelector('.' + keyString);
  if (currentKey.classList.contains('beenClicked')) {
    currentKey.setAttribute("class", "key " + keyString);
  } else {
    currentKey.setAttribute("class", "key "+ keyString + " beenClicked");
    console.log("we out here");
  }
}); //end of event listener

});
