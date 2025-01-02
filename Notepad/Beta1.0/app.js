const fileInput = document.querySelector("#file-input")
const editor = document.querySelector("#editor")
fileInput.addEventListener("change", function (e) {
    editor.innerHTML = "";
    const file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsText(file);

    const pre = document.createElement("pre");

    reader.onload = function () {
        pre.innerText = reader.result;
    };

    reader.onerror = function () {
        console.log(reader.error);
    };

    editor.appendChild(pre)
})

const printBtn = document.querySelector("#print")

printBtn.addEventListener('click', function () {
    const printWindow = window.open("", "", "width=800,height=600");
    printWindow.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      ${editor.innerHTML}
    </body>
    </html>`);

    printWindow.document.close();
    printWindow.print();
    printWindow.onafterprint = function () {
        printWindow.close();
    };

    if (!printWindow.closed) {
        printWindow.close();
    }
})

const saveBtn = document.querySelector("#save");

saveBtn.addEventListener('click', () => {
    const content = editor.textContent;
    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.download = 's.txt';
    link.href = URL.createObjectURL(blob);
    console.log(link.href);

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
})

const copyBtn = document.querySelector("#copy")

copyBtn.addEventListener("mousedown", (e) => {
    e.preventDefault();
    const selection = window.getSelection();
    const selectedData = selection.toString();
    navigator.clipboard.writeText(selectedData);

    selection.removeAllRanges();
})

const cutBtn = document.querySelector("#cut")

cutBtn.addEventListener("mousedown", (e) => {
    e.preventDefault();
    const selection = window.getSelection();
    const selectedData = selection.toString();
    navigator.clipboard.writeText(selectedData)

    if (!selection.isCollapsed) {
        const range = selection.getRangeAt(0);
        range.deleteContents();
    }

})

const pasteBtn = document.querySelector("#paste");
pasteBtn.addEventListener("mousedown", async (e) => {
    e.preventDefault();
    try {
        const text = await navigator.clipboard.readText();
        editor.innerHTML += text; // Append the text to the textarea

        console.log(text);

    } catch (err) {
        console.error('Failed to read clipboard content:', err);
    }

})