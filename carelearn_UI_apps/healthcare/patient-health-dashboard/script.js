document.addEventListener("DOMContentLoaded", () => {
    // Sidebar navigation
    const sidebarLinks = document.querySelectorAll(".sidebar-link");

    sidebarLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            sidebarLinks.forEach(item => item.classList.remove("active"));
            this.classList.add("active");

            const target = this.getAttribute("href");

            if (target && target.startsWith("#")) {
                const section = document.querySelector(target);

                if (section) {
                    section.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }

            showNotification(this.dataset.label || this.textContent.trim());
        });
    });

    // Appointment buttons
    const appointmentButtons =
        document.querySelectorAll(".appointment-btn");

    appointmentButtons.forEach(button => {
        button.addEventListener("click", () => {
            showNotification("Appointment section opened");
        });
    });

    // Medication buttons
    const medicationButtons =
        document.querySelectorAll(".medication-btn");

    medicationButtons.forEach(button => {
        button.addEventListener("click", function () {
            this.textContent = "Taken ✓";
            this.disabled = true;
            showNotification("Medication marked as taken");
        });
    });

    // Search medical records
    const searchInput = document.querySelector("#recordSearch");

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const searchValue = this.value.toLowerCase();

            document.querySelectorAll(".record-item").forEach(record => {
                const text = record.textContent.toLowerCase();

                record.style.display =
                    text.includes(searchValue) ? "" : "none";
            });
        });
    }

    // Message button
    const messageButton = document.querySelector("#messageDoctor");

    if (messageButton) {
        messageButton.addEventListener("click", () => {
            showNotification("Message window opened");
        });
    }
});


function showNotification(message) {
    let notification = document.querySelector(".notification");

    if (!notification) {
        notification = document.createElement("div");
        notification.className = "notification";
        document.body.appendChild(notification);
    }

    notification.textContent = message;
    notification.classList.add("show");

    setTimeout(() => {
        notification.classList.remove("show");
    }, 2000);
}
