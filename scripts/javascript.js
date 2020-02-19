function loopTest()
{
  var count = document.getElementById("loop-count").value;
  var display = document.getElementById("loop-content");
  for (i = 0; i < count; ++i)
  {
    display.innerHTML += (i + " ");
    display.setAttribute("style", "visibility: visible;");
  }
}

function arrayTest()
{
  var str = document.getElementById("array-input").value;
  var arr = str.split(", ");
  var len = arr.length;
  document.getElementById("array-content").innerHTML += "Array: " + arr + "<br />";
  document.getElementById("array-content").innerHTML += "Array Length: " + len + "<br />";
  document.getElementById("array-content").innerHTML += "Array[0]: " + arr[0] + "<br />";
  document.getElementById("array-content").innerHTML += "Array[" + String(len - 1) + "]: " + arr[len - 1] + "<br />";
}
