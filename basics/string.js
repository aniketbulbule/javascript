    let char='c';
    console.log(char);
    let str1="hello";
    let str2=`hello`;
    let str3=new String("hello");

    console.log(str1);
    console.log(str2);
    console.log(str3);

    console.log(str1,str2,str3);

//Q.who many ways to declare string in js ?
//----> their are 3 ways  to declare the string using single quotes,double quotes,backtricks,object
    //    1.Double Quotes: let str = "Hello";
    //    2.Single Quotes: let str = 'Hello';
    //    3.Template Literals: let str = Hello, ${name};
    //    4.String Constructor: let str = new String("Hello");
            
        
    let s1="fdhjb dfjh dsh dhg  ehjgdj sdgjsd";
    console.log(s1);
    console.log(`${s1}`);  //using backtrick


    let a=10;
    console.log();
        


    let num=362;
    console.log(typeof num); //number
    console.log(typeof typeof num); //string -->


    let string1="aniket";
    let newStr=string1.toUpperCase();
        
        
    // let str=new String("heelo");
    // console.log(str);
    //----------------------------------------------

    //  !Backtics 
//?  Whenever we declare a string using backtics (``) then we call it as template literal and using ${} then we call it as interpolation.
//?  We have some advantages of template literals 
//?  i.We can do interpolation.
//?  ii.We can write multi line of String.
//?  -(“”) is not possible for multiline
//?  -(``) is possible for multiline



//! Methods
// charCodeAt --> It returns the ASCII (Unicode) value of a specific character in the string

// let s2 = "aniket";
// console.log(s2.toUpperCase());       // ANIKET - Converts all characters to uppercase 
// console.log(s2.toLowerCase());       // aniket - Converts all characters to lowercase
// console.log(s2.charAt(0));           // a - Returns character at index 0
// console.log(s2.charCodeAt(0));       // 97 - ASCII value of character at index 0 ('a')
// console.log(s2.startsWith("a"));     // true - Checks if string starts with given substring
// console.log(s2.startsWith("b"));     // false  
// console.log(s2.endsWith("t"));       // true - Checks if string ends with given substring
// console.log(s2.endsWith("k"));       // false

// console.log(s2.codePointAt(1));      // 110 - Returns Unicode code point value at given index (1 = 'n')

// let ch="aniket"
// console.log(ch.charCodeAt(0));

// console.log(ch.codePointAt(0));


// let str="hello";
// console.log(str.toLowerCase());



// padStart() -->  Pads string from the start to desired length with given character
// let s2="hello"
// console.log(s2.padStart(8, "X"));    // XXaniket - Adds 2 X at the beginning
// let a="hello"
// console.log(a.padStart(6, "X")); 
// console.log(s2.padStart(8,"XX"));
// console.log(s2.padEnd(8,"XYZ"));



// padEnd() --> Pads string from the end to desired length with given character
// console.log(s2.padEnd(8, "X"));      // aniketXX - Adds 2 X at the end

// let s3 = "javascript";
// let arr1 = s3.split();               // ['javascript'] - No separator given, returns array with original string
// console.log(arr1);                   
// let arr2 = s3.split("");             // Splits every character
// console.log(arr2);                   // ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
// console.log(s3.split(''));


// toString() --> Converts value to a string (works with numbers, not undefined or non-primitive types)

// let a1 = 23;
// let newA = a1.toString();
// console.log(newA);                // "23" - Number converted to string

// The following will throw errors as explained below:

// let l1 = undefined;
// let newl1 = l1.toString();        // ❌ Error: Cannot read properties of undefined

// let l2 = boolean;
// let newl2 = l2.toString();        // ❌ Error: boolean is not defined (should be true/false)

// let sym = Symbol;
// let newSym = sym.toString();      // ❌ Error: Cannot convert symbol to string without description

// let num1 = integer;
// let newNum = num1.toString();     // ❌ Error: integer is not defined (not a valid keyword)


// indexOf() --> Returns the first index of specified character
// let name = "aniket";
// console.log(name.indexOf("a"));      // 0
// console.log(name.indexOf("n"));      // 1

// lastIndexOf() --> Returns the last occurrence index of character
// let n1 = "sabsebadkar";
// console.log(n1.lastIndexOf("b"));    // 5

// replace() --> Replaces first match of substring with new substring
// let movie = "Dilwale";
// console.log(movie.replace("wale", "jale"));   // Diljale

// let n = "aniket";
// console.log(n.replace("e", "i"));              // anikit

// let movie1 = "Bahubali";
// console.log(movie1.replace("Bahubali", "khahubali"));  // khahubali

// includes() --> Checks if substring exists in the string
// let inc = "aniket";
// console.log(inc.includes("a"));      // true
// console.log(inc.includes("b"));      // false

// slice() --> Extracts a section of string from start to end (excluding end)
// let s = "jsiseasy";
// console.log(s.slice(0, 2));          // js
// console.log(s.slice(4, 8));          // easy

// split() --> Converts string into array based on separator
// let s4 = "javascript";
// let arr = s4.split("a");             // Splits by 'a'
// console.log(arr);                    // ['j', 'v', 'script']

// let arr3 = s4.split(",");            // No comma in string, returns whole string
// console.log(arr3);                   // ['javascript']

// let arr4 = s4.split("");             // Splits each character
// console.log(arr4);                   // ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']

// let arr5 = s4.split("");             
// console.log(arr5);                   // Same as above


// let s_="1234567";
// console.log(s_);
// let ans=s_.split("")
// console.log(ans);


// replaceAll() with regex --> Removes special characters
// let str = "fvh122mnxc!@#";
// console.log(str.replaceAll(/[^a-zA-Z0-9\s]/g, ""));  // fvh122mnxc


// let str="!h@e#l5l&o"
// console.log(str.replaceAll(/[^a-zA-z]/g,""));



// let y="aniket$12*";
// console.log(y.replaceAll(/[^a-z]/g,""));


// Number Methods
// let num2 = 10;
// console.log(isFinite(num2));        // true - Checks if number is finite

// let num3 = infinite;
// console.log(isFinite(num3));     // ❌ Error: 'infinite' is not defined (should be Infinity)

// console.log(parseInt(num2));        // 10 - Converts to integer if not already

// Boolean conversion
// let t = true;
// console.log(Boolean(t));            // true - Explicit boolean conversion
// console.log(Boolean(10));           // true - Non-zero numbers are truthy
// console.log(Boolean(0));  //false
// console.log(Boolean(1));// true
// console.log(Boolean(100));
// console.log(Boolean(103));
// console.log(Boolean(112));





//--------------------





