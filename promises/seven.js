
//! classes

// class User{
    
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai=new User("chai","chai@123","123")
// console.log(chai);  //User { username: 'chai', email: 'chai@123', password: '123' }

// console.log(chai.encryptPassword());  //123abc
// console.log(chai.changeUserName()); //CHAI


//! behind scene
//? when we not the class syntax

function User(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
}

User.prototype.encryptPassword=function(){
     return `${this.password}abc`   
}

const tea=new User("tea","tea@123","123")
console.log(tea);  //User { username: 'chai', email: 'chai@123', password: '123' }

console.log(tea.encryptPassword()); 
// console.log(tea.changeUserName()); 

