const header = document.querySelector(".header");
const menu = document.querySelector("#menu-principal");
const toggle = document.querySelector(".navbar__toggle");
const links = document.querySelectorAll(".navbar__link");
const year = document.querySelector("#year");

function abrirMenu() {
  menu.classList.add("is-open");
  toggle.setAttribute("aria-expanded", "true");
  toggle.setAttribute("aria-label", "Fechar menu");
  toggle.textContent = "✕";
}

function fecharMenu() {
  menu.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Abrir menu");
  toggle.textContent = "☰";
}

toggle.addEventListener("click", function () {
  if (menu.classList.contains("is-open")) {
    fecharMenu();
  } else {
    abrirMenu();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    fecharMenu();
  }
});

links.forEach(function (link) {
  link.addEventListener("click", fecharMenu);
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 80) {
    header.classList.add("header--scrolled");
  } else {
    header.classList.remove("header--scrolled");
  }
});

year.textContent = new Date().getFullYear();