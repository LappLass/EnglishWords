content.oninput = function (event) {
	var target = event.target;
		if (target.value.length) {target.previousElementSibling.classList.add('show-word');}
		else {target.previousElementSibling.classList.remove('show-word');}
}
