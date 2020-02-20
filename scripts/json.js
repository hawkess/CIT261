window.onload = function() {
  var a = document.getElementById("json-copy");
  a.onclick = function() {
    if (window.clipboardData && window.clipboardData.setData) {
      // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
      return clipboardData.setData("Text", text);

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
      var textarea = document.createElement("textarea");
      textarea.textContent = '{ "firstName": "John", "lastName": "Smith", "isAlive": true, "age": 27, "address": { "streetAddress": "21 2nd Street", "city": "New York", "state": "NY", "postalCode": "10021-3100" }, "phoneNumbers": [ { "type": "home", "number": "212 555-1234" }, { "type": "office", "number": "646 555-4567" }, { "type": "mobile", "number": "123 456-7890" } ], "children": [], "spouse": null }';
      textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in Microsoft Edge.
      document.body.appendChild(textarea);
      textarea.select();
      try {
        return document.execCommand("copy"); // Security exception may be thrown by some browsers.
      } catch (ex) {
        console.warn("Copy to clipboard failed.", ex);
        return false;
      } finally {
        document.body.removeChild(textarea);
      }
    }
    return false;
  };
};


function createJSON() {
  var myObj = {
    "street": null,
    "city": null,
    "state": null
  };
  myObj.street = document.getElementById("street").value;
  myObj.city = document.getElementById("city").value;
  myObj.state = document.getElementById("state").value;
  printJSON(JSON.stringify(myObj));
}

function createObj() {
  var myJSON = document.getElementById("json-entry").value;
  var parsedObj = JSON.parse(myJSON);
  printObj(parsedObj);
}

function process(key, value) {
    var display = document.getElementById("parse-content");
    if (typeof(value) != "object")
      display.innerHTML += key + ": " + value + "<br />";
    else
      display.innerHTML += key + ": <br />";

}

function traverse(obj, func) {
    for (var key in obj) {
        func.apply(this, [key, obj[key]]);
        if (obj[key] !== null && typeof(obj[key]) == "object") {
            traverse(obj[key], func);
        }
    }
}

function printObj(parsedObj) {
  traverse(parsedObj, process);
}

function printJSON(json)
{
  var display = document.getElementById("string-content");
  var street = document.getElementById("street").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var myAddress = new Object();
  myAddress.street = street;
  myAddress.city = city;
  myAddress.state = state;
  display.innerHTML += JSON.stringify(myAddress);

}
