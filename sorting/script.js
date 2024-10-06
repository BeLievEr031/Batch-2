const arrayContainer = document.getElementById('arrayContainer');
const startButton = document.getElementById('startButton');
const swapAudio = document.getElementById('swapAudio');

let array = [];

// Function to generate a random array
function generateArray(size) {
    array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 200) + 10);
    }
    drawArray();
}

// Function to draw the array
function drawArray() {
    arrayContainer.innerHTML = '';
    array.forEach((value, index) => {
        const bar = document.createElement('div');
        bar.style.height = value + 'px';
        bar.className = 'bar';
        bar.style.backgroundColor = 'red'; // Default color
        arrayContainer.appendChild(bar);
    });
}

// Bubble sort algorithm
async function bubbleSort() {
    const len = array.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            // Change color of the bars being compared
            updateBarColor(j, 'blue'); // Color for the current bar
            updateBarColor(j + 1, 'blue'); // Color for the next bar

            if (array[j] > array[j + 1]) {
                await swap(j, j + 1);
            }

            // Reset colors after comparison
            updateBarColor(j, '#4CAF50');
            updateBarColor(j + 1, '#4CAF50');
        }
    }
}

// Function to update the color of a bar
function updateBarColor(index, color) {
    const bars = document.querySelectorAll('.bar');
    bars[index].style.backgroundColor = color;
    console.log(bars[index]);

}

// Swap function with audio
async function swap(i, j) {
    // Swap the values in the array
    [array[i], array[j]] = [array[j], array[i]];
    drawArray();

    // Play swap audio
    // swapAudio.currentTime = 0; // Reset audio
    // swapAudio.play();

    // Delay for visualization
    await new Promise(resolve => setTimeout(resolve, 200));
}

// Event listener for the start button
startButton.addEventListener('click', () => {
    generateArray(10); // Generate an array of 10 elements
    bubbleSort();
});

// Initial call to generate an array
generateArray(10);
