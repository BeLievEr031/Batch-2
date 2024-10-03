const searchInput = document.querySelector(".search-input")

searchInput.addEventListener("focus", function () {
    searchInput.classList.add("active-blue-border");
})

searchInput.addEventListener("blur", function () {
    searchInput.classList.remove("active-blue-border");
})

const addTask = document.querySelector("#add-task")
const tasksContainer = document.querySelector(".tasks")
addTask.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        console.log(addTask.value);

        // <div class="task-container">
        //     <div class="circle"></div>
        //     <div class="taks">My first task</div>
        // </div>

        const taskContainerDiv = document.createElement("div")
        taskContainerDiv.classList.add("task-container")

        const circleDiv = document.createElement("div")
        circleDiv.classList.add("circle")

        const taskDiv = document.createElement("div")
        taskDiv.classList.add("task")
        taskDiv.innerText = addTask.value

        taskContainerDiv.appendChild(circleDiv)
        taskContainerDiv.appendChild(taskDiv)

        tasksContainer.appendChild(taskContainerDiv)

        addTask.value = "";

    }
})

// const colorDiv = document.querySelectorAll(".colors-container div")

// for (let i = 0; i < colorDiv.length; i++) {
//     let color = colorDiv[i].id
//     console.log(color);

//     colorDiv[i].style.backgroundColor = "#" + color;
// }

const neonColors = [
    '#39FF14', '#FF6EC7', '#FF2B00', '#00FFFF', '#FF00FF',
    '#FFEA00', '#4D4DFF', '#FFFF33', '#FF9F00', '#FF00CC',
    '#00FF7F', '#FF4F00', '#FF1493', '#A700FF', '#00BFFF',
    '#FFD700', '#DFFF00', '#FF007F', '#7FFF00', '#FF00FF',
    '#00FFFF', '#FF8C00', '#BFFF00', '#FF69B4', '#FF4500',
]

const colorContainer = document.querySelector(".colors-container");

for (let i = 0; i < neonColors.length; i++) {
    const colorDiv = document.createElement("div");
    colorDiv.classList.add("color")
    colorDiv.style.backgroundColor = neonColors[i]
    colorContainer.append(colorDiv)
}

