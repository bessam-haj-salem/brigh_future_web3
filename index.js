var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");
var container = document.getElementById("container");
var logo = document.getElementById("logo");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  console.log("helllo");
  sidenav.classList.add("active");
  container.classList.add("container");
  logo.classList.add("container");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
  container.classList.remove("container");
  logo.classList.remove("container");
}
