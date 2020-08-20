
let keyboardType = 'forty';
let mode = 'i3';

let numKeys = document.querySelectorAll("li").length;

for (var i = 0; i<numKeys; i++) {
  document.querySelectorAll("li")[i].addEventListener("click", () => {
    alert('donthurtme');
  });
}
