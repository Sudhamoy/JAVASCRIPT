let firstname="Neymar";
let lastname="Junior";
let container="Neymar, Junior, Da, Santos";

console.log("My first name is :" + firstname + "and my last name is :" + lastname);
//ES6
console.log(`My first name is ${firstname} and my last name is ${lastname}`);


console.log(firstname.length); //returns the length of the string in characters
console.log(firstname.concat(lastname)); // Concatenate
console.log(firstname.substr(1,4)); //eyma (1-4[inclusive])
console.log(firstname.substring(1,4)); //eym (1-4[exclusive])
console.log(lastname.replace("Junior","Santos"));
console.log(container);
console.log(container.split(","));//This function will return array type.
// ['Neymar', ' Junior', ' Da', ' Santos']----> Output


// ## ES6 property : Template Literals/String:

//Example-1:
const firstname1="Sudhamoy"
const lastname1="Dey"
const city="Guwahati"

//Normal method:
console.log(firstname1+' '+lastname1+' '+"is from "+city);
//template literal method:
console.log(`${firstname1} ${lastname1} is from ${city}`);

