let currentSpec = "All";
function notify(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
}
function render() {
  const q = document.getElementById("search").value.toLowerCase();
  let shown = 0;
  document.querySelectorAll(".doctor").forEach((c) => {
    const ok =
      (currentSpec === "All" || c.dataset.spec === currentSpec) &&
      c.dataset.name.includes(q);
    c.style.display = ok ? "block" : "none";
    if (ok) shown++;
  });
  document.getElementById("empty").style.display = shown ? "none" : "block";
}
function filterDoctors() {
  render();
  notify("Doctor results updated");
}
function setSpec(s, b) {
  currentSpec = s;
  document
    .querySelectorAll(".chip")
    .forEach((x) => x.classList.remove("active"));
  b.classList.add("active");
  render();
}
function openBooking(name, spec) {
  document.getElementById("doctorName").textContent = name + " · " + spec;
  document.getElementById("date").value = "2026-10-08";
  document.getElementById("modal").classList.add("show");
}
function closeBooking() {
  document.getElementById("modal").classList.remove("show");
}
function confirmBooking() {
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  if (!date) {
    notify("Please select a date");
    return;
  }
  document.getElementById("upcomingDate").textContent =
    date + " · " + time + " · Video consultation";
  closeBooking();
  notify("Appointment confirmed successfully ✓");
}
document.getElementById("search").addEventListener("input", render);
