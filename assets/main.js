var weather = new XMLHttpRequest();
weather.open("GET", "https://api.wunderground.com/api/0f3a17d20240e3cd/conditions/q/FL/orlando.json", false);
weather.send(null);

var r = JSON.parse(weather.response);

var dis = r.current_observation.display_location.full + " <p>";
var temp = r.current_observation.temperature_string + " <p>";
var wind = r.current_observation.wind_gust_mph + " MPH <p>";

function getWeather(id, res) {
  document.getElementById(id).innerHTML = res;
}
getWeather("loc", dis);
getWeather("temp", temp);
getWeather("wind", wind);
