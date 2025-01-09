{
    let a = 10;
    console.log(a); // Line 1
}
console.log(a); // Line 2

{
    var b = 20;
    console.log(b); // Line 1
}
console.log(b); // Line 2


console.log(a); // Line 1
{
    let a = 30;
    console.log(a); // Line 2
}


{
    const x = 50;
    console.log(x); // Line 1
}
console.log(x); // Line 2
