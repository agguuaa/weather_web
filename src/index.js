let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let daySpace = document.querySelector("#daySpace");
let day = days[now.getDay()];

let timeSpace = document.querySelector("#timeSpace");

daySpace.innerHTML = `${day}`;
timeSpace.innerHTML = `${hours}:${minutes}`;

//
function showPosition(position) {
  let city = document.querySelector("currentPosition");
  city.innerHTML = `Your latitude is ${position.coords.longtitude} and your longtitude is ${position.coords.longtitude}`;
}

function getForecast(coordinates) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function getCurrentPosition() {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}
let button = document.querySelector("#currentPosition");
button.addEventListener("click", getCurrentPosition);

//Search city and display city name & current temp
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

//Show temperature
function showTemp(response) {
  let temp = Math.round(response.data.main.temp);
  let degrees = document.querySelector("#current-temperature");
  degrees.innerHTML = `${temp} °C|°F`;
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = response.data.name;
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/10d@2x.png`
  );
}
