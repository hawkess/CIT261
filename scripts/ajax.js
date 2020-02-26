function ajaxTest() {
  city = document.getElementById("city").value;
  key = document.getElementById("api-key").value;
  requestWeather(city, key);
}

function parseWeather(response) {
  var weather = JSON.parse(response);
  var display = document.getElementById("ajax-content");
  display.innerHTML += weather.name + ": " + weather.main.temp + "&#176;F, " + weather.description;
}

function requestWeather(city, key) {
  var xhttp = new XMLHttpRequest();
  var uri = "api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + key;
  var res = encodeURI(uri);
  xhttp.onreadystatechange = function() {
    parseWeather(this.responseText);
  };
  xhttp.open("GET", uri, true);
}
