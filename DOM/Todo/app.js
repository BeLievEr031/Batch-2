const searchInput = document.querySelector(".search-input")

searchInput.addEventListener("focus", function () {
    searchInput.classList.add("active-blue-border");
})

searchInput.addEventListener("blur", function () {
    searchInput.classList.remove("active-blue-border");
})