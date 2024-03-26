let navbarScreen = document.querySelector(".navbar-screen");
function myFunction(x) {
  x.classList.toggle("change");
  if (navbarScreen.classList.contains("d-none")) {
    navbarScreen.classList.remove("d-none");
    navbarScreen.classList.add("d-flex");
  } else {
    navbarScreen.classList.remove("d-flex");
    navbarScreen.classList.add("d-none");
  }
}
