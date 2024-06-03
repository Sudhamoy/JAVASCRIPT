let student1=[
  //Object set 1:
  {
    id:100,
    firstname:"Sudhamoy",
    lastname:"Dey",
    age:22,
    address: {
      city:"Guwahati",
      country:"India",
    },
    skills:["HTML","CSS","Java"],
  },
  //Object set 2:
  {
    id:101,
    firstname2:"Lionel",
    lastname2:"Messi",
    age:36,
    address :{
      city:"LaPaula",
      country:"Argentina",
    },
    skills:["Football","Business"],
  },

];


console.log(student1);
console.log(student1[1].address);
console.log(student1[1].address.city);
console.log(student1[1].skills[1]);

//JSON
console.log(JSON.stringify(student1[0],null," "));//printing the first object set of array in JSON String

let student1JSON=JSON.stringify(student1);
console.log(student1JSON);

let student1parse=JSON.parse(student1JSON); // Get back to its original array block
console.log(student1parse);