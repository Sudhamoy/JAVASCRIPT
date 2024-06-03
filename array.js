
let frameworks=['angular','react','vue'];
let databases=['sqlite','db2','mySQL','MongoDB']

console.log(frameworks);
console.log(frameworks[0]);
databases[0]="Oracle"; //Replace
console.log(databases);
console.log(databases[1]);

//Methods:
console.log(frameworks.length);
console.log(databases.sort());//ascending order
console.log(databases.reverse());//descending order
console.log(databases.pop());//remove elements from end
console.log(databases);
databases.shift(); //remove elements from start
console.log(databases);
databases.unshift("PostgreSQL");//push elements in the start
databases.push("DynamoDB"); //push elements in the end
console.log(databases);

//Check whether it is array or not:

console.log(typeof databases);// object type
console.log(Array.isArray(databases)); // Array type
console.log(databases instanceof Array); // Array type

//Note: Array in javascript can be resized(can only be replaced in other programming language) and can have heterogeneous data types in a single array.(Only homogeneous data-types in other languages.)
// Note : Array is a special type of object.

marks=[100,91,83];
marks[3]=99;
console.log(marks);
marks[5]=70;
console.log(marks);
console.log(marks[4]);//undefined

//sorting number in array:
points=[40,100,10,1,5,25];
console.log(points.sort()); //changes in that array

//Ascending
res1=points.sort(function(a,b){
  return (a-b);
});
console.log(res1);

//Descending
res2=points.sort(function(a,b){
  return (b-a);
});
console.log(res2);


//Exploring arrays:

var marks=[100,200,300,400,500];
console.log(marks.length);

var sum=0;
for(let i=0;i<marks.length;i++){
  sum=sum+marks[i];
}
console.log(sum);

for(let i=0;i<marks.length;i++){
  if(marks[i]===250){
    console.log("found");
    break;
  }
  else{
    continue;
  }
}
console.log("Not found");

//find:
const foundElement=marks.find(function(e){
  return e>300;
});
console.log(foundElement);

//filter:
//When we need mutiple values for a condition
const foundElement1=marks.filter(function(element){
  return element>300;
});
console.log(foundElement1);//Gives new array

////forEach:
var res11=marks.forEach(function(ele){
  console.log(ele);
});

console.log(res11);//undefined

var index1=marks.forEach(function(no,index){
  console.log(no,"is in the index:",index);
});
console.log(index1);//undefined

//map:
var new_marks=marks.map(function(updates){
  return updates*2;
});
console.log("Updated marks array:",new_marks);