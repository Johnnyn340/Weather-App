const condition = document.querySelector(".condition");
const place = document.querySelector(".place");
const degree = document.querySelector(".degree");
const key = "fc2b279a4d6c496eb3600946232203";
const searchBox = document.querySelector(".search input");
const api = "http://api.weatherapi.com/v1/current.json?key=";
const error = document.querySelector(".error");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const feels = document.querySelector(".feels-like");

async function getWeather(city) {
  const response = await fetch(
    api + key + `&q=${city}"`,

    { mode: "cors" }
  );

  if (response.status == 400) {
    error.style.display = "block";
  } else {
    const weather = await response.json();
    place.innerHTML = weather.location.name;
    condition.innerHTML = weather.current.condition.text;
    degree.innerHTML = weather.current.temp_f;
    wind.innerHTML = weather.current.wind_mph;
    humidity.innerHTML = weather.current.humidity;
    feels.innerHTML = weather.current.feelslike_f;
    console.log(weather);
    error.style.display = "none";
  }
}

searchBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getWeather(searchBox.value);
  }
});
