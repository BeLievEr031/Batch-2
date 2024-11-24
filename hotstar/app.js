// const carousal = document.querySelector('.carousal-cont');

// // Scroll to the left
// document.querySelector('.scroll-left').addEventListener('click', () => {
//     const totalScrollWidth = carousal.scrollWidth;
//     console.log(totalScrollWidth);

//     carousal.scrollBy({ left: -Math.ceil(totalScrollWidth / 2) + 40, behavior: 'smooth' });
// });

// // Scroll to the right
// document.querySelector('.scroll-right').addEventListener('click', () => {
//     const totalScrollWidth = carousal.scrollWidth;
//     console.log(totalScrollWidth);

//     carousal.scrollBy({ left: Math.ceil(totalScrollWidth / 2) + 40, behavior: 'smooth' });
// });


const carousalCont = document.querySelector(".carousal-cont")
const leftBtn = document.querySelector(".scroll-left")
const rightBtn = document.querySelector(".scroll-right")

rightBtn.addEventListener("click", () => {
    const scrollWidth = carousalCont.scrollWidth + 100;
    carousalCont.scrollBy({ left: Math.ceil(scrollWidth / 2), behavior: "smooth" });
})

leftBtn.addEventListener("click", () => {
    const scrollWidth = carousalCont.scrollWidth + 100;
    carousalCont.scrollBy({ left: -Math.ceil(scrollWidth / 2), behavior: "smooth" });
})



let delay = 1000;
let timeout = null;
const box1 = document.querySelector(".box1")
const p = document.querySelector('.box1 p')

box1.addEventListener("mouseenter", function () {
    timeout = setTimeout(() => {
        box1.style.transform = "scale(1.5)"
        p.style.display = "block"
    }, delay);

})
box1.addEventListener("mouseleave", function () {
    console.log("mouse leave");
    box1.style.transform = "scale(1)"
    p.style.display = "none"
    clearTimeout(timeout);

})