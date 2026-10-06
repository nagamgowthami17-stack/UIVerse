document.addEventListener("DOMContentLoaded", () => {

    // Sidebar navigation
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


    // Course buttons
    document.querySelectorAll(".course-btn").forEach(button => {

        button.addEventListener("click", function () {

            const course =
                this.closest(".course-card");

            const courseName =
                course?.querySelector(".course-title")?.textContent
                || "Course";

            alert("Opening " + courseName);

            this.textContent = "Continue Learning →";
        });
    });


    // Assignment completion
    document.querySelectorAll(".assignment-btn").forEach(button => {

        button.addEventListener("click", function () {

            this.textContent = "Completed ✓";
            this.disabled = true;

            const assignment =
                this.closest(".assignment-item");

            if (assignment) {
                assignment.classList.add("completed");
            }

            alert("Assignment marked as completed.");
        });
    });


    // Progress buttons
    document.querySelectorAll(".progress-btn").forEach(button => {

        button.addEventListener("click", function () {

            const progressBar =
                this.closest(".course-card")
                    ?.querySelector(".progress-fill");

            if (progressBar) {

                let current =
                    parseInt(progressBar.style.width) || 0;

                current = Math.min(current + 10, 100);

                progressBar.style.width = current + "%";

                this.textContent =
                    current === 100
                        ? "Completed ✓"
                        : "Progress " + current + "%";
            }
        });
    });


    // Certificate
    document.querySelectorAll(".certificate-btn").forEach(button => {

        button.addEventListener("click", () => {
            alert("Certificate section opened.");
        });
    });

});
