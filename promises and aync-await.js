//Promise : placeholder(proxy) for the value of any ongoing operation.
//It is a object that represents the eventual completion(or failure) of asynchronous operation and its resulting value.

//Example:
/*
(i)
Suppose I created a "promise" to upload a file in a doc.
So, now it may get uploaded(success) or may not complete the uploading(failure) due to many reasons like internet not working properly etc., and the performance depends upon many factors like size of the file(this decides the (pending) / waiting state timing).

(ii)
Another example is I call API to get some information, so if I able to fetch it the its a (success)state otherwise a (failure)state, and the waiting time required to fetch the info is called (pending) state.
*/

/*
So, "promise" have three states:
(i)Fullfiled(sucess/completion) state.
(ii)Rejected (failure) state.
(iii)Pending (waiting) state
*/
//So, when we create a promise, we know nothing about the proxy(resulting) value.


//##How to actually create a promise?
//We can create a promise using Promise() constructor.

let myPromise = new Promise(function(resolve,reject){
  //resolve -> success case
  //reject -> failure case

  const isRoomCleaned=false;
  if(isRoomCleaned){
    resolve('room cleaned');
  }
  else{
    reject('room not cleaned');
  }

});

//## How to use/consume the promise?
//1st method:

myPromise.then((data)=>{
  console.log("I am in 'then'...");
  console.log(data);
}).catch((data)=>{
  console.log("I am in 'catch'...");
  console.log(data);
});

//then() block is used for success and catch() block is used for failure/error.
// "data" argument in the callback function is used to get the content written when created the promise.

//2nd method:
async function go(){
  try{
    const data1=await myPromise;
    console.log(data1);
  }
  catch(err){
    console.log(err);
  }
}

go()


//case: client side are requesting some information from server side, after seeing the requirements of the request, the server side is sending back the required info.

//resolve
let myPromise1=new Promise((resolve,reject)=>{
  //after 5 seconds it should resolve
  setTimeout(()=>{
    resolve('Done !!');
  },5000)
})

myPromise1.then((data2)=>{
  console.log("I am in 'then'...");
  console.log(data2);
}).catch((e)=>{
  console.log("I am in 'catch'...");
  console.log(e);
}).finally(()=>{
  console.log("Successful");
});

//reject
let myPromise2=new Promise((resolve,reject)=>{
  //after 5 seconds it should resolve
  setTimeout(()=>{
    reject('Not Done !!');
  },6000)
})

myPromise2.then((data2)=>{
  console.log("I am in 'then'...");
  console.log(data2);
}).catch((e)=>{
  console.log("I am in 'catch'...");
  console.log(e);
}).finally(()=>{
  console.log("Rejected!");
})


//##Promise chaining:
/*
  (i)clean the room
  (ii)put the garbage in a can
  (iii) then go to eat ice-cream

  All these promises should be done in order of sequence.
*/

//Example-1:
const myPromise3=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(1);
  },1000)
}).then((data3)=>{
  console.log(data3);
  return (data3 * 2);
}).then((data3)=>{
  console.log(data3);
  return data3 + 3;
}).then((data3)=>{
  console.log(data3);
})

//Example-2:
const myPromise4=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('cleaned the room');
  })
},2000)

myPromise4.then((data4)=>{
  console.log(data4);
}).then((data4)=>{
  console.log("Put the garbage");
  return (`${data4} completed, put into the garbage can`);
})


//Example-3: For print every promise with some delay time.
const myPromise5=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(10);
  })
},1000)

myPromise5.then((data5)=>{
  console.log(data5);
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(data5 * 5);
    })
  },2000)
}).then((data5)=>{
  console.log(data5);
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(data5 * 10);
    })
  })
}).then((data5)=>{
  console.log(data5);
})

//So this all are asynchronous operations.
//In the time of execution, synchronous operation will first get executed before asynchronous one.

console.log("Synchronous operation");


//##Fetching data from API:

//Example-1: Fetching data from photo API's
const myPromise6=fetch('https://jsonplaceholder.typicode.com/photos');

myPromise6.then((response)=>{
  return response.json();
}).then((data6)=>{ //api codes converted into json through "response.json" and stored in data6
  console.log(data6);
  console.log(data6[0]);
})

//Example-2: FEtching data from posts API
const myPromise7=fetch('https://jsonplaceholder.typicode.com/photos');

myPromise7.then((response1)=>{
  return response1.json();
}).then((response1)=>{
  console.log(response1);
  console.log(response1[0]);
})

//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch



//Some promise functions:
//(1) Promise.all() : It takes an array of promises and returns a promise that resolves when all the promises created are successful otherwise it will get stop if some where rejected and give the rejected one as output only.

//part-1:
const promise1=Promise.resolve(5);
const promise2=52;
const promise3=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("All done");
  },2000)
})
const promise4=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("foo");
  })
},4000)

Promise.all([promise1,promise2,promise3,promise4]).then((data7)=>{
  console.log("All promises are resolved");
  console.log(data7);
})

//part-2:
const promise5=Promise.resolve(5);
const promise6=52;
const promise7=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    reject("All done"); //reject
  },2000)
})
const promise8=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("foo");
  })
},4000)

Promise.all([promise5,promise6,promise7,promise8]).then((data8)=>{
  console.log(data8);
}).catch(()=>{
  console.log("Some promise is rejected");
})


//(2) Promise.any:

//part-1:
const promise9=Promise.resolve(5);
const promise10=52;
const promise11=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("All done");
  },2000)
})
const promise12=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("foo");
  })
},4000)

Promise.any([promise9,promise10,promise11,promise12]).then((data9)=>{
  console.log(data9);
})


//part-2:
const promise13=Promise.reject(5);
const promise14=52;
const promise15=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("All done");
  },2000)
})
const promise16=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("foo");
  })
},4000)

Promise.any([promise13,promise14,promise15,promise16]).then((data9)=>{
  console.log(data9);
}).catch(()=>{
  console.log("Failed");
})


//(3) Promise.allSettled()
const promise17=Promise.resolve(5);
const promise18=52;
const promise19=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("All done");
  },2000)
})
const promise20=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("foo");
  })
},4000)

Promise.allSettled([promise17,promise18,promise19,promise20]).then((data10)=>{
  console.log("All promises are resolved");
  console.log(data10);
}).catch(()=>{
  console.log("Failed..");
})

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all



//## Async await in details:
//(1)
const mypromise8=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    reject("Error occured");
  },2000)
})

async function usingawait(){
  try{
    const dat1=await mypromise8
    console.log(dat1);
  }
  catch(e){
    console.error(e);
  }
  finally{
    console.log('finally');
  }
}

usingawait();
//catch() block will be executed.

//Note: Suppose we don't use try and catch block, then by default it will act using "try" block and if there is any error,then it will stop functioning the code at this point only, because that will be runtime error.And if we use "catch" block in this case then after getting error also(if any), code will execute the remaining the part(if any).

//(2)
//using async await for fetching API:
//(i)
async function fetchusers(){
  try{
    const response=await fetch('https://reqres.in/api/users');//by default-> GET method
    const jsonData=await response.json();
    console.log(jsonData);
    const data1=jsonData.data;
    console.log(data1);
    
  }
  catch(error1){
    console.error(error1)
  }
}

fetchusers();

//(ii)
async function fetchusers2(){
  try{
    const response=await fetch('https://reqres.in/api/users?page=2',{
      method:"GET",
      //header thing we can find in network tab(fetch/XHR)
      /* headers:{
        "Access-Control-Allow-Origin":'https://www.amazon.com',
      },
      body: (where we send data) */

    });//by default-> GET method

    //using destructuring
    const {data , total_pages,total}= await response.json();
    console.log(data);
    console.log(total_pages);
    console.log(total);
  }
  catch(error2){
    console.error(error2);
  }
}

fetchusers2();

//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


//try,catch,throw:

try{
  const number1=17;
  if(number1%2!=0){
    throw new Error("not a even number!!");
  }
}
catch(e){
  console.log(e);
}

console.log("Still working after runtime error");


//run-time error:
const number2=10;
console.log(number2);
console.log(eval(2*2));
/* console.log(eval("dediuu * 2")); */ //It will stop working here only and will not print "hey" of next line because we havn't use try catch block and so if a program get any runtime error, it stops there only.
console.log("hey");