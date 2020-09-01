define(function() {

return {

	mod: function (i3key) {
	//console.log('i3key: ' + i3key);
		if (i3key === '1') {
			let modkey = document.querySelector('.AltLeft');
			let currentAttributes = modkey.classList;
			modkey.setAttribute('class', currentAttributes + ' mod'); 
		}
	},

	main: function(keys) {
		for (key of keys) {
			key = key.toUpperCase();
			if (Number(key) >= 0 && Number(key) < 11) {
				key = 'Digit' + key;
			} else {
				key = 'Key' + key;
			}
			//console.log('key: ' + key);
			let keyObject = document.querySelector("." + key);
			keyObject.setAttribute("class",key + " i3");
		}
	}

}
});
