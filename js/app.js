const inputText = document.querySelector("#inputText");
const addButton = document.querySelector("#addButton");
const lists = document.querySelector("#lists");
const doneCount = document.querySelector("#doneCount");
const totalCount = document.querySelector("#totalCount");
const primaryLists = [
  "Go to the GYM",
  "Drink 2L of water",
  "Do exercise",
  "Practice Typing",
];

//create function because of reuseable
const createLi = (text) => {
  const dynamicId = "flexCheckDefault" + Date.now();
  const li = document.createElement("li");
  // li.onclick = edit;
  // li.addEventListener("dblclick", console.log("hi"));
  li.className =
    "list-group-item d-flex align-items-center justify-content-between";
  li.innerHTML = ` <div class="form-check">
  <input
    class="form-check-input"
    type="checkbox"
    value=""
    id="${dynamicId}"
    onclick = "done(event)"
  />
  <label class="form-check-label" for="flexCheckDefault">
    ${text}
  </label>
</div>
<div class="btn-group">
<button type="button" class="btn btn-outline-dark btn-sm" onclick="edit(event)">
  <i class="bi bi-pencil pe-none"></i>
</button>
<button type="button" class="btn btn-outline-dark btn-sm" onclick="removeList(event)">
  <i class="bi bi-trash pe-none"></i>
</button>
</div>`;
  return li;
};

primaryLists.forEach((primaryList) => {
  lists.append(createLi(primaryList));
});

const counter = () => {
  totalCount.innerText = lists.children.length;
  // const arr = [...lists.children];
  const arr = Array.from(lists.children);
  const done = arr.filter(
    (el) => el.querySelector(".form-check-input").checked === true
  ).length;
  doneCount.innerText = done;
};

const addList = () => {
  // The trim() method removes whitespace from both sides of a string
  if (inputText.value.trim()) {
    lists.append(createLi(inputText.value));
    inputText.value = null;
    counter();
  } else {
    alert("please fill the input field");
  }
};

addButton.addEventListener("click", addList);
inputText.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    addList();
  }
});

//remove list
const removeList = (event) => {
  if (confirm("Are you sure want to delete")) {
    // event.target.parentElement.parentElement.parentElement.remove();
    event.target.closest("li").remove();
    counter();
  }
};

//checked done
const done = (event) => {
  event.target.nextElementSibling.classList.toggle(
    "text-decoration-line-through"
  );
  counter();
};

//edit
const edit = (event) => {
  const old = event.target.closest("li").querySelector(".form-check-label");
  const newText = prompt("Input new", old.innerText);
  if (newText && newText.trim()) {
    old.innerText = newText;
  }
  // event.target.parentElement.parentElement.querySelector(".form-check-label"); complexity
};

window.onload = (event) => {
  counter();
};
