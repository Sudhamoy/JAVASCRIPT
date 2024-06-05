//Funtions:
//Function declaration
//(1)
function showText0(){
  return "Good Morning!";
}
console.log(showText0());

//(2)

function showText1(){
  console.log("Good Morning!");
}
console.log(showText1());

//(3)
function showText2(x4,x5){
  console.log(x4);
  console.log(x5);
}
console.log(showText2("Good Evening","Rutherford"));

//(4)
function showText3(){
  console.log("Good Morning!");
}
console.log(showText3);
//This will show the function body but will not show the "Good Morning!" message. To call the function use: showText3();

//(5)
let u1=showText4("Alpha123");
let u2=showText4("Beta456");
let u3=showText4("Gamma789");

console.log(u1,u2,u3);
console.log(u1,"\n",u2,"\n",u3);

function showText4(username){
  return `cooldude ${username}`; //can also use simple : username
}


//(6)
function showText5(username){
  console.log("Hello User - ",username);
}

showText5("alpha567");
showText5("Beta567");

//(7) Nested Function:
function greet(){
  console.log("Hello");
}
function nested(hellofn){
  greet();
}

console.log(nested(greet));

//Anonymous function : https://www.geeksforgeeks.org/javascript-anonymous-functions/
//Part-1:
//Function Expression:
//(1)
let add = function (a1,a2){
  return a1+a2;
}
console.log(add(3,4));//7

//(2)
let subs=function(b1,b2){
  return b1-b2;
}
let result_subs=subs(10,5);
console.log(result_subs);

//Note: function is not hoisted for function expression but works in function declaration.

//Part-2:
//ES6 Arrow Function:
//(1)
const showtext=(x6,x7)=>{
  console.log(x6);
  console.log(x7);
}
console.log(showtext("Hello","World"));

//(2)
const showtext2=(x8,x9)=>{
  x8="Allison";
  x9="Becker";
  return (`${x8} ${x9}`);
}
console.log(showtext2());

//(3)
// Single line arrow function: (when we have only one expression):
//(i)
const showcase1=()=>console.log("single line arrow function!!");
showcase1();

//(ii)
const summation=(su1,su2) =>  su1 + su2 //works as "return su1 + su2"
console.log(summation(10,20));

//
const summation1=(su3 , su4)=>{
  su3=10;
  su4=20;
  return su3 + su4
}
console.log(summation1());

//(iii)
const object_function=()=>{
  return object_1={
    name:"Sudhamoy",
    age:22
  }
}
console.log(object_function());

// Single line function of the previous one.(bcz it has only one functional expression)
const object_function1=()=> object_1={
  name:"Sudhamoy",
  age:22
}

console.log(object_function1());

// without declaring object name:
const object_function2=()=> ({
  name:"Sudhamoy",
  age:22
})

console.log(object_function2());




//## IIFE : Immediate Invoking of Functional Expression
//(1)
(function iife(){
  console.log("IIFE");
})();



//## Closures : function + lexical scope:
//(1)
function outer(){
  var closurevariable=66;
  function inner(){
    console.log(closurevariable);//66
  }
  inner();
}
outer();



// Constructor Object:
//####
//"this" keyword : refers to the current object / object calling the function.
//####

// We are creating Mobile class here it is acting as a class.
//s2 and oneplus is the instance of class that is called object. Can be say as the blueprint of the class.
function Mobile(brand, price, launchdate){
  this.brand = brand;
  this.price = price;
  this.launchdate = new Date(launchdate);
}

const s23=new Mobile("Samsung","$200","08/03/2024");
const oneplus=new Mobile("Oneplus","$250","09/09/2024");
//We can make multiple instances.
console.log(s23);
console.log(oneplus);



//## Prototype Property:
//It is a good practice to alter prototype method for practising.
Mobile.prototype.ram="4GB";
Mobile.prototype.rom="8GB";

//Creating function in prototype property:
Mobile.prototype.getlaunchdate=function(){
  return (this.launchdate.getFullYear());
}

console.log(s23.getlaunchdate);
console.log(oneplus.getlaunchdate);