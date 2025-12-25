let h2 = document.createElement('h2');
console.log(h2);
// use innerText or textContent or innerHTML
h2.innerText = "hello";        // just text
// h2.textContent = "hello";   // also works
// h2.innerHTML = "hello";     // also works
document.body.appendChild(h2);


//---------------------
//!setAttribute()<-- use to add attributr inside tag

let img = document.createElement('img');
console.log(img);
// set attribute properly
img.setAttribute("src", "https://www.bing.com/ck/a?!&&p=6f63693c8a65acb070ad753fec3e69dcabbee11d4bae40227617c683b60e1437JmltdHM9MTc1Njk0NDAwMA&ptn=3&ver=2&hsh=4&fclid=3146b9f9-720e-6054-08ae-ac5a73c76155&u=a1L2ltYWdlcy9zZWFyY2g_cT1pbWFnZXMmaWQ9NDkwQkUyM0IxMjYyRTg4RkU0NzhGMjgzNTA2RkRCQTdGNUQ4QUIxRSZGT1JNPUlRRlJCQQ&ntb=1");
img.setAttribute("alt", "Image");
document.body.appendChild(img);

//!2. append()
// Can add multiple nodes or text at once.
let div = document.createElement("div");
div.append("Hello ", document.createElement("span"), " World!");
document.body.append(div);

//!prepend() 
//it is a JavaScript method that lets you insert content at the very beginning (top) of an element.

let main=document.createElement("main")
console.log(main);
main.innerText="Aniket"
main.prepend("hello,")    
document.body.appendChild(main)


//! removeChild()

let section= document.querySelector('section')
console.log(section);
let opt=section.querySelector("option")
console.log(opt);
section.removeChild(opt);
console.log(section);



//! remove()
let h6= document.querySelector('h6')
console.log(h6);
h6.remove()


