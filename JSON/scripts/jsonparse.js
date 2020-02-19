
function createJSON() {
  var myObj = { "street":null, "city":null, "state":null };
  myObj.street = document.getElementById("street").value;
  myObj.city = document.getElementById("city").value;
  myObj.state = document.getElementById("state").value;
  printJSON(JSON.stringify(myObj));
}

function printJSON(jsonResponse) {
  var divContainer = document.getElementById("json-show");
  divContainer.innerHTML = jsonResponse;
}

function createObj() {
  var myJSON = document.getElementById("json-entry").value;
  console.log(myJSON);
  var parsedObj = JSON.parse(myJSON);
  printObj(parsedObj);
}

function printObj(parsedObj) {
  var streetContainer = document.getElementById("show-street");
  var cityContainer = document.getElementById("show-city");
  var stateContainer = document.getElementById("show-state");
  streetContainer.value = parsedObj.street;
  cityContainer.value = parsedObj.city;
  stateContainer.value = parsedObj.state;
}
