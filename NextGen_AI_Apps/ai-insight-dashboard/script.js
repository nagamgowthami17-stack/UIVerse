const askInput = document.getElementById("ask");
const goButton = document.getElementById("go");

const insightTitle = document.getElementById("insightTitle");
const insightText = document.getElementById("insightText");

const recommendation = document.getElementById("recommendation");
const impact = document.getElementById("impact");

const updated = document.getElementById("updated");

const periodText = document.getElementById("periodText");
const chartTotal = document.getElementById("chartTotal");

const users = document.getElementById("users");
const usersChange = document.getElementById("usersChange");
const conversion = document.getElementById("conversion");
const revenue = document.getElementById("revenue");
const retention = document.getElementById("retention");

const bars = document.querySelectorAll("#bars i");


// -------------------------------------
// ASK AI / DATA QUESTION
// -------------------------------------

function askData() {

  const question = askInput.value.trim();

  if (!question) {
    askInput.focus();
    return;
  }


  const lowerQuestion = question.toLowerCase();


  if (
    lowerQuestion.includes("user") ||
    lowerQuestion.includes("active")
  ) {

    insightTitle.textContent =
      "Active users are showing positive growth";

    insightText.innerHTML =
      "The dashboard currently reports <strong>48,291 active users</strong>, with activity increasing by 12.8%.";

    recommendation.textContent =
      "Continue improving user engagement";

    impact.textContent =
      "Potential impact: High";

  }

  else if (
    lowerQuestion.includes("revenue") ||
    lowerQuestion.includes("money")
  ) {

    insightTitle.textContent =
      "Revenue is trending upward";

    insightText.innerHTML =
      "Current revenue is <strong>$182.4K</strong>, representing an 8.2% increase over the comparison period.";

    recommendation.textContent =
      "Focus on high-value customer segments";

    impact.textContent =
      "Potential impact: High";

  }

  else if (
    lowerQuestion.includes("conversion")
  ) {

    insightTitle.textContent =
      "Conversion is improving";

    insightText.innerHTML =
      "The current conversion rate is <strong>7.42%</strong>, which is 0.9% higher than the previous period.";

    recommendation.textContent =
      "Test the highest-performing checkout flow";

    impact.textContent =
      "Potential impact: Medium";

  }

  else if (
    lowerQuestion.includes("retention")
  ) {

    insightTitle.textContent =
      "Retention needs attention";

    insightText.innerHTML =
      "Retention is currently <strong>64.1%</strong> and has decreased by 1.4%, with mobile users showing the largest change.";

    recommendation.textContent =
      "Investigate mobile user retention";

    impact.textContent =
      "Potential impact: High";

  }

  else {

    insightTitle.textContent =
      "AI found a pattern in your data";

    insightText.innerHTML =
      "Your question was <strong>\"" +
      question +
      "\"</strong>. Try asking about users, revenue, conversion, or retention.";

    recommendation.textContent =
      "Explore a specific metric";

    impact.textContent =
      "Potential impact: Medium";

  }


  updated.textContent = "Updated just now";

  askInput.value = "";

}


// Button click

goButton.addEventListener("click", askData);


// Press Enter

askInput.addEventListener("keydown", function(event) {

  if (event.key === "Enter") {
    askData();
  }

});


// -------------------------------------
// DATE RANGE BUTTONS
// -------------------------------------

const rangeButtons =
  document.querySelectorAll(".range button");


rangeButtons.forEach(button => {

  button.addEventListener("click", function() {

    rangeButtons.forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");


    const range = button.dataset.range;


    if (range === "7D") {

      periodText.textContent = "7 day trend";
      chartTotal.textContent = "41.7K";

      users.textContent = "41,782";
      usersChange.textContent = "↑ 8.4%";

      conversion.textContent = "6.91%";
      revenue.textContent = "$51.2K";
      retention.textContent = "62.8%";


      const heights = [
        "40%",
        "47%",
        "55%",
        "63%",
        "59%",
        "72%",
        "81%",
        "88%"
      ];

      bars.forEach((bar, index) => {
        bar.style.height = heights[index];
      });

    }


    else if (range === "30D") {

      periodText.textContent = "30 day trend";
      chartTotal.textContent = "48.3K";

      users.textContent = "48,291";
      usersChange.textContent = "↑ 12.8%";

      conversion.textContent = "7.42%";
      revenue.textContent = "$182.4K";
      retention.textContent = "64.1%";


      const heights = [
        "45%",
        "53%",
        "49%",
        "64%",
        "70%",
        "68%",
        "82%",
        "91%"
      ];

      bars.forEach((bar, index) => {
        bar.style.height = heights[index];
      });

    }


    else if (range === "90D") {

      periodText.textContent = "90 day trend";
      chartTotal.textContent = "52.6K";

      users.textContent = "52,641";
      usersChange.textContent = "↑ 19.3%";

      conversion.textContent = "8.05%";
      revenue.textContent = "$531.7K";
      retention.textContent = "67.2%";


      const heights = [
        "50%",
        "57%",
        "61%",
        "68%",
        "74%",
        "79%",
        "87%",
        "96%"
      ];

      bars.forEach((bar, index) => {
        bar.style.height = heights[index];
      });

    }


    updated.textContent =
      "Updated just now";

  });

});


// -------------------------------------
// ALERT BUTTONS
// -------------------------------------

document.querySelectorAll(".alertBtn")
  .forEach(button => {

    button.addEventListener("click", function() {

      const message =
        button.dataset.message;

      alert(message);

    });

  });
