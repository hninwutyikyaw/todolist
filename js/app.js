const inputText = document.querySelector("#inputText");
const addButton = document.querySelector("#addButton");
const lists = document.querySelector("#lists");

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
<div>
<button type="button" class="btn btn-warning btn-sm" onclick="edit(event)">
  edit
</button>
<button type="button" class="btn btn-danger btn-sm" onclick="removeList(event)">
  del
</button></div>`;
  return li;
};

const addList = () => {
  if (inputText.value) {
    lists.append(createLi(inputText.value));
    inputText.value = null;
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
    event.target.parentElement.parentElement.remove();
  }
};

//checked done
const done = (event) => {
  event.target.nextElementSibling.classList.toggle(
    "text-decoration-line-through"
  );
};

//edit
const edit = (event) => {
  // console.dir(event.target.parentElement);
  const old =
    event.target.parentElement.parentElement.querySelector(".form-check-label");
  const newText = prompt("Input new", old.innerText);
  old.innerText = newText;
};
