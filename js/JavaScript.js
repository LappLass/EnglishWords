	var engWords = JSON.parse(words);
	var rusWords = JSON.parse(translate);

content.oninput = function (event) {
	var target = event.target;
		if (target.value.length) {target.previousElementSibling.classList.add('show-word');}
		else {target.previousElementSibling.classList.remove('show-word');}
}
var listInputs = document.getElementsByClassName('input');
var listSpans = document.getElementsByClassName('word');
var arrForCheck = [];


function generationWords() {
	for (var i = 0; i < listInputs.length; i++) {
		var a =  Math.floor(Math.random() * 2);
		var numWord = Math.floor(Math.random() * engWords.length);
			if (a){
				listInputs[i].placeholder = engWords[numWord];
				arrForCheck.push(rusWords[numWord]);	
			} 
			else {
				listInputs[i].placeholder = rusWords[numWord];
				arrForCheck.push(engWords[numWord]);
			}
			listSpans[i].innerHTML = listInputs[i].placeholder;
	}
	console.log(arrForCheck);
}
generation.onclick = generationWords;

function checkWords () {
	var amountCorrect = 0;
	for (var i = 0; i < listInputs.length; i++) {
		var theWord = listInputs[i].value.toLowerCase();
		if (theWord === arrForCheck[i]) {
			listInputs[i].classList.add('correct');
			amountCorrect++;
		}
		else listInputs[i].classList.add('incorrect');
	}
	return conclusion(amountCorrect); 
}

function conclusion(num) {
	result.innerHTML = "Верно " + num + "/" + listInputs.length + "<br>";
	for (var i = 0; i < listInputs.length; i++) {
		result.innerHTML += "||" + listSpans[i].innerHTML + " -- " + arrForCheck[i] + "||" + "<br>";
	}
	result.parentNode.style.top="31px";

}
check.onclick = checkWords;