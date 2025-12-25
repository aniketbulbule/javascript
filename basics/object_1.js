//! Object :-
//? An object is a block of memory which has state(variable), behaviour(methods)
//? and where we can store heterogenous data.
//? An object is a collection of key-value pairs that can contain various data types such as numbers,
//? strings, array, functions and other objects.
//? In one object we can have multiple key value pair and it should be seperated by ',' comma.
//? We can access value of object using (.) operator or square bracket[] , object reference and key_name.

// let Student = {
//   id: 101,
//   name: "Aniket",
//   age: 24,
//   Education: {
//     edu: "BTech",
//     branch: "ENTC",
//     College: "DY Patil College, Kolhapur",
//   },
//   Address: {
//     "Current add": "Karve Nagar, Pune",
//     "permant add": "Jalna, 431209",
//   },
//   Display: function () {
//     console.log("===================================");
//     console.log(`ID: ${this.id}`);
//     console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
//     console.log(`I have done my ${this.Education.edu} in ${this.Education.branch} from ${this.Education.College}.`);
//     console.log(`My current address is: ${this.Address["Current add"]}`);
//     console.log(`My permanent address is: ${this.Address["permant add"]}`);
//     console.log("===================================");
//   }
// };

// Student.Display();


// console.log(Student);
// console.log(Student.Display());

// Student.Display()

// let Student = {
//     name : "Akshay",
//     age: 26,
//     mobile : 8007929317,
//     email : "akshaymali1137@gmail.com",
//     hobbies : ["Cricket","Traveling"],
//     education : {
//         degree : "BCA",
//         yop : 2024,
//         cgpa : 8.5,
//         college : {
//             name : "New satara college of BCA",
//             university : "Solapur University",
//             address : {
//                 city : "Pune",
//                 pincode : 413001,
//                 landmark : "Pandharpur",
//                 dist : "Solapur",
//                 state : "Maharashtra"
//             }
//         }
//     },
//     display : ()=>{
//         console.log(`name ${Student.name}`);
//         console.log(`age ${Student.age}`);
//         console.log(`mobile ${Student.mobile}`);
//         console.log(`hobbies`);
//         console.log(`${Student.hobbies.map((val)=>{
//             console.log(val);
//         })}`);
//         // console.log(Student.education);
//         // console.log(education.college);
//     }
// }

// console.log(Student.education.college.address.city);
// Student.hobbies.map((val,i,arr)=>{
//     console.log(val);
// })
// Student.display()
//----------------

// let obj={
//     id:101,
//     name:"aniket",
//     age:23,
//     marks:124,
// }
// console.log(obj);

// console.log(obj['id']);
// console.log(obj['name']);
// console.log(obj['age']);
// console.log(obj['marks']);




// console.log(obj.id);
// console.log(obj.name);
// console.log(obj.age);

// obj.id=102;
// console.log(obj);

// delete obj.marks;
// console.log(obj);

// obj.city="jalna";
// console.log(obj);


// let obj={
//     id:101,name:"aniket",
// }

// console.log(obj.id);

// console.log(obj["id"]);

//

// let {id,name}=obj;
// console.log(id);


//! looping
//! obj in
// obj["id"]=102;
// console.log(obj);

// for(const a in obj){
//     console.log(obj[a]);
    
// }

//! for...in
// Used to iterate over keys (property names) of an object.

// Works for objects and arrays (but not ideal for arrays).

// Returns the keys (as strings).

// let obj={
//     id:101,
//     name:"aniket",
//     age:23,
//     marks:124,
// }

// for(let key in obj){
//     // console.log(key);
//     console.log(key + ":" +obj[key]);   
// }




//---
// let data={
//     'arr':[10,20,30,40,50],
//     'fun':function(){
//         console.log("hii,this is function"); 
//     },
//     'obj':{
//         "id":101,
//         "name":"aniket"
//     },
//     'arrFun':()=>console.log("arrow function")
// }
// console.log(obj);
// console.log(obj.obj);
// console.log(obj.arrFun);
// console.log(obj.fun);

// let {arr, fun, obj, arrFun}=data;
// console.log(data);
// console.log(obj);
// console.log(arrFun);

//  for (const key in data) {
//     console.log(key);   
//  }

//  for(const key in data){
//     console.log(data[key]);
    
//  }




//-


let obj={
    "id":101,
    "name":"aniket",
    "age":23
}
// console.log([obj]);
// console.log([obj.id]);
// console.log(obj);
// console.log([obj]);
// console.log([obj.id]);console.log(obj.id);


// let {id,name,age} =obj

// console.log(id);
// console.log(name);
// console.log(age);

// console.log(Object.fromEntries(obj));

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));
// console.log(Object.fromEntries(obj));
// console.log(Object.fromEntries(Object.entries(obj)));
// { id: 101, name: 'aniket', age: 23 }
// Object.fromEntries() in JavaScript converts a list of key–value pairs into an object.

// function show(obj){
//     console.log(obj); 
//     console.log(obj.id);
    
// }
// show(obj)   //[ { id: 101, name: 'aniket', age: 23 } ]

//---
// let obj1=[
//     ["id",101],
//     ["name","aniket"],
//     ["age",23]
// ]
    
// console.log(Object.fromEntries(obj1)); //{ id: 101, name: 'aniket', age: 23 } 



//---
// let obj1={
//     "id":101,
//     "name":"aniket",
//     "age":23
// }

// let obj2={
//     "id":102,
//     "name":"aniket",
//     "age":23
// }

// let newObj={obj1,obj2}
// console.log(newObj);

// let newObj={...obj1,...obj2}
// console.log(newObj);
// What happens here
// The spread operator (...) takes all key-value pairs from obj1 and puts them into the new object.
// Then it takes all key-value pairs from obj2 and puts them into the new object.
// If a key already exists, the later one overrides the earlier one.
// Since obj1 and obj2 have identical keys and values, the result will just look like obj2 (or obj1, since they’re the same).


//!usin destructurin we can also add propert

// let obj = { id: 101, name: "aniket" };
// let updated = { ...obj, age: 23 };

// console.log(updated);
//?ans: { id: 101, name: 'aniket', age: 23 }


//? also remove

// let obj = { id: 101, name: "aniket" };
// // let updated = {age: 23,...obj };
// let { age, ...withoutAge } = obj;

// console.log(withoutAge);  //let { age, ...withoutAge } = obj;

//?

// let obj1={
//     "id":101,
//     "name":"aniket",
//     "age":23
// }

// let obj2={
//     "id":102,
//     "name":"aniket",
//     "age":23
// }

// let obj3={
//     ...obj2,...obj1
// }
// console.log(obj3);


// let obj4={
//     obj1,obj2
// }
// console.log(obj4);



//! for off work wikt array , string , iterable


// let str="hello";
// for(let value of str){
//     console.log(value);
// }

// for(let value of obj){
//     console.log(value);
    
// }
// //! obj off
// let nums = [10, 20, 30];

// for (let value of nums) {
//   console.log(value); // 10, 20, 30
// }
// 🔹 for...of
// Used to iterate over values in iterable objects like:


// Arrays

// Strings

// Maps, Sets

// Returns the values directly.

// for (const fruit of obj) {
//   console.log(fruit);       //!X
// }


// 📌 Why?
// Because for...of can only be used on iterables like:



// Arrays

// Strings

// Maps

// Sets

// But a plain object ({}) is not iterable by default.




// let obj2={
//     "id":102,
//     "name":"aniket",
//     "age":23
// }
// console.log(obj2);
// console.log("------------");

// for(const values of obj2){
//     console.log(values);
// }




















//! first way to create
//? this is called literal way to create an object.

// let car = {
//     name : "Scorpio",
//     brand : "Mahindra",
//     capacity : 7,
//     color : "Black",
//     price : 2000000
// }    //! create
// console.log(car); //! read
// console.log(car.name); //! read

// car.capacity = 9    //! update
// car.color = "White"
// car.engine = "2200cc"   //!insert

// delete car.price //! delete

// console.log(car); //! read
// console.log(car.name); //! read

// let users = [
//   {
//     id: 1,
//     name: "Akshay",
//     age: 26,
//     add: "pune",
//   },
//   {
//     id: 2,
//     name: "Akshay",
//     age: 26,
//     add: "pune",
//   },
//   {
//     id: 3,
//     name: "Akshay",
//     age: 26,
//     add: "pune",
//   },
//   {
//     id: 4,
//     name: "Akshay",
//     age: 26,
//     add: "pune",
//   },
//   {
//     id: 5,
//     name: "Akshay",
//     age: 26,
//     add: "pune",
//   },
//   {
//     id: 6,
//     name: "Akshay",
//     age: 26,
//     add: "pune",
//   },
//   {
//     id: 7,
//     name: "Akshay",
//     age: 26,
//     add: "pune",
//   },
//   {
//     id: 8,
//     name: "Akshay",
//     age: 26,
//     add: "pune",
//   },
//   {
//     id: 9,
//     name: "Akshay",
//     age: 26,
//     add: "pune",
//   },
//   {
//     id: 10,
//     name: "Akshay",
//     age: 26,
//     add: "pune",
//   },
// ];

// users.map((val) => {
//   document.write(val.id + "<br>");
// });

// let car = {
//   name: "Scorpio",
//   brand: "Mahindra",
//   capacity: 7,
//   color: "Black",
//   price: 2000000,
// };

// console.log(Object.keys(car));
// console.log(Object.values(car));
// console.log(Object.entries(car));

//? entries() method returns an array of a given object in key value pairs.
//? keys() method returns an array of a given object in key.
//? values() method returns an array of a given object in value.

// let person = {
//     name : "Tinku",
//     age : 23,
//     add : "pune"
// }

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// let ans=Object.fromEntries(person);
// console.log(ans);

// let ans = Object.fromEntries(Object.entries(person));
// console.log(ans);





// console.log(person);
// let arr1 = Object.entries(person)
// console.log(arr1);

// let arr2 = [
//     ["name","Tinku"],
//     ["age",23],
//     ["add","pune"]
// ]
// console.log(arr2);
// let obj = Object.fromEntries(arr2)

// //? fromEntries() method transforms a list of key-value pairs into an object.
// console.log(obj);


//
// let obj1={id:101,name:"aniket",age:23,}
// let obj2={id:102,name:"vishal",age:24,}

// // console.log(obj1);
// // console.log(obj2);

// let ans=Object.fromEntries(obj1)






//! this keyword :-
//? this keyword is used to refer to the current object.
//? this keyword is used to access the properties of the current object.
//? this keyword is used to access the methods of the current object.
//? this keyword is used to access the current object. 

// Arrow functions do not have their own `this`. Instead, they inherit `this` from the surrounding lexical context.

// function display(){
//     console.log(this);
    
// }
// display() //
// console.log(display());


// let func = ()=>{
//     console.log(this); // window object
// }
// func(); // 

// let p=function print(){
//     console.log(this);
    
// }
// console.log(p());

// let ans=()=>{
//     console.log(this);
    
// }

// console.log(ans());


// let obj = {
//     name : "Akshay",
//     age : 26,
//     func1 : function(){
//         console.log(this); // object
//     },
//     func2 : ()=>{
//         console.log(this); // window object
//     },
//     func3 : function(){
//         let innerFunc = function(){
//             console.log(this); // window object, because it does not have its own current object
//         }
//         innerFunc();
//     },
//     func4 : function(){
//         let innerFunc = ()=>{
//             console.log(this); // current object, because its an arrow function it goes to lexical scope
//         }
//         innerFunc();
//     }
// }


// obj.func1(); // current object
// obj.func2(); // window object
// obj.func3(); // window object
// obj.func4(); // current object

// console.log(obj);
// console.log("hello");






// let obj={
//     id:101,
//     fun:function(){
//         console.log(this);
        
//     },  
// }

// // console.log(obj);
// console.log(obj.fun());

//----------------

// function demo(){
//     console.log(this);
// }
// // demo()
// console.log(demo());


// let fun=function(){
//     console.log(this);
    
// }
// // console.log(fun());
// fun()

// function demo(){

//     console.log("demo");
    
//     let fun=()=>{
//     console.log(this)

//   }

//   fun()
// }
// demo()


// let fun=()=>{
//     console.log(this);
// }
// // console.log(fun());
// fun()

// let obj={
//     "id":101, "name":"Aniket","age":23
// }

// console.log(Object.fromEntries(Object.entries(obj)));



//! call()
//? call() method is used to call a function with a given this value and arguments provided individually.
//? call() method is used to provide a function with a specific object.
//? it makes your funciton to point towards the different different objects.
//? syntax :- function_name.call(object_name, arg1, arg2, arg3...)

// let stud1 = {
//     name : "Akshay",
//     attendace : 23,
//     add : "pune"
// }
// let stud2 = {
//     name : "Akshay",
//     attendace : 24,
//     add : "pune"
// }
// let stud3 = {
//     name : "Akshay",
//     attendace : 25,
//     add : "pune"
// }
// function display(leave){
//     console.log(this.attendace+leave);
// }
// display.call(stud1,4); // 27
// display.call(stud2,6); // 30
// display.call(stud3,3); // 28

//! call will immediate call the function with the values as normal parameters
//! apply will immediate call the function with the values but the values we are passing should be in square brackets
//! bind will return a function, then we will call that function based on the requirement

// let obj = {
//   name: "Akshay",
//   age: 26,
//   mobile: 8007929317,
// };

//! call method
// let feesPaid = function(fees){
//     console.log(`${this.name} paid ${fees} rs fees.`);
// }
// feesPaid.call(100)



//! apply mehtod
// let feesPaid = function (fees) {
//   console.log(`${this.name} paid ${fees} rs fees.`);
// };
// feesPaid.apply(obj,[1000]);

//! bind method
// let feesPaid = function(fees){
//     console.log(`${this.name} paid ${fees} rs fees.`);
// }
// let bindedFunc = feesPaid.bind(obj,1000)
// bindedFunc()


//----------------

// let user1={
//     id:101,
//     name:"aniket",
//     age:24,
//     fun:function(){
//         console.log(this);
//         // console.log(this.id);
//         // console.log(this.name);   
//     }
// }
// let user2={
//     id:102,
//     name:"abhishek",
//     age:22,
//     fun:function(){
//         console.log(this);
//         // console.log(this.id);
//         // console.log(this.name);   
        
//     }
// }
// function test(num){
    // console.log(this);

// }
// test();
// console.log(test());
// console.log(test.call(Object));



// user1.fun.call(user2)
// console.log(user);
// console.log(user.id);
// console.log(user.name);
// console.log(user.age);
// console.log(user.fun());
//!
// let name={
//     "firstname":"Aniket",
//     "lastname":"Bulbule",
//     printFullName:function(){
//         console.log(this.firstname +"  "+this.lastname);
        
//     }
// }

// name.printFullName()

// let name2={
//     "firstname":"raj",
//     "lastname":"kokate"
// }
// //functio borrowing
// name.printFullName.call(name2)


//?

// let name={
//     "firstname":"Aniket",
//     "lastname":"Bulbule",
//     printFullName:function(){
//         console.log(this.firstname +"  "+this.lastname);
        
//     }
// }

// let printFullName=function(){
//         console.log(this.firstname +"  "+this.lastname);     
//     }

// printFullName.call(name)

// let name2={
//     "firstname":"raj",
//     "lastname":"kokate"
// }

// printFullName.call(name2)

//? apply  -?pass the multiple argument in square bracket

// let name={
//     "firstname":"Aniket",
//     "lastname":"Bulbule"
// }

// let printFullName=function(hometown,state){
//         console.log(this.firstname +"  "+this.lastname +" from "+hometown +" "+state);     
//     }

// printFullName.apply(name,["kolhapur","Maharashtra"])

// let name2={
//     "firstname":"raj",
//     "lastname":"kokate"
// }

// printFullName.apply(name2,["bhaur","Bihar"])

// //? 
// let b=printFullName.bind(name2,"Mumbai","Maharashtra")
// console.log(b);  //[Function: bound printFullName]
// b()

//? bind ,ethos does not directly exectuted it gives copy of the same methods we which can invoked later 


//!----




//! destructuring :-
//? It is a process of extracting elements from an object or array
//? objevt destrcucting

// let backPack = {
//   item1: "Camera",
//   item2: "Tiffin",
//   item3: "Charger",
//   myStuff: {
//     myItem1: "Toothbrush",
//     myItem2: "Water bottle",
//     myItem3: "Blankets",
//   },
// };

// let {item1} =backPack;
// console.log(item1);



// let {item1,item2}=backPack
// console.log(item2);


// let { item1, item2, item3 } = backPack;

// console.log(item1); 
// console.log(item2);
// console.log(item3); 

//---
//? in array destructing

// let arr = [10, 20, 30, {}, () => {}, "hello", 100];

// Destructuring: skip elements using commas
// let [a, b, , d] = arr;

// console.log(a); // 10
// console.log(b); // 20
// console.log(d); // {}
// console.log(''); //{print space}

//--
// let arr = [10, 20, 30, {}, () => {}, "hello", 100];

// let [a,b,,c,,,d]=arr
// // console.log('');
// console.log(a);






//
      // #What Is JSON?
      // 1. JSON stands for javascript object notation.
      // 2. It is data only format to represent values and objects.
      // 3. It is used to transfer data between applications through apis.
      // 4. JSON keys must be strings enclosed in double quotes.
      // 5. It supports six data types: object, array, string, number, boolean, and null.
      // 6. It supports nested structures, allowing objects and arrays to be nested within each other.

      //normal js object

    //   let obj1 = {
    //     id: 1,
    //     name: "aniket",
    //     age: 23,
    //   };
    //   console.log(obj1); //{id: 1, name: 'aniket', age: 23}

//        //json object

    //    const b = '{ "name": "John", "age": 25 }'; // JSON string
    


//       //normal js obect -->json object

    //   console.log(JSON.stringify(obj1)); //{"id":1,"name":"aniket","age":23}

     
//       //json object --->norobjectmal js
    
//       console.log(JSON.parse(b)); // {name: 'John', age: 25}

//       let c = [
//         {
//           login: "mojombo",
//           id: 1,
//           node_id: "MDQ6VXNlcjE=",
//           avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
//           gravatar_id: "",
//           url: "https://api.github.com/users/mojombo",
//           html_url: "https://github.com/mojombo",
//           followers_url: "https://api.github.com/users/mojombo/followers",
//           following_url:
//             "https://api.github.com/users/mojombo/following{/other_user}",
//           gists_url: "https://api.github.com/users/mojombo/gists{/gist_id}",
//           starred_url:
//             "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
//           subscriptions_url:
//             "https://api.github.com/users/mojombo/subscriptions",
//           organizations_url: "https://api.github.com/users/mojombo/orgs",
//           repos_url: "https://api.github.com/users/mojombo/repos",
//           events_url: "https://api.github.com/users/mojombo/events{/privacy}",
//           received_events_url:
//             "https://api.github.com/users/mojombo/received_events",
//           type: "User",
//           user_view_type: "public",
//           site_admin: false,
//         },
//         {
//           login: "defunkt",
//           id: 2,
//           node_id: "MDQ6VXNlcjI=",
//           avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
//           gravatar_id: "",
//           url: "https://api.github.com/users/defunkt",
//           html_url: "https://github.com/defunkt",
//           followers_url: "https://api.github.com/users/defunkt/followers",
//           following_url:
//             "https://api.github.com/users/defunkt/following{/other_user}",
//           gists_url: "https://api.github.com/users/defunkt/gists{/gist_id}",
//           starred_url:
//             "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
//           subscriptions_url:
//             "https://api.github.com/users/defunkt/subscriptions",
//           organizations_url: "https://api.github.com/users/defunkt/orgs",
//           repos_url: "https://api.github.com/users/defunkt/repos",
//           events_url: "https://api.github.com/users/defunkt/events{/privacy}",
//           received_events_url:
//             "https://api.github.com/users/defunkt/received_events",
//           type: "User",
//           user_view_type: "public",
//           site_admin: false,
//         },
//         {
//           login: "pjhyett",
//           id: 3,
//           node_id: "MDQ6VXNlcjM=",
//           avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
//           gravatar_id: "",
//           url: "https://api.github.com/users/pjhyett",
//           html_url: "https://github.com/pjhyett",
//           followers_url: "https://api.github.com/users/pjhyett/followers",
//           following_url:
//             "https://api.github.com/users/pjhyett/following{/other_user}",
//           gists_url: "https://api.github.com/users/pjhyett/gists{/gist_id}",
//           starred_url:
//             "https://api.github.com/users/pjhyett/starred{/owner}{/repo}",
//           subscriptions_url:
//             "https://api.github.com/users/pjhyett/subscriptions",
//           organizations_url: "https://api.github.com/users/pjhyett/orgs",
//           repos_url: "https://api.github.com/users/pjhyett/repos",
//           events_url: "https://api.github.com/users/pjhyett/events{/privacy}",
//           received_events_url:
//             "https://api.github.com/users/pjhyett/received_events",
//           type: "User",
//           user_view_type: "public",
//           site_admin: false,
//         },
//         {
//           login: "wycats",
//           id: 4,
//           node_id: "MDQ6VXNlcjQ=",
//           avatar_url: "https://avatars.githubusercontent.com/u/4?v=4",
//           gravatar_id: "",
//           url: "https://api.github.com/users/wycats",
//           html_url: "https://github.com/wycats",
//           followers_url: "https://api.github.com/users/wycats/followers",
//           following_url:
//             "https://api.github.com/users/wycats/following{/other_user}",
//           gists_url: "https://api.github.com/users/wycats/gists{/gist_id}",
//           starred_url:
//             "https://api.github.com/users/wycats/starred{/owner}{/repo}",
//           subscriptions_url:
//             "https://api.github.com/users/wycats/subscriptions",
//           organizations_url: "https://api.github.com/users/wycats/orgs",
//           repos_url: "https://api.github.com/users/wycats/repos",
//           events_url: "https://api.github.com/users/wycats/events{/privacy}",
//           received_events_url:
//             "https://api.github.com/users/wycats/received_events",
//           type: "User",
//           user_view_type: "public",
//           site_admin: false,
//         },
//         {
//           login: "ezmobius",
//           id: 5,
//           node_id: "MDQ6VXNlcjU=",
//           avatar_url: "https://avatars.githubusercontent.com/u/5?v=4",
//           gravatar_id: "",
//           url: "https://api.github.com/users/ezmobius",
//           html_url: "https://github.com/ezmobius",
//           followers_url: "https://api.github.com/users/ezmobius/followers",
//           following_url:
//             "https://api.github.com/users/ezmobius/following{/other_user}",
//           gists_url: "https://api.github.com/users/ezmobius/gists{/gist_id}",
//           starred_url:
//             "https://api.github.com/users/ezmobius/starred{/owner}{/repo}",
//           subscriptions_url:
//             "https://api.github.com/users/ezmobius/subscriptions",
//           organizations_url: "https://api.github.com/users/ezmobius/orgs",
//           repos_url: "https://api.github.com/users/ezmobius/repos",
//           events_url: "https://api.github.com/users/ezmobius/events{/privacy}",
//           received_events_url:
//             "https://api.github.com/users/ezmobius/received_events",
//           type: "User",
//           user_view_type: "public",
//           site_admin: false,
//         },
//       ];

//       console.log(c);
//       console.table(c);
//       console.log(JSON.stringify(c)); // Converts object to JSON string
//     </script>
//   </body>
// </html>


// let obj={
//     "id":101,
//     "name":"Aniket"
// }
// let o1=JSON.stringify(obj)
// console.log(o1);

// let o2=JSON.parse(o1)
// console.log(o2);

//!
//  ?JSON.stringify()
// Converts a JavaScript object or array into a JSON string.

// Useful for sending data over the internet (like APIs or saving to local storage).

// ? JSON.parse()
// Converts a JSON string back into a JavaScript object or array.

// Used to retrieve usable data from a string (e.g., from localStorage or API response).

// let person = {
//     name: "Aniket",
//     age: 25,
//     skills: ["JavaScript", "Java"]
// };

// let jsonString = JSON.stringify(person);
// console.log(jsonString);
// // 👉 '{"name":"Aniket","age":25,"skills":["JavaScript","Java"]}'
// console.log(typeof jsonString); // 👉 string

//? 
//! destructuring //! rest and spread  

// let arr=["honda","bmw","tesla","thar","mahindra"];

// let [a,b,c,d,,e]=arr
/// console.log(a);
// console.log(b);
// console.log('');
// console.log(d);

// console.log(e);

//?

// function addition(...container) {
  
//     let ans = container.reduce((acc, ele) => {
//         acc = acc + ele;
//         // console.log("Current Total: " + acc);
//         return acc; // ✅ MUST return
//     });

//     console.log("Final Result:", ans);
// }

// addition(10, 20, 30, 40, 50);


//?

// let add=(...container)=>{
//   let addition= container.reduce((acc,amt)=>{
//     return acc+=amt;
//   },5000)
//   console.log(addition);
// }

// add(1000,2000,3000,4000);//15000

//?


// let multi=((...con)=>{
//     console.log(con);
// })

// multi(100,200,300)

//?

// let multi=((...con)=>{
//     console.log(con);
//     let ans=con.reduce((acc,amt))
//     return acc+=amt
// },500)

// multi(100,200,300)


//?

// let obj1 = {
//     "id": 101,
//     "name": "aniket",
//     add: function () {
//         console.log(`id :${this.id}, my name is ${this.name}`);
//     }
// };

// obj1.add()

// let obj2={
//     "id":102,
//     "name":"vishal"
// }

// obj1.add.call(obj2)

//?

// let obj1 = {
//     "id": 101,
//     "name": "aniket",   
// };

// function add() {
//         console.log(`id :${this.id}, my name is ${this.name}`);
//     }


// let obj2={
//     "id":102,
//     "name":"vishal"
// }

// add.call(obj1)
// console.log(obj2);


//?
// let obj1 = {
//     "id": 101,
//     "name": "aniket",   
// };

// function add(age,address) {
//         // console.log(`id :${this.id}, my name is ${this.name} ,& age is ${age} ,& iam form ${address}`);   //or
//         console.log(`id :${obj1.id}, my name is ${obj1.name} ,& age is ${age} ,& iam form ${address}`);
// }

// // add.call(obj1,23,"karve nagar ,pune")

// let obj2={
//     "id":102,
//     "name":"vishal"
// }


// console.log(obj2,24,"jalna,431209");

