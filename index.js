const formSubmit = document.querySelector("form");
const inputText = document.querySelector(".search-input");
const showText = document.querySelector(".show-text");
let userText = "";

inputText.addEventListener("change", (e) => {
  userText = e.target.value;
});

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  if (userText === "") {
    showText.innerHTML = "";
  }
  showText.innerText = userText;
  inputText.value = "";
  userText = "";
});
