const input = document.querySelector("input")
const btn = document.querySelector("button");
const cityElement = document.querySelector('.city');
const tempElement = document.querySelector('.temp');
const hummElement = document.querySelector('.humm');
const descElement = document.querySelector('.desc');
const box = document.querySelector('.box');


const API_KEY = "a2e174ce878fe924bf7a8e4d6ab13356";
const date = new Date(1734053680)
console.log(date.toLocaleTimeString())

btn.addEventListener("click", () => {
    const city = input.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            box.style.display = "block";
            cityElement.innerText = city + " " + `(${data.sys.country})`;
            tempElement.innerText = Math.round(data.main.temp - 273) + "°C";
            hummElement.innerText = data.main.humidity + "%";
            descElement.innerText = data.weather[0].description;



        })
        .catch(function (err) {
            console.log(err);
        })
})

