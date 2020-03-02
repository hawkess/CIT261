function loopTest()
{
  let count = document.getElementById("loop-count").value;
  let display = document.getElementById("loop-content");
  for (let i = 0; i < count; ++i)
  {
    display.innerHTML += (i + " ");
    display.setAttribute("style", "visibility: visible;");
  }
}

function arrayTest()
{
  let str = document.getElementById("array-input").value;
  let arr = str.split(", ");
  let len = arr.length;
  document.getElementById("array-content").innerHTML += "Array: " + arr + "<br />";
  document.getElementById("array-content").innerHTML += "Array Length: " + len + "<br />";
  document.getElementById("array-content").innerHTML += "Array[0]: " + arr[0] + "<br />";
  document.getElementById("array-content").innerHTML += "Array[" + String(len - 1) + "]: " + arr[len - 1] + "<br />";
}
