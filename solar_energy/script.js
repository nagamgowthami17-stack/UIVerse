/* ================= GLOBAL ================= */

const $ = (selector) =>
    document.querySelector(selector);

const $$ = (selector) =>
    document.querySelectorAll(selector);

let battery = 78;

let energyChart;
let analyticsChart;
let forecastChart;


/* ================= NAVIGATION ================= */

const pageTitles = {

    dashboard: "Smart Energy Dashboard",

    solar: "Solar Panels",

    analytics: "Energy Analytics",

    forecast: "AI Energy Forecast",

    battery: "Battery Management",

    alerts: "Alerts & Notifications",

    settings: "Settings"

};


$$(".nav-item").forEach(button => {

    button.addEventListener("click", () => {

        const page = button.dataset.page;

        showPage(page);

    });

});


function showPage(page) {

    $$(".nav-item").forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.page === page
        );

    });


    $$(".page").forEach(section => {

        section.classList.toggle(
            "active",
            section.id === page
        );

    });


    $("#pageTitle").textContent =
        pageTitles[page];


    if (page === "analytics" &&
        !analyticsChart) {

        createAnalyticsChart();

    }


    if (page === "forecast" &&
        !forecastChart) {

        createForecastChart();

    }


    if (window.innerWidth < 760) {

        $("#sidebar").classList.remove("open");

    }

}


/* ================= MOBILE MENU ================= */

$("#menuBtn").addEventListener(
    "click",
    () => {

        $("#sidebar")
            .classList
            .toggle("open");

    }
);


/* ================= TOAST ================= */

function showToast(message) {

    const toast = $("#toast");

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2200);

}


/* ================= DARK MODE ================= */

$("#themeBtn").addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );

    }
);


$("#darkMode").addEventListener(
    "change",
    event => {

        document.body.classList.toggle(
            "dark",
            event.target.checked
        );

    }
);


/* ================= DASHBOARD CHART ================= */

function createEnergyChart() {

    const canvas =
        $("#energyChart");

    energyChart =
        new Chart(canvas, {

            type: "line",

            data: {

                labels: [
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri",
                    "Sat",
                    "Sun"
                ],

                datasets: [

                    {

                        data: [
                            18,
                            21,
                            17,
                            24,
                            20,
                            27,
                            31
                        ],

                        borderColor:
                            "#287254",

                        backgroundColor:
                            "rgba(40,114,84,.12)",

                        fill: true,

                        tension: .4,

                        pointRadius: 4,

                        pointBackgroundColor:
                            "#d1ad5f"

                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {
                        display: false
                    }

                },

                scales: {

                    x: {

                        grid: {
                            display: false
                        }

                    },

                    y: {

                        grid: {
                            color:
                                "rgba(30,70,50,.08)"
                        }

                    }

                }

            }

        });

}


/* ================= ANALYTICS ================= */

function createAnalyticsChart() {

    analyticsChart = new Chart(

        $("#analyticsChart"),

        {

            type: "bar",

            data: {

                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul"
                ],

                datasets: [

                    {

                        label:
                            "Generated",

                        data: [
                            540,
                            590,
                            620,
                            575,
                            640,
                            660,
                            684
                        ],

                        backgroundColor:
                            "#327d5e",

                        borderRadius: 5

                    },

                    {

                        label:
                            "Consumed",

                        data: [
                            510,
                            530,
                            500,
                            520,
                            498,
                            525,
                            512
                        ],

                        backgroundColor:
                            "#d4b46d",

                        borderRadius: 5

                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {
                        display: true
                    }

                }

            }

        }

    );

}


/* ================= FORECAST ================= */

function createForecastChart() {

    forecastChart = new Chart(

        $("#forecastChart"),

        {

            type: "line",

            data: {

                labels: [
                    "Today",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri",
                    "Sat",
                    "Sun"
                ],

                datasets: [

                    {

                        label:
                            "Predicted Solar Generation",

                        data: [
                            24.8,
                            31.2,
                            29.5,
                            27.8,
                            34.1,
                            30.4,
                            28.6
                        ],

                        borderColor:
                            "#b79249",

                        backgroundColor:
                            "rgba(183,146,73,.12)",

                        fill: true,

                        tension: .4,

                        borderDash: [
                            6,
                            4
                        ],

                        pointRadius: 4

                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {
                        display: false
                    }

                }

            }

        }

    );

}


createEnergyChart();


/* ================= CHART PERIOD ================= */

$("#chartPeriod").addEventListener(
    "change",
    event => {

        showToast(
            "Chart updated for " +
            event.target.value
        );

    }
);


/* ================= SOLAR PANELS ================= */

const panelData = [

    [
        "Panel 01",
        "Online",
        "1.02 kW",
        "91%"
    ],

    [
        "Panel 02",
        "Online",
        "0.98 kW",
        "94%"
    ],

    [
        "Panel 03",
        "Online",
        "1.08 kW",
        "93%"
    ],

    [
        "Panel 04",
        "Online",
        "0.97 kW",
        "90%"
    ],

    [
        "Panel 05",
        "Online",
        "0.75 kW",
        "88%"
    ],

    [
        "Panel 08",
        "Warning",
        "0.62 kW",
        "74%"
    ]

];


function renderPanels() {

    $("#panelGrid").innerHTML =

        panelData.map(panel => `

            <article class="panel-card">

                <div class="panel-card-top">

                    <span class="panel-status">
                        ${panel[1]}
                    </span>

                    <span>
                        ☀
                    </span>

                </div>

                <h3>
                    ${panel[0]}
                </h3>

                <p>
                    Roof array · Last checked now
                </p>

                <div class="panel-stat">

                    <span>
                        Output
                    </span>

                    <b>
                        ${panel[2]}
                    </b>

                </div>

                <div class="panel-stat">

                    <span>
                        Efficiency
                    </span>

                    <b>
                        ${panel[3]}
                    </b>

                </div>

            </article>

        `).join("");

}


renderPanels();


$("#refreshPanels").addEventListener(
    "click",
    () => {

        renderPanels();

        showToast(
            "Solar panel data refreshed"
        );

    }
);


/* ================= BATTERY ================= */

$("#chargeButton").addEventListener(
    "click",
    () => {

        battery =
            Math.min(
                100,
                battery + 3
            );


        $("#batteryPercent")
            .textContent =
            battery + "%";


        $("#bigBattery")
            .textContent =
            battery + "%";


        $("#batteryProgress")
            .style.width =
            battery + "%";


        $("#chargeStatus")
            .textContent =
            battery >= 100
                ? "Full"
                : "Charging";


        showToast(
            "Battery updated to " +
            battery +
            "%"
        );

    }
);


/* ================= RECOMMENDATIONS ================= */

const recommendations = [

    "Run high-load appliances between 11 AM–2 PM when solar production is expected to peak.",

    "Your battery is healthy. Keep charging during surplus solar periods to reduce grid usage.",

    "Panel 08 has lower efficiency. A maintenance inspection could improve system performance.",

    "Your clean-energy ratio is strong. Shift flexible loads to daylight hours."

];


let recommendationIndex = 0;


$("#refreshRecommendation")
    .addEventListener(
        "click",
        () => {

            recommendationIndex++;

            if (
                recommendationIndex >=
                recommendations.length
            ) {

                recommendationIndex = 0;

            }


            $("#recommendationText")
                .textContent =
                recommendations[
                    recommendationIndex
                ];


            showToast(
                "New AI recommendation generated"
            );

        }
    );


/* ================= ALERTS ================= */

function updateAlertCount() {

    const count =
        document.querySelectorAll(
            ".alert-item"
        ).length;

    $("#alertCount")
        .textContent =
        count;

}


$$(".dismiss").forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                button.parentElement.remove();

                updateAlertCount();

            }
        );

    }
);


$("#clearAlerts").addEventListener(
    "click",
    () => {

        $("#alertList")
            .innerHTML = "";

        updateAlertCount();

        showToast(
            "All alerts cleared"
        );

    }
);


/* ================= AI COPILOT ================= */

const overlay =
    $("#aiOverlay");


function openAI() {

    overlay.classList.add(
        "open"
    );

}


function closeAI() {

    overlay.classList.remove(
        "open"
    );

}


$("#openAI")
    .addEventListener(
        "click",
        openAI
    );


$("#aiBtn")
    .addEventListener(
        "click",
        openAI
    );


$("#closeAI")
    .addEventListener(
        "click",
        closeAI
    );


/* ================= AI RESPONSE ================= */

function sendAIMessage() {

    const input =
        $("#aiInput");

    const question =
        input.value.trim();


    if (!question) {
        return;
    }


    $("#chat").insertAdjacentHTML(

        "beforeend",

        `
        <div class="message user">
            ${question}
        </div>
        `

    );


    const q =
        question.toLowerCase();


    let answer =
        "Your EcoPulse system is performing efficiently. Solar generation is above yesterday and grid dependency is relatively low.";


    if (
        q.includes("battery")
    ) {

        answer =
            "Your battery is currently at " +
            battery +
            "%. It is charging from surplus solar energy.";

    }


    else if (
        q.includes("reduce") ||
        q.includes("grid")
    ) {

        answer =
            "Try shifting flexible appliances to 11 AM–2 PM. Solar production is expected to be strongest during this window.";

    }


    else if (
        q.includes("appliance") ||
        q.includes("use")
    ) {

        answer =
            "The best flexible-load window is late morning to early afternoon, when predicted solar generation is highest.";

    }


    else if (
        q.includes("consumption") ||
        q.includes("increase")
    ) {

        answer =
            "Current consumption is 18.3 kWh, around 4.2% lower than yesterday. Panel 08 is the main active warning.";

    }


    $("#chat").insertAdjacentHTML(

        "beforeend",

        `
        <div class="message ai">
            ${answer}
        </div>
        `

    );


    input.value = "";

    $("#chat").scrollTop =
        $("#chat").scrollHeight;

}


$("#sendAI")
    .addEventListener(
        "click",
        sendAIMessage
    );


$("#aiInput")
    .addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter"
            ) {

                sendAIMessage();

            }

        }
    );


/* ================= QUICK QUESTIONS ================= */

$$(".quick-questions button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                $("#aiInput")
                    .value =
                    button.textContent;

                sendAIMessage();

            }
        );

    });


/* ================= EXPORT ================= */

$("#exportReport")
    .addEventListener(
        "click",
        () => {

            showToast(
                "Energy report prepared for export"
            );

        }
    );


/* ================= SETTINGS ================= */

$("#saveSettings")
    .addEventListener(
        "click",
        () => {

            showToast(
                "Settings saved successfully"
            );

        }
    );