const navIcon = document.querySelector("#navIcon");
const lists = document.querySelector(".lists");

navIcon.addEventListener("click", function () {
  lists.classList.toggle("hideShow");
});
const Myname = document.querySelector(".Myname");

// Function to change the name
function changeName() {
  var names = ["My Name", "Developer", "Designer", "Coder"];
  var randomIndex = Math.floor(Math.random() * names.length);
  var newName = names[randomIndex];
  var spanElement = document.getElementById("nameSpan");

  if (spanElement.textContent !== newName) {
    spanElement.style.animation = "none";
    spanElement.offsetHeight;
    spanElement.style.animation = null;
  }

  spanElement.textContent = newName;
}

// Change name every second
setInterval(changeName, 1000);

document.addEventListener("DOMContentLoaded", function () {
  var currentLocation = window.location.href;
  var navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(function (navLink) {
    if (navLink.href === currentLocation) {
      navLink.classList.add("active");
    }
  });
});
