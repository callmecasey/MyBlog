// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Load existing blog entries from localStorage and display them
  displayBlogEntries();
});

function displayBlogEntries() {
  let entries = JSON.parse(localStorage.getItem("blogEntries")) || [];
  const blogContainer = document.querySelector("#blog-container");

  // Clear existing content
  blogContainer.innerHTML = "";

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
