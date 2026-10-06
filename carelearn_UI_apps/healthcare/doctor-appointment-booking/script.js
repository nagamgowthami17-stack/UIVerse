document.addEventListener("DOMContentLoaded", () => {

    // Sidebar
    document.querySelectorAll(".sidebar-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            document.querySelectorAll(".sidebar-link")
                .forEach(item => item.classList.remove("active"));

            this.classList.add("active");

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });


    // Doctor search
    const searchInput = document.querySelector("#doctorSearch");

    if (searchInput) {
        searchInput.addEventListener("input", function () {

            const searchText = this.value.toLowerCase();

            document.querySelectorAll(".doctor-card").forEach(card => {

                const doctorName =
                    card.textContent.toLowerCase();

                card.style.display =
                    doctorName.includes(searchText) ? "" : "none";
            });
        });
    }


    // Appointment booking
    document.querySelectorAll(".book-btn").forEach(button => {

        button.addEventListener("click", function () {

            const doctorCard =
                this.closest(".doctor-card");

            const doctorName =
                doctorCard
                    ? doctorCard.querySelector(".doctor-name")?.textContent
                    : "Doctor";

            const date = prompt("Enter appointment date:");

            if (!date) {
                return;
            }

            const time = prompt("Enter appointment time:");

            if (!time) {
                return;
            }

            this.textContent = "Booked ✓";
            this.disabled = true;

            alert(
                "Appointment booked successfully!\n\n" +
                "Doctor: " + doctorName +
                "\nDate: " + date +
                "\nTime: " + time
            );
        });
    });


    // Cancel appointment
    document.querySelectorAll(".cancel-btn").forEach(button => {

        button.addEventListener("click", function () {

            const confirmed =
                confirm("Cancel this appointment?");

            if (confirmed) {
                this.closest(".appointment-card")?.remove();

                alert("Appointment cancelled.");
            }
        });
    });


    // Health records
    document.querySelectorAll(".record-btn").forEach(button => {

        button.addEventListener("click", () => {
            alert("Health record opened.");
        });
    });

});
