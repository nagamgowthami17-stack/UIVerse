// ==========================================
// CAREPLUS - PATIENT HEALTH DASHBOARD
// ==========================================


// ==========================================
// TOAST NOTIFICATION
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
// VIEW HEALTH REPORT
// ==========================================

function viewHealthReport() {

  alert(
    "HEALTH REPORT\n\n" +
    "Health Score: 92/100\n" +
    "Heart Rate: 72 BPM\n" +
    "Blood Pressure: 118/76\n" +
    "Blood Oxygen: 98%\n" +
    "Temperature: 36.6°C\n\n" +
    "Overall Status: Healthy"
  );

}


// ==========================================
// VIEW APPOINTMENT
// ==========================================

function viewAppointment() {

  alert(
    "NEXT APPOINTMENT\n\n" +
    "Doctor: Dr. Priya Menon\n" +
    "Specialization: Cardiology Specialist\n" +
    "Date: October 08, 2026\n" +
    "Time: 10:30 AM\n" +
    "Type: Video consultation\n" +
    "Duration: 30 minutes"
  );

}


// ==========================================
// SET REMINDER
// ==========================================

function setReminder() {

  const reminder = {

    doctor: "Dr. Priya Menon",

    date: "October 08, 2026",

    time: "10:30 AM"

  };


  localStorage.setItem(
    "careplusReminder",
    JSON.stringify(reminder)
  );


  notify(
    "Reminder set for Oct 08 ✓"
  );

}


// ==========================================
// VIEW MEDICATIONS
// ==========================================

function viewMedications() {

  alert(
    "MEDICATIONS\n\n" +
    "✓ Vitamin D3\n" +
    "1 tablet · Morning · 08:00 AM\n\n" +
    "• Metformin\n" +
    "500 mg · After dinner · 08:00 PM\n\n" +
    "✓ Omega 3\n" +
    "1 capsule · Lunch · 01:00 PM"
  );

}


// ==========================================
// VIEW MEDICAL RECORDS
// ==========================================

function viewRecords() {

  alert(
    "MEDICAL RECORDS\n\n" +
    "Sep 24 - Blood Test - Normal\n\n" +
    "Sep 12 - ECG Report - Reviewed\n\n" +
    "Aug 30 - Prescription - Active"
  );

}


// ==========================================
// SIDEBAR NAVIGATION
// ==========================================

function selectMenu(element, sectionName) {

  const menuItems =
    document.querySelectorAll(".side a");

  menuItems.forEach(function (item) {

    item.classList.remove("active");

  });


  element.classList.add("active");


  if (sectionName === "Dashboard") {

    notify("Dashboard selected");

  }

  else if (sectionName === "Appointments") {

    viewAppointment();

  }

  else if (sectionName === "Medications") {

    viewMedications();

  }

  else if (sectionName === "Medical Records") {

    viewRecords();

  }

  else if (sectionName === "Messages") {

    notify("Messages selected");

  }

  else if (sectionName === "Settings") {

    notify("Settings selected");

  }

}


// ==========================================
// PAGE LOAD
// ==========================================

document.addEventListener(
  "DOMContentLoaded",
  function () {

    console.log(
      "CarePlus Patient Health Dashboard loaded successfully."
    );

  }
);
