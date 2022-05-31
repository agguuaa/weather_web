function showTemp(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#current-temp");
  celciusTemperature = response.data.main.temp;
  temperatureElement.innerHTML = Math.round(celciusTemperature);
}

function searchEngine(city) {
  let apiKey = "af683468eb6c609597efb70857e6314f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemp);
}

//Show city name
function showCity(event) {
  event.preventDefault();
  let city = document.querySelector("#searchQueryInput");
  let cityName = document.querySelector("#current-city");
  event.preventDefault();
  cityName.innerHTML = `${city.value}`;
  searchEngine(city.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", showCity);

function formatDate(timestamp) {
  let now = new Date(timestamp);

  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[Date.getDay()];
  return `${day} ${getHours}:${getMinutes}`;

  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
}

//function displayTemperature(response) {
//let temperatureElement = document.querySelector("#current-temperature");
//let cityElement = document.querySelector("#current-city");
//let descriptionElement = document.querySelector("#description");
//let humidityElement = document.querySelector("#humidity");
//let windElement = document.querySelector("#wind");
//let dateElement = document.querySelector("#date");
//let iconElement = document.querySelector("#icon");

//celsiusTemperature = response.data.main.temp;

//temperatureElement.innerHTML = Math.round(celsiusTemperature);
//cityElement.innerHTML = response.data.name;
//descriptionElement.innerHTML = response.data.weather[0].description;
//humidityElement.innerHTML = response.data.main.humidity;
//windElement.innerHTML = Math.round(response.data.wind.speed);
//dateElement.innerHTML = formatDate(response.data.dt * 1000);
//iconElement.setAttribute("src", `https://openweathermap.org/img/wn/01d.png`);
//iconElement.setAttribute("alt", response.data.weather[0].description);

//getForecast(response.data.coord);
//}
