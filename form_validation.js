// Validation:

const myform=document.querySelector('form');
const name2=document.getElementById("name2");
const email=document.getElementById("email");
const msg=document.querySelector("msg");

myform.addEventListener("submit", onSubmit);
function onSubmit(e){
  //alert("Clicked");
  e.preventDefault();//Prevent from default settings of the page like refreshing of page when press submit.
  if(name2.value==="" && email.value===""){
    alert("All fields are required");
  }
  else{
    alert("Success");
  }
}