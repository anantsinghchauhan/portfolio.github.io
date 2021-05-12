document.querySelector("#menu-open").addEventListener("click", () => {
  document.querySelector("#slidingNavbar").style.left = "0";
});

document.querySelector("#closeBtn").addEventListener("click", function () {
  document.querySelector("#slidingNavbar").style.left = "-100%";
});
