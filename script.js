var icon = document.getElementById("theme-icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "./images/dark theme icon/dark theme icon/sun.png";
  } else {
    icon.src = "./images/dark theme icon/dark theme icon/moon.png";
  }
};
document.querySelector("#menu").addEventListener("click", function(){
  alert("he");
  document.querySelector(".nav").classList.toggle("show-menu");
})
