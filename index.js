const API_KEY = "e2a8c7e4832dbeb6516dd29dd11b6b05"

function handleFormSubmit(event) 
  {event.preventDefault()
  const input = document.getElementById('city')
  const value = input.value
  
  
  fetch('http://api.openweathermap.org/data/2.5/weather?q=' +value + `&APPID=${API_KEY}&units=imperial`)
  .then(response => response.json())
  .then(responseJSON => displayCurrentWeather(responseJSON))

  }
  


function fetchCurrentWeather(city) {
  //fetch current weather based on city
}

function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
const mainData = json.main
const temp = document.getElementById('temp')
const low = document.getElementById('low')  
const high = document.getElementById('high') 
const humidity = document.getElementById('humidity')
const cloudcover = document.getElementById('cloudcover')

temp.innerHTML = mainData.temp
low.innerHTML = mainData.temp_min
high.innerHTML = mainData.temp_max
humidity.innerHTML = mainData.humidity + '%'
cloudCover.innerHTML = json.clouds.all + '%'
  
  
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + city +`&APPID=${API_KEY}&units=imperial`)
    .then(response => response.json())
    .then(responseJSON => {displayFiveDayForecast(responseJSON)
})
.then(responseJSON => createChart(responseJSON))
}


function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
console.log(json)
  const forecast = json.list
  const aside = document.querySelector('aside')
  const counter = 0
  const averageTemp = 0
  forecast.forEach((eachForecastItem) => 
    counter++)
    lowAverageTemp += eachForecastItem.main.temp_min
    highAverageTemp += eachForecastItem.main.temp_max
    if (counter ===8) 
  
    counter = 0
    const div = document.createElement('div')
    div.innerHTML `<p>${eachForecastItem.dt_txt}</p>
    <p>${Math.floor(lowaverageTemp / 8)}</p>
    <p>${Math.floor(highAverageTemp / 8)}</p>`
    lowaverageTemp = 0
    highAverageTemp = 0
    aside.appendChild(div)

  
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
  const ctx = document.getElementById("weatherChart").getContext('')
  const labels = json.list.map((increment) => increment.dt.txt) 
  console.log(labels)
  const data = json.list.map((increment) => increment.main.temp)
  var myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    backgroundcolor: [
      'rgba(255, 99, 132,0.2']
  })
}

document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
  document.getElementById('cityForm').addEventListener('submit', handleFormSubmit)
})
