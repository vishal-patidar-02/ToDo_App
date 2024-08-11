let inputBox = document.querySelector("input");
let listContainer = document.querySelector("#list-container");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  console.log(inputBox.value);
  if (inputBox.value == "") {
    alert("You must enter your Task");
  } else {
    let li = document.createElement("li");
    li.innerText = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
});

listContainer.addEventListener(
  "click",
  (event) => {
    if (event.target.nodeName === "LI") {
      event.target.classList.toggle("checked");
      saveData();
    } else if (event.target.nodeName === "SPAN") {
      let listItem = event.target.parentElement;
      listItem.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
