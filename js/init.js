/* File Structure
*/
requirejs.config({ 
	baseUrl: "js/lib",
	paths: {
		app: '../app'
	}
});

/* Load initial components */ 
requirejs(['app/keyListeners']);
requirejs(['app/parserInit']);
