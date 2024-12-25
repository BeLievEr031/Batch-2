const vRange = document.querySelector("#v-range")
const hRange = document.querySelector("#h-range")
const box = document.querySelector(".box")
vRange.addEventListener("input", function () {
    console.log(vRange.value);
    // box.style.boxShadow = `${vRange.value}px ${hRange.value}px black`
    box.style.boxShadow = `${hRange.value}px ${vRange.value}px black`

})

hRange.addEventListener("input", function () {
    console.log(hRange.value);

    box.style.boxShadow = `${hRange.value}px ${vRange.value}px black`
})