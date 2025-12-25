//! Type of operator
//? it is opertor
//? it is used to determine which type of value or variable it is 

console.log(typeof 10);              // "number"       → Numeric literal
console.log(typeof 10.5);            // "number"       → Decimal /(still number)
console.log(typeof NaN);             // "number"       → Not a Number is still a number!
console.log(typeof Infinity);        // "number"       → Infinity is also a number

console.log(typeof "hello");         // "string"       → Text value

console.log(typeof true);            // "boolean"      → Boolean true/false

console.log(typeof undefined);       // "undefined"    → Variable declared but not assigned

console.log(typeof null);            // "object"       → **Bug in JavaScript** (null is a primitive, but returns "object")

console.log(typeof {});              // "object"       → Plain object
console.log(typeof []);              // "object"       → Arrays are also objects
console.log(typeof new Date());      // "object"       → Date objects

console.log(typeof function() {});   // "function"     → Functions are their own type
console.log(typeof (() => {}));      // "function"     → Arrow function

console.log(typeof typeof (()=>{})); //string

console.log(typeof Symbol("id"));    // "symbol"       → ES6 Symbol type (unique identifier)

console.log(typeof BigInt(123));     // "bigint"       → Large integers (ES2020+)

console.log(Number(100));


//! ternary operator

let ans=' ' ? "hii" : "byy";
console.log(ans);




