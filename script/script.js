const ul = document.querySelector("ul");
const input = document.querySelector(".inputText");
const btn = document.querySelector(".btn");
const form = document.querySelector("form");

form.onsubmit = (e) => {
  e.preventDefault();

  if (input.value === "") {
    alert("Please enter the data");
  } else {
    const li = document.createElement("li");
    const i = document.createElement("i");
    i.className = "fa-solid fa-trash";
    li.innerHTML = input.value;
    ul.appendChild(li);
    li.appendChild(i);
    input.value = "";

    li.onclick = () => {
      if (!li.className) {
        li.setAttribute("class", "checked");
      } else {
        li.setAttribute("class", "");
      }
    };

    i.onclick = () => {
      li.remove();
    };
  }
};
