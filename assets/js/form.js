document.addEventListener("DOMContentLoaded", function () {
  // JavaScript to handle form submission
  function submitBlogEntry() {
    const usernameText = document.getElementById("Username").value.trim();
    const titleText = document.getElementById("Title").value.trim();
    const contentText = document.getElementById("Content").value.trim();

    if (!usernameText || !titleText || !contentText) {
      alert("Please fill out all fields.");
      return false;
    }

    const blogEntry = {
      usernameText,
      titleText,
      contentText,
    };

    let entries = JSON.parse(localStorage.getItem("blogEntries")) || [];
    entries.unshift(blogEntry);
    localStorage.setItem("blogEntries", JSON.stringify(entries));

    alert("Blog entry submitted successfully!");
    document.forms["Form"].reset(); // Reset the form fields
    return false; // Prevent default form submission
  }

  // Attach submit event to the form
  document.forms["Form"].onsubmit = submitBlogEntry;
});
