const searchInput = document.querySelector(".search-input")

searchInput.addEventListener("focus", function () {
    searchInput.classList.add("active-blue-border");
})

searchInput.addEventListener("blur", function () {
    searchInput.classList.remove("active-blue-border");
})

const menuItems = document.querySelectorAll(".menu-item");
let currActiveLink = menuItems[3]

const headerLabel = document.querySelector(".header-label")
const icon = headerLabel.querySelector("i")
const heading = headerLabel.querySelector("h1")

const day = document.querySelector("#day")
const date = document.querySelector("#date")
const month = document.querySelector("#month")

const monthArr = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const weekArr = [
    "Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"
];

const todaysDate = new Date();

function handleDate() {
    day.innerText = weekArr[todaysDate.getDay()] + ", "
    date.innerText = todaysDate.getDate()
    month.innerText = monthArr[todaysDate.getMonth()]
}

handleDate();

function handleDateReset() {
    day.innerText = "";
    date.innerText = "";
    month.innerText = "";
}

for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function () {
        currActiveLink.classList.remove("active-menu")
        menuItems[i].classList.add("active-menu")
        heading.innerHTML = menuItems[i].querySelector("p").innerText
        currActiveLink = menuItems[i]
        heading.innerHTML === "Tasks" ? handleDate() : handleDateReset();
    })
}



const addTask = document.querySelector("#add-task")
const tasksContainer = document.querySelector(".tasks")
addTask.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
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

        circleDiv.addEventListener("click", function () {
            console.log("task completed");
        })

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

const colorPickerBox = document.querySelector(".color-picker-box");

const headerDataContainer = document.querySelector(".header-data-cont")



for (let i = 0; i < neonColors.length; i++) {
    const colorDiv = document.createElement("div");
    colorDiv.classList.add("color")
    colorDiv.style.backgroundColor = neonColors[i];
    colorDiv.style.cursor = "pointer";
    colorDiv.addEventListener("click", function () {
        headerDataContainer.style.color = neonColors[i];
        for (let j = 0; j < menuItems.length; j++) {
            menuItems[j].style.color = neonColors[i]
        }
    })



    colorContainer.append(colorDiv)
}


const colorMenuOpener = document.querySelector("#color-menu-opener")
let isColorPickerOpen = false;

colorMenuOpener.addEventListener("click", function () {
    if (isColorPickerOpen === false) {
        colorPickerBox.style.display = "block";
    } else {
        colorPickerBox.style.display = "none";
    }

    isColorPickerOpen = !isColorPickerOpen;
})


document.addEventListener("keydown", function (e) {

    if (e.ctrlKey && e.key === "q" || e.key === "Q") {
        if (isColorPickerOpen === false) {
            colorPickerBox.style.display = "block";
        } else {
            colorPickerBox.style.display = "none";
        }

        isColorPickerOpen = !isColorPickerOpen;

    }
})

const onClickOutside = (element) => {
    document.addEventListener('click', e => {

        // console.log(element.contains(e.target));

        if (!element.contains(e.target) && isColorPickerOpen === true) {
            if (isColorPickerOpen === false) {
                colorPickerBox.style.display = "block";
            } else {
                colorPickerBox.style.display = "none";
            }
            isColorPickerOpen = !isColorPickerOpen;
        };
    });
};

onClickOutside(colorMenuOpener); // feature for me
// onClickOutside(colorPickerBox);// will remove the bug









