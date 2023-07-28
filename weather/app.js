const city = document.querySelector('input')
const btn = document.querySelector('button')
const key = '82adbb50504fd730e8fe20e81d2da955'
let cityName = document.querySelector('.city')
let clouds = document.querySelector('.clouds')
let sky = document.querySelector('.sky')
let image = document.querySelector('img')
let temp = document.querySelector('.temp')
let minTemp = document.querySelector('.min')
let maxTemp = document.querySelector('.max')
let result = document.querySelector('.result')

const getWeather = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${key}`

    if(city.value.length == 0) {
        result.innerHTML = `<h3>Please enter a city name</h3>`
        return
    }

    fetch(url)
    .then(data => data.json())
    .then(item => {
        result.innerHTML = `
        <h1 class="city">${(item.name).toUpperCase()}</h1>
        <p class="clouds">${item.weather[0].main}</p>
        <p class="sky">${item.weather[0].description}</p>
        <img src="https://openweathermap.org/img/w/${item.weather[0].icon}.png" alt="">
        <h1 class="temp">${(item.main.temp - 273.15).toFixed(2) + '°'}</h1>
        <div>
            <p><span>min</span><span class="min">${(item.main.temp_min - 273.15).toFixed(2) + '°'}</span></p>
            <p><span>max</span><span class="max">${(item.main.temp_max - 273.15).toFixed(2) + '°'}</span></p>
        </div>
        `
        city.value = ''
    })
    .catch(err => {
        result.innerHTML = `<h3>Please enter a valid city name</h3>`
        city.value = ""
    })
}
btn.addEventListener('click', getWeather)


window.addEventListener('load', getWeather)