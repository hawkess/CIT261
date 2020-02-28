var itemsArray = localStorage.getItem("list-items") ? JSON.parse(localStorage.getItem("list-items")) : [];
const ul = document.getElementById("todo-list");

window.onload = function() {
  itemsArray.forEach(item => {
    makeList(item);
  });
};

function clearStorage() {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}

function storageTest() {
  let formInput = document.getElementById("list-item");
  itemsArray.push(formInput.value);
  makeList(formInput.value);
  formInput.value = "";
  localStorage.setItem("items", JSON.stringify(itemsArray));
}

function makeList(listItem) {
  let li = document.createElement("li");
  li.textContent = listItem;
  ul.appendChild(li);
}
