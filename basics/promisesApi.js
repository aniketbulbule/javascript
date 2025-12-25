document.write('<h1>Prmosises API</h1>')

function fetchData1() {
    return Promise.resolve("☑️");
}

function fetchData2() {
    return Promise.resolve("☑️");
}

function fetchData3() {
    // return Promise.reject("🟥");
    return new Promise((resolve)=>{
        resolve("🙋")
    })
}

let arr = [fetchData1(), fetchData2(), fetchData3()];

Promise.all(arr)
    .then((msg) => {
        console.log("Success:", msg);
        return msg;
    })
    .then((msg) => {
        console.log("Still got:", msg);
        return msg;
    })
    .then((msg) => {
        console.log("Final:", msg);
    })
    .catch((err) => {
        console.log("Error caught:", err);
    });
