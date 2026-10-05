const run = document.getElementById("run");
const promptInput = document.getElementById("prompt");
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");

const temp = document.getElementById("temp");
const tempVal = document.getElementById("tempVal");

const tokens = document.getElementById("tokens");
const tokenVal = document.getElementById("tokenVal");

const model = document.getElementById("model");
const modelInfo = document.getElementById("modelInfo");

const qualityScore = document.getElementById("qualityScore");
const qualityText = document.getElementById("qualityText");

const save = document.getElementById("save");
const saveStatus = document.getElementById("saveStatus");

const versionCount = document.getElementById("versionCount");


// -----------------------------------------
// TEMPERATURE
// -----------------------------------------

temp.addEventListener("input", function () {

  tempVal.textContent = temp.value;

});


// -----------------------------------------
// MAX TOKENS
// -----------------------------------------

tokens.addEventListener("input", function () {

  tokenVal.textContent = tokens.value;

});


// -----------------------------------------
// MODEL SELECTOR
// -----------------------------------------

model.addEventListener("change", function () {

  modelInfo.textContent =
    model.value + " · Ready";

});


// -----------------------------------------
// RUN EXPERIMENT
// -----------------------------------------

run.addEventListener("click", function () {

  const prompt = promptInput.value.trim();

  if (!prompt) {

    promptInput.focus();

    alert("Please enter a prompt first.");

    return;
  }


  run.textContent = "Running…";

  modelInfo.textContent =
    model.value + " · Running";


  setTimeout(function () {

    const lowerPrompt =
      prompt.toLowerCase();


    // Water bottle / product description

    if (
      lowerPrompt.includes("water bottle") ||
      lowerPrompt.includes("bottle")
    ) {

      resultTitle.textContent =
        "Designed for everyday carry.";

      resultText.textContent =
        "A durable reusable bottle made for busy days. " +
        "Its insulated design helps maintain your drink's " +
        "temperature while reducing reliance on single-use " +
        "plastic. Lightweight, dependable, and easy to carry " +
        "from morning commutes to weekend adventures.";

      qualityScore.textContent = "94";

      qualityText.textContent =
        "Strong clarity · Relevant · On brand";

    }


    // Laptop

    else if (
      lowerPrompt.includes("laptop") ||
      lowerPrompt.includes("computer")
    ) {

      resultTitle.textContent =
        "Power for every idea.";

      resultText.textContent =
        "Built for work, creativity, and everyday productivity. " +
        "This modern laptop combines reliable performance with " +
        "a portable design, giving you the flexibility to work " +
        "wherever your day takes you.";

      qualityScore.textContent = "91";

      qualityText.textContent =
        "Clear · Relevant · Professional";

    }


    // Shoes

    else if (
      lowerPrompt.includes("shoe") ||
      lowerPrompt.includes("shoes")
    ) {

      resultTitle.textContent =
        "Comfort that keeps you moving.";

      resultText.textContent =
        "Designed for everyday movement, these shoes combine " +
        "comfortable support with a lightweight build. " +
        "A versatile design makes them suitable for busy days, " +
        "casual outings, and active routines.";

      qualityScore.textContent = "89";

      qualityText.textContent =
        "Engaging · Relevant · Easy to read";

    }


    // Generic prompt

    else {

      resultTitle.textContent =
        "A clearer answer starts here.";

      resultText.textContent =
        "This experiment produced a concise response based on " +
        "your prompt. The selected model focused on clarity, " +
        "relevance, and a natural tone while following the " +
        "instructions provided.";

      qualityScore.textContent = "86";

      qualityText.textContent =
        "Clear · Useful · Well structured";

    }


    modelInfo.textContent =
      model.value + " · 0.8s";

    run.textContent =
      "▶ Run experiment";

  }, 700);

});


// -----------------------------------------
// SAVE VERSION
// -----------------------------------------

save.addEventListener("click", function () {

  save.textContent =
    "Saved ✓";

  saveStatus.textContent =
    "● Saved just now";


  setTimeout(function () {

    save.textContent =
      "Save version";

  }, 1500);

});


// -----------------------------------------
// VERSION HISTORY
// -----------------------------------------

const versions =
  document.querySelectorAll(".version");


versions.forEach(function (version) {

  version.addEventListener("click", function () {

    versions.forEach(function (item) {

      item.classList.remove("active");

    });


    version.classList.add("active");


    const selectedVersion =
      version.dataset.version;

    const title =
      version.dataset.title;

    const description =
      version.dataset.description;

    const score =
      version.dataset.score;


    resultTitle.textContent =
      title;

    resultText.textContent =
      description;

    qualityScore.textContent =
      score;

    qualityText.textContent =
      "Version " +
      selectedVersion.replace("v", "") +
      " · Loaded from history";


    document.querySelector(".tag").textContent =
      "VERSION " +
      selectedVersion.replace("v", "");

  });

});


// -----------------------------------------
// NAVIGATION
// -----------------------------------------

document.querySelectorAll(".navBtn")
  .forEach(function (button) {

    button.addEventListener("click", function () {

      document.querySelectorAll(".navBtn")
        .forEach(function (item) {

          item.classList.remove("active");

        });


      button.classList.add("active");


      const section =
        button.textContent.trim();


      if (section === "Versions") {

        document.querySelector(".versions")
          .scrollIntoView({
            behavior: "smooth"
          });

      }

      else if (section === "Evaluations") {

        document.querySelector(".quality")
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
