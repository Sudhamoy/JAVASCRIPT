//Conditions:

//IF-ELSE:
//(1)
let q=10;
if(q===10){
  console.log("x is equal to 10");
}
else{
  console.log("x is not equal to 10");
}

//(2)

let l=10;
if(q=="10"){
  console.log("x is equal to 10");
}
else{
  console.log("x is not equal to 10");
}

//(3)
let g=10;
if(g==="10"){
  console.log("x is equal to 10");
}
else{
  console.log("x is not equal to 10");
}

// == is equal to operator which checks only the number which is not advisable in javascript
// === is a strict checker which checks the numeber as well as the data types which is advisable to use.

//(4)
let r1=4;

if(r1===10){
  console.log("h is equal to 10");
}
else if(r1<5){
  console.log("Hooray");
}
else{
  console.log("Null");
}

//(5) Ternary Operator:
let f5=20;
console.log(f5===20 ? "It is true" : "It is false");

//(6) Switch Case:

const dev="HTML";

switch(dev){
  case "HTML":
    console.log("I am HTML");
    break;

  case "CSS":
    console.log("I am CSS");
    break;

  default:
    console.log("I am a beginner");
    break;
}