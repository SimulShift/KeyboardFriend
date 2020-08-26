define(function(static) {
	return function (text) {

	console.log(text);
	let i3key = "";
	let bindLines = [];
	let keybinds = [];
	let descriptions = [];
	let keys = [];

	let lines = text.split('\n');
	/* looping through all the lines */
	for (let line of lines) {
		if (line.includes('set $Mod') ||
			line.includes('set $mod')){
				for (let i = 0; i<line.length;i++) {
					if ('Mod' === line.substring(i-3,i)) {
						i3key = line.charAt(i);
					}
				}
			} else if (line.substring(0, 4) != 'bind') {
			continue;
		} else {
			bindLines.push(line);
			let temp = line.substring(8);
			let parsed = "";
			for (let i = 0; i<temp.length; i++) {
				if (temp.charAt(i) === " ") {
					break;
				} else if (i > 0 && temp.charAt(i-1) === '+' &&
				!(temp.includes('Shift') || temp.includes('control' ||
				temp.inclues('shift') || temp.inclues('Control')))) {
					keys.push(temp.charAt(i));
				}
				parsed += temp.charAt(i);
			} // end of inner for loop
			//keybinds.push(parsed);
		} // end of if statements
	} // end of main loop
	console.log('i3key: ' + i3key);
	if (i3key === '1') {
		let modkey = document.querySelector('.AltLeft');
		let currentAttributes = modkey.classList;
		modkey.setAttribute('class', currentAttributes + ' i3'); 
	}
	//console.log(keys);
	highlight(keys);
} 

/* ==== end of parsei3 function ======= */

function highlight(keys) {
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
//TODO tooltip.initializeTooltip();
});
