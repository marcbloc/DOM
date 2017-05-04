var buttonClass = document.getElementsByClassName('button'),
buttonName = document.getElementsByTagName('button');
for (var i = 1; i < buttonClass.length; i++) {
	buttonClass[i].innerText=buttonName[i].name;
}
console.log(buttonClass);