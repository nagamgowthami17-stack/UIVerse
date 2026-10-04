let currentCat = "All";
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
  document.querySelectorAll(".course").forEach((c) => {
    const ok =
      (currentCat === "All" || c.dataset.cat === currentCat) &&
      c.dataset.name.includes(q);
    c.style.display = ok ? "block" : "none";
    if (ok) shown++;
  });
  document.getElementById("empty").style.display = shown ? "none" : "block";
}
function filterCourses() {
  render();
  notify("Course results updated");
}
function setCat(c, b) {
  currentCat = c;
  document
    .querySelectorAll(".chip")
    .forEach((x) => x.classList.remove("active"));
  b.classList.add("active");
  render();
}
function enroll(name) {
  notify(name + " added to your learning plan ✓");
}
document.getElementById("search").addEventListener("input", render);
