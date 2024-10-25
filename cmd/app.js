const fs = require("fs");

// New folder using fs/nodejs

const path = __dirname + "/timespass2"


fs.mkdir(path, { recursive: true }, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("folder created");
})

// cwd+"/timepass"

const dpath = process.cwd() + "/cmd/timespass2"

fs.rmdir(dpath, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("folder removed successfully");
})