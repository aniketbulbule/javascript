//!clouser

// function init(){
//     let username="aniket"

//     function child1(){
//         let name="pushpa"
//         console.log(username);
//     }

//     function child2(){
//         console.log(username);
//         // console.log(name);  //X
        
//     }
//     child1();
//     console.log(username);
//     child2()
// }

// init();


//?-------------------
//!clousers example 
// document.querySelector('#orange').onclick=function (){
//     document.body.style.backgroundColor="orange"
// }

// document.querySelector('#green').onclick=function (){
//     document.body.style.backgroundColor="green"
// }

//? dont repeate your self

function clickHandler(color){
    // document.body.style.backgroundColor=`${color}`

    return function(){
        document.body.style.backgroundColor=`${color}`
    }
}

document.getElementById('orange').onclick=clickHandler("orange")
document.getElementById('green').onclick=clickHandler("green")