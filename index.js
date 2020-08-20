
let keyboardType = 'forty';
let mode = 'i3';

let numKeys = document.querySelectorAll("li").length;

for (var i = 0; i<numKeys; i++) {
  document.querySelectorAll("li")[i].addEventListener("click", function() {
    let keyChar = this.innerHTML.toLowerCase();
    console.log(keyChar);

    if (this.classList.contains('beenClicked')) {
      //this.classList.remove('.beenClicked'); 
      this.setAttribute("class", "key");
    } else {
      this.setAttribute("class", "beenClicked");
    }
  });
}
