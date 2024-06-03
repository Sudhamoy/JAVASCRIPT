//DOM: tree like structure where html elemenets are nodes.

//(1) Window object and DOM:

//Window Object : represents an open browser window.
//window > document > actual content
//window -> properties,functions

console.log(window);
console.log(this);
console.log(window.document); //Gives our HTML page
console.log(window.location); //Can see info like routing address and all.

// (i) Single Element:
console.log(window.document.getElementById("contact")); //Window will automatically detected.

var contact1=document.getElementById("contact"); //By Id
console.log(contact1);
console.log(document.querySelector("section")); //By selector

// NOTE: In case of selector, it will choose the first while rendering the page from top to bottom.

//(ii) Multiple Element:

console.log(document.getElementsByClassName("item")); //HTMLCollection
console.log(document.getElementsByTagName("li")); //HTMLCollection
var li1=document.querySelectorAll("li");//NodeList
console.log(li1);
console.log(li1[0]);

// NOTE: we have to first convert the "HTMLCollection" to array in case of doing operations like looping whereas in case of "NodeList" we can do looping and all.

var ptag=document.querySelectorAll("p");
console.log(ptag);
console.log(ptag[0]);
console.log(ptag[1].innerHTML);

var item1=document.getElementsByClassName('item');
console.log(item1[0]);
console.log(item1[1]);
console.log(item1[2]);

// *(iii) Lets do looping in NodeList:

const node1=document.querySelectorAll("li");
node1.forEach(node=>{
  console.log(node);
}
)

// **(2) MANIPULATING DOM:
const h2=document.querySelector(".contact-list > h2");
h2.innerText="Contact List"; //Contact List
h2.textContent="Contact List-1";// Contact List-1
h2.innerHTML="Contact-List"; //Contact-List
//All three works same way almost.
//Preferable: innerHTML
//Change inner content of an element but does not include any html tags.

const h1=document.querySelector(".heading");
h1.innerHTML="Hello JavaScript!";

const ul=document.querySelector(".contact-list > ul");
ul.firstElementChild.innerText="HTML";
ul.lastElementChild.textContent="JAVASCRIPT";
ul.children[1].innerHTML="<h3>CSS</h3>";// Here we cannot use innerText or textContent.

//Styling:
ul.firstElementChild.style.background="tomato";
ul.children[1].style.background="grey";
ul.children[1].style.color="white";