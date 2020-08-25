define('app/static', function(static) {

const i3config = document.querySelector('.i3config');
i3config.addEventListener('input', () => {
	console.log(i3config.file.name)
});
});
