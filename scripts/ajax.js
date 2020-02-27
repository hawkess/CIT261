function ajaxTest() {
  city = document.getElementById("city").value;
  key = document.getElementById("api-key").value;
  requestWeather(city, key);
}

function parseWeather(response) {
  console.log(response);
  var weather = JSON.parse(response);
  var display = document.getElementById("ajax-content");
  display.innerHTML += "Current weather in " + weather.name + ": <br />" + weather.main.temp + "&#176;F, " + weather.weather[0].description;
}

function requestWeather(city, key) {
  var xhttp = new XMLHttpRequest();
  var uri = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + key;
  var res = encodeURI(uri);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      parseWeather(xhttp.responseText);
    }
  };
  xhttp.open("GET", uri, true);
  xhttp.send();
}
