let linksContainer = document.querySelector("nav .links-container");
let ulLinks = document.querySelector(".links-container ul");
let toggleBtn = document.querySelector(".toggle-menu");

// Toggle menu
toggleBtn.onclick = function (e) {
  e.stopPropagation();
  linksContainer.classList.toggle("open");
}

document.addEventListener("click", (e) => {
  if (e.target !== toggleBtn && e.target !== ulLinks) {
    if (linksContainer.classList.contains("open")) {
      linksContainer.classList.toggle("open");
    }
  }
})

ulLinks.onclick = function (e) {
  e.stopPropagation();
}

// Dark mode
let toggleMode = document.querySelector(".mode-toggle");

toggleMode.onclick = function (e) {
  toggleMode.parentElement.parentElement.classList.toggle("dark");
}
