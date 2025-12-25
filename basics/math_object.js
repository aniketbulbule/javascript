console.log(" Math Object");

//! Math Object

//---------------------------------------------------------------------------
//? Math.floor() 
// Returns the largest integer less than or equal to a given number
console.log(Math.floor(4.7)); // 4
console.log(Math.floor(9.9)); // 9

//---------------------------------------------------------------------------
//? Math.round()
// Rounds a number to the nearest integer
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.4)); // 4

//---------------------------------------------------------------------------
//? Math.ceil()
// Returns the smallest integer greater than or equal to a given number
console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(7.9)); // 8

//---------------------------------------------------------------------------
//? Math.random()
// Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); // Example: 0.73456712

// Example: Generate number between 100 to 200
console.log(100 * Math.random() + 100); // Example: 180.28...

//---------------------------------------------------------------------------
//? Math.pow()
// Returns base to the exponent power (base^exponent)
console.log(Math.pow(2, 2)); // 4

let a = 2, b = 3;
console.log(Math.pow(a, b)); // 8

//---------------------------------------------------------------------------
//? Math.sqrt()
// Returns the square root of a number
console.log(Math.sqrt(9)); // 3
console.log(Math.sqrt(25)); // 5

//---------------------------------------------------------------------------
//? Math.max()
// Returns the largest of zero or more numbers
console.log(Math.max(1, 2, 3, 4, 5)); // 5

//---------------------------------------------------------------------------
//? Math.min()
// Returns the smallest of zero or more numbers
console.log(Math.min(1, 2, 3, 4, 5)); // 1

//---------------------------------------------------------------------------
//? Math.abs()
// Returns the absolute (positive) value of a number
console.log(Math.abs(-10)); // 10
console.log(Math.abs(10)); // 10

//---------------------------------------------------------------------------
//? Math.trunc()
// Returns the integer part by removing fractional digits
console.log(Math.trunc(4.9)); // 4
console.log(Math.trunc(-4.9)); // -4

//---------------------------------------------------------------------------
//? Math.sign()
// Returns 1 for positive, -1 for negative, 0 for zero
console.log(Math.sign(-5)); // -1
console.log(Math.sign(0));  // 0
console.log(Math.sign(5));  // 1

//---------------------------------------------------------------------------
//? Math.cbrt()
// Returns the cube root of a number
console.log(Math.cbrt(8)); // 2
console.log(Math.cbrt(27)); // 3

//---------------------------------------------------------------------------
//? Math.log()
// Returns the natural logarithm (base e)
console.log(Math.log(1)); // 0
console.log(Math.log(Math.E)); // 1

//---------------------------------------------------------------------------
//? Math.log10()
// Returns base-10 logarithm
console.log(Math.log10(100)); // 2

//---------------------------------------------------------------------------
//? Math.exp()
// Returns Euler’s number (e) raised to the power of a number
console.log(Math.exp(1)); // 2.718281828459045

//---------------------------------------------------------------------------
//? Math.PI
// Returns the value of PI
console.log(Math.PI); // 3.141592653589793

//---------------------------------------------------------------------------
//? Math.sin(), Math.cos(), Math.tan()
// Returns trigonometric sine, cosine, tangent
console.log(Math.sin(0)); // 0
console.log(Math.cos(0)); // 1
console.log(Math.tan(0)); // 0

//---------------------------------------------------------------------------
//? Math.hypot()
// Returns the square root of the sum of squares of its arguments
console.log(Math.hypot(3, 4)); // 5 (Pythagorean theorem)

//----------------------------------------------------------
// Math.PI is a static property of the built-in Math objec
// Math.PI
// Object.getOwnPropertyDescriptor(Math, "PI");
// {
//   value: 3.141592653589793,
//   writable: false,    // ❌ cannot modify
//   enumerable: false,
//   configurable: false
// }

// Object.defineProperty(Math, "PI", { value: 4 });
// console.log(Math.PI);  // 4

//---------------------------





