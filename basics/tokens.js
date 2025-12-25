//! tokens :
//? it is smallest unit in javascript programming language

//!Arithematic opeartor
//  let a=10;
//  let b=30;
//  console.log(a+b);
//  console.log(a-b);
//  console.log(a*b);
//  console.log(a/b);

 //!Assignment operator 
 //?it is used to assign the values to the varible
//  let c=1000;
//  console.log(c);
//  c+=500;
//  console.log(c);
//  console.log(c-=100);
//  console.log(c*=100);
//  console.log(c/=100);

 //!comparision operator
//? == (Equal to): Checks if two values are equal, with type coercion.
//? === (Strict equal to): Checks if two values are equal and of the same type.
//? != (Not equal to): Checks if two values are not equal, with type coercion.
//? !== (Strict not equal to): Checks if two values are not equal or not of the same type.
//? > (Greater than): Checks if the left value is greater than the right.
//? < (Less than): Checks if the left value is less than the right.
//? >= (Greater than or equal to): Checks if the left value is greater than or equal to the right.
//? <= (Less than or equal to): Checks if the left value is less than or equal to the right.
 //?equal  to (==)
 //?it ia operator which is used to compare to two values
 
//  let a=10;
//  let b=10;
//  let c=30;
//  console.log(a==b); //true
//  console.log(a==c); //false

 //?strict equal to (===)
 //?it ia operator which is used to compare to two values and their type also


 console.log(10!==10);
 
//  let a=10;
//  const d=10;
//  let b=10;
//  let c=30;
//  console.log(a===b); //true
//  console.log(a===c); //false
//  console.log(a===c); //false

//! logical opeators
//? logical operator are use for logical decision making purpose
//? they will returns output has  boolean  that is true or false
//? 3 types
//? && (AND) -->it is binary operator 
// ?   -->it will returns false if the any of the condition is false

//? || (OR) -->it is binary operator 
//?    -->it will returns true  if the any of the condition is true

//? || (!) -->it is uniary operator 
//?    -->it will returns oppsoite of first 

// let a=10;
// let b=20;
// let c=30;
// console.log(a>b && a<b); //false
// console.log(a<b && a<c); //true

// console.log(a>b || a<b); //true
// console.log(a<b || a<c); //true


//-----------------------------
//! work in (!=)  -->
//? true != false // → true
//? false != false // → false


console.log(!null);

//!Punctuators
//? these are symbols
//? which is used to separate the codes
//? Examples include parentheses (), curly braces {}, 
//? square brackets [], commas ,, semicolons ;, and the
//? period . (used to access object properties).

// let obj={
//     id:101,
//     name:"Aniket",
//     age:23,
// }

//! Keywords (reserved words)
//? keywords are words ,and pre-defined words and it has specifuc meanings
//? Examples like if, else, for, while, function, and return,etc.

//! Identifiers
//? identifiers are the names which is given by the programmer to various data member those are
//? variables, functions, and other objects

//! rules
//? it can not start with numbers
//? we can not use keywords , inplace of indentifiers
//? character spaces is not allowed &
//? only the two special is allowed that is underscore(_) and dollar($).

    // console.log('a'+10);//a10
    //    console.log('10'+"10");//1010
    //    console.log("10"/10); //1

    // console.log('a'/10); //NaN
    
       
       
    //    console.log("34"+6);//346
       
    //    console.log("10"/1);//10
    
    //    console.log('10'/10);//1
    //    console.log("10"/10);//1
      

    //    console.log('10'+10);//1010
    //    console.log("10"+10);//1010

    

    //    console.log('10'-10);//0
       
    //    console.log('10'-8);//2
       
    //    console.log("10"-10);//0

    //    console.log(10/"a");  //Nan
    //    console.log("a"/10);//Nan

    //    console.log(10/'a');//Nan
    
    //    console.log(10*'a');//Nan

    //    console.log(10/true);//10
    //    console.log(10/false);//Infinity

    //    console.log("a"/true);//Nan
    //    console.log('a'/true);//Nan
         
    //    console.log(false/10);//0

