console.log("Start");

process.nextTick(()=> {
    console.log("nextTick");
});

setTimeout(() =>{
    console.log("setTimeout");
},10000);

setImmediate(() =>{
    console.log("setImmediate");
});

console.log("End")