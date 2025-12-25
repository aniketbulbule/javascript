//! Math_Pi

// Object.getOwnPropertyDescriptor()
// ? it gives hidden things like in databse response 

// console.log(Math.PI);  //3.141592653589793
// Math.PI=5;
// console.log(Math.PI);//3.141592653589793
// //? cont value we can not override

// const descripter=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descripter);
//// {
////   value: 3.141592653589793,
////   writable: false,
////   enumerable: false,
////   configurable: false
//// }

//! we can not change this value
//! but we can do-->

const chai = {
    name: "dinger chai",
    price: 250,
    isAvailable: true,

    orderChai:function(){
        console.log("chai nhi bni");
        
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai)); //undefined
console.log(Object.getOwnPropertyDescriptor(chai, "name")); //we get

// Object.defineProperty(chai, "name", {
//     writable: false,
//     enumerable: false,
// })

// console.log(Object.getOwnPropertyDescriptor(chai,"name")) 

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
    console.log(`${key} : ${value}`);
    }
}
