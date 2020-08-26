/* File Structure
*/
requirejs.config({ 
	baseUrl: "js/lib",
	paths: {
		app: '../app'
	}
});

/* Loading components */ 
requirejs(['app/keyListeners']);
requirejs(['app/parserInit']);
requirejs(['app/tooltip']);
