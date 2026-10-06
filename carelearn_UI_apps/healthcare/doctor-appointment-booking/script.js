// ==========================================
// MEDIBOOK - DOCTOR APPOINTMENT & BOOKING
// ==========================================


// Currently selected specialty
let currentSpec = "All";

// Currently selected doctor
let selectedDoctor = "";


// ==========================================
// TOAST
// ==========================================

function notify(message) {

  const toast = document.getElementById("toast");

  if (!toast) {
    alert(message);
    return;
  }

  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(function () {

    toast.classList.remove("show");

  }, 2200);

}


// ==========================================
// SEARCH + FILTER DOCTORS
// ==========================================

function renderDoctors() {

  const searchInput =
    document.getElementById("search");

  const query =
    searchInput.value.trim().toLowerCase();

  const doctors =
    document.querySelectorAll(".doctor");

  let shown = 0;


  doctors.forEach(function (doctor) {

    const name =
      doctor.dataset.name.toLowerCase();

    const specialty =
      doctor.dataset.spec;


    const matchesSearch =
      query === "" ||
      name.includes(query);


    const matchesSpecialty =
      currentSpec === "All" ||
      specialty === currentSpec;


    const shouldShow =
      matchesSearch &&
      matchesSpecialty;


    doctor.style.display =
      shouldShow ? "" : "none";


    if (shouldShow) {
      shown++;
    }

  });


  const empty =
    document.getElementById("empty");


  if (shown === 0) {

    empty.style.display = "block";

  } else {

    empty.style.display = "none";

  }

}


// ==========================================
// SEARCH BUTTON
// ==========================================

function filterDoctors() {

  renderDoctors();

  const searchValue =
    document.getElementById("search").value.trim();


  if (searchValue === "") {

    notify("Showing all doctors");

  } else {

    notify(
      "Search results updated"
    );

  }

}


// ==========================================
// SPECIALTY FILTER
// ==========================================

function setSpec(specialty, button) {

  currentSpec = specialty;


  document
    .querySelectorAll(".chip")
    .forEach(function (chip) {

      chip.classList.remove("active");

    });


  button.classList.add("active");


  renderDoctors();


  notify(
    specialty === "All"
      ? "Showing all specialties"
      : specialty + " doctors"
  );

}


// ==========================================
// OPEN BOOKING MODAL
// ==========================================

function openBooking(name, specialty) {

  selectedDoctor = {
    name: name,
    specialty: specialty
  };


  document.getElementById(
    "doctorName"
  ).textContent =
    name + " · " + specialty;


  const dateInput =
    document.getElementById("date");


  // Tomorrow as the minimum date
  const tomorrow =
    new Date();


  tomorrow.setDate(
    tomorrow.getDate() + 1
  );


  const year =
    tomorrow.getFullYear();


  const month =
    String(
      tomorrow.getMonth() + 1
    ).padStart(2, "0");


  const day =
    String(
      tomorrow.getDate()
    ).padStart(2, "0");


  const tomorrowString =
    `${year}-${month}-${day}`;


  dateInput.min =
    tomorrowString;


  // Use Oct 08 if available, otherwise tomorrow
  const defaultDate =
    new Date("2026-10-08");


  if (defaultDate >= tomorrow) {

    dateInput.value =
      "2026-10-08";

  } else {

    dateInput.value =
      tomorrowString;

  }


  document.getElementById(
    "time"
  ).value = "10:30 AM";


  document.getElementById(
    "consultation"
  ).value = "Video consultation";


  document
    .getElementById("modal")
    .classList.add("show");

}


// ==========================================
// CLOSE BOOKING MODAL
// ==========================================

function closeBooking() {

  document
    .getElementById("modal")
    .classList.remove("show");

}


// ==========================================
// CONFIRM BOOKING
// ==========================================

function confirmBooking() {

  if (!selectedDoctor) {

    notify(
      "Please select a doctor first"
    );

    return;

  }


  const date =
    document.getElementById(
      "date"
    ).value;


  const time =
    document.getElementById(
      "time"
    ).value;


  const consultation =
    document.getElementById(
      "consultation"
    ).value;


  if (!date) {

    notify(
      "Please select a date"
    );

    return;

  }


  const appointment = {

    doctor:
      selectedDoctor.name,

    specialty:
      selectedDoctor.specialty,

    date:
      date,

    time:
      time,

    consultation:
      consultation

  };


  // Save appointment
  localStorage.setItem(
    "mediBookAppointment",
    JSON.stringify(appointment)
  );


  // Update appointment section
  updateUpcomingAppointment(
    appointment
  );


  // Close modal
  closeBooking();


  notify(
    "Appointment confirmed successfully ✓"
  );

}


// ==========================================
// UPDATE UPCOMING APPOINTMENT
// ==========================================

function updateUpcomingAppointment(
  appointment
) {

  document.getElementById(
    "upcomingDoctor"
  ).textContent =
    appointment.doctor +
    " · " +
    appointment.specialty;


  document.getElementById(
    "upcomingDate"
  ).textContent =
    formatDate(appointment.date) +
    " · " +
    appointment.time +
    " · " +
    appointment.consultation;


  document.getElementById(
    "appointmentStatus"
  ).textContent =
    "CONFIRMED";

}


// ==========================================
// FORMAT DATE
// ==========================================

function formatDate(dateString) {

  const date =
    new Date(
      dateString + "T00:00:00"
    );


  return date.toLocaleDateString(
    "en-IN",
    {
      month: "short",
      day: "2-digit",
      year: "numeric"
    }
  );

}


// ==========================================
// VIEW APPOINTMENT DETAILS
// ==========================================

function viewAppointmentDetails() {

  const saved =
    localStorage.getItem(
      "mediBookAppointment"
    );


  if (!saved) {

    alert(
      "UPCOMING APPOINTMENT\n\n" +
      "Dr. Maya Rao · Cardiology\n" +
      "Oct 08, 2026 · 10:30 AM\n" +
      "Video consultation"
    );

    return;

  }


  const appointment =
    JSON.parse(saved);


  alert(
    "APPOINTMENT DETAILS\n\n" +

    "Doctor: " +
    appointment.doctor +
    "\n" +

    "Specialty: " +
    appointment.specialty +
    "\n" +

    "Date: " +
    formatDate(
      appointment.date
    ) +
    "\n" +

    "Time: " +
    appointment.time +
    "\n" +

    "Type: " +
    appointment.consultation
  );

}


// ==========================================
// SIDEBAR
// ==========================================

function selectMenu(
  element,
  section
) {

  document
    .querySelectorAll(".side a")
    .forEach(function (item) {

      item.classList.remove(
        "active"
      );

    });


  element.classList.add(
    "active"
  );


  if (
    section === "Appointments"
  ) {

    const upcoming =
      document.getElementById(
        "upcoming"
      );


    upcoming.scrollIntoView({
      behavior: "smooth"
    });


    notify(
      "Upcoming appointments"
    );


    return;

  }


  if (
    section === "Find Doctor"
  ) {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });


    notify(
      "Find Doctor selected"
    );


    return;

  }


  if (
    section === "Health Records"
  ) {

    notify(
      "Health Records selected"
    );


    return;

  }


  if (
    section === "Messages"
  ) {

    notify(
      "Messages selected"
    );


    return;

  }


  if (
    section === "Settings"
  ) {

    notify(
      "Settings selected"
    );

  }

}


// ==========================================
// CLOSE MODAL BY CLICKING OUTSIDE
// ==========================================

document
  .getElementById("modal")
  .addEventListener(
    "click",
    function (event) {

      if (
        event.target === this
      ) {

        closeBooking();

      }

    }
  );


// ==========================================
// SEARCH WHILE TYPING
// ==========================================

document
  .getElementById("search")
  .addEventListener(
    "input",
    renderDoctors
  );


// ==========================================
// LOAD SAVED APPOINTMENT
// ==========================================

document.addEventListener(
  "DOMContentLoaded",
  function () {

    const saved =
      localStorage.getItem(
        "mediBookAppointment"
      );


    if (saved) {

      try {

        const appointment =
          JSON.parse(saved);


        updateUpcomingAppointment(
          appointment
        );

      }

      catch (error) {

        console.error(
          "Could not load appointment:",
          error
        );

      }

    }


    renderDoctors();

  }
);
