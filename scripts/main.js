var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';
var myImage = document.querySelector('img');
myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/sap.png'){
		myImage.setAttribute('src','images/s4hana.jpg');
	}
	else {
		myImage.setAttribute('src','images/sap.png');
	}
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
if (!localStorage.getItem('name')){ 
	setUserName();
	} 
else { 
	var storedName = localStorage.getItem('name'); 
	myHeading.textContent = 'Hello' + storedName; 
}

function setUserName(){
	var myName = prompt('Name');
	localStorage.setItem('name',myName);
	myHeading.textContent = 'Hello' + myName;
}

myButton.onclick = function() {
  setUserName();
}