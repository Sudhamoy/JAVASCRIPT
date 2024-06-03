console.log(this);
//this" keyword : refers to the current object / object calling the function.


//creating a object:
const book = {
  //property
  title:"harry potter",
  //method : function inside a object
  read(){
    console.log(this);
    console.log(this.title);
  }
};

book.write= function(){
  console.log("write fn");
}

book.read();

//Note : Inside a method, if we use "this", it will call the current object's properties and methods too.

//Note : If we use function, which calls globally --> give results in form of window object.
//Example:
function read1(){
  console.log(this);//window
}
read1();
//will find this function and its details inside that window object.


//## Constructor Function:
function square(){
  this.side=5;
  this.draw=function(){
    console.log("draw fn..");
  }
}

//new object instance called "square1" is created.
const square1=new square();
console.log(square1);
console.log(square1.side);

//So, when we don't pass parameters, that means its fixed. So even if I create another object then also it will take the same side length(here it is 5).
const square2=new square();
console.log(square2);
console.log(square2.side); //5

//Now suppose we want length of side be taken differently afterwards,then:
function rectangle(length,breadth){
  this.length=length;
  this.breadth=breadth;
  this.paint=function(){
    console.log("Paint red");
    console.log(this);
  }
  this.hello=function(){
    console.log("hello world");
  }
  const hello1=function(){
    console.log("hello world1");
  }//This will not show in the object structure.
}
const rect1=new rectangle(10,20);
console.log(rect1.length);
console.log(rect1.breadth);
console.log(rect1);

const rect2=new rectangle(40,50);
console.log(rect2.length);
console.log(rect2.breadth);
console.log(rect2.paint());
console.log(rect2);

//This is called making multiple instances.

//Suppose we want to add properties or functions after creation of constructor functions, then we can do with the help of objects created.
rect1.name="rectangle-one";
console.log(rect1);
rect1.area=function(){
  console.log("Area is "+this.length*this.breadth);
}
console.log(rect1);
console.log(rect1.area);


//Difference between using arrow function and normal function in an object:

//Normal function syntax:
function sayhello(){
  console.log("say hello!");
}
sayhello();

//Arrow function syntax:
const sayhello1=(sy1,sy2)=>{
  console.log("say hello1!",sy1,sy2);
}
sayhello(200,900);

//Using arrow function inside object.
const details={
  name:"Sudhamoy",
  age:22,
  //arrow function:
  sayhello2:()=>{
    /* console.log("say hello2!"); */
    console.log(this);//it will point to the current object here like before because arrow function do not do binding , so it works like globally spaced.
  }
}

details.sayhello2();



const button5=document.getElementById('fun');
button5.addEventListener('click',()=>{
  console.log("Button 5 clicked!");
  console.log(this);
  this.innerHTML="clicked";
});

//##Prototype:
//In JavaScript, the concept of prototypes is central to understanding how inheritance and object creation work. Prototypes allow objects to inherit properties and methods from other objects. This is a key feature of JavaScript's object-oriented capabilities.


//Every object has a prototype property which is a reference to an object.

const person1={
  name:"Sudhamoy",
  age:22,
  talk:function(){
    console.log("I am talking....");
  }
};

console.log(person1);

const person2=Object.create({
  name:"Sudhamoy",
  age:22,
  talk:function(){
    console.log("I am talking....");
  }
});

console.log(person2);//will be inside the prototype:object