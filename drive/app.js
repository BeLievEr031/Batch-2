const addBtn = document.querySelector("#add-btn")
const main = document.querySelector(".main")

let folderCount = 1;
addBtn.addEventListener("click", function () {
    //     <div class="folder">
    //     <i data-feather="folder" width="100" height="100"></i>
    //     <p>Folder1</p>
    //   </div>

    const folderDiv = document.createElement("div");
    folderDiv.classList.add("folder")

    folderDiv.innerHTML = `
        <svg xmlns = "http://www.w3.org/2000/svg" width = "100" height = "100" viewBox = "0 0 24 24" fill = "none" stroke = "currentColor" stroke - width="2" stroke - linecap="round" stroke - linejoin="round" class="feather feather-folder" > <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>`

    const p = document.createElement("p");
    p.innerText = `Folder ${folderCount} `;

    folderDiv.appendChild(p);

    main.appendChild(folderDiv)
    folderCount += 1;
})



{/* <p>Folder1</p> */ }
