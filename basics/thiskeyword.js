

// console.log(this);
// console.log(window);

// let a=10;
// console.log(window.a);

console.log("-------------------------");

// console.log(this.a);

// console.log(window===this);  //true

let obj={
    fun1:function(params) {
        console.log("hello from fun1..");  
    },
    fun2:()=>{
        console.log("hello from fun2..")
        console.log(this);
    },
    fun3:()=>{
        console.log("hello from fun3..")
        console.log(this);
    }
}
console.log(obj);
console.log(obj.fun1());
console.log(obj.fun2());
console.log("------------");
// console.log(obj.fun3());
obj.fun3()





