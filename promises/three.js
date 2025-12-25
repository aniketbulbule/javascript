//! 🧠 What is a Prototype?
//? In JavaScript, every object has a hidden property called [[Prototype]] (accessible via __proto__), which refers to another object. This forms a prototype chain.
//! 🔁 Why Use Prototypes?
//? When you access a property or method on an object:
//? JavaScript first looks inside the object.
//? If it doesn't find it, it looks in its prototype.
//? It keeps going up the chain until it finds the value or reaches null.

//?javscript has proto types begaviour like this , new  , class keyword all this behaviure of prototype

//when we declare array we browser we well get  arr with prototype when we open prpto typw we get properties inside having properties 
//
//? Array  -->objcet -->null (does not have any perent so object is null)/object is null
//? similar like string-->objcet -->null
//? function -->

//!objcet of js

// function multile(num){
//     return num*5;
// } 
// multile.power=2  //function is also objcct
// console.log(multile(5)); //25
// console.log(multile.power); //2
// console.log(multile.prototype);  //{}

//!------------
//! we can injcet the methods in  prototype ,
//! & we can acess using this keyword


function creteUser(username,score){
    this.username=username
    this.score=score
}
console.log(creteUser.prototype); //{}

creteUser.prototype.increment=function(){
    this.score++
}

creteUser.prototype.printMe=function(){
    console.log(`score id ${this.score}`);
}

let chai=new creteUser("chai",24)  //!new keyword(main)
let tea=new creteUser("tea",25)

chai.printMe()


//!-----------

//! Here's what happens behind the scenes when the new keyword is used:
// A new object is created: The new keyword initiates the creation of a new JavaScript object.
// A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.
// The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.
// The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.


