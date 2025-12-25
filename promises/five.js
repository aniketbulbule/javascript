
//! inheritance
//? we can acess the property of anothors
const User={
    name:"chai",
    email:"chai@com"
}

const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:"js assignment",
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=User

//!Modern way/syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

//----
let name="chaiaurcode  "

String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is : ${this.trim().length}`);
}
name.trueLength()
// console.log(name.trueLength());
"aniket".trueLength()
