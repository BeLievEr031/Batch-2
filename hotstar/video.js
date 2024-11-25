const video = document.querySelector("video")
const playBtn = document.querySelector("#play")
const pauseBtn = document.querySelector("#pause")
const skipp5Btn = document.querySelector("#skipp5")
const speed2Btn = document.querySelector("#speed2")
const progress = document.querySelector("#progress")
const totalTime = document.querySelector("#totalTime")
const currTime = document.querySelector("#currTime")

let duration;
let prevWidth = 0;
playBtn.addEventListener("click", function () {
    console.log(video.duration);
    duration = Math.ceil(video.duration);
    totalTime.innerHTML = duration;
    video.play();
})


pauseBtn.addEventListener("click", function () {
    video.pause();
})

skipp5Btn.addEventListener("click", function () {
    video.currentTime = video.currentTime + 5;
})

speed2Btn.addEventListener("click", function () {
    video.playbackRate = 2;
})

video.addEventListener("timeupdate", function () {
    console.log((video.currentTime / duration) * 100);
    const width = (video.currentTime / duration) * 100;

    // prevWidth += (100 / duration);
    // console.log(prevWidth);
    currTime.innerHTML = Math.ceil(video.currentTime);
    progress.style.width = width + "%";
})

