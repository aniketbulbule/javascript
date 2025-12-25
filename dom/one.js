//! Structute of Dom
//? Dwindow -->document-->html-->
//?                        |
//?               head  <________>   body --> div--> h1 -->p
//?                 |
//?          title<___></___>meta
//?            |        | 
//?            |     attribiute
//?  text mode<--- 

//! createElement()
//? it is use to create element in html & append to in body for that we use 
//!--apppenChild()
//! getElementById()
//! getElementByName()
//! getElementByClassName()
//! getElemntByTagName
//? we can maniplate the elemtnusing id
//!innerHtML
//? to replace inner value for we use (innerHtml)
//! document.getElementById('title').getAttribute('class')
//! document.getElementById('title').getAttribute('id')
//? when we pass attribute we will get value of attribute in (getAttribute)
//! we cam set the attribute value like
//! document.getElementById('title').setAttribute('class','text')
//! document.getElementById('title').setAttribute('id','htag')

// console.log
// ƒ log() { [native code] }
// console.log(document)
// VM704:1 #document (http://127.0.0.1:5500/JAVASCRIPT/learncode/dom.html)<!DOCTYPE html><html lang=​"en">​scroll<head>​…​</head>​<body class=​"bg-black">​…​</body>​</html>​
// undefined
// console.log(window)
// VM764:1 Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// undefined
// document.getElementById('title')
// <h1 id=​"title" class=​"heading">​Document Object Model (DOM)​</h1>​
// document.getElementById('title').id
// 'title'
// document.getElementById('title').class
// undefined
// document.getElementById('title').className
// 'heading'
//?----

// title
// <h1 id=​"title" class=​"heading">​"Document Object Model (DOM) "<span>​test text​</span>​</h1>​

// title.innerText
// 'Document Object Model (DOM) test text'

// title.textContent
// 'Document Object Model (DOM) test text '

// title.innerHTML
// 'Document Object Model (DOM) <span>test text</span> 

//?

//! document.querySelector()
//? it is use to slect only id, class, tagname,name
//! document.queryAllSelector()
//? it is use to slect multi id, class, tagname,name
//! Array.form()
//? it is used convert html element like HTML_Collection convert to array


//! createElement()
//? it is use to create element in html & append to in body for that we use 
let 