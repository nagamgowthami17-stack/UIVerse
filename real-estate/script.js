document.addEventListener("DOMContentLoaded", () => {

    /* ================= ELEMENTS ================= */

    const themeBtn = document.getElementById("themeBtn");
    const signInBtn = document.getElementById("signInBtn");

    const searchBtn = document.getElementById("searchBtn");
    const locationFilter = document.getElementById("locationFilter");
    const typeFilter = document.getElementById("typeFilter");
    const budgetFilter = document.getElementById("budgetFilter");

    const propertyCards = document.querySelectorAll(".property-card");
    const noResults = document.getElementById("noResults");

    const modal = document.getElementById("propertyModal");
    const closeModal = document.getElementById("closeModal");

    const modalTitle = document.getElementById("modalTitle");
    const modalLocation = document.getElementById("modalLocation");
    const modalPrice = document.getElementById("modalPrice");
    const modalType = document.getElementById("modalType");
    const modalDescription = document.getElementById("modalDescription");

    const agentBtn = document.getElementById("agentBtn");
    const contactBtn = document.getElementById("contactBtn");

    const exploreBtn = document.getElementById("exploreBtn");
    const viewAllBtn = document.getElementById("viewAllBtn");


    /* ================= DARK MODE ================= */

    const savedTheme = localStorage.getItem("estatevista-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeBtn.textContent = "☀";
    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("estatevista-theme", "dark");
            themeBtn.textContent = "☀";

        } else {

            localStorage.setItem("estatevista-theme", "light");
            themeBtn.textContent = "☾";
        }
    });


    /* ================= SEARCH ================= */

    function filterProperties() {

        const locationValue = locationFilter.value;
        const typeValue = typeFilter.value;
        const budgetValue = budgetFilter.value;

        let visibleCount = 0;

        propertyCards.forEach(card => {

            const cardLocation = card.dataset.location;
            const cardType = card.dataset.type;
            const cardPrice = parseFloat(card.dataset.price);

            let locationMatch =
                locationValue === "all" ||
                cardLocation === locationValue;

            let typeMatch =
                typeValue === "all" ||
                cardType === typeValue;

            let budgetMatch = true;

            if (budgetValue === "1") {
                budgetMatch = cardPrice < 1;
            }

            if (budgetValue === "2") {
                budgetMatch = cardPrice >= 1 && cardPrice <= 2;
            }

            if (budgetValue === "3") {
                budgetMatch = cardPrice > 2;
            }

            if (locationMatch && typeMatch && budgetMatch) {

                card.style.display = "block";
                visibleCount++;

            } else {

                card.style.display = "none";
            }
        });

        if (visibleCount === 0) {
            noResults.style.display = "block";
        } else {
            noResults.style.display = "none";
        }

        document.getElementById("properties")
            .scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
    }

    searchBtn.addEventListener("click", filterProperties);


    /* ================= FAVORITES ================= */

    document.querySelectorAll(".favorite-btn").forEach(button => {

        button.addEventListener("click", (event) => {

            event.stopPropagation();

            button.classList.toggle("active");

            if (button.classList.contains("active")) {
                button.textContent = "♥";
            } else {
                button.textContent = "♡";
            }
        });
    });


    /* ================= PROPERTY MODAL ================= */

    document.querySelectorAll(".details-btn").forEach(button => {

        button.addEventListener("click", () => {

            modalTitle.textContent =
                button.dataset.title;

            modalLocation.textContent =
                "📍 " + button.dataset.location;

            modalPrice.textContent =
                button.dataset.price;

            modalType.textContent =
                button.dataset.type;

            modalDescription.textContent =
                button.dataset.description;

            modal.classList.add("show");

            document.body.style.overflow = "hidden";
        });
    });


    function closePropertyModal() {

        modal.classList.remove("show");

        document.body.style.overflow = "";
    }


    closeModal.addEventListener("click", closePropertyModal);


    modal.addEventListener("click", (event) => {

        if (event.target === modal) {
            closePropertyModal();
        }
    });


    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closePropertyModal();
        }
    });


    /* ================= AGENT ================= */

    agentBtn.addEventListener("click", () => {

        alert(
            "Thank you for your interest!\n\n" +
            "An EstateVista property agent will contact you shortly."
        );
    });


    contactBtn.addEventListener("click", () => {

        alert(
            "Welcome to EstateVista!\n\n" +
            "Our property experts are ready to help you find your dream home."
        );
    });


    /* ================= SIGN IN ================= */

    signInBtn.addEventListener("click", () => {

        alert(
            "Sign In\n\n" +
            "This is a UI template demonstration.\n" +
            "A real project can connect this button to an authentication system."
        );
    });


    /* ================= EXPLORE ================= */

    exploreBtn.addEventListener("click", () => {

        document.getElementById("properties")
            .scrollIntoView({
                behavior: "smooth"
            });
    });


    /* ================= VIEW ALL ================= */

    viewAllBtn.addEventListener("click", () => {

        propertyCards.forEach(card => {
            card.style.display = "block";
        });

        locationFilter.value = "all";
        typeFilter.value = "all";
        budgetFilter.value = "all";

        noResults.style.display = "none";

        document.getElementById("properties")
            .scrollIntoView({
                behavior: "smooth"
            });
    });


    /* ================= NAVIGATION ================= */

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", (event) => {

            const target = link.getAttribute("href");

            if (target.startsWith("#")) {

                event.preventDefault();

                const section =
                    document.querySelector(target);

                if (section) {

                    section.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });
/* =====================================================
   ESTATEVISTA HACKATHON FEATURES
===================================================== */


/* ================= AI PROPERTY ASSISTANT ================= */

const aiPrompt =
    document.getElementById("aiPrompt");

const aiSearchBtn =
    document.getElementById("aiSearchBtn");

const aiResult =
    document.getElementById("aiResult");


document
    .querySelectorAll(".prompt-chips button")
    .forEach(button => {

        button.addEventListener("click", () => {

            aiPrompt.value =
                button.dataset.prompt;

            aiPrompt.focus();

        });

    });


aiSearchBtn.addEventListener("click", () => {

    const query =
        aiPrompt.value.trim();

    if (!query) {

        aiResult.innerHTML = `
            <span>✦ AI INSIGHT</span>

            <strong>
                Try describing a location,
                property type and budget.
            </strong>
        `;

        return;

    }


    const lowerQuery =
        query.toLowerCase();

    let message =
        "I found a starting point based on your preferences.";


    if (lowerQuery.includes("chennai")) {

        message =
            "Chennai detected — explore the Modern Luxury Apartment in the current collection.";

    }

    else if (lowerQuery.includes("bangalore")) {

        message =
            "Bangalore detected — explore the Green Valley Villa for a premium-home experience.";

    }

    else if (lowerQuery.includes("hyderabad")) {

        message =
            "Hyderabad detected — explore the Skyline Premium Home for city living.";

    }

    else if (lowerQuery.includes("mumbai")) {

        message =
            "Mumbai detected — explore the Urban Family House for a larger-home profile.";

    }


    aiResult.innerHTML = `

        <span>
            ✦ AI INSIGHT
        </span>

        <strong>
            ${message}
        </strong>

    `;

});


/* ================= PROPERTY COMPARISON ================= */

const compareGrid =
    document.getElementById("compareGrid");

const compareCount =
    document.getElementById("compareCount");

const compareBtn =
    document.getElementById("compareBtn");

const clearCompareBtn =
    document.getElementById("clearCompareBtn");


let compareItems = [];


function renderCompare() {

    compareCount.textContent =
        compareItems.length;


    if (compareItems.length === 0) {

        compareGrid.innerHTML = `

            <div class="compare-empty">

                <div>
                    ＋
                </div>

                <strong>
                    Select properties to compare
                </strong>

                <span>
                    Use "Add to Compare"
                    on any property card.
                </span>

            </div>

        `;

        return;

    }


    compareGrid.innerHTML =
        compareItems
            .map(property => `

                <article class="compare-item">

                    <button
                        class="remove-compare"
                        data-title="${property.title}"
                    >
                        ×
                    </button>

                    <span class="eyebrow">
                        ${property.type}
                    </span>

                    <h3>
                        ${property.title}
                    </h3>

                    <div class="compare-price">
                        ${property.price}
                    </div>

                    <p>
                        📍 ${property.location}
                    </p>

                    <p>
                        🛏 ${property.beds}
                        ·
                        🚿 ${property.baths}
                        ·
                        📐 ${property.area}
                    </p>

                </article>

            `)
            .join("");


    document
        .querySelectorAll(".remove-compare")
        .forEach(button => {

            button.addEventListener("click", () => {

                compareItems =
                    compareItems.filter(
                        property =>
                            property.title !==
                            button.dataset.title
                    );

                renderCompare();

            });

        });

}


/* ADD PROPERTY TO COMPARISON */

document
    .querySelectorAll(".property-card")
    .forEach(card => {

        const compareButton =
            document.createElement("button");

        compareButton.className =
            "compare-add-btn";

        compareButton.textContent =
            "＋ Add to Compare";


        const detailsButton =
            card.querySelector(".details-btn");


        const title =
            detailsButton.dataset.title;

        const location =
            detailsButton.dataset.location;

        const price =
            detailsButton.dataset.price;

        const type =
            detailsButton.dataset.type;


        compareButton.addEventListener(
            "click",
            () => {

                const existing =
                    compareItems.find(
                        item =>
                            item.title === title
                    );


                if (existing) {

                    compareItems =
                        compareItems.filter(
                            item =>
                                item.title !==
                                title
                        );

                    compareButton.textContent =
                        "＋ Add to Compare";

                    compareButton.classList
                        .remove("selected");

                }

                else {

                    if (
                        compareItems.length >= 3
                    ) {

                        alert(
                            "You can compare up to 3 properties."
                        );

                        return;

                    }


                    compareItems.push({

                        title: title,

                        location: location,

                        price: price,

                        type: type,

                        beds: "3 Beds",

                        baths: "2 Baths",

                        area: "1,850 sq.ft."

                    });


                    compareButton.textContent =
                        "✓ Added to Compare";

                    compareButton.classList
                        .add("selected");

                }


                renderCompare();

            }
        );


        const detailsButtonParent =
            detailsButton.parentElement;


        detailsButtonParent
            .insertBefore(
                compareButton,
                detailsButton
            );

    });


/* CLEAR COMPARISON */

clearCompareBtn.addEventListener(
    "click",
    () => {

        compareItems = [];

        document
            .querySelectorAll(".compare-add-btn")
            .forEach(button => {

                button.textContent =
                    "＋ Add to Compare";

                button.classList
                    .remove("selected");

            });

        renderCompare();

    }
);


/* COMPARE BUTTON */

compareBtn.addEventListener(
    "click",
    () => {

        if (
            compareItems.length < 2
        ) {

            alert(
                "Select at least 2 properties to compare."
            );

            return;

        }


        document
            .getElementById("compare")
            .scrollIntoView({

                behavior: "smooth"

            });

    }
);


/* ================= SMART RECOMMENDATION ================= */

const recommendation =
    document.getElementById(
        "smartRecommendation"
    );


const recommendations = [

    "Modern Luxury Apartment matches a balanced budget and city-living profile.",

    "Green Valley Villa matches a premium-space and greenery preference.",

    "Skyline Premium Home matches an urban lifestyle with modern amenities.",

    "Urban Family House matches a larger-family and premium-neighbourhood profile."

];


let recommendationIndex = 0;


document
    .getElementById("recommendBtn")
    .addEventListener(
        "click",
        () => {

            recommendationIndex++;

            if (
                recommendationIndex >=
                recommendations.length
            ) {

                recommendationIndex = 0;

            }


            recommendation.textContent =
                recommendations[
                    recommendationIndex
                ];

        }
    );


/* ================= PROPERTY EXPLORER ================= */

const mapCity =
    document.getElementById(
        "mapCity"
    );

const mapPropertyCount =
    document.getElementById(
        "mapPropertyCount"
    );


const cityCounts = {

    Chennai:
        "3,200+",

    Bangalore:
        "2,800+",

    Hyderabad:
        "2,100+",

    Mumbai:
        "1,900+"

};


document
    .querySelectorAll(".explorer-place")
    .forEach(place => {

        place.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        ".explorer-place"
                    )
                    .forEach(item => {

                        item.classList
                            .remove("active");

                    });


                place.classList
                    .add("active");


                const city =
                    place.dataset.city;


                mapCity.textContent =
                    city.toUpperCase();


                mapPropertyCount.textContent =
                    cityCounts[city];

            }
        );

    });


/* INITIALIZE */

renderCompare();
});