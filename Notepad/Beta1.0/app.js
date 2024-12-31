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
