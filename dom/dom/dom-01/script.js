//!DOM (Document Object Model):
// -When you open a webpage, the browser takes the HTML code and makes a tree-like structure out of it.
// -This tree is called DOM.
// -Every tag (like <h1>, <p>, <div>, etc.) becomes a node (or object) in this tree.
// -Using JavaScript, we can find, add, change, or delete these nodes.

//! document in JavaScript
// -When a webpage loads, the browser creates the DOM.
// -The document object is the main entry point to that DOM.
// -It’s like the boss object that gives you access to the whole webpage.
// document = your whole webpage inside JavaScript.


//! What is window?

// window is the global object provided by the browser.
//  It represents the browser window (or tab) and gives you access to everything the page can do: 
//  the DOM (document), timers, storage, dialogs, location, and more.

//!getElementsByTagName(");
let h3=document.getElementsByTagName("h3");
console.log(h3);
console.dir(h3);  //? many times we don oot open the tag in console , so that we use console.dir(h3)

//!getElementsByClassName()

let p1 = document.getElementsByClassName('p1');
console.log(p1);
p1[0].style.color = "red";

let p2 = document.getElementsByClassName('p2');
console.log(p2);
p2[0].style.color = "blue";   

let p3 = document.getElementsByClassName('p3');
console.log(p3);
p3[0].style.color = "yellow"; 

let p4 = document.getElementsByClassName('p4');
console.log(p4);
p4[0].style.color = "pink";   


//! getElementById()
let div=document.getElementById("div")
console.log(div);


//! document.querySelector();
let span=document.querySelector('span');
console.log(span);

//! document.querySelectorAll()
let all=document.querySelectorAll("h1","section","main")
console.log(all);



//! What is an HTMLCollection?
//? they do not  return one element 
//? htmlcollection means it will return list of elements

//!what is nodeList
//? A NodeList is just a list of elements that JavaScript gives when you select multiple things from the DOM (like using querySelectorAll).
//? document.querySelectorAll() give we nodelist




//!practise
// let h5=document.getElementsByTagName('h5');
// for(let i=1; i<h5.length; i++){
//     console.log(h5[i]);
// }

//?Or
// let h5=document.getElementsByTagName('h5');
// let arr=Array.from(h5);
// arr.forEach((ele)=>console.log(ele))

//? usinf querySelectorAll
let h5=document.querySelectorAll("h5")
console.log(h5);
h5.forEach((ele)=>console.log(ele))








