// ==========================================
// CarePlus - Patient Health Dashboard
// ==========================================

function notify(message) {
  const toast = document.getElementById("toast");

  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}


// ==========================================
// HEALTH REPORT
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
// APPOINTMENT DETAILS
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

  notify("Reminder set for Oct 08 ✓");
}


// ==========================================
// MEDICATIONS
// ==========================================

function viewMedications() {
  alert(
    "MEDICATIONS\n\n" +
    "✓ Vitamin D3\n" +
    "   1 tablet · Morning · 08:00 AM\n\n" +
    "• Metformin\n" +
    "   500 mg · After dinner · 08:00 PM\n\n" +
    "✓ Omega 3\n" +
    "   1 capsule · Lunch · 01:00 PM"
  );
}


// ==========================================
// MEDICAL RECORDS
// ==========================================

function viewRecords() {
  alert(
    "MEDICAL RECORDS\n\n" +
    "Sep 24 - Blood Test - Normal\n" +
    "Sep 12 - ECG Report - Reviewed\n" +
    "Aug 30 - Prescription - Active"
  );
}


// ==========================================
// SIDEBAR NAVIGATION
// ==========================================

document.querySelectorAll(".side a:not([href])").forEach((link) => {

  link.addEventListener("click", function () {

    document
      .querySelectorAll(".side a")
      .forEach((item) => {
        item.classList.remove("active");
      });

    this.classList.add("active");

    const sectionName =
      this.querySelector("span:last-child")?.textContent.trim() ||
      this.textContent.trim();

    notify(sectionName + " selected");
  });

});
