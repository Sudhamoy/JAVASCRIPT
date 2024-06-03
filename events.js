//Events in JavaScript:
console.log("EVENTS IN JAVASCRIPT");

//1. Click Event
const btn=document.getElementById("toggle");
//adding event:
btn.addEventListener("click", (e) => {
  console.log(e);
  const ul1=document.querySelector(".contact-list > ul");
  if(ul1.style.display==="block"){
    ul1.style.display="none";
  }
  else{
    ul1.style.display="block";
  }
});

//(2)
//Timing event: It allows execution of code after certain time interval.
//Types: (i) setTimeout  (ii) setInterval

//(i) Print "Hello" after 3 second passed:
var timeoutID1=setTimeout(function(){
  console.log("Hello");
},3000); // two arguments
//3sec ----> 3000 miliseconds

var timeoutID2=setTimeout(function(){
  console.log("Hi");
},5000);

var timeoutID3=setTimeout(function(){
  console.log("Hey");
},7000);

console.log(timeoutID1,timeoutID2,timeoutID3);
clearTimeout(timeoutID2);

//(ii) Keep on excuting something after an interval.
var intervalID1=setInterval(function(){
  console.log("Hello-Interval");
},2000);

clearInterval(intervalID1);


//(3) From html dom:
//For setTimeout
function st(){
  console.log("Good Morning!");
}
//For setInterval
function si(){
  console.log("Good Evening!");
}

//(4)
//Print "Happy Eve" 4 times(upto 8 sec in a span of 2 sec):
var intervalID4=setInterval(function(){
  console.log("Happy Eve!");
},2000);

var timeoutID4=setTimeout(function(){
  clearInterval(intervalID4);
},8000);


//Mouse Events:
//-click
//-double click
//-mouseover

//(5)
//Mouse evnet : Add EventListener "Click":
//(i)
var click1=document.getElementById("click");
click1.addEventListener("click",function(){
  console.log("Button is clicked!");
});//callback function used.

//(ii)
/* var heading1=document.getElementsByTagName("h1");
click1.addEventListener("click",function(){
  heading1.style.color='blue';
}); */

//(7)
//Mouse event : Double click event:
var click2=document.getElementById("dclick");
click2.addEventListener("dblclick",function(){
  console.log("Double clicked!!")
});

//(6)
//Mouse event : mouseover
var mouseover1=document.getElementById("hello");
mouseover1.addEventListener("mouseover",function(){
  console.log("Mouse is over the element!");
  mouseover1.style.color="blue";
});

//Keyboard events:
//-keydown
//-keyup
//-keypress
document.addEventListener("keydown",function(e){
  console.log("KEYDOWN");
  console.log(e.key);
  console.log(e.keyCode); //scancode
  console.log(e.code);
});
document.addEventListener("keyup",function(e){
  console.log("KEYUP");
  console.log(e.key);
  console.log(e.keyCode); //scancode
  console.log(e.code);
});
document.addEventListener("keypress",function(e){
  console.log("KEYPRESS");
  console.log(e.key);
  console.log(e.keyCode); //ascii code
  console.log(e.code);
});

//NOTE: "keydown" and "keypress" are almost similar but differnce is that "keypress" can't show us the non-printable keys like tabs,@,etc.

//(7)
//Event types:
//(i)Event trickling(capturing) : Top to Bottom
//(ii)EVent Bubbling : Bottom to Top

//Event Bubbling:
var child=document.getElementById("child");
child.addEventListener("click",function(){
  console.log("Child is clicked");
},false);
var parent=document.getElementById("parent");
parent.addEventListener("click",function(){
  console.log("Parent is clicked");
},false);
var body=document.querySelector("body");
body.addEventListener("click",function(){
  console.log("Body is clicked");
},false);
var htmltag=document.querySelector("html");
htmltag.addEventListener("click",function(){
  console.log("HTML is clicked");
},false);

//true > false
//Note : By default, event bubbling is set.

//Event Trickling
var child=document.getElementById("child");
child.addEventListener("dblclick",function(){
  console.log("Child is clicked");
},true);
var parent=document.getElementById("parent");
parent.addEventListener("dblclick",function(){
  console.log("Parent is clicked");
},true);
var body=document.querySelector("body");
body.addEventListener("dblclick",function(){
  console.log("Body is clicked");
},true);
var htmltag=document.querySelector("html");
htmltag.addEventListener("dblclick",function(){
  console.log("HTML is clicked");
},true);

//Note:If any of the isCapture argument is false in above example, then it will come last.
// true > false
//Note: addEventListener(event name, callback function, isCapture)

//(8)
//preventDefault:
var minitv=document.getElementById("minitv");
minitv.addEventListener("click",function(e){
  e.preventDefault();
});

//(9)
//stopPropagation():
var child1=document.getElementById("c");
child1.addEventListener("click",function(e){
  console.log("Child is clicked");
},false);
var parent1=document.getElementById("p");
parent1.addEventListener("click",function(e){
  console.log("Parent is clicked");
  e.stopPropagation();
},false);
var grandparent=document.getElementById("gp");
grandparent.addEventListener("click",function(){
  console.log("Parent is clicked");
},false);