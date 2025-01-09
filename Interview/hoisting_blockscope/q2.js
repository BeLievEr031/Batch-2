function hoistingExample() {
    console.log(a); // Line 1
    console.log(b); // Line 2
    var a = 10;
    let b = 20;
    {
        var c = 30;
        let d = 40;
        console.log(c); // Line 3
        console.log(d); // Line 4
    }
    console.log(c); // Line 5
    console.log(d); // Line 6
}

hoistingExample();
