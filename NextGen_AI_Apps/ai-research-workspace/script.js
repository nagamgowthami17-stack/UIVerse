const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const addSource = document.getElementById("addSource");
const analyzeBtn = document.getElementById("analyzeBtn");

const saveBtn = document.getElementById("saveBtn");
const saveStatus = document.getElementById("saveStatus");

const newBtn = document.getElementById("newBtn");
const exportBtn = document.getElementById("exportBtn");

const question = document.getElementById("question");

const analysisTitle =
  document.getElementById("analysisTitle");

const analysisText =
  document.getElementById("analysisText");

const statusText =
  document.getElementById("statusText");

const sourceCount =
  document.getElementById("sourceCount");

const sourceList =
  document.getElementById("sourceList");


// -----------------------------
// SOURCE SELECTION
// -----------------------------

function activateSource(source) {

  document.querySelectorAll(".source")
    .forEach(function(item) {
      item.classList.remove("active");
    });

  source.classList.add("active");

  const title =
    source.dataset.title;

  const description =
    source.dataset.description;

  analysisTitle.textContent =
    title + " — Research evidence";

  analysisText.textContent =
    description;

  statusText.textContent =
    "Source selected: " + title;
}


document.querySelectorAll(".source")
  .forEach(function(source) {

    source.addEventListener("click", function() {
      activateSource(source);
    });

  });


// -----------------------------
// SEARCH
// -----------------------------

searchBtn.addEventListener("click", function() {

  const query =
    searchInput.value.trim().toLowerCase();

  const sources =
    document.querySelectorAll(".source");

  if (!query) {

    sources.forEach(function(source) {
      source.style.display = "grid";
    });

    statusText.textContent =
      "Showing all research sources";

    return;
  }


  let found = 0;


  sources.forEach(function(source) {

    const text =
      source.textContent.toLowerCase();

    if (text.includes(query)) {

      source.style.display = "grid";
      found++;

    } else {

      source.style.display = "none";

    }

  });


  statusText.textContent =
    found + " matching source(s) found";

});


// Press Enter to search

searchInput.addEventListener("keydown", function(event) {

  if (event.key === "Enter") {
    searchBtn.click();
  }

});


// -----------------------------
// ADD SOURCE
// -----------------------------

addSource.addEventListener("click", function() {

  const source = document.createElement("article");

  source.className = "source";

  source.dataset.title =
    "New Research Source";

  source.dataset.description =
    "A newly added research source ready for analysis.";


  source.innerHTML = `
    <span class="sourceIcon">NR</span>

    <div>
      <b>New Research Source</b>

      <p>
        Added to your workspace
      </p>

      <small>
        Source · Just now
      </small>
    </div>
  `;


  sourceList.appendChild(source);


  source.addEventListener("click", function() {
    activateSource(source);
  });


  updateSourceCount();


  statusText.textContent =
    "New source added";

});


// -----------------------------
// SOURCE COUNT
// -----------------------------

function updateSourceCount() {

  const count =
    document.querySelectorAll(".source").length;

  sourceCount.textContent =
    count + (count === 1 ? " source" : " sources");

}


// -----------------------------
// RUN ANALYSIS
// -----------------------------

analyzeBtn.addEventListener("click", function() {

  const text =
    question.value.trim();

  if (!text) {

    question.focus();

    alert("Please enter a research question.");

    return;
  }


  analyzeBtn.textContent =
    "Analyzing…";

  statusText.textContent =
    "AI is analyzing your research question";


  setTimeout(function() {

    const lower =
      text.toLowerCase();


    if (
      lower.includes("solar") ||
      lower.includes("renewable")
    ) {

      analysisTitle.textContent =
        "Solar power, storage, and grid upgrades are major growth drivers.";

      analysisText.textContent =
        "Research suggests that falling solar costs, " +
        "better battery storage, supportive policies, " +
        "and modern electricity infrastructure can " +
        "accelerate renewable energy adoption.";

    }

    else if (
      lower.includes("battery") ||
      lower.includes("storage")
    ) {

      analysisTitle.textContent =
        "Energy storage can improve renewable reliability.";

      analysisText.textContent =
        "Battery storage allows excess renewable energy " +
        "to be stored and used when generation is lower. " +
        "This can improve grid flexibility and reliability.";

    }

    else if (
      lower.includes("cost") ||
      lower.includes("market")
    ) {

      analysisTitle.textContent =
        "Falling costs and market investment can accelerate adoption.";

      analysisText.textContent =
        "Technology cost reductions, investment incentives, " +
        "and growing demand can make renewable energy " +
        "more competitive with traditional energy sources.";

    }

    else {

      analysisTitle.textContent =
        "AI identified several research themes.";

      analysisText.textContent =
        "The question can be explored by comparing " +
        "technology trends, economic factors, policy " +
        "developments, and infrastructure requirements.";

    }


    analyzeBtn.textContent =
      "✦ Run analysis";

    statusText.textContent =
      "Analysis completed just now";

  }, 800);

});


// -----------------------------
// SAVE
// -----------------------------

saveBtn.addEventListener("click", function() {

  saveBtn.textContent =
    "Saved ✓";

  saveStatus.textContent =
    "Saved just now";


  setTimeout(function() {

    saveBtn.textContent =
      "Save";

  }, 1500);

});


// -----------------------------
// NEW RESEARCH
// -----------------------------

newBtn.addEventListener("click", function() {

  question.value =
    "What technologies and market factors are most likely to accelerate renewable energy adoption over the next decade?";


  analysisTitle.textContent =
    "Solar, storage, and grid modernization are key drivers.";

  analysisText.textContent =
    "Current research indicates that falling solar costs, " +
    "improvements in energy storage, and investment in " +
    "electricity infrastructure are likely to accelerate " +
    "renewable adoption.";

  searchInput.value = "";


  document.querySelectorAll(".source")
    .forEach(function(source) {
      source.style.display = "grid";
      source.classList.remove("active");
    });


  const first =
    document.querySelector(".source");

  if (first) {
    first.classList.add("active");
  }


  statusText.textContent =
    "New research workspace ready";

});


// -----------------------------
// EXPORT
// -----------------------------

exportBtn.addEventListener("click", function() {

  const researchText =
    "Research: The future of renewable energy\n\n" +
    "Question:\n" +
    question.value + "\n\n" +
    "AI Analysis:\n" +
    analysisTitle.textContent + "\n\n" +
    analysisText.textContent;


  const blob =
    new Blob([researchText], {
      type: "text/plain"
    });


  const url =
    URL.createObjectURL(blob);


  const link =
    document.createElement("a");

  link.href = url;

  link.download =
    "renewable-energy-research.txt";

  link.click();


  URL.revokeObjectURL(url);


  statusText.textContent =
    "Research exported successfully";

});


// -----------------------------
// NAVIGATION
// -----------------------------

document.querySelectorAll(".nav")
  .forEach(function(button) {

    button.addEventListener("click", function() {

      document.querySelectorAll(".nav")
        .forEach(function(item) {
          item.classList.remove("active");
        });

      button.classList.add("active");


      const section =
        button.textContent.trim();


      if (section === "Sources") {

        document.querySelector(".sources")
          .scrollIntoView({
            behavior: "smooth"
          });

      }

      else if (section === "Analysis") {

        document.querySelector(".research")
          .scrollIntoView({
            behavior: "smooth"
          });

      }

      else {

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }

    });

  });


// Initial count

updateSourceCount();
