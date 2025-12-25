
//!------------Functions-----------------------------

//! Function Declaration / Named Function / Regular Function
//? A regular function is defined using the function keyword and has a name.
//? These functions are invoked by their name.

//     function display() {
//         console.log("hello js");
//     }
//     display();

//     function show() {
//         console.log("welcome");
//     }
//     show();
//     console.log(show());
//     let a = show();
//     console.log(a);

//     function displayName(name) {
//         console.log("hey hii");
//         console.log(`What is your name: ${name}`);
//     }

//     let num = 20;
//     if (num % 2 == 0) {
//         displayName();
//         console.log(displayName("Aniket"));
//     }

//     let fun = function () {
//         console.log("hello");
//     };
//     fun();
//     console.log(fun);
//     console.log(fun());



// function msg(){
//     console.log("hello,this is aniket");
// }
// let a=msg()
// console.log(a);


// function sum(a,b=200){
//     console.log(a+b);
// }
// sum(10);

// function sum(...num){
//     let total=0;
//     for(let i=0; i<num.length; i++){
//         total+=num[i];
//     } 
//     console.log(total);
// }
// sum(10,20,30,40,50);


// function sum(...num){
//     let total=num.reduce((acc,val)=>acc+val,0)
//     console.log(total);
// }
// sum(10,20,30,40,50);


// //! Arrow Function (ES6)
// //? Arrow functions are a more concise way to write functions.
// //? They use the => syntax and do not have their own this context.

//     let displayArrow = () => {
//         console.log("hello js");
//     };
//     displayArrow();

//     let displayShort = () => console.log("hello");
//     displayShort();
//     console.log(displayShort());

//     let isPrime = (num) => {
//         if (num <= 1) {
//             console.log("Not prime");
//             return;
//         }
//         for (let i = 2; i < num; i++) {
//             if (num % i === 0) {
//                 console.log("Not prime");
//                 return;
//             }
//         }
//         console.log("Prime");
//     };
//     isPrime(2);
//     isPrime(4);
//     isPrime(17);

//     let isPrime1 = (num) => {
//         let flag = true;
//         if (num <= 1) {
//             flag = false;
//         } else {
//             for (let i = 2; i <= num; i++) {
//                 if (num % i == 0) {
//                     flag = false;
//                     break;
//                 }
//             }
//             if (flag) {
//                 console.log("Prime");
//             } else {
//                 console.log("Not Prime");
//             }
//         }
//     };
//     isPrime1(2);

//     let t = test = () => {
//         console.log("hello");
//         return "Welcome";
//     };
//     t();
//     console.log(t());
//     let ans = t();
//     console.log(ans);

//     let print = () => console.log("hello, Aniket");
//     print();

//     let aArrow = () => {
//         console.log("abcd");
//     };
//     aArrow();

//     let b = (name) => {
//         console.log("heyyy, " + name);
//         let msg = " inner arrow function";
//         return c(msg);
//     };
//     let c = (msg) => {
//         console.log(msg);
//         return "good night";
//     };
//     console.log(b("Aniket"));


// let flag=true;
// let num=7;
// if(num<=1){
//     flag=false;
// }else{
//     for(let i=2; i<num; i++){
//         if(num%i==0){
//             flag=false;
//             break;
//         }
//     }
// }
// if(flag){
//     console.log("is prime number");  
// }else{
//     console.log("is not prime number");
// }


// fibonachi series
// fibonachi series
// let n1=0;
// let n2=1;
// console.log(n1+","+n2); // 0  1
// for(let i=1; i<=5; i++){

    // 0 1 1 2 3 5  
    // let temp=n1+n2;  //1  
    // console.log(n1);  //0 1 1
    // n1=n2;    //1
    // n2=temp;  //1
// }

//

// //! Anonymous Function
// //? An anonymous function has no name and is used immediately.
// //? They are often assigned to variables or called directly.

//     let anon = function (name) {
//         console.log(`hello ${name}`);
//     };
//     anon("aniket");

//     let aVal = 123;
//     console.log(function () {
//         console.log(aVal);
//     }());

//     (function () {
//         console.log("hello");
//     })();

//     let cVal = 123;
//     console.log(function () { });

//     let aFunc = function () {
//         console.log("gjhjh");
//     };
//     aFunc();

//     (function () {
//         console.log("eyg");
//     })();

// console.log(function(){
//     console.log("hello , this anonymes function..");
// });


// //! Higher-Order Function
// //? A function that takes another function as an argument or returns a function.

//     function applyOperation(a, b, operation) {
//         return operation(a, b);
//     }
//     let result = applyOperation(5, 3, (x, y) => x + y);
//     console.log(result);

//     let sum = (a, b) => a + b;
//     console.log(sum(100, 200));

//     let msgFn = (name) => console.log(`hello ${name}`);
//     msgFn("Aniket");

//     let parent = (a, b, call) => {
//         console.log(`a - ${a}, b - ${b}`);
//         return call(a, b);
//     };
//     let returnFun = (a, b) => {
//         let c = a + b;
//         console.log(c);
//         return "welcome";
//     };
//     console.log(parent(10, 30, returnFun));


// let greet=(msg,callback)=>{
//     let name="Aniket"
//     console.log(msg);
//     console.log(callback(name))
// }
// let callback=(name)=>{
//     return name;
// }
// greet("good moerning",callback)


// let greet=(msg,callback)=>{
//   let name="Aniket"
//   console.log(msg);
//   return callback(name)
//   // console.log(callback(name));
  
// }

// let callback=(name)=>{
//   console.log("name:"+name);
//   let msg="hello,byy"
//   return msg;
// }

// greet("oooole",callback)
// console.log(greet("oooole",callback));


// //! Callback Function
// //? A callback function is passed as an argument and executed later.
//? A callback function is a function that is passed as an argument to another function and is executed later (or “called back”) inside that functio
//     let funCallback = (a, call) => {
//         console.log("fun");
//         call(a);
//     };
//     let call = (a) => {
//         console.log(a);
//         console.log(a + a + a);
//     };
//     console.log(funCallback(10, call));

//     let demo = function print(call) {
//         let a = "Aniket";
//         console.log("🙋");
//         call(a);
//     };
//     function callback(a) {
//         console.log(`Name: ${a}`);
//         console.log("byy");
//     }
//     demo(callback);

// let show=(name,callback)=>{
//     console.log("hello everyone..");
//     callback(name);
// }
// let callback=(name)=>{
//     let str=`my name is ${name} , nice to meet you everyone.`;
//     console.log(str);   
// }
// show("Aniket",callback)

//? A higher-order function is a function that either takes another function as an argument or returns one.
//? A callback function is the function that is passed into another function to be executed later.
//? In simple words: the higher-order function is the caller, and the callback function is the worker.

// //! Function Chaining
// //? Calling one function from another function in sequence.

//     let funChain = () => {
//         return "hello";
//     };
//     let callFun = funChain();
//     console.log(callFun);

//     let func1 = (func) => {
//         console.log(func);
//         return fun(func3);
//     };
//     let func2 = () => {
//         console.log("fun2");
//         return fun("hello");
//     };
//     let fun3 = (args) => {
//         console.log("fun3", args);
//         return args;
//     };
//     let x = func1(func2);
//     console.log(x);


// let letsDo = (education, about, hobbies) => {
//     console.log("start game..");
//     about(education, hobbies); // correct order
// };

// let about = (education, hobbies) => {
//     let name = 'aniket';
//     let city = 'daithna khurd, district jalna';
//     console.log(`My name is ${name}, I am from ${city}.`);
//     education(hobbies); // pass hobbies
// };

// let education = (hobbies) => {
//     let university = 'Shivaji University, Kolhapur';
//     console.log(`I completed my graduation from ${university}.`);
//     hobbies(); // call hobbies
// };

// let hobbies = () => {
//     let c = `cricket`;
//     console.log(`I like to play ${c}.`);
// };
// // Correct parameter order: education, about, hobbies
// letsDo(education, about, hobbies);


//! Hoisting
//? Hoisting means moving declarations to the top of their scope before code execution.
//hoisting: accesing the variables and functions before ite decleration
//var is voister
//normal function decleaed hoisted
//Hoisting in JavaScript means that variable and function declarations are moved to the top of their scope
//before the code runs. This allows you to use them before they are actually declared in your code
// ✅ **Interview Definition (your words)**:
// “Hoisting means during the memory creation phase, JavaScript takes **variable and function declarations to the top of their scope**.
//  Variables declared with `var` are hoisted with `undefined`, while `let` and `const` are hoisted but stay in the **Temporal Dead Zone (TDZ)** until initialization. 
// Functions declared with `function` are fully hoisted.”


    // function outer() {
    //     console.log("hii 1");
    //     function inner() {
    //         console.log("hii 2");
    //     }
    //     return inner;
    // }
    // let a2 = outer();
    // console.log(a2);
    // outer()();

    // display();
    // function display() {
    //     console.log("welcome");
    // }

    // let testFn = function () {
    //     console.log("hello js");
    // };
    // testFn();
    // console.log(testFn());


    // console.log(a);
    // let a;
    // const a;
    // var a;

    // show()
    // function show(){
    //     console.log("its work..");
    // }
    
    // let a=function(){
    //     console.log("its work..");
    // }
    // a()


    // getName()
    // console.log(getName);
    // //console.log(x);
    // // let x=7;
    // function getName(){
    //     console.log('hello');
    // }
    



//! Temporal Dead Zone (TDZ)
//? Time between variable declaration and initialization.
//? variable declared using var will be stored in window object
//? variable declared using let and const will be stored in temporal dead zone
//? When you try to access the variable from TDZ you will get error
//? When you try to access the variable which is declared using var before initialization you will get undefined

    // console.log(a); // ReferenceError if let/const, undefined if var
    // var a = 10;
    // console.log(a);

    // let b = 20;
    // console.log(b);

    // const c = 30;
    // console.log(c);

    // const a;
    // console.log(a);
    

//! Lexical Scope
//? Child functions can access variables from outer scopes.
//? It is ability of child to access variable from outside if its not present in local scope
//? ACCESING THE VARIABLES IN FUNCTION WHICK DECLARED IN OUTSIDE THE SCOPE WE CALLED IT HAS LEXICAL SCOPE
//?

    // let lex = 10;
    // function testScope() {
    //     lex++;
    //     let c = 10;
    //     console.log(lex);
    // }
    // testScope();

    // let a=()=>{
    //     console.log("hello");  //1
    //     let c=100
    //     let b=()=>{
    //         let d=200
    //         console.log(a);    //3
    //         console.log(c);    //4
    //     }
    //     b();  //2
    //     console.log("working.."); //5
    // }
    // a();  //start here

//! Closure
//? Closure is a function that retains access to its scope even when executed outside.
//? its memory allocation which is available in heap area stored variables which is present in child scope
//? it is special memory 
//? if we try to access any variables in child scope from p arent scope , closure will be craete even if parent scope is destroyed

    // let parentClosure = () => {
    //     let a = 10;
    //     return () => {
    //         console.log(a);
    //     };
    // };
    // let returnedFun = parentClosure();
    // returnedFun();


    // let fun1=()=>{
    //     let a=200;
    //     let fun2=()=>{
    //         console.log(a);
    //     }
    //     fun2();
    // }
    // fun1();

    // let fun1=()=>{
    //     let a=200;
    //     let fun2=()=>{
    //         console.log(a);
    //     }
    //     return fun2;
    // }
    // let ans=fun1();
    // console.log(ans);

    // let fun1=()=>{
    //     let a=200;
    //     return fun2=()=>{
    //         console.log(a);
    //     }
    // }
    // let ans=fun1();
    // console.log(ans);

    // let fun1=()=>{
    //     let a=200;
    //     let fun2=()=>{
    //         console.log(a);
    //     }
    //     a=300;
    //     return fun2;
    // }
    // let ans=fun1();
    // console.log(ans);
    
    
    

//! Miscellaneous Examples

    // let d = new Date();
    // console.log(d.getDate());
    // console.log(d.getSeconds());
    // console.log(Math.cbrt(125));
    // console.log(Math.max(9));

    // let str = "aniket";
    // let arr = str.split("");
    // console.log(arr);

    // let arr1 = [1, 2, 3, 4, 5, 6];
    // console.log(arr1.splice(0, 2));


    //! JS INTERVIEW

  //? clouser

  // let fun1=function(){
  //   let a=200;
  //   let fun2=function(){
  //     console.log(a);
  //   }
  //   return fun2
  // }
  // fun1()()

//   let fun3=()=>{
//     let c=300;
//   let fun1=function(){
//     let a=200;
//     console.log(c);
//     let fun2=function(){
//       console.log(a);
//     }
//     return fun2
//   } 
//   return fun1
// }
//   fun3()()()

// let fun1=(greet)=>{
//   function m1(greet){
//     console.log(a);
//     console.log(greet,name);
    
//   }
//   let name="aniket"
//   let a=100;
//   m1(greet)
// }
// fun1("hello,")

//? data hididng / encapsulation

// let counter=()=>{
//   let count=0;
//   let hide=()=>{
//     count++;
//     console.log(count);
//   }
//   hide()
// }
// //console.log(count); //! we can access the outside the block..
// counter()


//!

// let counter=()=>{
//   let count=0;
//   let hide=()=>{
//     count++;
//     console.log(count);
//   }
//   return hide
// }
// let c1=counter()
// c1()   //1
// c1()   //2

// let c2=counter()
// c2()   //1
// c2()   //2
// c2()   //3


//!----


// function Counter(){
//   let cnt=0;
//   this.increment=function(){
//     cnt++;
//     console.log(cnt);
//   }
//   this.decrement=function(){
//     cnt--;
//     console.log(cnt);
//   }
// }
// var c=new Counter();
// c.increment()
// c.decrement()
// c.decrement()
// c.decrement()
//!theory

//!--->
//! function statement //function decleration
// function a(){
//     console.log("hello");
// }
//? function statement is also known as --> function decleration
//? the way create the function is called statement function
//? using the function keyword create the function and call with name 


//! function expression  //named fun /regular fun
// let b=function(){
//     console.log("hello");
// }
// b()
//? assign function in variables we valled is as expression function


//!anonymous function
//? used as values 
//? does not have name
//? usually use as when we want pass as argument or declared as variabke

// console.log(function(){
//     console.log("hello");
// });



//! function decleration
// function c(){
//     console.log("hello");
// }
// c()


//! first class function
//? the function traeted as value , we can pass as argument inm another function , and return another function , 
//? this ability is known as first class function

// let fun1=(callBack)=>{
//     console.log("this is fun1");
//     return callBack()
// }
// let fun2=()=>{
//     console.log("this is fun2");
// }
// let result=fun1(fun2)
// console.log(result);





//! diff between parameter & arguments

// function show(greet,name){ //!gets this values  in calling function label we called parameter
//     console.log('hello');
//     console.log(greet,name);
// }
// show()
// show("Gm,","Aniket") //!<the values which are passed in caller function is argument
// Arguments are the actual values you pass to the function when calling it
// Parameters are the placeholders (or variables) defined inside the function definition.
// They receive the values passed when the function is called.




//! callback function

// setTimeout(function(){
//     console.log("timer");
// },5000)

// function x(y){
//     console.log("x");
//     y()
// }

// x(function y(){
//     console.log("y");
// });

//callback with event listerns

// let button = document.createElement('button');          
// button.innerText = "click me";                         
// button.setAttribute('class', 'btn');                  
// document.body.appendChild(button); 
// document.getElementsByTagName('button')[0].addEventListener("click", function () {
//   alert("Button clicked!");
// });


//! higher order function
//?A function that takes another function as an argument or returns a function.


// function  x(){
//     console.log("hello..");
// }

// function y(x){
//     x()
// }

// y(x)

//!calculateArea

// const radius=[3,1,2,4]
// const calculateArea=function(radius){
//     const output=[]
//     for(let i=0; i<radius.length; i++){
//         output.push(Math.PI * radius[i] * radius[i])
//     }
//     return output;
// }
// console.log(calculateArea(radius));

// //! calculateCurcumrefernce
// let calculateCurcumrefernce=function(radius){
//     const output=[]
//     for(let i=0; i<radius.length; i++){
//         output.push(2*Math.PI * radius[i])
//     }
//     return output;
// }
// console.log(calculateCurcumrefernce(radius));

// //!calculateDiameter
// let calculateDiameter=function(radius){
//     const output=[]
//     for(let i=0; i<radius.length; i++){
//         output.push(2*radius[i])
//     }
//     return output;
// }
// console.log(calculateDiameter(radius));


//! short way reuse the code
//? like this we can reuse the calculate function <--this function progrmmaing 

// let area=function(radius){
//     return Math.PI*radius*radius;
// }

// let cicumfernce=function(radius){
//     return 2*Math.PI*radius;
// }

// let diameter=function(radius){
//     return 2* radius;
// }

// let calculate=function(radius,logic){
//     const output=[]
//     for(let i=0; i<radius.length; i++){
//         output.push(logic(radius[i]))
//     }
//     return output;
// }

// radius.map(area)

// console.log(calculate(radius,area));
// console.log(calculate(radius,cicumfernce));
// console.log(calculate(radius,diameter));

//?-------
//! function with array methods
//! map()
//? it is higher order function , which is use to iterate element of an array
//? it will not modify not original array , it will return the new updated array
//? we can also perform filter operation
//? Commonly used for transforming data.

// const arr=[5,1,3,2,6]
// let result=arr.map((val)=>{
//     // console.log(val);
//     // return callback(); 
// })
// console.log(result);

// let arr=[5,1,3,2,6]
// function double(x){
//     return x*2;
// }
// function triple(x){
//     return x*3;
// }

// function binary(x) {
//     let y = "";
//     while (x > 0) {
//         let z = x % 2;   //
//         y = z + y; // Prepend the bit
//         x = Math.floor(x / 2);
//     }
//     return y || "0"; // Handle the case for 0

    // or

    // return x.toString(2)
// }

// let result=arr.map(binary)
// console.log(result);

//! filter 
//? it is higher order function,
//? it is use to filter the element inside array
//? like greater than element , divude by ele, like that

// let arr=[5,1,3,2,6];
// let result=arr.filter((val)=>{
//     // return val%2!=0;
//     // return val>3
//     return
// })
// console.log(result);

//! reduce
//? higher order function
//? it will return single  value (e accumulated value)
//? It takes a callback function and an initial value. 
//? It's especially useful for tasks like aggregation, counting, and data transformation.
//? (we use performing like summition, multiplocayoon) 
//? reduce() does not modify the original array.


// let arr=[10,20,30,40,50]
// let result=arr.reduce((ele)=>{
//     // console.log(acc,ele);
//     // acc=acc+ele
//     // return acc;
// })
// console.log(result);

//? maximum  ele
// let arr = [10, 20, 30, 40, 50];

// let result = arr.reduce((min, val) => {
//   if (min > val) {
//     min = val;
//   }
//   return min;  
// }, arr[0]);    

// console.log(result);  


const person = [
    {
  firstName: "Aniket",
  lastName: "Sharma",
  age: 25
},
{
  firstName: "vishal",
  lastName: "Sharma",
  age: 23
},
{
  firstName: "raj",
  lastName: "Sharma",
  age: 22
}
];

//?
// console.log(person);
// console.log(person[1]);

// let result=person.map(x=>x.firstName + x.lastName)
// console.log(result);
//?
// let result=person.reduce((acc,curr)=>{
//     if(acc[curr.age]){
//         acc[curr.age]= ++acc[curr.age]
//     }else{
//         acc[curr.age]=1;
//     } 
//     return acc;
// },{})

// console.log(result);
//?
// let result=person.filter((x)=> x.age>23).map((y)=>y.firstName)
// console.log(result);


// let result=person.filter((x)=> x.age>23).map((y)=>y.firstName)
// console.log(result);

//?

// let res=person.reduce((acc,x)=>{
//     if(x.age>23){
//         acc.push(x.firstName)
//     }
//     return acc
// },[])
// console.log(res);

















