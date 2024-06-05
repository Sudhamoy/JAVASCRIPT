//Declaring a object:
let employee={};
console.log(typeof employee);//object

//(1) Object Literals

let employee1={
  id:101,
  name:"Sundar Pichai",
  age:35,
  position:"CEO",
  company:"Google",
  salary:200000,
  address:{
    city:"Silicon Valley",
    country:"USA",
  },
  skills:[ "Java","Python","AI"],
  doj:"07/03/2024",

  //Method:
  fulldesignation:function()
  {
    console.log(this);
    return (`${this.name},${this.position},${this.company}`);
  },
};

console.log(employee1);
console.log(this);
console.log(typeof employee1.address); //Object
console.log(typeof employee1.skills); //Object

//(2) Accessing object properties:
//Two types: (i) Dot Notation (ii) Square bracket
console.log(employee1.id);
console.log(employee1["id"]);
console.log(employee1.name);
console.log(employee1['name']);
console.log(employee1.address);
console.log(employee1.address.city);
console.log(employee1.skills);
console.log(employee1.skills[1]);

console.log(employee1.fulldesignation()); //Calling Function

// (3) ES6 Destructuring:
//Destructuring is an efficient way to extract multiple values from data that is stored in arrays or objects. When destructuring an array, we use their positions (or index) in an assignment.

//EXAMPLE-1:
//(i) For objects:
const {id,age} = employee1;
console.log(id);
console.log(age);

//(ii) For arrays:
var marks=[100,99,98];
var [marks1,marks2,marks3]=marks;
console.log(marks1);
console.log(marks2);
console.log(marks3);

//EXAMPLE-2:
//FOR ARRAY:
const arr=[1,2,3,4,5];

  //normal method:
  const firstindex=arr[0];
  const thirdindex=arr[2];
  console.log(firstindex,thirdindex);

  //destructuring of array:
  const[fi1,,t3]=arr;
  console.log(fi1,t3);


// FOR OBJECT:
const obj={
  age2:12,
  name:"Sudhamoy",
  position:"SDE"
};

  //Normal method:
  const a1=obj.age2;
  const p=obj.position;
  console.log(a1,p)

  //destructuring of object:
  const {age2,position:designation}=obj;
  console.log(age2,designation)

//FOR function:
const displaydetails=(user)=>{
  const {age2,name,position}=user;
  console.log(`${name} of ${age2} years old is now a ${position}`);
}
displaydetails(obj)


//(4) Another way of creating object(Using "new" keyword):

var employee2=new Object();
employee2.id=1001;
employee2.name="John";
employee2.job="Software Engineer";
employee2.country="India";

console.log(employee2.name);
console.log(employee2['job']);

//Altering/changing values of keys:
//Note : Object is mutable.
employee2.country="USA";
employee2['job']="Software Developer";

console.log(employee2['job']);
console.log(employee2['country']);

//(5) Arrays and objects

var student={
  name:"Sudhamoy Dey",
  age:22,
  marks:[{
    subject:"maths",
    score:99
  },
  {
    subject:"eng",
    score:95
  },
  {
    subject:"science",
    score:91
  }
  ],
  address:{
  city:"Guwahati",
  country:"IND",
  }
};

console.log(student.marks[1].score);
console.log(student.marks[2].subject);


//(6)
//Copy by value VS. Copy by reference:
//(i)
var f=10;
var h=f;
h=h+10;
console.log(f); //10
console.log(h); //20

//(ii)
var stu1={
  name:"Ram",
  age:23
};

var stu2=stu1;
stu2.name="Shyam";

console.log(stu1);
console.log(stu2);

//Note: In this reference type case, both are pointing to the same container. So after updating the value, it will show same output for both, not like in copy by value.

//(7)Iterate through objects:

var student3={
  name:"Sanju",
  age:25,
  mobile:8947923947,
  country:"Canada"
};

//for-in loop
for(var key in student3){
  console.log(key);
}
for(var key in student3){
  console.log(key,":",student3[key]);
}

//(8)
console.log(Object.keys(student3));
console.log(Object.values(student3));
console.log(Object.entries(student3));

//Note : All of this are array output.

var k1=Object.keys(student3).forEach(function(key){
  console.log(student3[key]);
});

//OR
var k2=Object.keys(student3);//array
for(let i=0;i<k2.length;i++){
  console.log(student3[k2[i]]);
}

var entries1=Object.entries(student3);
for(let i=0;i<entries1.length;i++){
  console.log(`${entries1[i][0]} : ${entries1[i][1]}`);
}

//for-of:

for(var entry of entries1){
  console.log(entry);
}
for(var entry of entries1){
  console.log(entry[0]);
}
for(var entry of entries1){
  console.log(entry[1]);
}
for(var entry of entries1){
  console.log(entry[0][1]);
}


//ES6 propety : Object Property Assignment:


const firstnam="Sudhamoy"
const surname="Dey"
const object3={ firstnam,surname}
console.log(object3)

//Earlier it was like that:

/*
const firstnam="Sudhamoy"
const surname="Dey"

const object3={
  firstnam:firstnam,
  surname:surname
  }

console.log(object3)
*/

//ES6 property : property value over-writing in objects.

//Example-1:
const object4={
  a:5,
  b:10,
  c:15
}

//Q: Now make a copy of object4 with a=500 value:

const object5={
  ...object4, //using spread operator
  a:500
}

//OR
const object6={
  a:5,
  b:10,
  c:15,
  a:500
}

//Note: if we use a property more than once then, it will take the value assigned at the end(final)

console.log(object4)
console.log(object5)
console.log(object6)


