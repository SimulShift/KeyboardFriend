define(['app/static'], function(static) {
let numKeys = document.querySelectorAll("li").length;

/* ==== MOUSE ========== */
for (var i = 0; i<numKeys; i++) {
  document.querySelectorAll("li")[i].addEventListener("click",function() {
    if (this.classList.contains('beenClicked')) {
      this.setAttribute("class", "key");
    } else {
      this.setAttribute("class", "beenClicked key");
    }
  });
}

/* ==== KEYBOARD ========== */
document.addEventListener("keydown", function(event) {
  console.log(event);
  let keyString = event.key;
  let keyNum = Number(keyString);

  /* Handles Digits */
  if (keyNum >= 0 || keyNum < 10) {
    keyString = 'digit' + keyString;
  } else if (keyString in static) {
    keyString = static[keyString];
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
}); // end of define
