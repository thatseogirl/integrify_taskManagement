let myTasklist = document.getElementsByTagName("LI");

let index;
for (index = 0; index < myTasklist.length; index++) {
  let currentList = myTasklist[index];
  addSpanElement(currentList);
}

let completedTask = document.querySelector('ul');
completedTask.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

let newListItem = document.getElementById("addBtn");
newListItem.addEventListener("click", addNewListItem);
function addNewListItem() {
  addRow();
}

let newInput = document.getElementById("myInput");
newInput.addEventListener("keypress", keypressEvent);
function keypressEvent(event) {
  if (event.key === 'Enter') {
    addRow();
  }
}

let removeAll = document.getElementById("removeBtn");
removeAll.addEventListener("click", deleteList);
function deleteList() {
  let clearTaskList = document.getElementById("taskList");
  while (clearTaskList.firstChild) {
    clearTaskList.removeChild(clearTaskList.firstChild);
  }
}

function addRow() {
  let newListElement = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let newTitle = document.createTextNode(inputValue);
  newListElement.appendChild(newTitle);

  if (inputValue === '') {
    alert("Add a Task!");
  } else {
    document.getElementById("taskList").appendChild(newListElement);
  }
  document.getElementById("myInput").value = "";

  addSpanElement(newListElement);
  removeTask();
}

function addSpanElement(liElement) {
  let newElement = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  newElement.className = "close";
  newElement.appendChild(txt);
  liElement.appendChild(newElement);
}

function removeTask() {
  let iconBtn = document.getElementsByClassName("close");
  let index;
  for (index = 0; index < iconBtn.length; index++)
    iconBtn[index].addEventListener("click", closeButtonListener);
  function closeButtonListener() {
    let addedTask = this.parentElement;
    addedTask.style.display = "none";
  }
}