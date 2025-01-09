function scopeTest() {
    var a = 10;
    if (true) {
        var a = 20; // Line 1
        console.log(a); // Line 2
    }
    console.log(a); // Line 3
}

scopeTest();


{
    let a = 5;
    {
        let a = 10;
        console.log(a); // Line 1
    }
    console.log(a); // Line 2
}


{
    console.log(a); // Line 1
    var a = 10;
    {
        console.log(a); // Line 2
        let a = 20;
        console.log(a); // Line 3
    }
    console.log(a); // Line 4
}


var a = 5;
{
    let a = 10;
    {
        var a = 15; // Line 1
        console.log(a); // Line 2
    }
    console.log(a); // Line 3
}
console.log(a); // Line 4


{
    let x = 10;
    {
        let x = 20;
        {
            var x = 30;
            console.log(x); // Line 1
        }
        console.log(x); // Line 2
    }
    console.log(x); // Line 3
}
