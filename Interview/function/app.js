debugger
console.log(x); //undefined
var x = 31;
console.log(x); //31

{
    console.log(x); //31 
    let x = 120;
    console.log(x); // 120
}

console.log(x); //31
function run() {
    var x = 32;
    console.log(x); // 32
}

run();
console.log(x); // 31