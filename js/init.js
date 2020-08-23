/* File Structure
KeyboardFriend/js/(lib/app) */
requirejs.config({ // baseUrl='js'
	paths: {
		//"lib": "lib", // third party
		//"app": "app"  // original code
	}
});

/* Loading components */ 
requirejs(['app/listeners']);
