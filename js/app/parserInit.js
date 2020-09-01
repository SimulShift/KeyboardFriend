define(['app/i3Parser'], function(i3parser) {

const configs = document.querySelector('.configs');
configs.addEventListener('change', function(){
	if (this.files.length === 0 ) {
		console.log('No file selected');
		return;
	}
	console.log(this.files);
	const reader = new FileReader();
	if (this.files[0].name == 'config') {
		reader.onload = function(e) {
			i3parser(e.target.result);
		}
		reader.readAsText(this.files[0]);
	} else if (files.name==='.vimrc') {
			//TODO parsevimrc();
	} else {
		console.log('incorrect file');
	}
}); // end of file event listener
});
