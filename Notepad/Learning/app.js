const getRange = document.querySelector('#get-selection-range')
const bold = document.querySelector('b')
const italic = document.querySelector('i')
const underline = document.querySelector('u')

getRange.addEventListener('mousedown', (event) => {
    event.preventDefault();
    const selectedText = window.getSelection().toString();
    if (selectedText) {
        alert(`Selected text: ${selectedText}`);
    } else {
        alert('No text selected');
    }
})

bold.addEventListener('mousedown', (event) => {
    event.preventDefault();
    const selection = window.getSelection();
    if (!selection.rangeCount) {
        alert('No text selected');
        return;
    }

    const range = selection.getRangeAt(0); // Get the selected range
    const selectedText = range.toString();

    if (selectedText.trim()) {
        // Create a span element
        const span = document.createElement('span');
        span.className = 'bold'; // Add a CSS class (optional)
        span.textContent = selectedText;

        // Replace the selected text with the span element
        range.deleteContents();
        range.insertNode(span);

        // Clear the selection
        selection.removeAllRanges();
    } else {
        alert('Please select some text to wrap.');
    }
})

italic.addEventListener('mousedown', (event) => {
    event.preventDefault();


})

underline.addEventListener('mousedown', (event) => {
    event.preventDefault();


})


document.addEventListener('selectionchange', () => {
    const selection = window.getSelection();

    // Ensure there is a selection
    if (!selection.rangeCount) {
        return;
    }

    // Get the selected range
    const range = selection.getRangeAt(0);

    // Find the parent element of the selection
    const parentElement = range.commonAncestorContainer.nodeType === 1
        ? range.commonAncestorContainer
        : range.commonAncestorContainer.parentNode;

    // Check if the parent element is a <span> or contains a <span>
    const span = parentElement.closest('span');

    if (span) {
        console.log(`Selected span content: ${span.textContent}`);
    } else {
        console.log('The selection is not inside a span.');
    }
});