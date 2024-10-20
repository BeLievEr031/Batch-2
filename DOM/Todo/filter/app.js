const input = document.querySelector("input")
const taskMainContainer = document.querySelector(".main")
let taskArr = [];
let idCount = 0;
input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        // <div class="task-container">
        //     <div class="circle"></div>
        //     <div class="task">Task 1</div>
        // </div>

        const taskContainerDiv = document.createElement("div")
        taskContainerDiv.classList.add("task-container")

        const circleDiv = document.createElement("div")
        circleDiv.classList.add("circle")


        const taskDiv = document.createElement("div")
        taskDiv.classList.add("task")
        taskDiv.innerText = input.value

        taskContainerDiv.appendChild(circleDiv)
        taskContainerDiv.appendChild(taskDiv)

        taskMainContainer.appendChild(taskContainerDiv);

        let obj = {
            id: idCount,
            task: input.value,
            status: false
        }

        taskArr.push(obj)
        console.log(taskArr);

        // for completing task
        circleDiv.addEventListener("click", () => {
            // console.log(obj.id);
            updateCompletedTask(obj.id)
        })

        idCount++;
        input.value = ""
    }

})


function updateCompletedTask(id) {


    taskArr[id].status = true;
    taskMainContainer.innerHTML = ""
    for (let i = 0; i < taskArr.length; i++) {
        if (taskArr[i].status === false) {
            const taskContainerDiv = document.createElement("div")
            taskContainerDiv.classList.add("task-container")

            const circleDiv = document.createElement("div")
            circleDiv.classList.add("circle")


            const taskDiv = document.createElement("div")
            taskDiv.classList.add("task")
            taskDiv.innerText = taskArr[i].task

            taskContainerDiv.appendChild(circleDiv)
            taskContainerDiv.appendChild(taskDiv)
            taskMainContainer.appendChild(taskContainerDiv);

            // for completing task
            circleDiv.addEventListener("click", () => {
                // console.log(i);
                updateCompletedTask(i);
            })
        }
    }
}