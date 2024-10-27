const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});

let filename = process.argv[2]; // Get filename from command line arguments
let content = '';

if (filename) {
    // Read existing file content if filename is provided
    fs.readFile(filename, 'utf8', (err, data) => {
        if (!err) {
            content = data;
            startEditor();
        } else {
            console.log(`Creating new file: ${filename}`);
            startEditor();
        }
    });
} else {
    console.log('Please provide a filename.');
    process.exit(1);
}

function startEditor() {
    console.clear();
    console.log(`Editing: ${filename}`);
    console.log('Press Ctrl+C to exit or type ":w" to save.');

    rl.setPrompt('> ');
    rl.prompt();

    rl.on('line', (line) => {
        if (line === ':w') {
            saveFile();
        } else {
            content += line + '\n'; // Append user input to content
        }
        rl.prompt();
    }).on('close', () => {
        saveFile();
    });
}

function saveFile() {
    fs.writeFile(filename, content, (err) => {
        if (err) {
            console.error('Error saving file:', err);
        } else {
            console.log(`File saved as: ${filename}`);
        }
        rl.close();
    });
}