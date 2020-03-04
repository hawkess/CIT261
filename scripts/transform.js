const prefix = ["webkit", "moz", "o", ""];
var hovered = false;

window.onload = function() {
  const animdiv = document.getElementById("anim-div");

  PrefixedEvent(animdiv, "AnimationEnd", AnimationListener);
  animdiv.addEventListener('mouseover', function() {
    if (!animdiv.classList.contains("rotatein")) {
      animdiv.classList.add("rotatein");
    }
  });
}


function PrefixedEvent(element, type, callback) {
  for (let p = 0; p < prefix.length; p++) {
    if (!prefix[p]) type = type.toLowerCase();
    element.addEventListener(prefix[p] + type, callback, false);
  }
}

function AnimationListener(e) {
  const animdiv = document.getElementById("anim-div");
  if (e.animationName == "rotatein") {
    animdiv.classList.add("expandin");
    animdiv.classList.remove("rotatein");
  } else if (e.animationName == "expandin") {
    animdiv.classList.add("expandout");
    animdiv.classList.remove("expandin");
  } else if (e.animationName == "expandout") {
    animdiv.classList.add("rotateout");
    animdiv.classList.remove("expandout");
  } else if (e.animationName == "rotateout") {
    animdiv.classList.remove("rotateout");
  }
}
