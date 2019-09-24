var questions = [
	'Whats your name ?',
	'Where are you from?',
	'What\'s your age?',
	'What profile you are working on?',
	'It was nice talking you :)'
];
var num = 0;

var inputBox = document.querySelector("#ans");
var output = document.querySelector("#result");
output.innerHTML = questions[num];

function showResponse() {
var input = inputBox.value;
if(inputBox.value == "") {
	
}else {
if(num == 0) {
	output.innerHTML = `Hii ${input}`;
	inputBox.value = "";
	inputBox.setAttribute("placeholder", "Wait for 2 secs");
	++num;
	setTimeout(changeQuestion, 2000);
} else if(num == 1) {
	output.innerHTML = `${input} must be a good place`;
	inputBox.value = "";
	inputBox.setAttribute("placeholder", "Wait for 2 secs");
	++num;
	setTimeout(changeQuestion, 2000);
} else if(num == 2) {
	output.innerHTML = `So you are ${2017 - input} born`;
	inputBox.value = "";
	inputBox.setAttribute("placeholder", "Wait for 2 secs");
	++num;
	setTimeout(changeQuestion, 2000);
} else if(num == 3) {
	output.innerHTML = `Awesome ${input}`;
	inputBox.value = "";
	inputBox.setAttribute("placeholder", "Wait for 2 secs");
	++num;
	setTimeout(changeQuestion, 2000);
}
}
}

function changeQuestion() {
inputBox.setAttribute("placeholder", "Enter your response");
output.innerHTML = questions[num];
if(num == 4) {
	inputBox.style.display = "none";
}
}

$(document).on('keypress', function(e) {
if(e.which == 13) {
	showResponse();
}
})

$( "#ans" ).focus();
