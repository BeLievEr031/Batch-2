const fs = require('fs');
let file = process.argv[2]


if (file === 'createfile') {
    fs.writeFile(file, '', (err) => {
        if (err) {
            console.log(err);
            return;
        }
    });
}