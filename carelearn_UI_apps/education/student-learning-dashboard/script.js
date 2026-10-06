// ==========================================
// LEARNLY - STUDENT LEARNING DASHBOARD
// ==========================================


// ==========================================
// TOAST NOTIFICATION
// ==========================================

function notify(message) {

  const toast = document.getElementById("toast");

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
// CONTINUE COURSE
// ==========================================

function continueCourse(courseName) {

  localStorage.setItem(
    "learnlyLastCourse",
    courseName
  );

  notify(
    "Opening " + courseName + " ✓"
  );

}


// ==========================================
// MY COURSES
// ==========================================

function showCourses() {

  alert(
    "MY COURSES\n\n" +
    "1. Web Development - 82%\n" +
    "2. Java Programming - 64%\n" +
    "3. Python Programming - 76%\n" +
    "4. Database Systems - 58%\n" +
    "5. Data Structures - 71%\n" +
    "6. Computer Networks - 45%"
  );

}


// ==========================================
// ASSIGNMENT
// ==========================================

function openAssignment(
  assignmentName
) {

  localStorage.setItem(
    "learnlySelectedAssignment",
    assignmentName
  );


  alert(
    "ASSIGNMENT\n\n" +
    assignmentName +
    "\n\n" +
    "You can open the assignment from your learning portal."
  );

}


// ==========================================
// RECENT ACTIVITY
// ==========================================

function showActivity() {

  alert(
    "RECENT ACTIVITY\n\n" +

    "✓ Completed CSS Flexbox\n" +
    "Today, 4:20 PM\n\n" +

    "🏆 Earned Java Basics Badge\n" +
    "Yesterday\n\n" +

    "📝 Submitted Python Lab 5\n" +
    "Sep 30"
  );

}


// ==========================================
// ACHIEVEMENTS
// ==========================================

function showAchievements() {

  alert(
    "ACHIEVEMENTS\n\n" +

    "🏆 Top Learner\n" +
    "Top 10% this month\n\n" +

    "🔥 7 Day Streak\n" +
    "Keep going\n\n" +

    "⭐ 90% Club\n" +
    "3 courses"
  );

}


// ==========================================
// GRADES
// ==========================================

function showGrades() {

  alert(
    "COURSE GRADES\n\n" +

    "Web Development: 92%\n" +
    "Java Programming: 86%\n" +
    "Python: 89%\n" +
    "Database Systems: 85%"
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

      item.classList.remove("active");

    });


  element.classList.add("active");


  if (section === "Overview") {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    notify("Overview selected");

    return;
  }


  if (section === "My Courses") {

    document
      .getElementById("courses")
      .scrollIntoView({
        behavior: "smooth"
      });

    notify("My Courses selected");

    return;
  }


  if (section === "Assignments") {

    document
      .getElementById("assignments")
      .scrollIntoView({
        behavior: "smooth"
      });

    notify("Assignments selected");

    return;
  }


  if (section === "Grades") {

    document
      .getElementById("grades")
      .scrollIntoView({
        behavior: "smooth"
      });

    notify("Grades selected");

    return;
  }


  if (section === "Certificates") {

    document
      .getElementById("achievements")
      .scrollIntoView({
        behavior: "smooth"
      });

    notify("Certificates selected");

    return;
  }


  if (section === "Settings") {

    notify("Settings selected");

  }

}


// ==========================================
// PAGE LOAD
// ==========================================

document.addEventListener(
  "DOMContentLoaded",
  function () {

    const lastCourse =
      localStorage.getItem(
        "learnlyLastCourse"
      );


    if (lastCourse) {

      console.log(
        "Last opened course:",
        lastCourse
      );

    }


    console.log(
      "Learnly Student Dashboard loaded successfully."
    );

  }
);
