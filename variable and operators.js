//VARIABLE:
// var, let, const

var x =5;
let y=6;
const z=7;

let rate=0.3;
rate=1;
console.log(rate);

const r=0.5;//we cannot reassign a const

//Types of operators:
//(i) Logical(&&, ||, !)
//(ii) Relational(<,>,<=,>=,!=,!==, ==[checks only value], ===[checks both value and datatype])
//(iii) Assignment (=)
//(iv) Ternary (condition ? true : false)
//(v) Arithmatic (+,-,/,*)
//(vi) Unary (++a, a++, --a, a--)

//Basic Operators:
console.log(x+y);
console.log(z-x);
console.log(x*y);
console.log(z/z);

//Assignment Operator:
let a=10;

console.log(++a);// 11 (Pre-Increment)
console.log(a++); //11 (Post-Increment)
console.log(a); //12

//Type casting and Coercion:
//(i)
var s1=10;
var t1='3';
console.log(s1+t1);//103
console.log(typeof s1+t1);//number3

//(ii) String to number:
var n1='8';
var m1=Number(n1);
console.log(m1);//8
console.log(typeof m1);//number

var s2="Sudhamoy";
var n2=Number(s2);
console.log(n2);//NaN : Not a number
console.log(typeof n2);// number


//(iii)
var f1=null;
var f2=Boolean(f1);
console.log(f2); //false
console.log(typeof f2); // boolean

//Note : Falsy values: false, 0, null, undefined

//(iv) number to string
var n3=8;
var s3=String(n3);
console.log(s3); //8--->'8'
console.log(typeof s3); //string

//(v)
var n4=9;
var n5=9.22;

console.log(Number(n4)); //9
console.log(parseInt(n4)); // 9
console.log(parseFloat(n4));  // 9
console.log(Number(n5)); //9.22
console.log(parseInt(n5));//9
console.log(parseFloat(n5));//9.22


//Parameter to differentiate var,let,const:
//(1)Scope explanation for let, var , const:
//var:
//(i)
for(let vt=0;vt<10;vt++){
  var globalv=100;
}
console.log(globalv);//accesible in global scope because variable type is "var".

//(ii)
var globalv1=55;
if(true){
  console.log(globalv1);
}

//(iii)
function globalscope(){
  console.log(globalv1);
}
globalscope();

//(iv)
function globalscope1(){
  if(true){
    var globalv2=201;
  }
  console.log(globalv2);
}
globalscope1();

//(v)
function globalscope2(){
  var globalscope3=301;
  if(true){
    console.log(globalscope3);
  }
  console.log(globalscope3);
}
globalscope2();
/* console.log(globalscope3);//globalscope3 is not defined */

//let:
for(let vty=0;vty<10;vty++){
  let blockvariable1=100;
  console.log(blockvariable1); // 10 times 100
}
/* console.log(x); //blockvariable1 is not defined */

//const:
if(true){
  const blockvariable2=50;
  console.log(blockvariable2);
}
/* console.log(blockvariable2); //blockvariable2 is not defined */

//##NOTE:
//So, let,const have block level scope and var don't have any block scope, it has functional scope(if there is a function in the program) and global scope.

//(2) Reassignment:
//Note : allowed in case of "const" but allowed in "var" and "let" case.

//(3) Redeclaration:
//Note : allowed in case of "const" and "let" but allowed in "var" case.
var redc1=10;
var redc1=20;
console.log(redc1); //updated value:20

//(4) Hoisting and TDz
/*
console.log(hoisting1);//undefined
var Hoisting=50;
console.log(hoisting1); //50
*/
//Note : If we had used "let" or "const" in this case then it would have shown 'error' : Cannot access 'hoisting1' before initialization.



//** let,var in loops:
for(let i=0;i<5;i++){
  console.log(i);
}
//console.log(i); //error : i is not defined

//Note : After every iteration, the scope of is over, it creates new scope to fill the next updated value because "let" has block level scope.

for(var i=0;i<5;i++){
  console.log(i);//0 1 2 3 4
}
console.log(i);//5
//Note: Here, it will use only one scope of "i" throughout the iteration and update the value in the same scope and also accessible in global scope too.




//Question : Disadvantage of "var" is that this pollute the global scope if used everywhere. Why?

//This function is called IIFE: Immediate Invoking of Functional expression.
(function polluteglobalscope(){
  var variab1=410;
  console.log(variab1);
})();

var variab1=510;
console.log(variab1); //510

//This creates overriding problem. 

