define('app/static', function(static) {

const configs = document.querySelector('.config');
configs.addEventListener('change', function(){
	if (this.files.length === 0 ) {
		console.log('No file selected');
		return;
	}
	console.log(this.files);
	const reader = new FileReader();
	if (this.files[0].name == 'config') {
		reader.onload = function(e) {
			parsei3(e.target.result);
		}
		reader.readAsText(this.files[0]);
	} else if (files.name==='.vimrc') {
			parsevimrc();
	} else {
		console.log('incorrect file');
	}
});

function parsei3(text) {

	//console.log(text);
	let i3key = "";
	let bindLines = [];
	let keybinds = [];
	let descriptions = [];
	let keys = [];

	let lines = text.split('\n');
	/* looping through all the lines */
	for (let line of lines) {
		if (line.substring(0, 4) != 'bind') {
			continue;
		} else {
			bindLines.push(line);
			let temp = line.substring(8);
			let parsed = "";
			for (let i = 0; i<temp.length; i++) {
				if (temp.charAt(i) === " ") {
					break;
				} else if (i > 0 && temp.charAt(i-1) === '+' &&
				!(temp.includes('Shift') || temp.includes('control'))) {
					keys.push(temp.charAt(i));
				}
				parsed += temp.charAt(i);
			} // end of inner for loop
			//keybinds.push(parsed);
		} // end of if statements
	} // end of main loop
	console.log(keys);
	highlight(keys);
} // end of parsei3 function

function highlight(keys) {
	for (key of keys) {
		key = key.toUpperCase();
		if (Number(key) >= 0 && Number(key) < 11) {
			key = 'Digit' + key;
		} else {
			key = 'Key' + key;
		}
		console.log('key: ' + key);
		let keyObject = document.querySelector("." + key);
    keyObject.setAttribute("class",key + " beenClicked");
	}
}

function parsevimrc() {
}

});
