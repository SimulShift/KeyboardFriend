define(['jquery', 'specialKeys'], function($,specialKeys) {
  $('#space').html('hello, from the other side!')

  specialKeys.echoMang();

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
    //console.log(event);
    let keyString = event.key;
    let keyNum = Number(keyString);

    console.log(keymap[keyString]);

    if (keyNum >= 0 || keyNum < 10) {
      keyString = 'digit' + keyString;
    } else if (keyString in keymap) {
      keyString = keymap[keyString];
    }
    for (var key in keymap) {
      console.log(key);
    }
    let currentKey = document.querySelector("#" + keyString);
    if (currentKey.classList.contains('beenClicked')) {
      currentKey.setAttribute("class", "key");
    } else {
      currentKey.setAttribute("class", "beenClicked");
    }
  });
}

});
