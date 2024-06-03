// High Order Array Methods:

//Array Of Objects:
const groceryList=[
  {name:"Apple",price:25,category:"fruits"},
  {name:"Mangoes",price:35,category:"fruits"},
  {name:"Tomatoes",price:15,category:"vege"},
  {name:"Milk",price:20,category:"misc"},
  {name:"Bread",price:12,category:"misc"},
  {name:"Eggs",price:18,category:"misc"},
];

console.log(groceryList);

//(1) forEach:
//(Works like for loop)
groceryList.forEach(item=>{
  console.log(`The price for ${item.name} is ${item.price}`);
});

/* groceryList: This is an array containing objects, presumably representing items in a grocery list. Each object in the array likely has properties like name and price.
forEach(): forEach is a higher-order function in JavaScript that iterates over each element of an array and executes a callback function for each element.
item: This is a parameter(iterator) of the callback function. It represents the current element being processed in the array during iteration.
=>: This is the arrow function syntax, used to define anonymous functions in JavaScript. It's shorthand for creating functions, particularly useful in callback functions like this one.
{...}: This is the body of the arrow function, containing the code to be executed for each element in the array. In this case, it logs a message to the console using a template literal.
console.log(): This is a function used to log messages to the console for debugging or informational purposes.
Template literal: It allows embedding expressions inside string literals. In this case, ${item.name} and ${item.price} are placeholders that will be replaced with the corresponding values of the current item being iterated over. */

//*(2) map:
const new_price=groceryList.map(item=>{
  return{name:item.name, price:item.price*2};
});
console.log("New Array with updated prices:",new_price);
//Map gives new array set as output with modification.
//It is generally useful when we want to manipulate the array data.

// *(3) filter:
//(i)
const fruitList=groceryList.filter(item=>{
  return item.category==="fruits";
});
console.log(fruitList);

//Another way:
function filterFruits(item) {
  return item.category === "fruits";
}
const fruitList1 = groceryList.filter(filterFruits);
console.log(fruitList1);

//(ii)
const vegeList=groceryList.filter(item=>{
  //return {item.category==="vege"};//Wrong format here.
  return item.category==="vege";
});
console.log(vegeList);

//(iii)
const miscList=groceryList.filter(item=>{
  return item.category==="misc";
});
console.log(miscList);

//**(4) find():
//(i)
const result1=groceryList.find(item=>{
  return (item.category).toLowerCase()=="vege";
});
console.log(result1);

/*The find() method creates a new instance of an object and returns it, or undefined if no match was found.*/
//The main difference between "filter" and "find" is that while using "find" it will return first matched item while rendering and while using "filter" , it will return all the matched items.

//(ii)
const result2=groceryList.find(item=>{
  return (item.category).toLowerCase()==="fruits";
});
console.log(result2);//It will return only first fruit item and its value(property).

//(iii)
const result3=groceryList.find(item=>{
  return (item.category).toLowerCase()==="misc";
});
console.log(result3);


// ** (5)findIndex():
// It works like the find() but instead of returning the element itself, it returns the index of that element in array. If there is no matching element in array then it returns -1.
//(i)
let indexOfitem1=groceryList.findIndex((item)=>{
  return (item.name).toLowerCase()==="milk";
});
console.log(indexOfitem1); //3

//(ii)
let indexOfitem2=groceryList.findIndex(item=>{
  return (item.category).toLowerCase()==="fruits";
});
console.log(indexOfitem2); //0
// Note : It will render first matched item from the array while rending the whole page.

//(iii)
let indexOfitem3=groceryList.findIndex(item=>{
  return item.price===15;
});
console.log(indexOfitem3); //2

//(iv)
let indexOfitem4=groceryList.findIndex(item=>{
  return item.name==="apple";
});
console.log(indexOfitem4); //-1 (Need to do .toLOwerCase())

// ** (6) sort():
// Method use ascending order sorting.
//(i)
const sortedArray1=groceryList.sort((a,b)=>{
  return (a.name).localeCompare(b.name);
});
console.log(sortedArray1); //Sorted by name

//(ii)
const sortedArray2=groceryList.sort((a,b)=>{
  return a.price-b.price;
});
console.log(sortedArray2); //Sorted by price

//(iii)
const sortedArray3=groceryList.sort((a,b)=>{
  return (a.category).localeCompare(b.category);
});
console.log(sortedArray3); //Sorted by category

//(a, b) => {...}: This is an arrow function used as a comparator for sorting. It takes two parameters a and b, which represent two elements being compared.
//(a.category).localeCompare(b.category): This compares the category property of objects a and b using the localeCompare() method. This method returns a number indicating whether the string comes before, after, or is the same as the string in the parameter.

// **(7) some():
// returns boolean value

//(i)
const setprice=groceryList.some(item=>{
  return item.price>20;
});
console.log(setprice);//true

//(ii)
const setprice2=groceryList.some(item=>{
  return item.price>50;
});
console.log(setprice2);//false

//(iii)
const setname3=groceryList.some(item=>{
  return (item.name).toLowerCase()==="apple";
});
console.log(setname3);//true

//** (8) every():

//(i)
const setprice4=groceryList.every(item=>{
  return item.price>20;
});
console.log(setprice4);//false

// It checks whether every condition is true or not.
//Note : The difference between "some" and "every" is that "some" function is used like "OR" and "every" function is used like "AND",if even one of them is false it will return false.

//(ii)
const setprice5=groceryList.every(item=>{
  return item.price<50;
});
console.log(setprice5);//true

//** (9) reduce():
const initialPrice=0;
const total=groceryList.reduce((currentTotal,item)=>{
  return item.price + currentTotal;
},initialPrice);

console.log(total);