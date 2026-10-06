// ==========================================
// SKILLUP - ONLINE COURSE PLATFORM
// ==========================================


// ==========================================
// CURRENT CATEGORY
// ==========================================

let currentCat = "All";


// ==========================================
// TOAST
// ==========================================

function notify(message) {

  const toast =
    document.getElementById("toast");

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
// GET ENROLLED COURSES
// ==========================================

function getEnrolledCourses() {

  try {

    return JSON.parse(
      localStorage.getItem("skillupEnrolled") || "[]"
    );

  } catch (error) {

    return [];

  }

}


// ==========================================
// GET WISHLIST
// ==========================================

function getWishlist() {

  try {

    return JSON.parse(
      localStorage.getItem("skillupWishlist") || "[]"
    );

  } catch (error) {

    return [];

  }

}


// ==========================================
// SEARCH + FILTER
// ==========================================

function render() {

  const search =
    document.getElementById("search");

  const query =
    search.value.trim().toLowerCase();


  let shown = 0;


  document
    .querySelectorAll(".course")
    .forEach(function (course) {

      const category =
        course.dataset.cat;


      const name =
        course.dataset.name.toLowerCase();


      const matchesCategory =
        currentCat === "All" ||
        category === currentCat;


      const matchesSearch =
        query === "" ||
        name.includes(query);


      const visible =
        matchesCategory &&
        matchesSearch;


      course.style.display =
        visible ? "" : "none";


      if (visible) {
        shown++;
      }

    });


  const empty =
    document.getElementById("empty");


  empty.style.display =
    shown === 0 ? "block" : "none";

}


// ==========================================
// SEARCH BUTTON
// ==========================================

function filterCourses() {

  render();

  notify(
    "Course results updated"
  );

}


// ==========================================
// CATEGORY
// ==========================================

function setCat(
  category,
  button
) {

  currentCat = category;


  document
    .querySelectorAll(".chip")
    .forEach(function (chip) {

      chip.classList.remove("active");

    });


  button.classList.add("active");


  render();


  if (category === "All") {

    notify(
      "Showing all courses"
    );

  } else {

    notify(
      category + " courses"
    );

  }

}


// ==========================================
// ENROLL
// ==========================================

function enroll(courseName) {

  const enrolled =
    getEnrolledCourses();


  if (
    enrolled.includes(courseName)
  ) {

    notify(
      "You are already enrolled in " +
      courseName
    );

    scrollToLearning();

    return;

  }


  enrolled.push(courseName);


  localStorage.setItem(
    "skillupEnrolled",
    JSON.stringify(enrolled)
  );


  updateLearning();


  notify(
    courseName +
    " added to your learning plan ✓"
  );


  scrollToLearning();

}


// ==========================================
// UPDATE LEARNING
// ==========================================

function updateLearning() {

  const enrolled =
    getEnrolledCourses();


  const count =
    document.getElementById(
      "enrolledCount"
    );


  count.textContent =
    enrolled.length +
    (
      enrolled.length === 1
        ? " COURSE"
        : " COURSES"
    );


  const list =
    document.getElementById(
      "learningList"
    );


  if (enrolled.length === 0) {

    list.innerHTML =
      '<p class="muted">' +
      "You haven't enrolled in any courses yet." +
      "</p>";

    return;

  }


  list.innerHTML = "";


  enrolled.forEach(function (courseName, index) {

    const item =
      document.createElement("div");


    item.className =
      "learning-item";


    item.innerHTML = `

      <div class="learning-info">

        <div class="icon-box">
          📚
        </div>

        <div>

          <b>${courseName}</b>

          <p class="muted">
            Enrolled course · Progress 0%
          </p>

        </div>

      </div>


      <div class="learning-actions">

        <button
          class="btn light"
          onclick="startCourse('${escapeQuotes(courseName)}')"
        >
          Start Learning
        </button>


        <button
          class="remove-btn"
          onclick="removeEnrollment(${index})"
        >
          Remove
        </button>

      </div>

    `;


    list.appendChild(item);

  });

}


// ==========================================
// REMOVE ENROLLMENT
// ==========================================

function removeEnrollment(index) {

  const enrolled =
    getEnrolledCourses();


  const removed =
    enrolled[index];


  enrolled.splice(
    index,
    1
  );


  localStorage.setItem(
    "skillupEnrolled",
    JSON.stringify(enrolled)
  );


  updateLearning();


  notify(
    removed +
    " removed from My Learning"
  );

}


// ==========================================
// START COURSE
// ==========================================

function startCourse(courseName) {

  localStorage.setItem(
    "skillupCurrentCourse",
    courseName
  );


  notify(
    "Opening " +
    courseName +
    " ✓"
  );

}


// ==========================================
// WISHLIST
// ==========================================

function toggleWishlist(
  button,
  courseName
) {

  let wishlist =
    getWishlist();


  const index =
    wishlist.indexOf(courseName);


  if (index === -1) {

    wishlist.push(courseName);

    button.classList.add("saved");

    button.textContent = "♥";


    notify(
      courseName +
      " added to wishlist"
    );

  } else {

    wishlist.splice(
      index,
      1
    );

    button.classList.remove("saved");

    button.textContent = "♡";


    notify(
      courseName +
      " removed from wishlist"
    );

  }


  localStorage.setItem(
    "skillupWishlist",
    JSON.stringify(wishlist)
  );


  updateWishlist();

}


// ==========================================
// UPDATE WISHLIST
// ==========================================

function updateWishlist() {

  const wishlist =
    getWishlist();


  const count =
    document.getElementById(
      "wishlistCount"
    );


  count.textContent =
    wishlist.length +
    (
      wishlist.length === 1
        ? " SAVED"
        : " SAVED"
    );


  const list =
    document.getElementById(
      "wishlistList"
    );


  if (wishlist.length === 0) {

    list.innerHTML =
      '<p class="muted">' +
      "Your wishlist is empty." +
      "</p>";

    return;

  }


  list.innerHTML = "";


  wishlist.forEach(function (courseName, index) {

    const item =
      document.createElement("div");


    item.className =
      "learning-item";


    item.innerHTML = `

      <div class="learning-info">

        <div class="icon-box">
          ♥
        </div>

        <div>

          <b>${courseName}</b>

          <p class="muted">
            Saved for later
          </p>

        </div>

      </div>


      <div class="learning-actions">

        <button
          class="btn"
          onclick="enroll('${escapeQuotes(courseName)}')"
        >
          Enroll
        </button>


        <button
          class="remove-btn"
          onclick="removeWishlist(${index})"
        >
          Remove
        </button>

      </div>

    `;


    list.appendChild(item);

  });

}


// ==========================================
// REMOVE WISHLIST
// ==========================================

function removeWishlist(index) {

  const wishlist =
    getWishlist();


  const removed =
    wishlist[index];


  wishlist.splice(
    index,
    1
  );


  localStorage.setItem(
    "skillupWishlist",
    JSON.stringify(wishlist)
  );


  updateWishlist();


  updateWishlistButtons();


  notify(
    removed +
    " removed from wishlist"
  );

}


// ==========================================
// UPDATE WISHLIST BUTTONS
// ==========================================

function updateWishlistButtons() {

  const wishlist =
    getWishlist();


  document
    .querySelectorAll(".course")
    .forEach(function (course) {

      const name =
        course.dataset.course;


      const button =
        course.querySelector(
          ".wishlist-btn"
        );


      if (!button) {
        return;
      }


      if (
        wishlist.includes(name)
      ) {

        button.classList.add(
          "saved"
        );

        button.textContent =
          "♥";

      } else {

        button.classList.remove(
          "saved"
        );

        button.textContent =
          "♡";

      }

    });

}


// ==========================================
// CERTIFICATES
// ==========================================

function showCertificates() {

  alert(
    "MY CERTIFICATES\n\n" +

    "🏆 Web Development Fundamentals\n" +
    "SkillUp Academy\n\n" +

    "🏆 Python Basics\n" +
    "SkillUp Academy"
  );

}


// ==========================================
// SIDEBAR NAVIGATION
// ==========================================

function selectMenu(
  element,
  section
) {

  document
    .querySelectorAll(".side a")
    .forEach(function (item) {

      item.classList.remove(
        "active"
      );

    });


  element.classList.add(
    "active"
  );


  if (
    section === "Explore Courses"
  ) {

    document
      .getElementById("courses")
      .scrollIntoView({
        behavior: "smooth"
      });


    notify(
      "Explore Courses selected"
    );


    return;

  }


  if (
    section === "My Learning"
  ) {

    scrollToLearning();

    notify(
      "My Learning selected"
    );


    return;

  }


  if (
    section === "Wishlist"
  ) {

    document
      .getElementById("wishlist")
      .scrollIntoView({
        behavior: "smooth"
      });


    notify(
      "Wishlist selected"
    );


    return;

  }


  if (
    section === "Certificates"
  ) {

    document
      .getElementById("certificates")
      .scrollIntoView({
        behavior: "smooth"
      });


    notify(
      "Certificates selected"
    );


    return;

  }


  if (
    section === "Instructors"
  ) {

    document
      .getElementById("instructors")
      .scrollIntoView({
        behavior: "smooth"
      });


    notify(
      "Instructors selected"
    );


    return;

  }


  if (
    section === "Settings"
  ) {

    notify(
      "Settings selected"
    );

  }

}


// ==========================================
// SCROLL TO LEARNING
// ==========================================

function scrollToLearning() {

  document
    .getElementById("learning")
    .scrollIntoView({
      behavior: "smooth"
    });

}


// ==========================================
// ESCAPE QUOTES
// ==========================================

function escapeQuotes(value) {

  return value
    .replace(/\\/g, "\\\\")
    .replace(/'/g, "\\'");

}


// ==========================================
// SEARCH WHILE TYPING
// ==========================================

document
  .getElementById("search")
  .addEventListener(
    "input",
    render
  );


// ==========================================
// PAGE LOAD
// ==========================================

document.addEventListener(
  "DOMContentLoaded",
  function () {

    render();

    updateLearning();

    updateWishlist();

    updateWishlistButtons();


    console.log(
      "SkillUp Online Course Platform loaded successfully."
    );

  }
);
