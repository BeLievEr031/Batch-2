const undoStk = [];
const redoStk = [];

function PUSH(data, stack) {
    stack.push(data);
}

function POP(stack) {
    return stack.pop();
}

function SIZE(stack) {
    return stack.length;
}

function PEEK(stack) {
    return stack[stack.length - 1];
}

const addBtn = document.querySelector(".addBtn")
const main = document.querySelector(".main")
let ct = 1;
addBtn.addEventListener("click", function () {
    const boxDiv = document.createElement("div")
    boxDiv.classList.add("box")
    boxDiv.innerHTML = ct;
    main.appendChild(boxDiv)
    PUSH(boxDiv, undoStk);

    ct++;

})


const undoBtn = document.querySelector(".undoButton")
const redoBtn = document.querySelector(".redoButton")
undoBtn.addEventListener("click", function () {
    if (SIZE(undoStk) > 0) {
        const lastBox = PEEK(undoStk);
        PUSH(lastBox, redoStk);
        POP(undoStk);
        lastBox.remove();
    }
})


redoBtn.addEventListener("click", function () {

    if (SIZE(redoStk) > 0) {
        const lastBox = PEEK(redoStk);
        PUSH(lastBox, undoStk);
        POP(redoStk);
        main.appendChild(lastBox);
    }
})