let student2=[
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

//FOR LOOP:
for(let i=0;i<student2.length;i++) {
  console.log(student2[i]);
}

for(let i=0;i<student2.length;i++){
  console.log(student2[1].age);
}

for(let k of student2){
  console.log(k.skills);
}
//WHILE LOOP:
let j=0;
let lengthofarray=student2.length;

while(j<lengthofarray){
  console.log(student2[j]);
  j++;
}

