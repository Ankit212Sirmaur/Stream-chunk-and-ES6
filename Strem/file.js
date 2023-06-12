console.log("entering inside of for loop");
for(var i = 0; i<3; i++){
    console.log("entering inside setTimeout function")
    setTimeout(()=>{
        console.log(i + "coming first time");
    },2000);
    console.log("exiting from the setTimeout");
}
console.log("loop finished");