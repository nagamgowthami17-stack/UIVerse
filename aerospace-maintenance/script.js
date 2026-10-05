document.addEventListener("DOMContentLoaded", function () {

    console.log("AeroMaintain loaded successfully.");

    const toast = document.getElementById("toast");

    const notificationButton =
        document.getElementById("notificationButton");

    const profileButton =
        document.getElementById("profileButton");

    const addAircraft =
        document.getElementById("addAircraft");

    const scheduleButton =
        document.getElementById("scheduleButton");

    const reportButton =
        document.getElementById("reportButton");

    const searchInput =
        document.getElementById("aircraftSearch");

    const typeFilter =
        document.getElementById("typeFilter");

    const statusFilter =
        document.getElementById("statusFilter");

    const tableBody =
        document.getElementById("aircraftTableBody");

    const recordCount =
        document.getElementById("recordCount");

    const currentDate =
        document.getElementById("currentDate");


    /* =========================
       TOAST
    ========================= */

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
       CURRENT DATE
    ========================= */

    function updateDate() {

        const now = new Date();

        const options = {
            day: "2-digit",
            month: "short",
            year: "numeric"
        };

        currentDate.textContent =
            now.toLocaleDateString(
                "en-GB",
                options
            );
    }

    updateDate();


    /* =========================
       AIRCRAFT SEARCH + FILTER
    ========================= */

    function filterAircraft() {

        const searchText =
            searchInput.value
                .toLowerCase()
                .trim();

        const selectedType =
            typeFilter.value;

        const selectedStatus =
            statusFilter.value;

        const rows =
            tableBody.querySelectorAll("tr");

        let visibleCount = 0;

        rows.forEach(function (row) {

            const rowText =
                row.textContent.toLowerCase();

            const rowType =
                row.getAttribute("data-type");

            const rowStatus =
                row.getAttribute("data-status");

            const searchMatches =
                rowText.includes(searchText);

            const typeMatches =
                selectedType === "all" ||
                rowType === selectedType;

            const statusMatches =
                selectedStatus === "all" ||
                rowStatus === selectedStatus;

            if (
                searchMatches &&
                typeMatches &&
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
            " of 32 aircraft";
    }


    searchInput.addEventListener(
        "input",
        filterAircraft
    );

    typeFilter.addEventListener(
        "change",
        filterAircraft
    );

    statusFilter.addEventListener(
        "change",
        filterAircraft
    );


    filterAircraft();


    /* =========================
       ADD AIRCRAFT
    ========================= */

    addAircraft.addEventListener(
        "click",
        function () {

            showToast(
                "Add Aircraft panel opened."
            );

        }
    );


    /* =========================
       NOTIFICATIONS
    ========================= */

    notificationButton.addEventListener(
        "click",
        function () {

            showToast(
                "You have 2 maintenance alerts."
            );

        }
    );


    /* =========================
       PROFILE
    ========================= */

    profileButton.addEventListener(
        "click",
        function () {

            showToast(
                "Maintenance Manager profile selected."
            );

        }
    );


    /* =========================
       FULL SCHEDULE
    ========================= */

    scheduleButton.addEventListener(
        "click",
        function () {

            const maintenance =
                document.getElementById(
                    "maintenance"
                );

            maintenance.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            showToast(
                "Maintenance schedule selected."
            );

        }
    );


    /* =========================
       REPORTS
    ========================= */

    reportButton.addEventListener(
        "click",
        function () {

            showToast(
                "Maintenance reports are being prepared."
            );

        }
    );


    /* =========================
       NAVIGATION
    ========================= */

    const navLinks =
        document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                navLinks.forEach(
                    function (item) {
                        item.classList.remove("active");
                    }
                );

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
    ========================= */

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

                const buttonText =
                    this.textContent.trim();

                if (
                    buttonText !== "→"
                ) {

                    this.classList.add("active");

                    showToast(
                        "Aircraft page " +
                        buttonText +
                        " selected."
                    );

                } else {

                    showToast(
                        "More aircraft records are available."
                    );

                }

            }
        );

    });


    /* =========================
       AIRCRAFT ROW INTERACTION
    ========================= */

    const aircraftRows =
        document.querySelectorAll(
            "#aircraftTableBody tr"
        );

    aircraftRows.forEach(function (row) {

        row.addEventListener(
            "click",
            function () {

                const aircraft =
                    row.querySelector(
                        "td strong"
                    );

                if (aircraft) {

                    showToast(
                        aircraft.textContent +
                        " selected."
                    );

                }

            }
        );

    });

});