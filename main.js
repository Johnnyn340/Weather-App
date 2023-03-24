const condition = document.querySelector(".condition");
const place = document.querySelector(".place");
const degree = document.querySelector(".degree");
const key = "fc2b279a4d6c496eb3600946232203";
const searchBox = document.querySelector(".search input");
const api = "http://api.weatherapi.com/v1/current.json?key=";
async function getWeather(city) {
  const response = await fetch(
    api + key + `&q=${city}"`,

    { mode: "cors" }
  );
  const weather = await response.json();
  place.innerHTML = weather.location.name;
  condition.innerHTML = weather.current.condition.text;
  degree.innerHTML = weather.current.temp_f;
  console.log(weather);
}

searchBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getWeather(searchBox.value);
  }
});
