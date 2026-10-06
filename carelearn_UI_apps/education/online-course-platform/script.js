document.addEventListener("DOMContentLoaded", () => {

    // Sidebar
    document.querySelectorAll(".sidebar-link").forEach(link => {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            document.querySelectorAll(".sidebar-link")
                .forEach(item => item.classList.remove("active"));

            this.classList.add("active");

            const target =
                document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });


    // Course search
    const searchInput =
        document.querySelector("#courseSearch");

    if (searchInput) {

        searchInput.addEventListener("input", function () {

            const searchText =
                this.value.toLowerCase();

            document.querySelectorAll(".course-card")
                .forEach(card => {

                    const courseText =
                        card.textContent.toLowerCase();

                    card.style.display =
                        courseText.includes(searchText)
                            ? ""
                            : "none";
                });
        });
    }


    // Enroll buttons
    document.querySelectorAll(".enroll-btn")
        .forEach(button => {

            button.addEventListener("click", function () {

                this.textContent = "Enrolled ✓";
                this.disabled = true;

                alert(
                    "You have successfully enrolled in this course!"
                );
            });
        });


    // Wishlist
    document.querySelectorAll(".wishlist-btn")
        .forEach(button => {

            button.addEventListener("click", function () {

                if (this.classList.contains("saved")) {

                    this.classList.remove("saved");
                    this.textContent = "♡ Wishlist";

                } else {

                    this.classList.add("saved");
                    this.textContent = "♥ Saved";
                }
            });
        });


    // Continue learning
    document.querySelectorAll(".continue-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                alert(
                    "Opening your course. Continue learning!"
                );
            });
        });


    // Instructor profiles
    document.querySelectorAll(".instructor-btn")
        .forEach(button => {

            button.addEventListener("click", () => {
                alert("Instructor profile opened.");
            });
        });

});
