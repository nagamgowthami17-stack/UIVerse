document.addEventListener("DOMContentLoaded", function () {

    console.log("EquipTrack JavaScript loaded successfully.");

    const searchInput = document.getElementById("equipmentSearch");
    const categoryFilter = document.getElementById("categoryFilter");
    const statusFilter = document.getElementById("statusFilter");
    const tableBody = document.getElementById("equipmentTableBody");
    const recordCount = document.getElementById("recordCount");

    const addEquipmentButton = document.getElementById("addEquipment");
    const notificationButton = document.getElementById("notificationButton");
    const viewSchedule = document.getElementById("viewSchedule");

    const toast = document.getElementById("toast");

    /* =========================
       TOAST
    ========================== */

    function showToast(message) {

        if (!toast) {
            alert(message);
            return;
        }

        toast.textContent = message;
        toast.classList.add("show");

        setTimeout(function () {
            toast.classList.remove("show");
        }, 2500);
    }


    /* =========================
       FILTER EQUIPMENT
    ========================== */

    function filterEquipment() {

        const searchText =
            searchInput.value.toLowerCase().trim();

        const selectedCategory =
            categoryFilter.value;

        const selectedStatus =
            statusFilter.value;

        const rows =
            tableBody.querySelectorAll("tr");

        let visibleCount = 0;


        rows.forEach(function (row) {

            const rowText =
                row.textContent.toLowerCase();

            const rowCategory =
                row.getAttribute("data-category");

            const rowStatus =
                row.getAttribute("data-status");


            const searchMatches =
                rowText.includes(searchText);

            const categoryMatches =
                selectedCategory === "all" ||
                rowCategory === selectedCategory;

            const statusMatches =
                selectedStatus === "all" ||
                rowStatus === selectedStatus;


            if (
                searchMatches &&
                categoryMatches &&
                statusMatches
            ) {

                row.style.display = "";
                visibleCount++;

            } else {

                row.style.display = "none";

            }

        });


        recordCount.textContent =
            "Showing " +
            visibleCount +
            " of 1,248 equipment records";
    }


    /* =========================
       SEARCH
    ========================== */

    searchInput.addEventListener(
        "input",
        filterEquipment
    );


    /* =========================
       CATEGORY FILTER
    ========================== */

    categoryFilter.addEventListener(
        "change",
        filterEquipment
    );


    /* =========================
       STATUS FILTER
    ========================== */

    statusFilter.addEventListener(
        "change",
        filterEquipment
    );


    /* =========================
       ADD EQUIPMENT
    ========================== */

    addEquipmentButton.addEventListener(
        "click",
        function () {

            showToast(
                "Add Equipment panel opened."
            );

        }
    );


    /* =========================
       NOTIFICATIONS
    ========================== */

    notificationButton.addEventListener(
        "click",
        function () {

            showToast(
                "You have 3 new notifications."
            );

        }
    );


    /* =========================
       MAINTENANCE
    ========================== */

    viewSchedule.addEventListener(
        "click",
        function () {

            const maintenance =
                document.getElementById("maintenance");

            maintenance.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );


    /* =========================
       NAVIGATION
    ========================== */

    const navLinks =
        document.querySelectorAll(".nav-link");


    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                event.preventDefault();


                navLinks.forEach(function (item) {

                    item.classList.remove("active");

                });


                this.classList.add("active");


                const targetId =
                    this.getAttribute("href");

                const target =
                    document.querySelector(targetId);


                if (target) {

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    });


    /* =========================
       PAGINATION
    ========================== */

    const pageButtons =
        document.querySelectorAll(".page-button");


    pageButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                pageButtons.forEach(
                    function (item) {
                        item.classList.remove("active");
                    }
                );


                if (
                    this.textContent.trim() !== "‹" &&
                    this.textContent.trim() !== "→"
                ) {

                    this.classList.add("active");

                    showToast(
                        "Page " +
                        this.textContent.trim() +
                        " selected."
                    );

                } else {

                    showToast(
                        "More equipment records are available."
                    );

                }

            }
        );

    });


    /* =========================
       PROFILE
    ========================== */

    const profileButton =
        document.querySelector(".profile-button");


    profileButton.addEventListener(
        "click",
        function () {

            showToast(
                "Administrator profile selected."
            );

        }
    );


    /* =========================
       INITIAL FILTER
    ========================== */

    filterEquipment();

});