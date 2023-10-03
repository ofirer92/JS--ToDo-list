const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask() {
  if (inputBox.value === "") {
    alert("the input box is empty!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
}
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "li") {
      e.target.classList.toggle("checked");
      console.log(e.target.classList.toggle("checked"));
      console.log(e.target.classList);
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);
