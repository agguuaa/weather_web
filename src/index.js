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
  degrees.innerHTML = `${temp}`;
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = response.data.name;
}

function tempCF(response) {
  let;
}

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
