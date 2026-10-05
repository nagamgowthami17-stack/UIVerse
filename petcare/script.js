document.addEventListener("DOMContentLoaded", function () {

    /* ================= ELEMENTS ================= */

    const modalOverlay = document.getElementById("modalOverlay");
    const modalContent = document.getElementById("modalContent");

    const themeBtn = document.getElementById("themeBtn");
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    let cartCount = 0;


    /* ================= MOBILE MENU ================= */

    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });


    /* ================= DARK MODE ================= */

    const savedTheme = localStorage.getItem("petcare-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeBtn.textContent = "☀️";
    }

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("petcare-theme", "dark");
            themeBtn.textContent = "☀️";
        } else {
            localStorage.setItem("petcare-theme", "light");
            themeBtn.textContent = "🌙";
        }

    });


    /* ================= NOTIFICATION BUTTON ================= */

    document.getElementById("notificationBtn").addEventListener("click", function () {
        scrollToSection("dashboard");

        setTimeout(function () {
            document.querySelector(".notification-section").scrollIntoView({
                behavior: "smooth"
            });
        }, 400);
    });


    /* ================= PROFILE ================= */

    document.getElementById("profileBtn").addEventListener("click", function () {

        openModal(`
            <h2>👤 My Profile</h2>
            <p>Manage your PetCare account.</p>

            <div class="modal-form">

                <div class="form-group">
                    <label>Pet Parent Name</label>
                    <input value="Kousalya" type="text">
                </div>

                <div class="form-group">
                    <label>Email</label>
                    <input value="petparent@example.com" type="email">
                </div>

                <div class="form-group">
                    <label>Phone</label>
                    <input value="+91 98765 43210" type="tel">
                </div>

                <button class="modal-submit"
                    onclick="showMessage('Profile updated successfully!'); closeModal();">
                    Save Changes
                </button>

            </div>
        `);

    });


    /* ================= MODAL FUNCTIONS ================= */

    window.openModal = function (content) {
        modalContent.innerHTML = content;
        modalOverlay.classList.add("active");
    };


    window.closeModal = function () {
        modalOverlay.classList.remove("active");
    };


    modalOverlay.addEventListener("click", function (event) {

        if (event.target === modalOverlay) {
            closeModal();
        }

    });


    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            closeModal();
        }

    });


    /* ================= APPOINTMENT ================= */

    window.openAppointment = function () {

        openModal(`
            <h2>🩺 Book Veterinary Appointment</h2>
            <p>Choose a pet, veterinarian and convenient time.</p>

            <div class="modal-form">

                <div class="form-group">
                    <label>Select Pet</label>
                    <select>
                        <option>Buddy - Golden Retriever</option>
                        <option>Luna - British Shorthair</option>
                    </select>
                </div>

                <div class="form-group">
                    <label>Appointment Type</label>
                    <select>
                        <option>General Health Checkup</option>
                        <option>Vaccination</option>
                        <option>Dental Checkup</option>
                        <option>Emergency Consultation</option>
                    </select>
                </div>

                <div class="form-group">
                    <label>Select Veterinarian</label>
                    <select>
                        <option>Dr. Priya Menon</option>
                        <option>Dr. Arun Kumar</option>
                        <option>Dr. Sneha Rao</option>
                    </select>
                </div>

                <div class="form-group">
                    <label>Date</label>
                    <input type="date">
                </div>

                <div class="form-group">
                    <label>Time</label>
                    <select>
                        <option>10:00 AM</option>
                        <option>10:30 AM</option>
                        <option>11:00 AM</option>
                        <option>4:00 PM</option>
                        <option>5:30 PM</option>
                    </select>
                </div>

                <button class="modal-submit" onclick="confirmAppointment()">
                    Confirm Appointment
                </button>

            </div>
        `);

    };


    window.confirmAppointment = function () {

        showMessage("✅ Appointment booked successfully!");
        closeModal();

    };


    window.openAppointmentDetails = function () {

        openModal(`
            <h2>📅 Appointment Details</h2>

            <div class="modal-form">

                <div class="notification-item">
                    <div class="notification-icon blue">🐕</div>
                    <div class="notification-content">
                        <strong>Buddy</strong>
                        <p>General Health Checkup</p>
                    </div>
                </div>

                <br>

                <p><strong>Veterinarian:</strong> Dr. Priya Menon</p>
                <p><strong>Hospital:</strong> Green Paws Veterinary Hospital</p>
                <p><strong>Date:</strong> October 8, 2026</p>
                <p><strong>Time:</strong> 10:30 AM</p>

                <br>

                <button class="modal-submit"
                    onclick="showMessage('Appointment reminder set!'); closeModal();">
                    🔔 Set Reminder
                </button>

            </div>
        `);

    };


    window.cancelAppointment = function () {

        const confirmCancel = confirm(
            "Are you sure you want to cancel this appointment?"
        );

        if (confirmCancel) {
            showMessage("Appointment cancelled.");
        }

    };


    /* ================= PET MODAL ================= */

    window.openPetModal = function () {

        openModal(`
            <h2>🐾 Add New Pet</h2>
            <p>Create a profile for your pet.</p>

            <div class="modal-form">

                <div class="form-group">
                    <label>Pet Name</label>
                    <input type="text" placeholder="Enter pet name">
                </div>

                <div class="form-group">
                    <label>Pet Type</label>
                    <select>
                        <option>Dog</option>
                        <option>Cat</option>
                        <option>Rabbit</option>
                        <option>Bird</option>
                    </select>
                </div>

                <div class="form-group">
                    <label>Breed</label>
                    <input type="text" placeholder="Enter breed">
                </div>

                <div class="form-group">
                    <label>Age</label>
                    <input type="number" placeholder="Age in years">
                </div>

                <div class="form-group">
                    <label>Weight</label>
                    <input type="number" placeholder="Weight in kg">
                </div>

                <button class="modal-submit"
                    onclick="showMessage('🐾 Pet profile created successfully!'); closeModal();">
                    Create Pet Profile
                </button>

            </div>
        `);

    };


    window.openPetProfile = function (petName) {

        const petData = {

            Buddy: {
                breed: "Golden Retriever",
                age: "3 Years",
                weight: "24 kg",
                gender: "Male",
                health: "92%"
            },

            Luna: {
                breed: "British Shorthair",
                age: "2 Years",
                weight: "4.8 kg",
                gender: "Female",
                health: "96%"
            }

        };

        const pet = petData[petName];

        openModal(`
            <h2>🐾 ${petName}'s Profile</h2>
            <p>${pet.breed}</p>

            <div class="modal-form">

                <p><strong>Gender:</strong> ${pet.gender}</p>
                <p><strong>Age:</strong> ${pet.age}</p>
                <p><strong>Weight:</strong> ${pet.weight}</p>
                <p><strong>Health Score:</strong> ${pet.health}</p>

                <br>

                <button class="modal-submit"
                    onclick="openHealthRecords()">
                    📋 View Health Records
                </button>

            </div>
        `);

    };


    /* ================= HEALTH ================= */

    window.openHealthRecords = function () {

        openModal(`
            <h2>📋 Buddy's Health Records</h2>
            <p>Complete medical history.</p>

            <div class="modal-form">

                <div class="notification-item">
                    <div class="notification-icon blue">🩺</div>
                    <div class="notification-content">
                        <strong>General Checkup</strong>
                        <p>September 18, 2026 • Dr. Priya Menon</p>
                    </div>
                </div>

                <br>

                <div class="notification-item">
                    <div class="notification-icon red">💉</div>
                    <div class="notification-content">
                        <strong>Rabies Vaccination</strong>
                        <p>August 10, 2026 • Completed</p>
                    </div>
                </div>

                <br>

                <div class="notification-item">
                    <div class="notification-icon purple">💊</div>
                    <div class="notification-content">
                        <strong>Vitamin Supplement</strong>
                        <p>July 05, 2026 • Daily medication</p>
                    </div>
                </div>

            </div>
        `);

    };


    window.addHealthRecord = function () {

        openModal(`
            <h2>📋 Add Health Record</h2>
            <p>Save a new medical record.</p>

            <div class="modal-form">

                <div class="form-group">
                    <label>Record Type</label>
                    <select>
                        <option>Health Checkup</option>
                        <option>Vaccination</option>
                        <option>Medication</option>
                        <option>Dental Care</option>
                    </select>
                </div>

                <div class="form-group">
                    <label>Date</label>
                    <input type="date">
                </div>

                <div class="form-group">
                    <label>Notes</label>
                    <textarea placeholder="Enter medical notes..."></textarea>
                </div>

                <button class="modal-submit"
                    onclick="showMessage('Health record saved!'); closeModal();">
                    Save Record
                </button>

            </div>
        `);

    };


    window.viewRecord = function (recordType) {

        openModal(`
            <h2>📋 ${recordType}</h2>
            <p>Medical record details</p>

            <div class="modal-form">
                <p><strong>Pet:</strong> Buddy</p>
                <p><strong>Date:</strong> September 18, 2026</p>
                <p><strong>Veterinarian:</strong> Dr. Priya Menon</p>
                <p><strong>Status:</strong> Completed</p>

                <br>

                <p>
                    Buddy was examined and found to be healthy.
                    No major concerns were reported.
                </p>
            </div>
        `);

    };


    /* ================= VACCINATIONS ================= */

    window.openVaccinations = function () {

        openModal(`
            <h2>💉 Vaccination Schedule</h2>
            <p>Buddy's vaccination history and upcoming reminders.</p>

            <div class="modal-form">

                <div class="notification-item">
                    <div class="notification-icon green">✓</div>
                    <div class="notification-content">
                        <strong>DHPP Vaccine</strong>
                        <p>Completed • August 10, 2026</p>
                    </div>
                </div>

                <br>

                <div class="notification-item">
                    <div class="notification-icon green">✓</div>
                    <div class="notification-content">
                        <strong>Rabies Vaccine</strong>
                        <p>Completed • August 10, 2026</p>
                    </div>
                </div>

                <br>

                <div class="notification-item">
                    <div class="notification-icon red">!</div>
                    <div class="notification-content">
                        <strong>Annual Booster</strong>
                        <p>Due • October 13, 2026</p>
                    </div>
                </div>

                <br>

                <button class="modal-submit"
                    onclick="openAppointment()">
                    🩺 Book Vaccination
                </button>

            </div>
        `);

    };


    /* ================= MEDICATION ================= */

    window.openMedication = function () {

        openModal(`
            <h2>💊 Medication Reminders</h2>
            <p>Today's medication schedule for Buddy.</p>

            <div class="modal-form">

                <div class="notification-item">
                    <div class="notification-icon purple">💊</div>
                    <div class="notification-content">
                        <strong>Vitamin Supplement</strong>
                        <p>1 tablet • 7:00 PM</p>
                    </div>
                </div>

                <br>

                <div class="notification-item">
                    <div class="notification-icon purple">💊</div>
                    <div class="notification-content">
                        <strong>Joint Support</strong>
                        <p>1 capsule • 9:00 PM</p>
                    </div>
                </div>

                <br>

                <button class="modal-submit"
                    onclick="showMessage('Medication reminder added!'); closeModal();">
                    + Add Medication
                </button>

            </div>
        `);

    };


    /* ================= CLINICS ================= */

    window.findClinics = function () {

        document.getElementById("clinicSearch").focus();

        showMessage(
            "📍 Showing veterinary clinics near your selected area."
        );

    };


    window.filterClinics = function () {

        const search =
            document.getElementById("clinicSearch")
                .value
                .toLowerCase();

        const cards =
            document.querySelectorAll(".clinic-card");

        cards.forEach(function (card) {

            const name =
                card.dataset.name;

            if (name.includes(search)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    };


    window.callClinic = function (clinic) {

        showMessage(
            `📞 Calling ${clinic}...`
        );

    };


    window.showDirections = function (clinic) {

        showMessage(
            `🧭 Directions to ${clinic} opened.`
        );

    };


    /* ================= PET SHOP ================= */

    window.filterProducts = function (category, clickedButton) {

        document.querySelectorAll(".category").forEach(function (button) {
            button.classList.remove("active");
        });

        clickedButton.classList.add("active");

        document.querySelectorAll(".product-card").forEach(function (product) {

            if (
                category === "all" ||
                product.dataset.category === category
            ) {
                product.style.display = "";
            } else {
                product.style.display = "none";
            }

        });

    };


    window.addToCart = function (productName) {

        cartCount++;

        document.getElementById("cartCount").textContent =
            cartCount;

        showMessage(
            `🛒 ${productName} added to cart!`
        );

    };


    window.viewCart = function () {

        if (cartCount === 0) {

            showMessage("Your cart is currently empty.");

            return;
        }

        openModal(`
            <h2>🛒 Your Cart</h2>
            <p>${cartCount} item(s) added to your cart.</p>

            <div class="modal-form">

                <button class="modal-submit"
                    onclick="showMessage('Checkout started!'); closeModal();">
                    Proceed to Checkout
                </button>

            </div>
        `);

    };


    /* ================= NOTIFICATIONS ================= */

    window.markNotificationsRead = function () {

        document.querySelector(".notification-dot").style.display =
            "none";

        showMessage(
            "✓ All notifications marked as read."
        );

    };


    /* ================= UTILITY ================= */

    window.scrollToSection = function (id) {

        const section = document.getElementById(id);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }

    };


    window.showMessage = function (message) {

        const messageBox = document.createElement("div");

        messageBox.textContent = message;

        messageBox.style.position = "fixed";
        messageBox.style.bottom = "25px";
        messageBox.style.left = "50%";
        messageBox.style.transform = "translateX(-50%)";
        messageBox.style.background = "#17332d";
        messageBox.style.color = "white";
        messageBox.style.padding = "13px 20px";
        messageBox.style.borderRadius = "12px";
        messageBox.style.zIndex = "5000";
        messageBox.style.fontSize = "13px";
        messageBox.style.fontWeight = "700";
        messageBox.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.2)";

        document.body.appendChild(messageBox);

        setTimeout(function () {
            messageBox.remove();
        }, 2500);

    };

});