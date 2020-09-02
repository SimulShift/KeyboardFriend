define(["jquery"], function($) {

let initKeybinds = function() {
	let keybind         = "";
	let keybindDiv      = document.querySelector('.keybind');
	let keybindElements = document.querySelectorAll(".key");
	let displaykeybind  = function(e, obj) {
		keybind                  = obj.dataset.keybind;
		keybindDiv.innerHTML     = keybind;
		keybindDiv.style.top     = e.pageY + "px";
		keybindDiv.style.left    = e.pageX + "px";
		keybindDiv.style.opacity = 1;
	}
	keybindElements.forEach(function(elem) {
		elem.addEventListener("mouseenter", function(e) {
			displaykeybind(e, this);
		});
	});
}

let initDetails = function() {
	let details         = "";
	let detailsDiv      = document.querySelector('.details');
	let detailsElements = document.querySelectorAll(".key");
	let displaydetails  = function(e, obj) {
		details                  = obj.dataset.details;
		detailsDiv.innerHTML     = details;
		detailsDiv.style.top     = e.pageY + "px";
		detailsDiv.style.left    = e.pageX + "px";
		detailsDiv.style.opacity = 1;
	}
	detailsElements.forEach(function(elem) {
		elem.addEventListener("mouseenter", function(e) {
			displaydetails(e, this);
		});
	});
}

initKeybinds();	
initDetails();	

return {
	/* func(String, String) */
	populateKeys: function(current, key){
		for (let i = 0; i < current.length; i++) {
			if (current.charAt(i) === " " ) {
				current = current.slice(0, i) + '<br>' + current.slice(i);
				$("."+key).attr("data-keybind", current);
				return;
			}
		}
	},
	/* func(String, String) */
	populateDetails: function(current, key){
		for (let i = 0; i < current.length; i++) {
			if (current.charAt(i) === " " ) {
				current = current.slice(0, i) + '<br>' + current.slice(i);
				$("."+key).attr("data-details", current);
				return;
			}
		}
	}
}

});
