const fs = require('fs');
let command = process.argv[2]
let file = process.argv[3]
let data = process.argv[4]


if (command === "createFile") {
    fs.writeFile(file, "", (err) => {
        if (err) {
            console.log(err);
            return
        }
        console.log(file, " file crated successfully")
    });
}
