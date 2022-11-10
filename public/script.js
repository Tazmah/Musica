let nav = document.getElementById("toggle");
let two = document.getElementById("two");

nav.addEventListener("click", () => {
    two.classList.toggle("hidden");
    two.classList.toggle("grid");
});