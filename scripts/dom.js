window.onload = function () {
  const targetDiv = document.getElementById("dom-content");
  window.oldStyle = { color : targetDiv.style.color, bgcolor : targetDiv.style.backgroundColor };
};

function domTest() {
  const targetDiv = document.getElementById("dom-content");
  const newPar = document.createElement("p");
  const secondPar = document.createElement("p");
  const text = document.createTextNode("This text node was created first and added with appendChild");
  newPar.appendChild(text);
  targetDiv.appendChild(newPar);
  secondPar.innerHTML = "This was created second, had its contents added with innerHTML, and inserted before the paragraph below";
  targetDiv.insertBefore(secondPar, newPar);
}

function revert() {
  const targetDiv = document.getElementById("dom-content");
  while (targetDiv.firstChild) {
    targetDiv.removeChild(targetDiv.firstChild);
  }
  targetDiv.style.color = window.oldStyle.color;
  targetDiv.style.backgroundColor = window.oldStyle.bgcolor;
}

function changeStyle() {
  const targetDiv = document.getElementById("dom-content");
  targetDiv.style.color = "#ff4c68";
  targetDiv.style.backgroundColor = "#E7E6D5";
}
