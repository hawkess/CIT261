window.onload = function() {

  let itemsArray = localStorage.getItem("list-items") ? JSON.parse(localStorage.getItem("list-items")) : [];

  const form = document.getElementById("list-form");
  const clearbtn = document.getElementById("clear-btn");
  const ul = document.getElementById("demo-list");

  form.addEventListener('submit', function(elem) {
    elem.preventDefault();
    let formInput = document.getElementById("list-item");
    itemsArray.push(formInput.value);
    localStorage.setItem("list-items", JSON.stringify(itemsArray));
    makeList(formInput.value);
    formInput.value = "";
  });

  clearbtn.addEventListener('click', function() {
    localStorage.clear();
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  });

  function makeList(listItem) {
    let li = document.createElement("li");
    li.textContent = listItem;
    ul.appendChild(li);
  }

  itemsArray.forEach(item => {
    makeList(item);
  });

};
