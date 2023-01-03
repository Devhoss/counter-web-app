const countEl = document.getElementById("count");
const decreaseEl = document.getElementById("decrease");
const resetEl = document.getElementById("reset");
const increaseEl = document.getElementById("increase");
let value = 0;

decreaseEl.addEventListener("click", () => {
  value -= 1;
  countEl.textContent = value;
});

resetEl.addEventListener("click", () => {
  value = 0;
  countEl.textContent = value;
});

increaseEl.addEventListener("click", () => {
  value += 1;
  countEl.textContent = value;
});

let theme = localStorage.getItem("data-theme");
function changeThemeToDark() {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("data-theme", "dark");
}

function changeThemeToLight() {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("data-theme", "light");
}

if (theme === "dark") {
  changeThemeToDark();
}

const checkbox = document.getElementById("switch");

checkbox.addEventListener("change", () => {
  let theme = localStorage.getItem("data-theme");
  if (theme === "dark") {
    changeThemeToLight();
  } else {
    changeThemeToDark();
  }
});
