// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");

  if (window.scrollY > 50) {
    // Sayfa aşağı kayınca
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    navbar.style.transition = "background-color 0.4s ease";
  } else {
    // Sayfa en üstteyken
    navbar.style.backgroundColor = "transparent";
    navbar.style.transition = "background-color 0.4s ease";
  }
});
