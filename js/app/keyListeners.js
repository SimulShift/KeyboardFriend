define(function() {
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
	if (!keyObject.classList.contains("i3")) {
		keyObject.setAttribute("class", "key "+ code + " beenClicked");
		setTimeout(function () {
			keyObject.classList.remove("beenClicked");
		}, 100 );
	}
});
}); 
