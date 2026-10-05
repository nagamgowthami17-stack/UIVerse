/* ================= TRANSACTIONS ================= */

const transactions = [

    {
        name: "Salary",
        category: "Income • Sep 30",
        amount: 52500,
        type: "income",
        icon: "💼"
    },

    {
        name: "Rent Payment",
        category: "Housing • Sep 28",
        amount: 15000,
        type: "expense",
        icon: "🏠"
    },

    {
        name: "Grocery Store",
        category: "Food • Sep 27",
        amount: 3200,
        type: "expense",
        icon: "🛒"
    },

    {
        name: "Freelance Project",
        category: "Income • Sep 25",
        amount: 8500,
        type: "income",
        icon: "💻"
    },

    {
        name: "Electricity Bill",
        category: "Utilities • Sep 23",
        amount: 1850,
        type: "expense",
        icon: "⚡"
    },

    {
        name: "Fuel",
        category: "Transport • Sep 21",
        amount: 2100,
        type: "expense",
        icon: "⛽"
    },

    {
        name: "Movie Tickets",
        category: "Entertainment • Sep 18",
        amount: 750,
        type: "expense",
        icon: "🎬"
    }

];


/* ================= ELEMENTS ================= */

const modalOverlay =
    document.getElementById("modalOverlay");

const modalContent =
    document.getElementById("modalContent");

const toast =
    document.getElementById("toast");


/* ================= MONEY FORMAT ================= */

function money(amount) {

    return "₹" +
        Number(amount).toLocaleString("en-IN");

}


/* ================= TRANSACTION RENDER ================= */

function renderTransactions() {

    const search =
        document
            .getElementById("transactionSearch")
            .value
            .toLowerCase();

    const filter =
        document
            .getElementById("transactionFilter")
            .value;


    const data = transactions.filter(transaction => {

        const matchesFilter =
            filter === "all" ||
            transaction.type === filter;


        const matchesSearch =
            transaction.name
                .toLowerCase()
                .includes(search) ||

            transaction.category
                .toLowerCase()
                .includes(search);


        return matchesFilter && matchesSearch;

    });


    const list =
        document.getElementById("transactionList");


    list.innerHTML = `

        <div class="transaction-row header">

            <span>
                Transaction
            </span>

            <span>
                Category
            </span>

            <span>
                Date
            </span>

            <span>
                Amount
            </span>

        </div>

        ${
            data.map(transaction => `

                <div class="transaction-row">

                    <span>

                        <b class="transaction-name">

                            ${transaction.icon}
                            ${transaction.name}

                        </b>

                        <small class="transaction-meta">

                            ${transaction.category}

                        </small>

                    </span>


                    <span>

                        ${
                            transaction.type === "income"
                                ? "Income"
                                : "Expense"
                        }

                    </span>


                    <span>

                        ${
                            transaction.category.split("•")[1]
                            || "Today"
                        }

                    </span>


                    <strong class="${transaction.type}">

                        ${
                            transaction.type === "income"
                                ? "+"
                                : "-"
                        }

                        ${money(transaction.amount)}

                    </strong>

                </div>

            `).join("")
        }

    `;

}


/* ================= SEARCH ================= */

document
    .getElementById("transactionSearch")
    .addEventListener(
        "input",
        renderTransactions
    );


document
    .getElementById("transactionFilter")
    .addEventListener(
        "change",
        renderTransactions
    );


renderTransactions();


/* ================= TOAST ================= */

function showMessage(message) {

    toast.textContent = message;

    toast.classList.add("show");


    clearTimeout(window.toastTimer);


    window.toastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 2200);

}


/* ================= MODAL ================= */

function openModal(content) {

    modalContent.innerHTML = content;

    modalOverlay.classList.add("show");

}


function closeModal() {

    modalOverlay.classList.remove("show");

}


modalOverlay.addEventListener(
    "click",
    function(event) {

        if (event.target === modalOverlay) {

            closeModal();

        }

    }
);


document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeModal();

        }

    }
);


/* ================= SCROLL ================= */

function scrollToSection(id) {

    const section =
        document.getElementById(id);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* ================= DARK MODE ================= */

const themeBtn =
    document.getElementById("themeBtn");


themeBtn.addEventListener(
    "click",
    function() {

        document.body.classList.toggle("dark");


        localStorage.setItem(
            "fintrack-dark",
            document.body.classList.contains("dark")
        );


        showMessage(
            document.body.classList.contains("dark")
                ? "Dark mode enabled"
                : "Light mode enabled"
        );

    }
);


if (
    localStorage.getItem("fintrack-dark")
    === "true"
) {

    document.body.classList.add("dark");

}


/* ================= MOBILE MENU ================= */

document
    .getElementById("menuBtn")
    .addEventListener(
        "click",
        function() {

            const nav =
                document.getElementById("navLinks");


            if (nav.style.display === "flex") {

                nav.style.display = "none";

            } else {

                nav.style.display = "flex";

                nav.style.flexDirection = "column";

                nav.style.position = "absolute";

                nav.style.top = "76px";

                nav.style.left = "0";

                nav.style.right = "0";

                nav.style.background =
                    "var(--card)";

                nav.style.padding = "20px";

            }

        }
    );


/* ================= NOTIFICATIONS ================= */

document
    .getElementById("notificationBtn")
    .addEventListener(
        "click",
        function() {

            openModal(`

                <h2>
                    🔔 Notifications
                </h2>

                <p>
                    ⚠️ Food & Dining budget is 68% used.
                </p>

                <p>
                    🎯 Laptop savings goal reached 60%.
                </p>

                <p>
                    📋 September financial summary is ready.
                </p>

                <button
                    class="primary-btn"
                    onclick="closeModal()">

                    Mark as Read

                </button>

            `);

        }
    );


/* ================= PROFILE ================= */

document
    .getElementById("profileBtn")
    .addEventListener(
        "click",
        function() {

            openModal(`

                <h2>
                    👤 Profile
                </h2>

                <p>
                    <b>FinTrack User</b>
                </p>

                <p style="color:var(--muted)">
                    Personal finance account
                </p>

                <button
                    class="primary-btn"
                    onclick="closeModal()">

                    Close

                </button>

            `);

        }
    );


/* ================= ADD TRANSACTION ================= */

function openTransaction(type = "expense") {

    const title =
        type === "income"
            ? "＋ Add Income"
            : "＋ Add Expense";


    openModal(`

        <h2>
            ${title}
        </h2>


        <form
            class="form"
            id="transactionForm">

            <label>

                Description

                <input
                    name="name"
                    required
                    placeholder="Example: Grocery shopping">

            </label>


            <label>

                Amount

                <input
                    name="amount"
                    type="number"
                    min="1"
                    required
                    placeholder="₹ 5000">

            </label>


            <label>

                Category

                <select name="category">

                    <option>
                        Food
                    </option>

                    <option>
                        Housing
                    </option>

                    <option>
                        Transport
                    </option>

                    <option>
                        Shopping
                    </option>

                    <option>
                        Entertainment
                    </option>

                    <option>
                        Utilities
                    </option>

                    <option>
                        Salary
                    </option>

                    <option>
                        Other
                    </option>

                </select>

            </label>


            <button
                class="primary-btn">

                Save Transaction

            </button>

        </form>

    `);


    document
        .getElementById("transactionForm")
        .addEventListener(
            "submit",
            function(event) {

                event.preventDefault();


                const formData =
                    new FormData(event.target);


                transactions.unshift({

                    name:
                        formData.get("name"),

                    category:
                        formData.get("category")
                        + " • Today",

                    amount:
                        Number(
                            formData.get("amount")
                        ),

                    type: type,

                    icon:
                        type === "income"
                            ? "💰"
                            : "💳"

                });


                renderTransactions();

                closeModal();

                showMessage(
                    "Transaction added successfully!"
                );

            }
        );

}


/* ================= ADD BUDGET ================= */

function openBudget() {

    openModal(`

        <h2>
            📋 Add Monthly Budget
        </h2>


        <form class="form">

            <label>

                Category

                <select>

                    <option>
                        Food & Dining
                    </option>

                    <option>
                        Transport
                    </option>

                    <option>
                        Shopping
                    </option>

                    <option>
                        Entertainment
                    </option>

                </select>

            </label>


            <label>

                Budget Amount

                <input
                    type="number"
                    placeholder="₹ 10000">

            </label>


            <button
                type="button"
                class="primary-btn"
                onclick="
                    closeModal();
                    showMessage('Budget saved successfully!');
                ">

                Save Budget

            </button>

        </form>

    `);

}


/* ================= ADD GOAL ================= */

function openGoal() {

    openModal(`

        <h2>
            🎯 Create Savings Goal
        </h2>


        <form class="form">

            <label>

                Goal Name

                <input
                    placeholder="Example: New Phone">

            </label>


            <label>

                Target Amount

                <input
                    type="number"
                    placeholder="₹ 50000">

            </label>


            <label>

                Target Date

                <input
                    type="date">

            </label>


            <button
                type="button"
                class="primary-btn"
                onclick="
                    closeModal();
                    showMessage('Savings goal created!');
                ">

                Create Goal

            </button>

        </form>

    `);

}


/* ================= FINANCIAL SUMMARY ================= */

function openFinancialSummary() {

    openModal(`

        <h2>
            📋 September Financial Summary
        </h2>

        <p>
            <b>Total Income:</b>
            ₹52,500
        </p>

        <p>
            <b>Total Expenses:</b>
            ₹32,850
        </p>

        <p>
            <b>Net Savings:</b>
            ₹19,650
        </p>

        <p>
            <b>Savings Rate:</b>
            37.4%
        </p>

        <button
            class="primary-btn"
            onclick="closeModal()">

            Close

        </button>

    `);

}


/* ================= MARK NOTIFICATIONS ================= */

function markNotificationsRead() {

    document
        .querySelectorAll(".notification-dot")
        .forEach(dot => {

            dot.style.display = "none";

        });


    showMessage(
        "All notifications marked as read"
    );

}
// =========================================================
// FINTRACK DARK MODE TOGGLE
// =========================================================

const darkModeButton = document.querySelector('.icon-btn:nth-child(2)');

if (darkModeButton) {

    darkModeButton.addEventListener('click', function () {

        document.body.classList.toggle('dark-mode');

        // Change moon/sun icon
        if (document.body.classList.contains('dark-mode')) {
            this.innerHTML = '☀️';
            localStorage.setItem('fintrackDarkMode', 'enabled');
        } else {
            this.innerHTML = '🌙';
            localStorage.setItem('fintrackDarkMode', 'disabled');
        }

    });

}


// Remember user's selected mode
if (localStorage.getItem('fintrackDarkMode') === 'enabled') {

    document.body.classList.add('dark-mode');

    if (darkModeButton) {
        darkModeButton.innerHTML = '☀️';
    }

}
