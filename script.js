const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".app-card");
const filters = document.querySelectorAll(".filter");

let selectedCategory = "all";


/* =========================
   FILTER APPLICATIONS
========================= */

function filterApps() {

    const searchText = searchInput.value.toLowerCase();

    cards.forEach(card => {

        const title = card.querySelector("h3").textContent.toLowerCase();
        const description = card.querySelector(
            ".app-card > p:not(.category)"
        ).textContent.toLowerCase();

        const category = card.dataset.category;

        const matchesSearch =
            title.includes(searchText) ||
            description.includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            category === selectedCategory;

        if (matchesSearch && matchesCategory) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }

    });
}


/* Search */

searchInput.addEventListener("input", filterApps);


/* Category buttons */

filters.forEach(button => {

    button.addEventListener("click", () => {

        filters.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        selectedCategory = button.dataset.category;

        filterApps();

    });

});


/* =========================
   APPLICATION MODAL
========================= */

const modal = document.getElementById("appModal");
const appFrame = document.getElementById("appFrame");
const modalTitle = document.getElementById("modalTitle");
const closeModal = document.getElementById("closeModal");

const openButtons = document.querySelectorAll(".open-app");


openButtons.forEach(button => {

    button.addEventListener("click", () => {

        const url = button.dataset.url;

        const card = button.closest(".app-card");

        const title =
            card.querySelector("h3").textContent;

        modalTitle.textContent = title;

        appFrame.src = url;

        modal.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


/* Close */

closeModal.addEventListener("click", closeApplication);


function closeApplication() {

    modal.classList.remove("show");

    appFrame.src = "";

    document.body.style.overflow = "";

}


/* Close when clicking outside */

modal.addEventListener("click", event => {

    if (event.target === modal) {
        closeApplication();
    }

});


/* Escape key */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeApplication();
    }

});
