define(function(static) {
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
  let code = event.code;

	/* debug 
  console.log(event);
	console.log(code);
	*/

  /* Conversion */
  let keyObject = document.querySelector('.' + code);
  if (keyObject.classList.contains('beenClicked')) {
    keyObject.setAttribute("class", "key " + code);
  } else {
    keyObject.setAttribute("class", "key "+ code + " beenClicked");
  }
});
}); 
