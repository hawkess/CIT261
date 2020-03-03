function addClasses() {
  const div = document.getElementById("class-content");
  div.classList.add("text-light", "primary-bg");
}

function removeClasses() {
  const div = document.getElementById("class-content");
  if (div.classList.contains("primary-bg")) {
      div.classList.remove("primary-bg");
  }
  if (div.classList.contains("neutral-bg")) {
    div.classList.remove("neutral-bg");
  }
  if (div.classList.contains("text-primary")) {
    div.classList.remove("text-primary");
  }
  if (div.classList.contains("text-light")) {
    div.classList.remove("text-light");
  }
}

function replaceClasses() {
  const div = document.getElementById("class-content");
  if ((div.classList.contains("primary-bg")) && (div.classList.contains("text-light"))) {
    div.classList.replace("primary-bg", "neutral-bg");
    div.classList.replace("text-light", "text-primary");
  }
}

function toggleVis() {
  const div = document.getElementById("class-content");
  div.classList.toggle('hidden');
}
