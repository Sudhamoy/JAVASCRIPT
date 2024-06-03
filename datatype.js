
// (1)

let name='Sudhamoy';
console.log(name);
console.log(typeof name);
console.log(typeof(name));


let firstName,lastName;
firstName = 'Sudhamoy'
lastName='Dey'
console.log(firstName+" "+lastName);
console.log(firstName,lastName);

// (2) Declaring variable using constructor:
let name1= new String("John Cena");
let age1= new Number(30);
let from_wwe=new Boolean(true);
/* let wife1=new null(); */ //Null is not a constructor
/* let employee=new undefined(); */ //Undefined is not a constructor

console.log(name1);
console.log(age1);
console.log(from_wwe);
console.log(typeof name1); //object
console.log(typeof age1); //object
console.log(typeof from_wwe); //object

// (3) Types of Data-Type in Javascript:

// (i) Primitives/ Value Types:
// Numbers
// Strings
// Boolean
// Undefined
// Null
// Symbol
// BigInt
// (ii) Reference Types:(non-primitive)
// Objects
// Arrays
// Functions


//(i)
let n=40;
let s="Sudhamoy";
let isapproved=false;
let first=undefined;
let last = null;

console.log(typeof first); //undefined
console.log(typeof last); //object (Exception)

//(ii)
var bi = BigInt(90);
console.log(bi); //90n
console.log(typeof bi); //bigint


var sy=Symbol("hello");
var sy1=Symbol();
console.log(sy);
console.log(sy1);
console.log(typeof sy);
console.log(typeof sy1);