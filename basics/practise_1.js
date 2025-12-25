
// if (true) {
//     console.log("hello js");
// }

  //-----------

  // let num = 20;
  // if (num % 2 == 0) {
  //   console.log(num + ": is sum");
  // } else {
  //   console.log(num + ": is not sum");
  // }

  //---------
  //leap year

  // let year = 2022;
  // let leap = false;

  // if (year % 4 === 0) {
  //   if (year % 100 === 0) {
  //     if (year % 400 === 0) {
  //       leap = true;
  //     } else {
  //       leap = false;
  //     }
  //   } else {
  //     leap = true;
  //   }
  // } else {
  //   leap = false;
  // }

  // if (leap) {
  //   console.log(year + ": is a leap year");
  // } else {
  //   console.log(year + ": is not a leap year");
  // }

  //---------
  //prime number
  //   let n=2;
  //   let flag=true;
  //   if(n<=1){
  //     flag=false;
  //   }else{
  //     for(let i=2; i<=Math.sqrt(n); i++){
  //         if(n%i==0){
  //             flag=false;
  //             break;
  //         }
  //     }
  //   }
  //   if(flag){
  //     console.log(n+" : is prime");

  //   }else{
  //     console.log(n+" : is not prime");
  //   }

  //or

  //   let n = 7; // You can change this number to test with others
  //   let flag = true;

  //   if (n <= 1) {
  //     flag = false; // Numbers less than or equal to 1 are not prime
  //   } else {
  //     for (let i = 2; i < n; i++) {
  //       if (n % i === 0) {
  //         flag = false; // If any number divides n, it's not prime
  //         break;
  //       }
  //     }
  //   }

  //   if (flag) {
  //     console.log(n + " : is prime");
  //   } else {
  //     console.log(n + " : is not prime");
  //   }

  //or

 

  // for (let n = 0; n <= 100; n++) {
  //   let flag = true;

  //   // Numbers less than 2 are not prime
  //   if (n <= 1) {
  //     flag = false;
  //   } else {
  //     // Loop from 2 to n - 1
  //     for (let i = 2; i < n; i++) {
  //       if (n % i === 0) {
  //         flag = false; // If divisible by any number, it's not prime
  //         break; // No need to check further
  //       }
  //     }
  //   }

    // Print the result based on the flag
  //   if (flag) {
  //     console.log(n + " is a prime number");
  //   } else {
  //     console.log(n + " is not a prime number");
  //   }
  // }

  
  //!---

  // let x=10;
  // if(function solve(){}){
  //   x=x-typeof(solve)  //Nan
  // }
  // console.log(x);


  //  let x=10;
  // if(function solve(){}){
  //   x=x+typeof(solve)   //10undefined
  // }
  // console.log(x);

  // let s="a"
  // let a=typeof(s);
  // console.log(a);
  // console.log(typeof 10);


  // let a=10;
  // let b=a;
  // console.log(b);
  // b=200;
  // console.log(a);


  // let obj1={
  //   name:'aniket'
  // }
  // let obj2=obj1;
  // console.log(obj1);
  // console.log(obj2);
  // obj1.name="vishal";
  // console.log(obj1);
  // console.log(obj2);

//! Using JSON.parse(JSON.stringify(...)) is a quick and easy way to do a deep copy, but it has limitations
// "JSON.parse(JSON.stringify(obj))" creates a deep copy of an object by serializing it to a JSON string and then parsing it back to a new object. This breaks reference links, so changes in the copy don’t affect the original.
  //  let obj1={
  //   name:'aniket'
  // }
  // let obj2=JSON.parse(obj2)


  // let x=[100,200,300]
  // let y=[100,200,300]
  // let z=y;
  // console.log(x==y);  //false
  // console.log(z==y);  //true
  // console.log(z==x);  //false

  // console.log(typeof null); //!object
  // console.log(typeof undefined); //! undefinde
  
  

  // let obj={
  //   pqr:100,
  //   abc:200,
  //   xyz:{
  //     pqr:300,
  //     abc:400,
  //   }
  // }
  // const {pqr,abc,xyz:{pqr:p}}=obj
  // console.log(pqr,abc,p);  //100,200,300
  
//   let greet='gm'
// console.log(`${greet},Aniket`);

  // let arr=[1,2,3,4,5]
  // arr.map((e)=>console.log(e))
  // let result=arr.map((e)=>{
  //   return e>3;
  // })
  // console.log(result); // [false, false, false, true, true]

  // let result=arr.filter((e)=>{
  //   return e>3;
  // })
  // console.log(result);  //[4,5]

//   function solution(str) {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     let ch = str.charAt(i);
//     let code = ch.charCodeAt(0);  // get ASCII code
//     if (ch >= 65 && ch <= 90) {
//       newStr += ch;               // accumulate uppercase letters
//     } 
//   }
//   return newStr;                  // return after loop finishes
// }

// let str = "I am Aniket";
// let result = solution(str);
// console.log(result);  // Output: "IA"


//! Note:
//? 'I' >= 65 is false because JavaScript compares strings and numbers differently
//? ch.charCodeAt(0) returns the ASCII value (number) of the first character in ch.

  

// function solution(str) {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     let ch = str.charAt(i);
//     let code = ch.charCodeAt(0);
//     if (code >= 65 && code <= 90) {
//       newStr += ch;  
//     }
//   }
//   return newStr;  // Return after processing all characters
// }

// let str = "I am Aniket";
// let result = solution(str);
// console.log(result);  // Output: "IA"


//! setTimeOut()

// console.log("start");
// setTimeout(()=>{
//   console.log("hii,🙋");
// },0)
// console.log("end");



console.log("start");

function cb(){
  console.log("hii,🙋");
}
setTimeout(cb,2000)
console.log("end");




  
  
  