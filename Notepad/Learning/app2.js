let editorState = {
    blocks: [
        { type: "paragraph", text: "", styles: [] }
    ]
};

// Reference to the editor div
const editor = document.getElementById('editor');
const bold = document.querySelector("b")

const blockObj = {

}

let blockNum = 0;

editor.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        setTimeout(() => {
            const allDiv = editor.querySelectorAll("div")
            // console.log(allDiv);
            blockObj[blockNum] = allDiv[allDiv.length - 2];
            blockNum++;
        }, 1000)
    }

})

bold.addEventListener("mousedown", (e) => {
    e.preventDefault();
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const startContainer = range.startContainer;
    const startOffset = range.startOffset;
    const endContainer = range.endContainer;
    const endOffset = range.endOffset;

    // const selectionLength = endOffset - startOffset;
    console.log("Length of selected data: ", selection.toString().length);

    // Traverse up the DOM tree to find the block-level element (like div or p)
    console.log(range);

    // if () {

    //     const selectedBlock = findContainingBlock(startContainer);
    //     const blockIndex = getBlockIndex(selectedBlock);
    // }
    console.log(blockIndex);
    if (selectedBlock) {
        console.log(`Selected Line: "${selectedBlock.textContent.trim()}"`);
    } else {
        console.log('No valid selection or block found!');
    }

    console.log(editorState);

})

function getBlockIndex(block) {
    const editor = document.getElementById('editor');
    const blocks = Array.from(editor.children);
    return blocks.indexOf(block);
}

function findContainingBlock(node) {
    while (node && node !== document) {
        // Check if it's a block element (e.g., div, p)
        if (node.nodeType === Node.ELEMENT_NODE && (node.tagName === "DIV" || node.tagName === "P")) {
            return node;
        }
        node = node.parentNode;
    }
    return null; // Return null if no block-level element is found
}
// Update editor content on keyup or input event
editor.addEventListener("input", updateEditorState);

// Get the block index based on the cursor position
function getCurrentBlockIndex(range) {
    const block = range.startContainer.closest('[contenteditable="true"]');
    return Array.from(editor.children).indexOf(block);
}

// Update the editor state based on the contenteditable input
function updateEditorState() {
    const content = editor.innerText;
    const blocks = content.split('\n').filter((text) => {
        if (text.trim().length > 0) {
            return {
                type: 'paragraph',
                text: text,
                styles: [] // No styles applied yet
            }
        }
    });

    editorState.blocks = blocks;

    console.log(editorState);

    // renderEditor();
}

// Render the editor based on the JSON state
function renderEditor() {
    editor.innerHTML = ""; // Clear the editor

    editorState.blocks.forEach(block => {
        let blockHTML = block.text;

        // Apply styles to the block text
        block.styles.forEach(({ offset, length, style }) => {
            const styledText = block.text.slice(offset, offset + length);
            blockHTML = blockHTML.slice(0, offset) +
                `<span class="${style}">${styledText}</span>` +
                blockHTML.slice(offset + length);
        });

        const blockDiv = document.createElement("div");
        blockDiv.innerHTML = blockHTML; // Render styled text
        editor.appendChild(blockDiv);
    });
}

// Initial render of the editor
// renderEditor();
