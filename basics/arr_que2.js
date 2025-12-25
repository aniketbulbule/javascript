//! Array Tasks
//! 1.	Reverse an Array
//?	Input: [1, 2, 3, 4, 5]
//?	Output: [5, 4, 3, 2, 1]
// let arr = [1, 2, 3, 4, 5];
// let reversedArr = [];
//? using reverse() method
// let reversedArr = arr.reverse();
// console.log(reversedArr);
//? using loop
// for (let i = arr.length-1; i >= 0; i--) {
//     reversedArr.push(arr[i]);
// }
// console.log(reversedArr);

//! 2.	Find the Maximum and Minimum Element in an Array
//?	Input: [10, 5, 20, 8, 15]
//?	Output: Max: 20, Min: 5
// let arr = [10, 5, 20, 8, 15];
// arr.sort((a,b)=>{
//     return a-b
// });
// console.log(`Max : ${arr[arr.length-1]}`);
// console.log(`Min : ${arr[0]}`);

//----
// let arr=[10, 5, 20, 8, 15];
// let max=arr[0];
// arr.filter((ele)=>{
//     if(ele>max);
//     max=ele;
// })
// console.log(max);

//---
//  let arr=[10, 5, 20, 8, 15];
// console.log(Math.max(...arr));  ///using the spresd operator


//! 3.	Check if an Array is Palindrome
//?	Input: [1, 2, 3, 2, 1]
//?	Output: true
// let arr = [1, 2, 3, 2, 1];
// let flag = true;
// for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
//   if (arr[i] != arr[j]) {
//     flag = false;
//     break;
//   }
// }
// console.log(flag);

//---

// let arr = [1, 2, 3, 2, 1];

// function isPalindrome(array) {
//     // compare original array with reversed copy
//     return array.join('') === [...array].reverse().join('');
// }

// console.log(isPalindrome(arr)); // true

//---

// let arr = [1, 2, 3, 2, 1];
// let isPalindrome=(arr)=>{
//     let revArr=[...arr].reverse();
//     return arr.join('')===revArr.join('')
// }
// if(isPalindrome(arr)){
//     console.log("pal");
// }else{
//     console.log("n-pal");
// }


//! 4.	Remove Duplicates from an Array
//?	Input: [1, 2, 2, 3, 4, 4, 5]
//?	Output: [1, 2, 3, 4, 5]
// let arr = [1, 2, 2, 3, 4, 4, 5];
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//   if (!arr2.includes(arr[i])) {
//     arr2.push(arr[i]);
//   }
// }
// console.log(arr2);


//--
//!Example: remove duplicates
// let arr = [46, 56, 12, 46, 12];

// let unique = arr.filter((ele, index) => {
//     return arr.indexOf(ele) === index; 
// });
// console.log(unique); // [46, 56, 12]



//! 5.	Sum of All Elements in an Array
//?	Input: [5, 10, 15]
//?	Output: 30
// let arr = [5, 10, 15];
// let sum = arr.reduce((acc, val) => {
//   return acc + val;
// });
// console.log(sum);

//! String Tasks
//! 6.	Reverse a String
//?	Input: "hello"
//?	Output: "olleh"
// let str = "hello";
// let reversedStr = "";
// for(let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str.charAt(i);
// }
// console.log(reversedStr);

//! 7.	Check if a String is Palindrome
//?	Input: "madam"
//?	Output: true
// let str = "madam";
// let str2 = str.split("").reverse().join("");
// console.log((str == str2));

//! 8.	Count the Number of Vowels in a String
//?	Input: "interview"
//?	Output: 4 vowels
// let str = "interview";
// let count = 0;
// for(let i = 0,j=0; i < str.length; i++) {
//     if(str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u") {
//         count++;
//     }
// }
// console.log(count+" vowels");

//! 9.	Find the First Non-Repeating Character in a String
//?	Input: "stress"
//?	Output: "t"
// let str = "stress";
// let strArr = str.split("")
// for(let i=0;i<strArr.length;i++){
//     let count = 0;
//     let iEle = str.charAt(i);
//     for(let j=0;j<strArr.length;j++){
//         let jEle = str.charAt(j);
//         if(iEle == jEle){
//             count++;
//         }
//     }
//     if(count == 1){
//         console.log(iEle);
//         break;
//     }
// }

//! 10.	Check if Two Strings are Anagrams
//?	Input: "listen" and "silent"
//?	Output: true
// let str1 = "listen";
// let str2 = "silent";
// let str1Arr = str1.split("").sort();
// let str2Arr = str2.split("").sort();
// let checkAnagram = (arr1, arr2) => {
//     if(arr1.length != arr2.length){
//         console.log(false);
//         return;
//     }
//     for(let i=0;i<arr1.length;i++){
//         if(arr1[i] != arr2[i]){
//             console.log(false);
//             return;
//         }
//     }
//     console.log(true);
// }
// checkAnagram(str1Arr, str2Arr);