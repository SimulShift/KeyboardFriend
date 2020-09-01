define(["app/i3highlight","app/tooltips"], function(Highlight,Tooltips) {

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
function hasModifier(current, i) {
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

let i3key        = "";
let bindlines    = [];
let descriptions = [];
let keys         = [];

return function (text) {
	//console.log(text);
	let lines = text.split('\n');
	
	/* Main Loop */
	for (let line of lines) {

		/* first check for i3key */
		if (findi3key(line)) {
			console.log("found i3key");

		/* if not bindline then we keep looping */
		} else if (line.substring(0, 4) != 'bind') {
			continue;
		/* if this far then bindline found
		and we can begin parsing the line */
		} else {
			bindlines.push(line);
			/* substring() truncates first 
			8 characters TODO '$sup'
			we truncate bindsym or bindcode */
			let current = line.substring(8);
			for (let i = 0; i<current.length; i++) {
				let curkey = current.charAt(i);
				if (curkey === " " || i == 0 ) {
					continue;
					/* check for other modifiers eg, shift, ctrl 
						TODO add support for shift or ctrl keybinds */
				} else if (current.charAt(i-1) === '+' && !hasModifier(current, i)) {
					keys.push(curkey);
					Tooltips.populate(current, mapToClass(curkey));
				}
			} 
		}
	} 
	/* highlighting */
	Highlight.main(keys);
	Highlight.mod(i3key);
}
});
