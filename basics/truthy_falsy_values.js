//! TRUTHY VALUES & FALSY VALUES 

// ---------------- FALSY VALUES (only 8 in JavaScript) ----------------

console.log(Boolean(false));      // false  → obvious
console.log(Boolean(0));          // false  → number zero
console.log(Boolean(-0));         // false  → negative zero
console.log(Boolean(0n));         // false  → BigInt zero
console.log(Boolean(""));         // false  → empty string  
console.log(Boolean(null));       // false  → absence of value
console.log(Boolean(undefined));  // false  → variable not assigned
console.log(Boolean(NaN));        // false  → Not a Number

// ✅ These are the ONLY falsy values in JavaScript



// ---------------- TRUTHY VALUES ----------------
// Everything else is truthy (converts to true)

console.log(Boolean(true));          // true
console.log(Boolean(1));             // true  → any non-zero number
console.log(Boolean(-123));          // true
console.log(Boolean(3.14));          // true  → decimals
console.log(Boolean("hello"));       // true  → non-empty string
console.log(Boolean(" "));           // true  → string with space
console.log(Boolean([]));            // true  → empty array
console.log(Boolean([1,2,3]));       // true  → non-empty array
console.log(Boolean({}));            // true  → empty object
console.log(Boolean({name: "Aniket"})); // true  → object with data
console.log(Boolean(function(){}));  // true  → functions are truthy
console.log(Boolean(() => {}));      // true  → arrow function
console.log(Boolean(new Date()));    // true  → date object
console.log(Boolean(Infinity));      // true
console.log(Boolean(-Infinity));     // true

// ✅ Any value that is NOT in the falsy list is truthy.


// ---------------- DOUBLE NOT (!!) TRICK ----------------
// Use !! to quickly convert any value to true/false

console.log(!!"hello");   // true
console.log(!!"");        // false
console.log(!!123);       // true
console.log(!!0);         // false
console.log(!!{});        // true
console.log(!!null);      // false


    
//! Why We Define Truthy/Falsy Values in JavaScript
// In JavaScript, sometimes you don’t explicitly compare values to true or false 
// — instead, the language automatically converts values to a Boolean when they are used in a Boolean context.

// Boolean contexts include:

// if conditions

// while loops

// Logical operators (&&, ||, !)

// Ternary operator (condition ? a : b)