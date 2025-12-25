// const promise = new Promise((resolve, reject) => {
//   // Async task: simulating with setTimeout //DB connection
//   setTimeout(function () {
//     console.log("Async task is complete");
//     resolve("this resolve side");
//   }, 1000);
// });

// promise.then((msg) => {
//   console.log("Promise consumed");
//   // alert(msg)
// });




//!-------

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async task is complete");
//         resolve("this resolve side");
//     },1000)
// }).then((msg)=>console.log(msg))

//!------



// new Promise((resolve,reject)=>{
//   console.log("hello 1");
  
//   resolve()
// }).then(()=>{console.log("hello 2");
//  })



//!------
//!data sharing on network

// let ans=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve({"id":101,"name":"Aniket"})
//   },3000)
// }).then((user)=>{
//   console.log(user);
// })

//!-------

// let ans=new Promise((resolve,reject)=>{
//   resolve({"id":101,"name":"Aniket"})
// }).then((user)=>{
//   console.log(user);
// })

//!---------------
// file accesing related /give the response

// new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     let error=true
//     if(!error){
//       resolve({"id":101,"name":"Aniket"})
//     }else{
//       reject('Error , somthing went wrong')
//     }
//   },2000)
// }).then((user)=>console.log(user)).catch((msg)=>console.log(msg))

//!---------
// let ans=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     let error=true
//     if(!error){
//       resolve({"id":101,"name":"Aniket"})
//     }else{
//       reject('Error , somthing went wrong')
//     }
//   },2000)
// })
// ans.then((user)=>console.log(user)).catch((msg)=>console.log(msg))


//!-------------
// callback hell

// let ans=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     // let error=true
//     let error=false
//     if(!error){
//       resolve({"id":101,"name":"Aniket"})
//     }else{
//       reject('Error , somthing went wrong')
//     }
//   },2000)
// })

// ans.then((user)=>{
//   console.log(user);
//   return user.name    //in this situation we can not get data
//   //we chaining this values go in side bottom then
// }).then((name)=>{console.log(name);
// }).catch((error)=>console.log(error)).finally(()=>console.log("i am always execute"))

// let rejected=ans.catch((msg)=>{
//   // console.log(msg);
//   return msg;
// })

// console.log(rejected);


//!-----------

// let promise=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     // let error=true
//     let error=false
//     if(!error){
//       resolve({"id":101,"name":"Aniket"})
//     }else{
//       reject('Error , somthing went wrong')
//     }
//   },2000)
// });

// async function consumePromise() {
//   try{
//     let resp=await promise    //promise is objcet
//     console.log(resp);
//   }catch(error){
//     console.log(error);
//   }
// }
// consumePromise()  //{ id: 101, name: 'Aniket' }

//!async 
//? it will also wait for some time to execute first task
//! await
//? so need to write then or catch to handle the promise we use await 

//? async , await not directly hndle the promises for the situation we use try or catch

//!---------------------

//json data fetching

// let promise=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     // let error=true
//     let error=false
//     if(!error){
//       resolve({"id":101,"name":"Aniket"})
//     }else{
//       reject('Error , somthing went wrong')
//     }
//   },2000)
// });

// async function getAllUsers() {
//   try{
//     let resp=await fetch("https://api.github.com/users")  ///data is coming instring format
//     console.log(resp);
    
//     // let data=resp.json()                            //convert into json 
//     // console.log(data);
//   }catch(error){
//     console.log(error);
//   }  
// }
// getAllUsers()  //{ id: 101, name: 'Aniket' }


//! above code using then catch (up)

// let promise=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     // let error=true
//     let error=false
//     if(!error){
//       resolve({"id":101,"name":"Aniket"})
//     }else{
//       reject('Error , somthing went wrong')
//     }
//   },2000)
// });

// fetch("https://api.github.com/users")
// .then((response)=>{
//   return response.json()   //json() return the promises to handle promises we need use then we called
//   //! thennable
// })
// .then((data)=>{
//   console.log(data);
  
// })
// .catch((error)=>{
//   console.log(error);

// })

//------------------------
//! display on browser

    // let b = document.querySelector('button');
    // let d = document.querySelector('div');

    // b.addEventListener('click', function() {
    //   fetch("https://api.github.com/users")
    //     .then((response) => response.json())
    //     .then((data) => {
    //       d.innerHTML = ""; // clear previous content
    //       for (let i = 0; i < data.length; i++) {
    //         // d.innerHTML += `<p>${data[i].login}</p>`; // show login names
    //         d.innerHTML+=`<pre>${JSON.stringify(data[i])}</pre>` 
    //         // <pre> keeps the formatting (like line breaks and indentation).
    //       }
    //     })
    //     .catch((error) => {
    //       console.log("Error:", error);
    //     });
    // });

//! differnt ways

// let b = document.querySelector('button');
// let d = document.querySelector('div');

// b.addEventListener('click', function () {
//   fetch("https://api.github.com/users")
//     .then((response) => {
//       return response.json(); // returns promise
//     })
//     .then((data) => {
//       d.innerHTML = ""; // clear previous content
//       data.forEach((user) => {
//         d.innerHTML += `<p>${user.login}</p>`; // display each user's login
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });


//---------------------

// let p=new Promise((resolve,reject)=>{
//   if(false){
//     resolve();
//   }else{
//     reject()
//   }
// }).then(()=>{console.log("done")}).catch(()=>{console.log(error);
// })


//--------------

// let resp=fetch("https://api.github.com/users").then((resp=>resp.json())).then((data=>console.log(data)
// )).catch(()=>console.log(error))
// console.log(resp);


// let resp = fetch("https://api.github.com/users");
// console.log(resp);   // Promise {<pending>}

// resp.then((resp) => {
//     return resp.json();   // return the parsed JSON Promise
// }).then((data) => {
//     console.log(data);    // now 'data' is the JSON result
// }).catch(error => {
//     console.error("Error:", error);
// });

// ----------------------

// async function demo() {
//     let resp = await fetch("https://api.github.com/users");
//     console.log(resp);

//     let data = await resp.json();
//     console.log(data);

//     let output = "";

//     data.forEach(element => {
//         console.log(element);
//         output += `<li>${element.id} - ${element.login}</li>`;
//     });

//     document.body.innerHTML = `<ul>${output}</ul>`;
// }
// demo();
