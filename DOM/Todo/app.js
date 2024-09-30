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