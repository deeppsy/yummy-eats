const btn = document.querySelector(".top form button");
const overlay = document.querySelector("#overlay");

document.querySelector("form").addEventListener("click", (e) => {
  e.preventDefault();
});

btn.addEventListener("click", () => {
  overlay.style.display = "grid";
  //   if (overlay.classList.contains("animate-overlay")) {
  //     overlay.classList.remove("animate-overlay");
  //   }
  overlay.classList.add("animate-overlay");
  setTimeout(() => {
    overlay.classList.remove("animate-overlay");
    overlay.style.display = "none";
  }, 3000);
});
