const navIcon = document.querySelector("#navIcon");
const lists = document.querySelector(".lists");

navIcon.addEventListener("click", function () {
  lists.classList.toggle("hideShow");
});
