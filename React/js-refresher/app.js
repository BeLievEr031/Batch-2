let arr = [10, 20, 30, 40, 50]
let rarr = arr.map(function (item, index, array) {
    let ans = item + index;
    if (ans % 2 == 0) {
        return true;
    }
    return 25;

})

// console.log(rarr);

let frarr = arr.filter(function (data, index, arr) {
    // console.log(index);
    // console.log(arr);

    if (data > 100) {
        return data;
    }
})

console.log(frarr);



