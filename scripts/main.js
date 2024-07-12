/*let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!" */

/*document.querySelector("html").onclick = function () {
  alert("Ouch! Stop poking me!");
}; */

let myImage = document.querySelector("img");
myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if (mySrc === "images/firefox-icon.png")
	{
		myImage.setAttribute("src", "images/0_0625.jpg");
	}else{
		myImage.setAttribute("src", "images/firefox-icon.png")
	}
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
	let myName = prompt("please enter your name.");
	
	if(!myNmae || myName === null){
		setUserName();
	}else{
		localStorage.setItem("name", myName);
		myheading.textContent = "Mozila is cool, " + myName;
	}
	
	
}

if (!(localStorage.getItem("name")))
{
	setUserName();
}else{
	let storedName = localStorage.getItem("name");
	myHeading.textContent = "Mozila is cool, " + storedName;
}