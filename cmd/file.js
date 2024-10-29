const { error } = require('console');
const fs = require('fs');

// CRUD File
const command = process.argv[2];
const fileName = process.argv[3];
const data = process.argv[4];

const cb = (err) => {
    console.log(err);
    return;
}

if (command === "createFile") {
    // if (data) {
    //     fs.writeFile(fileName, data, cb)
    // } else {
    //     fs.writeFile(fileName, "", cb)
    // }
    fs.writeFile(fileName, data ? data : "", cb)
}

if (command === "readFile") {
    fs.readFile(fileName, "utf-8", (err, data) => {

        if (err) {
            // console.log(err);
            console.log("No file found: " + fileName);

            return
        }
        console.log(data);
    })
}

if (command === "updateFile") {
    fs.appendFile(fileName, data ? data.replace(/newline/g, "\n") : "", (err) => {
        if (err) {
            // console.log(err);
            console.log("No file found: " + fileName);

            return
        }
        console.log("File updated");
    })
}

if (command === "deleteFile") {
    fs.unlink(fileName, cb)
}