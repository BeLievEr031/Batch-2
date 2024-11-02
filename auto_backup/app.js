const chokidar = require('chokidar');
const path = require('path');
const fs = require('fs');
// Define the paths
const watchPath = path.join(process.cwd(), '../'); // Current directory to watch
const ignorePath = [process.cwd(), path.join(process.cwd(), '../automation'), path.join(process.cwd(), '../.git'), path.join(process.cwd(), '../backup'),]; // Path to ignore

const watcher = chokidar.watch(watchPath, {
    ignored: ignorePath,
    persistent: true,
});

watcher.on("addDir", function (dir) {
    const dirNameForBackup = dir.split(watchPath)[1];
    const dirToBeBackUp = path.join(watchPath, `backup/${dirNameForBackup}`);
    if (!fs.existsSync(dirToBeBackUp)) {
        fs.mkdirSync(dirToBeBackUp, { recursive: true }, function () {
            console.log(`Created backup directory for ${dirNameForBackup}`);
        });

        fs.readdirSync(dir).forEach(file => {
            fs.copyFile(path.join(dir, file), path.join(dirToBeBackUp, file), (err) => {
                if (err) {
                    console.error('Error copying file:', err);
                } else {
                    console.log('File copied successfully!');
                }
            });
        });

    }
});




