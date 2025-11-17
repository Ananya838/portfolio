// SCROLL ANIMATION
window.addEventListener("scroll", showContent);

function showContent() {
    const elements = document.querySelectorAll(".reveal");

    elements.forEach((el) => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            el.classList.add("active");
        }
    });
}
