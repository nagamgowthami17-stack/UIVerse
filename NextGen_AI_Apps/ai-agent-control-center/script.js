const runAll = document.getElementById("runAll");
const filter = document.getElementById("filter");
const search = document.getElementById("agentSearch");
const agents = document.querySelectorAll(".agent");

const activeAgents = document.getElementById("activeAgents");
const runsToday = document.getElementById("runsToday");
const needsReview = document.getElementById("needsReview");
const approvalCount = document.getElementById("approvalCount");
const timeline = document.getElementById("timeline");


// ------------------------------------
// Add activity to Live Activity
// ------------------------------------

function addActivity(agentName, message) {

  const item = document.createElement("p");

  item.innerHTML = `
    <b>${agentName}</b> ${message}
    <small>just now</small>
  `;

  timeline.prepend(item);

  // Keep only latest 6 activities
  while (timeline.children.length > 6) {
    timeline.removeChild(timeline.lastChild);
  }
}


// ------------------------------------
// Update dashboard numbers
// ------------------------------------

function updateMetrics() {

  let running = 0;
  let review = 0;

  agents.forEach(agent => {

    const status = agent.querySelector("label").textContent;

    if (status === "Running") {
      running++;
    }

    if (status === "Review") {
      review++;
    }

  });

  activeAgents.textContent = running;
  needsReview.textContent = review;
  approvalCount.textContent = review;
}


// ------------------------------------
// Run all active/idle agents
// ------------------------------------

runAll.addEventListener("click", () => {

  runAll.disabled = true;
  runAll.textContent = "Running agents...";

  agents.forEach(agent => {

    const label = agent.querySelector("label");
    const status = agent.querySelector(".status");
    const button = agent.querySelector(".stop");

    if (label.textContent === "Idle") {

      label.textContent = "Running";

      status.className = "status run";

      button.textContent = "Stop";

      addActivity(
        agent.dataset.name,
        "started running"
      );
    }

  });

  updateMetrics();

  setTimeout(() => {

    runAll.disabled = false;
    runAll.textContent = "Run active agents";

  }, 1200);

});


// ------------------------------------
// Individual agent buttons
// ------------------------------------

document.querySelectorAll(".stop").forEach(button => {

  button.addEventListener("click", () => {

    const agent = button.closest(".agent");

    const label = agent.querySelector("label");
    const status = agent.querySelector(".status");
    const name = agent.dataset.name;


    // RUNNING → STOPPED
    if (label.textContent === "Running") {

      label.textContent = "Idle";

      status.className = "status idle";

      button.textContent = "Run";

      addActivity(
        name,
        "was stopped"
      );

    }


    // IDLE → RUNNING
    else if (label.textContent === "Idle") {

      label.textContent = "Running";

      status.className = "status run";

      button.textContent = "Stop";

      addActivity(
        name,
        "started running"
      );

    }


    // REVIEW → APPROVED
    else if (label.textContent === "Review") {

      label.textContent = "Running";

      status.className = "status run";

      button.textContent = "Stop";

      addActivity(
        name,
        "was approved and started"
      );

    }

    updateMetrics();

    applyFilters();

  });

});


// ------------------------------------
// Status filter
// ------------------------------------

filter.addEventListener("change", () => {

  applyFilters();

});


// ------------------------------------
// Search agents
// ------------------------------------

search.addEventListener("input", () => {

  applyFilters();

});


// ------------------------------------
// Search + Filter together
// ------------------------------------

function applyFilters() {

  const selectedStatus = filter.value.toLowerCase();

  const searchText = search.value.toLowerCase().trim();


  agents.forEach(agent => {

    const name =
      agent.dataset.name.toLowerCase();

    const status =
      agent.querySelector("label")
        .textContent
        .toLowerCase();


    const matchesSearch =
      name.includes(searchText);


    const matchesStatus =
      selectedStatus === "all status" ||
      status === selectedStatus;


    if (matchesSearch && matchesStatus) {

      agent.style.display = "grid";

    } else {

      agent.style.display = "none";

    }

  });

}


// ------------------------------------
// Sidebar navigation
// ------------------------------------

document.querySelectorAll(".nav").forEach(nav => {

  nav.addEventListener("click", () => {

    document.querySelectorAll(".nav")
      .forEach(item => {
        item.classList.remove("active");
      });

    nav.classList.add("active");

    const section =
      nav.dataset.section;

    addActivity(
      "System",
      `opened ${section}`
    );

  });

});


// ------------------------------------
// Keyboard shortcut
// Press "/" to search
// ------------------------------------

document.addEventListener("keydown", event => {

  if (
    event.key === "/" &&
    document.activeElement !== search
  ) {

    event.preventDefault();

    search.focus();

  }

});


// ------------------------------------
// Initial dashboard update
// ------------------------------------

updateMetrics();
