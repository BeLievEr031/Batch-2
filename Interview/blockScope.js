debugger
var x = 45;
{
    var x = 50;
    {
        console.log(x);
        var x = 95
        function run() {
            var x = 102;
            var x = 7454;
            console.log(x);
        }
        var x = 689;
        console.log(x);
        var x = 63;
        run();
    }
    console.log(x);
}

console.log(x);

