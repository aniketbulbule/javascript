//! Objects :

//    let person={
//     name:"Aniket",
//     age:23,
//
//     hobbies:["swimming","cricket","gym","dancing"],
//     eduction:{
//         degree : "btech",
//         branch : "entc",
//         year :2024,
//         college :{
//             cname : "DY patil college",
//             unversity :"shivaji university",
//             address : {
//                 city :"kolhapur",
//                 pincode:235413,
//                 state :"maharahstra",
//             }
//         }
//     }
//     }
//
//     console.table(person);
//     console.log(person.hobbies.map((val)=>{
//         console.log(val);
//
//     }));
//     console.table(person.hobbies.map((val)=>{
//         console.log(val);
//
//     }));
//
//     let car={
//
//         name:"maruti 800",
//         brand:"maruti suzuki",
//         color :"white",
//         Wheel :4 ,
//         capacity :4,
//         price :500000,
//         passYear :2002,
//
//     }
//
//    //update
//
//     console.log(car);
//     console.log(car.capacity);
//     car.capacity=5;
//     console.log(car.capacity);
//
//     //delete
//
//     console.log(car.passYear);
//     delete car.passYear;
//     console.log(car.passYear); //undefined
//
//     console.table(car)
//     console.log(car.name);
//
//  let arr=[{
//     id:1,
//     name:"a",
//     age:24,
//   },
//   {
//     id:2,
//     name:"b",
//     age:25,
//   },
//   {
//
//     id:3,
//     name:"c",
//     age:23,
//   },
//   {
//     id:4,
//     name:"d",
//     age:24,
//
//   },
//   {
//     id:5,
//     name:"e",
//     age:22,
//   }];
//
// //   console.log(arr);
//   console.log(arr.map((val)=>{
//     console.log(val);
//     return "hello";
//   }));
//
// [{},{},{},{}]
//
// let a={
//     id : 1,
//     name :"aniket",
//     age :24,
//
// }
// console.log(a);
// console.log(Object.keys(a))
// console.log(Object.values(a));
// console.log(Object.entries(a));
//
//--------------

//------------------------------------
//! destructuring //! rest and spread  

//object
// console.log(backpack);

// console.log(backpack.item1);  //camera
// console.log(backpack.item2);  //charger

// let {item1,item2,item3,mystuff}=backpack

// console.log(item1);  //camera
// console.log(item3);  //charger
// console.log(mystuff);


//? rest-rest of all things in the container 
//? spread --it will  spread all the elements

// let arr=["honda","bmw","tesla","thar","mahindra"];

// let [a,...c]=arr   //rest //is parameter
// console.log(c);  //['bmw', 'tesla', 'thar', 'mahindra'] 
// console.log(a);

// console.log(arr);
// console.log(...arr);



// console.log(...arr);//spread  -operator  ///honda bmw tesla thar mahindra 

// let [e,d,...f]=arr
// console.log(e);//honda
// console.log(d);//bmw
// console.log(f);// ['tesla', 'thar', 'mahindra']

// let [e,d,,,,,,f]=arr
// console.log(e);//honda
// console.log(d);//bmw
// console.log(f);
// console.log("");


// console.log(f);// 

//   Rest (LHS)... = ... (RHS)Spread

// let add=(a,b,c)=>{
//   console.log(a+b+c);   
// }

// add(1000,2000,3000);

// let add=(...container)=>{
//   console.log(container);   
// }

// add(1000,2000,3000);

// let add=(...container)=>{
//   let addition=container.reduce((acc,amt)=>{
//     return acc+=amt;
//   })
//   console.log(addition);
// }

// add(1000,2000,3000);    //6000

// let add=(...container)=>{
//   let addition= container.reduce((acc,amt)=>{
//     return acc+=amt;
//   },5000)
//   console.log(addition);
// }

// add(1000,2000,3000,4000);//15000

//spread example 
// let arr1=[10,20,30]
// let arr2=[40,50,60]
// let newArr=[...arr1,...arr2]
// console.log(newArr); // [10, 20, 30, 40, 50, 60]

// let obj={
//   id :101,
//   name :"Aniket",
//   Age :23,
// }
// console.log(o);

//------------------------------------

//!
// let obj1 = {
//   id: 101,
//   name: "aniket"
// }
// let obj2 = {
//   age: 23,
// }

// console.log(Object.assign(obj1, obj2));  //{id: 101, name: 'aniket', age: 23}

// //obj

// let newObj = Object.assign({}, obj1, obj2);
// console.log(newObj);                    //{id: 101, name: 'aniket', age: 23}

// let newObj1 = Object.assign({
//   add: "pune",
// }, obj1, obj2);
// console.log(newObj1);                  //{add: 'pune', id: 101, name: 'aniket', age: 23}

// //arr
// let newObj2 = Object.assign({
//   add: "pune",
//   arr: [10, 20, 30]
// }, obj1, obj2);
// console.log(newObj2);

//---------
//! property in 

// let obj3 = {
//   id: 101,
//   name: "aniket",
//   age: 23,
// }

// for (let prop in obj3) {
//   console.log(obj3[prop]);  //101 aniket 23
// }

// //? in is operator
// //? it will check the key is present or not in object 
// //? if present it will return true else false
// console.log("id" in obj3);     //true
// console.log("name" in obj3);   //true
// console.log("age" in obj3);    //true
// console.log("101" in obj3);    //X flase                     

// //?-------

// //! Object creating ways
// //? 1.object literal way
// let obj4 = {}

// //? 2.instantitng an object //creating
// let obj5 = new Object();
// obj5.name = "Aniket";
// console.log(obj5);

// //? 3.
// class Demo {
//   constructor(age, name) {
//     this.age;
//     this.name;
//   }
// }

// let o = new Demo(101, "Aniket");
// console.log(o);

// //! copy
// //? shallow copy--> shallow copy means copy the existing obj , here both object pointed towards same address,
// //changes will be affected both object
// //original obj and copied obj are same

// let obj6 = {
//   id: 101,
//   name: "Aniket",
// }

// //  let copy1=obj6;
// //  console.log(copy1);

// //? Deep copy--> Deep copy means copy the existing obj , here both object pointed towards different  address,
// //changes will not be affected both object

// let a = JSON.stringify(obj6);
// let copy2 = JSON.parse(a);
// console.log(copy2);          //{id: 101, name: 'Aniket'}
// copy2.name = "hello";
// console.log(copy2);          //{id: 101, name: 'hello'}

// //! Exception -->

// //? try and catch block

// // console.log(a);
// // let a;    //X

// //Ex1

// try {
//   console.log("hello");
//   console.log(a);   //hello
//   let a;       
// } catch (error) {
//   console.log(error); //     ReferenceError: Cannot access 'a' before initialization
// }

// //Ex2

// console.log("tinku ghar se nikla");
// try {
//   console.log("tinku road se ja rha tha");
//   throw new Error("maine bhut dekha")   //custome exception
// } catch (error) {
//   console.log(error);   
// } finally {
//   console.log("tinku tinki ke ghar pohch gya");
//   console.log("JS ke task comples ..!");    
// }

// //! This Keyword
// //? 1. It is a keyword.
// //? 2. It is a variable , which holds the reference.
// //? 3. In GEC it holds the address of window object.
// //? 4. It is a local variable of every function in js, and holds the address of window object. Except in Arrow
// //? function (for arrow function is stores undefined).
// //? 5. Inside object methods, 'this' holds the reference of current object(not in arrow function).

// console.log(this);


// //! JSON and JS Object

// class demo{
//   id;
//   name;

//   constructor(id=101,name="Aniket"){
//     this.id=id;
//     this.name=name;
//   }
// }
// // console.log(demo);
// let obj=new demo()
// console.log(obj);






//! Object.assign()

// let obj1={
//   "id":101,
//   "name":"aniket"
// }

// let obj2={
//   "id":102,
//   "name":"vishal"
// }

// let res=Object.assign(obj1,obj2)
// console.log(res);

// console.log(obj2);

