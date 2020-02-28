var itemsArray = localStorage.getItem("list-items") ? JSON.parse(localStorage.getItem("list-items")) : [];

window.onload = function() {
  itemsArray.forEach(item => {
    makeList(item);
  });
};

function clearStorage() {
  const ul = document.getElementById("todo-list");
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
  const ul = document.getElementById("todo-list");
  let li = document.createElement("li");
  li.textContent = listItem;
  ul.appendChild(li);
}
