define(["app/i3highlight","app/tooltips","jquery"], function(Highlight,Tooltips, $) {

//=======================
//     bool findi3key
//=======================
function findi3key(line) {
	if (line.includes('set $Mod') ||
	line.includes('set $mod')) {
		for (let i = 0; i<line.length; i++) {
			if ('Mod' === line.substring(i-3,i)) {
				i3key = line.charAt(i);
			}
		}
		return true;
	} else return false;
}
//=======================
//    bool hasModifier
//=======================
function hasModifier(current) {
	if (current.includes('Shift')  ||
				current.includes('shift')   ||
				current.includes('control') ||
				current.includes('Control')) {
		return true;
	} else return false;
}
//=======================
// bool map to key class
//=======================
function mapToClass(key) {
	key = key.toUpperCase();
	if (Number(key) >= 0 && Number(key) < 11) {
		key = 'Digit' + key;
	} else {
		key = 'Key' + key;
	}
	return key;
}

//=====================
//  parseBindLine() {}
//=====================
function parseBindLine(line) {

	let current = line.substring(8); // truncate bind keyword
	let isBindSym = true;
	let modkey = "";
	let keybind = "";
	let details = "";

	for (let i = 0; i<current.length; i++) {
		let curkey = current.charAt(i);
		if (curkey === " " || i == 0 ) {
			continue;
			/* check for other modifiers eg, shift, ctrl */
		} else if (current.charAt(i-1) === '+' && !hasModifier(current)) {
			keys.push(curkey);

			if (current.charAt())
			Tooltips.populateKeys(key, mapToClass(curkey));
			Tooltips.populateDetails(details, mapToClass(curkey));

			// Populates List View
			$(".listview").append(current + "<br>");
		}
	}
}

//======================
// Global Variables
//======================
let i3key        = "";
let keys         = [];

return function (text) {
	let lines = text.split('\n');

	/* Main Loop */
	for (let line of lines) {
		/* first check for i3key */
		if (findi3key(line)) {
			console.log("found i3key: " + i3key);
		/* if not bindline then we keep looping */
		} else if (line.substring(0, 4) != 'bind') {
			continue;
		/* if this far then bindline found
		and we can begin parsing the line */
		} else {
			parseBindLine(line);
		}
	} 
	/* highlighting */
	Highlight.main(keys);
	Highlight.mod(i3key);
}
});
