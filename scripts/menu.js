function isMenu() {
  var menu = document.getElementById("body");
  menu.classList.toggle("noScroll");

  var logo = document.getElementById("header__logo");

  if (logo.style.display == "none") {
    logo.style.display = "block";
  } else {
    logo.style.display = "none";
  }
}
