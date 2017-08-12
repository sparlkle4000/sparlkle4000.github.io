var myHeading = document.querySelector('h1');
myHeading.textContent ='Hello World!';

var myImage =document.querySelector("img");
 myImage.onclick=function(){ 
  var mySrc = myImage.getAttribute('src');
  if(mySrc === "///Users/nicolemartin/Desktop/test-site/images/myboyfriends.png"){
 myImage.setAttribute("src", "file:///Users/nicolemartin/Desktop/test-site/images/Zoro.jpeg");
  } else {
  myImage.setAttribute ("src", "///Users/nicolemartin/Desktop/test-site/images/myboyfriends.png");
  }
  }
  
  var myButton = document.querySelector('button');
  var myHeading = document.querySelector('h1');
  
  function setUserName(){
  var myName =prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Luffy and Zoro are cool," + myName;
  }
  
  if (!localStorage.getItem('name')) {
  setUserName();
  } else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = "Luffy and Zoro are cool," + storedName;
  }
  
  myButton.onclick =function(){
  setUserName();
  }
  