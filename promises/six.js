
//! call and this

function setUserName(username){
    this.username=username
    console.log("called");
    
}
 
function createUser(username,email,password){
    setUserName(username)
    // this.username=username   //!when we do this then it will worl console.log(chai)
    //! to hold variable refrence we use 
    setUserName.call(this.username)
    this.email=email
    this.password=password
}

const chai=new createUser("chai","chai@123","123");
console.log(chai);//createUser { email: 'chai@123', password: '123' }  //!nor sert username

