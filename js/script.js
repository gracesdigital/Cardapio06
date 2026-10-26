const filterLinks = document.querySelectorAll(".filters a");
const sections = document.querySelectorAll(".menu-section");

function updateActiveFilter() {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    filterLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}

filterLinks.forEach((link) => {
    link.addEventListener("click", () => {
        filterLinks.forEach((item) => item.classList.remove("active"));
        link.classList.add("active");
    });
});

window.addEventListener("scroll", updateActiveFilter);
window.addEventListener("load", updateActiveFilter);
