
let keyboardType = 'forty';
let mode = 'i3';

let numKeys = document.querySelectorAll("li").length;

for (var i = 0; i<numKeys; i++) {
  document.querySelectorAll("li")[i].addEventListener("click", function() {
    let keyChar = this.innerHTML.toLowerCase();
    console.log(keyChar);

    if (this.classList.contains('beenClicked')) {
      this.setAttribute("class", "key");
    } else {
      this.setAttribute("class", "beenClicked");
    }
  });
  document.addEventListener("keydown", function(event) {
    let keyChar = event.key;
    console.log(keyChar + 'uwu');
    let currentKey = document.querySelector("#" + keyChar);
    if (currentKey.classList.contains('beenClicked')) {
      currentKey.setAttribute("class", "key");
    } else {
      currentKey.setAttribute("class", "beenClicked");
    }
  });
}
