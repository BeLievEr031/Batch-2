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


function setDateFormates() {
    const date = new Date();
    let formate4 = date.toLocaleDateString();
    const splittedF4 = formate4.split("/")

    // Month
    if (Number(splittedF4[0]) < 9) {
        splittedF4[0] = "0" + splittedF4[0]
    }

    // Date
    if (Number(splittedF4[1]) < 9) {
        splittedF4[1] = "0" + splittedF4[1]
    }


    formate4 = splittedF4.join("/");
    let formate2 = splittedF4.reverse().join("-");


    const formate3 = date.toLocaleTimeString();
    const formateElem1 = document.querySelector(".formate1")
    const formateElem2 = document.querySelector(".formate2")
    const formateElem3 = document.querySelector(".formate3")
    const formateElem4 = document.querySelector(".formate4")

    formateElem2.innerText = formate2;
    formateElem3.innerText = formate3;
    formateElem4.innerText = formate4;

    const splittedF3 = formate3.split(" ");
    const amOrpm = splittedF3[1];

    if (amOrpm === "PM") {
        const time = splittedF3[0];
        const timeArr = time.split(":")
        timeArr[0] = Number(timeArr[0]) + 12;
        formateElem1.innerText = timeArr.join(":")
    }


    formateElem1.addEventListener("click", () => {
        editor.innerHTML = editor.innerHTML + formateElem1.innerText;
    })

    formateElem2.addEventListener("click", () => {
        editor.innerHTML = editor.innerHTML + formateElem2.innerText;
    })


}

setDateFormates();