//! Prototype 
// let myName="Aniket  ";
// console.log(myName.truelength);  //undefined

// console.log(myName.trim().length);
//? but each time we can write like that for i want truelength bit not property but in function

let MyHero=["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`spider man power is ${this.spiderman}`);
    }
}
// console.log(heroPower);
// console.log(heroPower.getSpiderPower());


// heroPower.aniket();//! not name in prototype but we can inject

Object.prototype.aniket=function(){
    console.log("aniket is present in all objects");   
}

Array.prototype.heyAniket=function(){
    console.log("aniket says hello");
}

// heroPower.aniket() //work -->aniket is present in all objects
MyHero.aniket()
MyHero.heyAniket()
// heroPower.heyAniket()  //X 