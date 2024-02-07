const navIcon = document.querySelector("#navIcon");
const lists = document.querySelector(".lists");

navIcon.addEventListener("click", function () {
  lists.classList.toggle("hideShow");
});

document.addEventListener("DOMContentLoaded", function () {
  var currentLocation = window.location.href;
  var navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(function (navLink) {
    if (navLink.href === currentLocation) {
      navLink.classList.add("active");
    }
  });
});
