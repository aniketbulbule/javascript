// let h = document.getElementsByTagName('h1');
//      h[0].style.backgroundColor = "red";  
//      console.log(h[0].style.backgroundColor);

//----------------------------------------------------     

//! Internal implementation of Promise

// let a = 10;
// let apnaPromise = new Promise((resolve, reject) => {
//     if (a == 10) {
//         resolve("a is 10");
//     } else {
//         reject("a is not 10");
//     }
// });

// console.log(apnaPromise);

// apnaPromise.then((msg) => {
//     console.log(msg);
// });
// apnaPromise.catch((msg) => {
//     console.log(msg);
// });
// apnaPromise.finally(() => {
//     console.log("This always runs");
// });


// ---------------------------

// let a=10;

// let pro=new Promise((resolve,reject)=>{
//     if(a==10){
//         resolve("a is 10")
//     }else{
//         reject("a is not 10")
//     }
// })

// pro.then((msg)=>{
//     console.log(msg);
// })

// pro.catch((msg)=>{
//     console.log(msg);
// })


//--
// let gift = "bike";

// let p = new Promise((resolve, reject) => {
//     if (gift === "bike") {
//         resolve("true, it's a bike");
//     } else {
//         reject("false, it's not a bike");
//     }
// });

// console.log(p);

// p.then((msg) => {
//     alert(msg); // Correct usage
// }).catch((msg) => {
//     alert(msg); // Correct usage
// });

//----



//! Promise
//? It is an object
//? Promise has 3 state)s: pending, fulfilled, rejected
//? To handle promises we use `.then()` and `.catch()`
//? Promises are used to handle asynchronous operations(time taken task)
//? Asynchronous operations allow JavaScript to perform tasks like fetching data or 
//? waiting for a timer without blocking the rest of the code from running.

//? The fetch() function in JavaScript is used to make HTTP requests (like GET, POST, etc.) 
//? and returns a Promise that resolves to the response.
//? To overcome callback hell, we use Promises
//? `async` internally uses Promises
//? Callback hell is when too many nested callbacks make code hard to read and maintain
//? Often seen in deeply indented, asynchronous JavaScript code

// let p = fetch("https://api.github.com/users"); // it returns a promise

// let p1 = p.then((res) => {     // to handle promise we use then & store in p1
//     return res.json();         // here json() also returns a promise
// });

// p1.then((api) => {             // to handle promise we use then
//     console.log(api);
// });

//------

// let p=fetch("https://api.github.com/users")

// let p1 = p.then((response) => {
//     return response.json()
// });

// console.log(p1);


// p1.then((api) => {
//     console.log(api);
// });
//--------------------------
// let p=fetch("https://api.github.com/users").then((resp)=>{return resp.json()}).then((api)=>{console.log(api);
// }).catch((err)=>{console.log(err);
// })
//-----------------------

// let p=fetch("https://api.github.com/users").then((resp)=>{return resp.json()}).then((api)=>{console.log(api);
// }).catch((err)=>{console.log(err);
// })

//------------------------
// p.catch((api) => {
//     console.log(msg);
// });

// console.log(p);
// console.log(p1);

//--------

//  let p = fetch("https://api.github.com/users");

// let p1 = p.then((res) => {
//     // Convert the response to JSON
//     return res.json();
// });

// p1.then((apiData) => {
//     console.log("Fetched API data:", apiData);
// }).catch((error) => {
//     console.log("Error in fetching or parsing:", error);
// });

// console.log(p);
// console.log(p1);


//---------
// let p = fetch("https://api.github.com/users");

// let p1 = p.then((res) => {
//     console.log(res.json());    // Promise {<pending>}
// });

// p2.then((api) => {
//     console.log(api);
// });

//-----

// let api = false;
// let data = [{}, {}, {}];
// let p = new Promise((res, rej) => {
//     if (true) {
//         res(data);
//     } else {
//         throw new Error("Something went wrong");
//     }
// });
// p.then((res) => {
//     console.log(res);
// });
// p.catch((err) => {
//     console.log(err);
// });


// Shortest way

// fetch('https://api.github.com/users')
//     .then(res => res.json())
//     .then(res => console.log(res));
//------------------------------------------------------

// let fetching = async () => {
//     let p1 = await fetch("https://api.github.com/users");
//     console.log(p1);
//     let p2 = await p1.json();     // console.log(await p1.json());
//     // console.log(p2);
// }
// fetching();
// console.log(fetching());
//---

// let f=async ()=>{
//     try{
//     let p1=await (await fetch("https://api.github.com/users")).json()
//     console.log(p1);
//     }catch(error){
//         console.log("error :"+error);
        
//     }
// }
// f()
// async --> used to handle Promises
// we use only once
// placed before function declaration
// to use `await`, we must use `async`
// await can be used multiple times

// async is compulsory, await is optional
// it's an advanced way to handle Promises
// these are keywords


//! 1. Pending
// The initial state of a Promise.
// The operation is still in progress — neither fulfilled nor rejected.


// let p = new Promise((resolve, reject) => {
//     // pending
// });


//! 2. Fulfilled
// The operation completed successfully.
// The resolve() function was called.


//! 3. Rejected
// The operation failed.
// The reject() function was called (or an error was thrown).

// let str = "hello";
// let p = new Promise((resolve, reject) => {
//     if (true) {
//         resolve();
//     } else {
//         // no action
//     }
// });


//! Timer
//? Timers are used to delay code execution or run code repeatedly using built-in functions


//! setTimeout()
/*
setTimeout(() => {
    console.log("hello");
}, 8000);   // executes after 8 sec
*/

// for (let i = 0; i <= 5; i++) {
//     setTimeout(() => {
//         console.log("hello");
//     },i*1000);
// }



 //? Executes only once
 //? Executes after the given time delay
 //? Takes two arguments: a callback function & time in milliseconds
 //? 1000 milliseconds = 1 second


//! setInterval()
// let cnt = 0;
// setInterval(() => {
//     console.log("bye");
//     console.log(cnt += 1);
// }, 3000);
//?
// let cnt = 0;

// // Start a repeated task every 1 second
// const intervalId = setInterval(() => {
//     console.log("bye" + " : " + (++cnt));

//     // Stop after 10 counts
//     if (cnt === 10) {
//         clearInterval(intervalId); // This stops the interval
//         console.log("stop");
//     }
// }, 1000);

 //? Calls function multiple times
 //? Executes continuously at given intervals


//! clearInterval()

// let count = 0;
// let x = setInterval(() => {
//     if (count < 10) {
//         console.log(count);
//         count += 1;
//     } else {
//         console.log("Race finished..!");
//         clearInterval(x);
//     }
// }, 2000);

//?

// clearInterval is used to stop a running setInterval loop.
// It takes the ID returned by setInterval and cancels the scheduled repeating code.

// let count = 0;

// // Start a repeated task every 1 second
// const intervalId = setInterval(() => {
//     console.log("Tick", ++count);

//     // Stop after 5 ticks
//     if (count === 5) {
//         clearInterval(intervalId); // This stops the interval
//         console.log("Interval stopped");
//     }
// }, 1000);



//?
// Another countdown example
// let cnt = 10;
// let y = setInterval(() => {
//     if (cnt > 0) {
//         console.log(cnt);
//         cnt -= 1;
//     } else {
//         console.log("Shut down");
//         clearInterval(y);
//     }
// }, 2000);


 //! Wait is used to let the line execute after the Promise is resolved


//! Way to connect to API

// 1
// let fetching = async () => {
//     let resObj = await fetch("https://api.github.com/users");
//     let data = await resObj.json();
//     console.log(data);
// }

// 2
// fetch("https://api.github.com/users")
//     .then(res => res.json())
//     .then(res => console.log(res));


// Example login flag
// let login = true;

// setTimeout(() => {

// }, 5000);


//! Q. show promise in pending statement

// let gift="Iphone";

// let p=new Promise((resolve,reject)=>{

//        if(gift="Iphone"){
//               console.log("Birthday is celebrated");         
//        }else{
//               console.log("brakup");            
//        }
// },5000);


// initially 5 sec promise is pending statement , we use setTimeout() to wait the execution                                                                                              

//!

// const cart=["shoes","paints","kurta"]
// createOrder(cart,function(orderId){
//     proceedToPayment(orderId);
// })

// const promise=createOrder(cart)  //it will return {data:null/undefined/details}
// promise.then(function(orderId){
//     proceedToPayment(orderId);
// })
// console.log(promise);

//?

// let github_api="https://github.com/aniketbulbule?tab=repositories"

// let g=fetch(github_api)
// console.log();

// Example: Get user info for "octocat"
// let res=fetch('https://github.com/aniketbulbule?tab=repositories')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));

// console.log(res)


//! 

const cart=["shoes","paints","kurta"]
let promise=createOrder(cart).then(function(orderId){
    console.log(orderId);
    return orderId;
}).then(function(){
    return proceedToPayment(orderId);
}).then((paymentInfo)=>{
    console.log(paymentInfo);
})
.catch((err)=>{
    console.log(err.message);
})

// console.log(promise);
// promise.then(function(orderId){
//     console.log(orderId);
//     proceedToPayment(orderId);
// })

// promise.catch((err)=>{
//     console.log(err.message);
// })

function createOrder(cart){
    const pr=new Promise(function(resolve,reject){
        //createOrder
        //validateCart
        //orderId
        if(!validateCart(cart)){
            const err=new Error("cart is not valid")
            reject(err);
        }
        //logic for creatOrder
        const orderId="12345"
        if(orderId){
            setTimeout(()=>{
                resolve(orderId)
            },5000)
        }
    })
    return pr;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("payment sucessful");
    });
}

function validateCart(cart){
    // return true;
    return true;
}


