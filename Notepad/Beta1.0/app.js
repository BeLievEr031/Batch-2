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
    </html>
            `);

    printWindow.document.close();
    printWindow.print();
    printWindow.onafterprint = function () {
        printWindow.close();
    };

    // Fallback mechanism in case `onafterprint` doesn't work
    setTimeout(() => {
        if (!printWindow.closed) {
            printWindow.close();
        }
    }, 1);

})