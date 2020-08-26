define(function() {
console.log('is work?');

let initializeTooltip = function() {
	let tooltip = "";
	let tooltipDiv = document.querySelector('.tooltip');
	let tooltipElements = document.querySelectorAll(".key");
	let displayTooltip = function(e, obj) {
		tooltip= obj.dataset.tooltip;
		tooltipDiv.innerHTML = tooltip;
		tooltipDiv.style.top = e.pageY + "px";
		tooltipDiv.style.left = e.pageX + "px";
		tooltipDiv.style.opacity = 1;
	}
	tooltipElements.forEach(function(elem) {
		elem.addEventListener("mouseenter", function(e) {
			displayTooltip(e, this);
		});
	});
}
initializeTooltip();	
});
