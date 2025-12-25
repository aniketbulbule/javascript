// ==============================
// Rest and Spread Operators in JavaScript
// ==============================

// 🔹 THEORY NOTES:

// 1. Rest Operator (...)
//    - Used to collect all remaining elements into an array.
//    - Works in function parameters and destructuring.
//    - Syntax: ...variableName
//    - Example: function myFun(...args) {}

// 2. Spread Operator (...)
//    - Used to expand elements of an array or object.
//    - Works in array literals, object literals, and function arguments.
//    - Syntax: ...iterable
//    - Example: let arr2 = [...arr1];
//    - Example: myFun(...arr);

// ============================================================================
// REST OPERATOR EXAMPLES
// ============================================================================

// Example: Rest with function parameters
function sum(...numbers) {
    console.log("Numbers array:", numbers);
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(10, 20, 30, 40)); // Output: 100

// Example: Rest in array destructuring
let arr = [1, 2, 3, 4, 5];
let [first, second, ...restOfArray] = arr;

console.log(first);         // 1
console.log(second);        // 2
console.log(restOfArray);   // [3, 4, 5]

// Example: Rest in object destructuring
let obj = { a: 1, b: 2, c: 3, d: 4 };
let { a, b, ...restOfObject } = obj;

console.log(a);            // 1
console.log(b);            // 2
console.log(restOfObject); // {c: 3, d: 4}

// ============================================================================
// SPREAD OPERATOR EXAMPLES
// ============================================================================

// Example: Spread with arrays
let arr1 = [10, 20, 30];
let arr2 = [40, 50];
let combined = [...arr1, ...arr2];

console.log(combined); // [10, 20, 30, 40, 50]

// Example: Spread to copy arrays
let copyArray = [...arr1];
console.log(copyArray); // [10, 20, 30]

// Example: Spread with function arguments
function multiply(x, y, z) {
    return x * y * z;
}
let nums = [2, 3, 4];
console.log(multiply(...nums)); // 24

// Example: Spread with objects
let obj1 = { name: "Aniket", age: 23 };
let obj2 = { city: "Pune", country: "India" };
let mergedObj = { ...obj1, ...obj2 };

console.log(mergedObj);
// { name: "Aniket", age: 23, city: "Pune", country: "India" }

// Example: Spread to copy objects
let copyObj = { ...obj1 };
console.log(copyObj);

// ============================================================================
// NOTES:
// - Rest collects multiple elements into a single variable (array/object).
// - Spread expands elements into individual elements.
// - Rest is used in function parameters and destructuring.
// - Spread is used in array literals, object literals, and function calls.
// ============================================================================
