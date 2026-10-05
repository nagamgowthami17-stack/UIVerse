document.addEventListener("DOMContentLoaded", function () {

    console.log("AeroCommand Mission Control loaded successfully.");

    const toast = document.getElementById("toast");

    const notificationButton =
        document.getElementById("notificationButton");

    const profileButton =
        document.getElementById("profileButton");

    const missionButton =
        document.getElementById("missionButton");

    const clearAlerts =
        document.getElementById("clearAlerts");

    const reportButton =
        document.getElementById("reportButton");

    const currentTime =
        document.getElementById("currentTime");

    const altitudeValue =
        document.getElementById("altitudeValue");

    const velocityValue =
        document.getElementById("velocityValue");


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
       LIVE CLOCK
    ========================= */

    function updateClock() {

        const now = new Date();

        const hours =
            String(now.getHours()).padStart(2, "0");

        const minutes =
            String(now.getMinutes()).padStart(2, "0");

        const seconds =
            String(now.getSeconds()).padStart(2, "0");

        currentTime.textContent =
            hours + ":" + minutes + ":" + seconds;
    }

    updateClock();

    setInterval(updateClock, 1000);


    /* =========================
       SIMULATED TELEMETRY
    ========================= */

    function updateTelemetry() {

        const altitude =
            (408.2 + (Math.random() * 0.8 - 0.4)).toFixed(1);

        const velocity =
            (7.66 + (Math.random() * 0.04 - 0.02)).toFixed(2);

        altitudeValue.textContent =
            altitude + " km";

        velocityValue.textContent =
            velocity + " km/s";
    }

    setInterval(updateTelemetry, 3000);


    /* =========================
       NOTIFICATIONS
    ========================= */

    notificationButton.addEventListener(
        "click",
        function () {

            showToast(
                "You have 2 mission alerts requiring attention."
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
                "Flight Director profile selected."
            );

        }
    );


    /* =========================
       NEW MISSION
    ========================= */

    missionButton.addEventListener(
        "click",
        function () {

            showToast(
                "New Mission setup panel opened."
            );

        }
    );


    /* =========================
       CLEAR / ACKNOWLEDGE ALERTS
    ========================= */

    clearAlerts.addEventListener(
        "click",
        function () {

            const alertList =
                document.querySelector(".alert-list");

            const alertCount =
                document.querySelector(".alert-count");

            alertList.innerHTML = `
                <div class="alert-item info-alert">

                    <div class="alert-icon">✓</div>

                    <div>
                        <strong>All Alerts Acknowledged</strong>

                        <p>
                            No unacknowledged mission alerts.
                        </p>

                        <small>Just now</small>
                    </div>

                </div>
            `;

            alertCount.textContent = "0";

            showToast(
                "All mission alerts acknowledged."
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
                "Mission reports are being prepared."
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
       MISSION CARD INTERACTION
    ========================= */

    const missionCards =
        document.querySelectorAll(".mission-card");

    missionCards.forEach(function (card) {

        card.addEventListener(
            "click",
            function () {

                const missionName =
                    card.querySelector("h3").textContent;

                showToast(
                    missionName +
                    " mission selected."
                );

            }
        );

    });


});