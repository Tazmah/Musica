let nav = document.getElementById("toggle");
let two = document.getElementById("two");
let close = document.getElementById("close");
// let bodyElement = document.getElementsByTagName("body");

nav.addEventListener("click", () => {
    document.body.style.overflowY = 'hidden';
    two.classList.toggle("fixed");
    two.classList.toggle("hidden");
    two.classList.toggle("grid");
});
close.addEventListener("click", () => {
    document.body.style.overflowY = 'scroll';
    two.classList.toggle("fixed");
    two.classList.toggle("hidden");
    two.classList.toggle("grid");
});