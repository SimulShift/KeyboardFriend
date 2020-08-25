/* File Structure
KeyboardFriend/js/(lib/app)
*/
requirejs.config({ 
	baseUrl: "js/lib",
	paths: {
		app: '../app'
	}
});

/* Loading components */ 
requirejs(['app/listeners']);
