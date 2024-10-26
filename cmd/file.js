const fs = require('fs');

const filePath = __dirname + "/magic.txt"
// fs.readFile(filePath, 'utf8', function (err, data) {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     // console.log(String(data)); without UTF-8
//     console.log(data);
//     console.log("file read.");

// });

// fs.appendFile(filePath, "\ni am a magic.", function (err) {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log("file updated.");

// })

fs.unlink(filePath, function (err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log("file deleted.");

})