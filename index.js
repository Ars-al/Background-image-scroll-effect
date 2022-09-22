const bgImageEl = document.getElementById("bg-image");

window.addEventListener("scroll", () => {
    imageUpdate();
});

function imageUpdate() {
    bgImageEl.style.opacity = 1 - window.pageYOffset / 576;
    bgImageEl.style.backgroundSize = 150 - window.pageYOffset / 12 + "%";
}