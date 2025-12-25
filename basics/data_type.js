// --------------------------------------------
//          DATA TYPES IN JAVASCRIPT
// --------------------------------------------
//
// Two categories of data types:
//
// 1) Primitive Data Types
//    - number
//    - null
//    - boolean
//    - string
//    - bigint
//    - undefined
//    - symbol
//    - NaN
//
// 2) Non-Primitive Data Types
//    - object
//    - array
//    - function
//    - date
// --------------------------------------------


// -------------------------
// 1) STRING
// -------------------------
 //  Used to store text.
 //  Can be written in single (''), double (""), or backticks (``).

let s1 = "js";
let s2 = 'hello';
let s3 = `welcome`;
console.log("String examples:", s1, s2, s3);

let str = "aniket";
console.log("Another string:", str);
console.log("Type:", typeof str); // string


// -------------------------
// 2) NUMBER
// -------------------------
// Used for integers and decimals.
// JavaScript does not differentiate between int and float. 

let a1 = 10;      // integer
let a2 = 45.6;    // decimal
console.log("Numbers:", a1, a2);
console.log("Type:", typeof a1); // number


// -------------------------
// 3) BOOLEAN
// -------------------------
// It gives only true or false values (used in conditions and logic).

let b1 = true;
let b2 = false;
console.log("Booleans:", b1, b2);
console.log("Type:", typeof b1); // boolean

let num = 143;
let flag = false;

if (num % 2 == 0) {
    flag = true;
} else {
    flag = false;
}

if (flag) {
    console.log("Even");
} else {
    console.log("Odd");
}


// -------------------------
// 4) UNDEFINED
// -------------------------
//it is primitive data type
// when we declared the variablr but not intlized & try to console it
// gives ubdefined

let u;
console.log("Undefined variable:", u); // undefined
console.log("Type:", typeof u);        // undefined


// -------------------------
// 5) NULL
// -------------------------
// "Nothing" or "empty on purpose."
//null in JavaScript means "nothing" or "empty on purpose."
// It's used when you want to say something should be there, but right now it isn’t.


let n = null;
console.log("Null value:", n);          // null
console.log("Type:", typeof n);         // object (bug in JS)


// -------------------------
// 6) BIGINT
// -------------------------
//it is primitive data type
//Bigger than what normal numbers can handle.
//big int is use to for bigger values
//we write n at the end of the number

const bigNumber = 123456789012345678901234567890n;
console.log("BigInt value:", bigNumber);
console.log("Type:", typeof bigNumber); // bigint


// -------------------------
// 7) SYMBOL
// -------------------------
// Always unique, even if the description is the same.
// Used for unique identifiers.
// Symbol is a special value used to create unique identifiers.
// Even if two symbols have the same name, they are always different.
// A Symbol is a unique and immutable value.
//it is use creste unique or immunatable value

let c1 = Symbol("aniket");
let c2 = Symbol("aniket");
console.log("Are c1 and c2 same?", c1 == c2); // false

let obj = {
    id: 101,
    name: "aniket",
    age: 12,
    email: "aniket@123"
};
console.log("Object before adding symbol:", obj);

let id = Symbol("id");
obj[id] = 100; // adding unique symbol property
console.log("Object after adding symbol:", obj);


// -------------------------
// 8) NaN
// -------------------------
// Stands for "Not a Number"

console.log("Type of NaN:", typeof NaN); // number
console.log("NaN example:", "abc" * 2);  // NaN


// -------------------------
// NON-PRIMITIVE DATA TYPES
// -------------------------

// 1. OBJECT
// An object is a block of memory which has state(variable), behaviour(methods)
// and where we can store heterogenous data.
// An object is a collection of key-value pairs that can contain various data types such as numbers,
// strings, array, functions and other objects.
// In one object we can have multiple key value pair and it should be seperated by ',' comma.
// We can access value of object using (.) operator or square bracket[] , object reference and key_name.

let person = {
    name: "aniket",
    age: 24,
};
console.log("Person object:", person);
console.log("Access name:", person.name);

// Another example
let student = {
    id: 101,
    name: "aniket",
    age: 23,
};
console.log("Student object:", student);


// 2. ARRAY
// Array is a collection of elements
// which are enclosed in square brackets and separated by comma
// Array can contain any type of data
// It is dynamically typed array there is no need to mention data type and no need to mention size
// array indexing starts from 0 i.e. length - 1
// array length is the number of elements which are present in array i.e all index of array + 1
let arr = [34, 565, 45, 54];
console.log("Array:", arr);
console.log("Type of array:", typeof arr); // object


// 3. DATE
let d = new Date();
console.log("Current Date & Time:", d);
console.log("Year:", d.getFullYear());
console.log("Month:", d.getMonth() + 1); // 0-indexed
console.log("Date:", d.getDate());
console.log("Day:", d.getDay()); // 0=Sunday, 6=Saturday


// -------------------------
// EXTRA CHECK
// -------------------------

let s4 = "hii";
let s5 = 123;
console.log("== comparison:", s4 == s5);   // false
console.log("=== comparison:", s4 === s5); // false