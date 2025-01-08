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

const specialCharacters = [
    // Common punctuation and symbols
    { char: '"', description: 'Double Quote' },
    { char: '¢', description: 'Cent Symbol' },
    { char: '€', description: 'Euro Symbol' },
    { char: '£', description: 'Pound Symbol' },
    { char: '¥', description: 'Yen Symbol' },
    { char: '©', description: 'Copyright Symbol' },
    { char: '®', description: 'Registered Trademark' },
    { char: '™', description: 'Trademark Symbol' },
    { char: '%', description: 'Percent Symbol' },
    { char: '¶', description: 'Pilcrow Sign' },
    { char: '§', description: 'Section Sign' },
    { char: '•', description: 'Bullet Point' },
    { char: '°', description: 'Degree Symbol' },
    { char: '±', description: 'Plus-Minus Sign' },
    { char: '×', description: 'Multiplication Sign' },
    { char: '÷', description: 'Division Sign' },
    { char: '√', description: 'Square Root Symbol' },
    { char: '∞', description: 'Infinity Symbol' },
    { char: '≈', description: 'Approximately Equal Symbol' },
    { char: '≠', description: 'Not Equal Symbol' },
    { char: '≤', description: 'Less Than or Equal Symbol' },
    { char: '≥', description: 'Greater Than or Equal Symbol' },

    // Arrows
    { char: '←', description: 'Left Arrow' },
    { char: '↑', description: 'Up Arrow' },
    { char: '→', description: 'Right Arrow' },
    { char: '↓', description: 'Down Arrow' },

    // Mathematical symbols
    { char: 'Σ', description: 'Summation Symbol' },
    { char: '∫', description: 'Integral Symbol' },
    { char: '∂', description: 'Partial Differential Symbol' },

    // Shapes and suits
    { char: '♠', description: 'Spade Suit' },
    { char: '♥', description: 'Heart Suit' },
    { char: '♦', description: 'Diamond Suit' },
    { char: '♣', description: 'Club Suit' },

    // Quotation marks and brackets
    { char: '“', description: 'Left Double Quote' },
    { char: '”', description: 'Right Double Quote' },
    { char: '«', description: 'Left Guillemet' },
    { char: '»', description: 'Right Guillemet' },

    // Miscellaneous symbols
    { char: 'µ', description: 'Micro Symbol' },
    { char: 'ß', description: 'Eszett (Sharp S)' },
    { char: '¶', description: 'Pilcrow (Paragraph Symbol)' },
    { char: '§', description: 'Section Symbol' },

    // Fractions
    { char: '¼', description: 'One-Quarter Fraction' },
    { char: '½', description: 'One-Half Fraction' },
    { char: '¾', description: 'Three-Quarters Fraction' },

    // Greek letters
    { char: 'α', description: 'Alpha' },
    { char: 'β', description: 'Beta' },
    { char: 'γ', description: 'Gamma' },
    { char: 'δ', description: 'Delta' },
    { char: 'θ', description: 'Theta' },
    { char: 'λ', description: 'Lambda' },
    { char: 'π', description: 'Pi' },
    { char: 'σ', description: 'Sigma' },
    { char: 'φ', description: 'Phi' },
    { char: 'Ω', description: 'Omega' }
];

const charactersDiv = document.querySelector(".characters")
const symbol = document.querySelector(".symbol")
const desc = document.querySelector(".desc")
const specialCharModal = document.querySelector(".special-char-pop-modal")

function populateSpecialChar() {


    for (let i = 0; i < specialCharacters.length; i++) {
        const charDiv = document.createElement("div")
        charDiv.classList.add("char")
        charDiv.textContent = specialCharacters[i].char;
        charDiv.setAttribute("description", specialCharacters[i].description)
        charactersDiv.append(charDiv)

        charDiv.addEventListener("mousemove", () => {
            symbol.innerText = charDiv.textContent;
            desc.innerText = charDiv.getAttribute("description");
        })

        charDiv.addEventListener("click", () => {
            editor.innerHTML += charDiv.textContent;
            specialCharModal.classList.remove("open-popup")
        })
    }
}

populateSpecialChar();
const spclChar = document.querySelector("#spcl-char")
spclChar.addEventListener("click", () => {
    specialCharModal.classList.add("open-popup")
})

const closePopBtn = document.querySelector(".close-btn")

closePopBtn.addEventListener("click", () => {
    specialCharModal.classList.remove("open-popup")
})

const fullScreenBtn = document.querySelector("#full-scr")
fullScreenBtn.addEventListener("click", openFullScreen)

function openFullScreen() {
    const elem = document.querySelector("html");
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    }
}

