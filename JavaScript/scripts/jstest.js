function loopTest()
{
  var count = document.getElementById("loop-count").value;
  var display = document.getElementById("loop-content");
  for (i = 0; i < count; ++i)
  {
    display.innerHTML += (i + " ");
    display.setAttribute("style", "display: visible;");
  }
}
