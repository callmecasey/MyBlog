// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Load existing blog entries from localStorage and display them
  displayBlogEntries();
});

function displayBlogEntries() {
  let entries = JSON.parse(localStorage.getItem("blogEntries")) || [];
  const blogContainer = document.querySelector("#blog-container");

  entries.forEach((entry) => {
    const blogElement = document.createElement("section");

    const titleElement = document.createElement("article");
    titleElement.textContent = entry.titleText;
    titleElement.classList.add("title");

    const usernameElement = document.createElement("article");
    usernameElement.textContent = entry.usernameText;
    usernameElement.classList.add("username");

    const contentElement = document.createElement("article");
    contentElement.textContent = entry.contentText;
    contentElement.classList.add("content");

    blogElement.appendChild(titleElement);
    blogElement.appendChild(usernameElement);
    blogElement.appendChild(contentElement);
    blogContainer.appendChild(blogElement);
  });
}

function submitBlogEntry() {
  // Get form values
  const usernameText = document.forms["Form"]["Username"].value.trim();
  const titleText = document.forms["Form"]["Title"].value.trim();
  const contentText = document.forms["Form"]["Content"].value.trim();

  // Validate form fields
  if (!usernameText || !titleText || !contentText) {
    alert("Please fill out all fields.");
    return false;
  }

  // Create a new blog entry object
  const blogEntry = {
    usernameText,
    titleText,
    contentText,
  };

  // Save the entry to localStorage
  let entries = JSON.parse(localStorage.getItem("blogEntries")) || [];
  entries.unshift(blogEntry);
  localStorage.setItem("blogEntries", JSON.stringify(entries));

  // Display the new entry immediately
  displayBlogEntries();

  // Optionally, reset the form after submission
  document.forms["Form"].reset();

  console.log("Blog entry submitted");
  return false; // Prevent form submission and page reload
}
