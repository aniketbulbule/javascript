

// console.log("start");

// setTimeout(function(){
//     console.log("js");
// },500)
// console.log("end");

//! Callback Hell happens when you use too many nested callback functions, one inside another — usually in asynchronous code — making it:
const cart=["shoes","pants","kurta"]

api.createOrder(cart,function (){

    api.proceedToPayment(function(){

        api.showOrderSummry(function(){

            api.updateWallet()

        })

    })
})







