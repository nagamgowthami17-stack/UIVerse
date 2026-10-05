document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       CLEAR ALERTS
    ========================= */

    const clearButton = document.getElementById("clear-alerts");
    const alertList = document.getElementById("alert-list");
    const alertCount = document.getElementById("alert-count");
    const openAlerts = document.getElementById("open-alerts");

    clearButton.addEventListener("click", function () {

        alertList.innerHTML = `
            <div class="empty-alerts">
                <div class="success-icon">✓</div>
                <h3>All caught up!</h3>
                <p>There are no pending alerts.</p>
            </div>
        `;

        alertCount.textContent = "0";
        openAlerts.textContent = "0";

        clearButton.disabled = true;
        clearButton.textContent = "All Alerts Cleared";
    });


    /* =========================
       ACTIVE NAVIGATION
    ========================= */

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");
        });

    });


    /* =========================
       CURRENT DATE & TIME
    ========================= */

    const dateElement = document.getElementById("current-date");
    const timeElement = document.getElementById("current-time");

    function updateDateTime() {

        const now = new Date();

        const dateOptions = {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric"
        };

        const timeOptions = {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        };

        dateElement.textContent = now.toLocaleDateString(
            "en-GB",
            dateOptions
        );

        timeElement.textContent =
            now.toLocaleTimeString("en-GB", timeOptions) + " Local";
    }

    updateDateTime();

    setInterval(updateDateTime, 60000);


    /* =========================
       VIEW ALL BUTTONS
    ========================= */

    const actionButtons = document.querySelectorAll(".text-button");

    actionButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            this.textContent = "Opening...";

            setTimeout(() => {
                this.textContent = "View all →";
            }, 900);

        });

    });

});