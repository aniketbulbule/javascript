
//!fetch()

//? fetch api it is libery

//! 404 always get in resp it is not error

//! javascript & classes
//!javscript has classes
//? yes 
//? in ECMAScript 6
//? javscript is prototyped-based languge

//!object
//? collection pf properties ans method
//? tolowecase

//? whuy use oops

//?parts of oops
//? Object literals
//KEYWORDS
//constructor
//prototpe
//classes

//!pillers
//?abstrction
//?inheriatnce
//?polymorphisum
//?encapsulation

//!

// let arr1=[10,20,30];
// console.log(arr1);

// let arr2=[10,20,30,40];

// let arr3=[10,20,30,40,50];

//!this

// let user={
//     "id":101,
//     "name":"Aniket",
//     "age":25,
    // "fun":function(){
    //     console.log(this);
    //     console.log(this.name);
    // },
    //!use arrow finction
//     "fun":()=>{
//         console.log(this);   //{}
//         console.log(this.name);
//     }
// }
// console.log(user);
// console.log(user.name);
// console.log(user.fun());

//!------------
// function show(){
//     console.log(this);
// }
// show()  //show window objcet/ that is glowbal object


//! constructor function
//? it constrcuctor finction
//? we can crete multile instnces
//? similar like java


// function User(id,name,age){
//     this.id=id;
//     this.name=name;
//     this.age=age;

    // return this;
// }

// let obj1=new User(101,"Aniket",24);
// console.log(obj1);
// let obj2=new User(102,"Vishal",25);
// console.log(obj2);

//!add functip inside
function User(id,name,age){
    this.id=id;
    this.name=name;
    this.age=age;

    this.show=function(){
        console.log(`hey ${this.name}`);
        
    }

    return this;
}

let obj1=new User(101,"Aniket",24);
console.log(obj1);
console.log(obj1.show());

let obj2=new User(102,"Vishal",25);
console.log(obj2);

//!instanceof keyword/opertor/compaeision operator
if(obj1 instanceof User){
    console.log("yes");
}else{
    console.log("no");
    
}