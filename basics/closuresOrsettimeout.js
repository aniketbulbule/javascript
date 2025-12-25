
// console.log("hello");

document.write("closures+setTimeout")


// setTimeout(()=>{
//     console.log("hello..")
// },2000)


// for(var i=1; i<=5; i++){
//     setTimeout(()=>{
//         console.log(i);   //! it will print 6 ,it behavoiur like that because i is point in same  memory 
//     },1000*i)
// }

//!solution
//!we can use let insted var ,but if we you use var then
//--->

// for(var i=1; i<=5; i++){
//     function close(i){
//         setTimeout(()=>{
//         console.log(i);  
//     },1000*i)
//     }
//     close(i)
// }

// // using let 
// for(let i=1; i<=5; i++){
//     setTimeout(function(){
//         console.log(i);
//     },2000)
// }


//!-----------------------------


