var itemsArray = localStorage.getItem("list-items") ? JSON.parse(localStorage.getItem("list-items")) : [];

window.onload = function() {
  var itemObj = JSON.parse(localStorage.getItem("list-items"));
  itemObj.forEach(item => {
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
  let newItem = document.getElementById("list-item").value;
  itemsArray.push(newItem);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  makeList(newItem);
}

function makeList(listItem) {
  const ul = document.getElementById("todo-list");
  let li = document.createElement("li");
  li.textContent = listItem;
  ul.appendChild(li);
}
