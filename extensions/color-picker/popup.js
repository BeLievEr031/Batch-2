const btn = document.getElementById('pickColor');
btn.addEventListener('click', () => pickColor());

function pickColor() {
    chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => {
                pickColorFromPage();
            },
        });
    });
}

function pickColorFromPage() {
    console.log(4545454);
}

