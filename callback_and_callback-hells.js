//Syntax:

//Example-1:
function abc(callback) {
  console.log(1);
  console.log(2);
  
  // Call the callback function
  callback();

  console.log(3);
}

// Pass a function as a callback to abc
abc(function() {
  console.log("Hello");
});

abc(()=>{
  console.log("Hello Callbacks!!")
});

//Example-2:

function feg(num1){
  console.log(10);
  console.log(20);
  console.log(num1);
  console.log(30);
}

feg(5)

//In this example, the abc function accepts a parameter called callback. When abc is called, it invokes callback(), which executes the code inside the anonymous function provided as the argument. This will log "Hello" to the console when the script is run.

//This are the examples of synchronous logic. But, in industry grade, callbacks are used to handle asynchronous logic.

//NOTE:
//Callback function: It is used to pass a function as a argument and execute the block of code in an asynchronous logic.

//Asynchronous logic: something that has some waiting/pending state kind of thing.

//EXAMPLE-1:

const fetchusers3=((callback)=>{
  
  setTimeout(()=>{
    console.log("API request completed..")
    callback()
  },3000)
})

fetchusers3(()=>{
  console.log("Hello User!!")
})

//EXAMPLE-2:

const fetchusers4=((callback)=>{
  setTimeout(()=>{
    console.log("Requested User fetched");
    callback()
    callback()
  },2000)
})

const processUser=(()=>{
  console.log("User detail processed..")
})

fetchusers4(processUser)


//EXAMPLE-3:
//ZOMATO type case study:
/*
1.Order Placed
2.After 2 sec, Restaurant has accepted the order.
3.After 3 sec, Preparing your order.
4.After 10 sec, Packing your order.
5.After 15 sec, Order handed over to delivery person.
6.After 16 sec, Order delivered to your address! */

const placeOrder=(()=>{
  console.log("ORDER PLACED");
  setTimeout(()=>{
    console.log("Restaurant has accepted the order");
  },2000)
  setTimeout(()=>{
    console.log("Preparing your order..")
  },3000)
  setTimeout(()=>{
    console.log("Packing your order..")
  },10000)
  setTimeout(()=>{
    console.log("Order handed over to delivery person..")
  },15000)
  setTimeout(()=>{
    console.log("Order delivered to your address..")
    console.log("Enjoy your meal!!")
  },16000)
})

placeOrder()



//Callback hell(nested callback function):
//Let's take the same example with some changes:
//ZOMATO type case study:
/*
1.Order Placed
2.After 3 sec, Restaurant has accepted the order.
3.After 1 sec, Preparing your order.
4.After 15 sec, Packing your order.
5.After 13 sec, Order handed over to delivery person.
6.After 10 sec, Order delivered to your address! */

const placeOrder1=(()=>{
  console.log("ORDER PLACED");
  setTimeout(()=>{
    console.log("Restaurant has accepted the order")
    setTimeout(()=>{
      console.log("Preparing your order..")
      setTimeout(()=>{
        console.log("Packing your order..")
        setTimeout(()=>{
          console.log("Order handed over to delivery person..")
          setTimeout(()=>{
            console.log("Order delivered to your address..")
            console.log("Enjoy your meal!!")
          },10000)
        },13000)
      },15000)
    },1000)
  },3000)
})

placeOrder1()


/* //NOTE : Now , this is called handling multiple callback functions(callback hell), but this has some disadvantages:
-It will be very difficult to alter something when there will hundreds, thousands of cases over there,e.g, suppose we have to change the timing of "packing your order" from hundred line, we have to find it manually, so for this cons, we use "PROMISE ,ASYNC-AWAIT" in industry grade.

Moreover, we don't have to bother about this timings and all in real life as it would be dynamic data in real scenarios.
 */


//NOW using "Promise chaining instead of Callback-hell":(with the same example):

const orderAccepted=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log("Restaurant has accepted the order")
    resolve()
  },3000)
})
const prepareOrder=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log("Preparing your order..")
    resolve()
  },1000)
})
const packingOrder=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log("Packing your order..")
    resolve()
  },15000)
})
const orderHanded=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log("Order handed over to delivery person..")
    resolve()
  },13000)
})
const orderDelivered=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log("Order delivered to your address..")
    resolve()
  },10000)
})

const placeOrder2=()=>{
  console.log("ORDER PLACED!!")


  orderAccepted()
    /* .then(()=>{return prepareOrder()}) */
    .then(prepareOrder)
    .then(packingOrder)
    .then(orderHanded)
    .then(orderDelivered)
    .then(()=>console.log("Please order again.."))
    .catch(()=>{
      console.log("OOPS!....Try again after sometime.. :(")
    })
}


/* So now we see that using promises chaining and promise functions is better approach then callbacks-hell, because:
  -Modular- Every items information are in piece of a clear block of it.
  -Clear- Easy to process.
 */

//NOTE : One more thing to keep in mind that then() get end when we console something, not when we return.

//NOTE:
/*  We can even return a new promise directly in then()block:

.then(()=>{ 
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("Restaurant accepted the order..")
    },3000)
    resolve()
  }).then(()=>console.log("Happy Eating")).catch(()=>console.log("Try again!!"))

}) */



//To make more easy to interpret code then promise chaining and functions, we can use "Async-await":
const orderAccepted1=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log("Restaurant has accepted the order")
    resolve()
  },3000)
})
const prepareOrder1=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log("Preparing your order..")
    resolve()
  },1000)
})
const packingOrder1=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log("Packing your order..")
    resolve()
  },15000)
})
const orderHanded1=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log("Order handed over to delivery person..")
    resolve()
  },13000)
})
const orderDelivered1=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log("Order delivered to your address..")
    resolve()
  },10000)
})

const placeOrder3= async ()=>{

  try{
    console.log("ORDER PLACED!!")
    await orderAccepted1()
    await prepareOrder1()
    await orderHanded1()
    await orderDelivered1()
    console.log("Please order again..")
  }
  catch(e){
    console.log("OOPS!....Try again after sometime.. :(")
  }
  
}

//NOTE : It is the cleanest format of code out the three.






/*
Javascript is single threaded.
#JS ENgine
  -Callstack
  -Web API's
  -Task Queues
  -Event Loop
  */