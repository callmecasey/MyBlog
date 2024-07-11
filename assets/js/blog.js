console.log("hello world");
document.addEventListener("DOMContentLoaded", function () {
  let entries = JSON.parse(localStorage.getItem("blogEntries")) || [];
  for (const entry of entries) {
    // var element = document.createElement("div");
    // element.appendChild(document.createTextNode(""));
    // document.querySelector("#blog-container").appendChild(element);
    var blogElement = document.createElement("section");
    var titleElement = document.createElement("article");
    var usernameElement = document.createElement("article");
    var contentElement = document.createElement("article");
    titleElement.appendChild(document.createTextNode(entry.titleText));
    titleElement.classList.add("title");
    usernameElement.appendChild(document.createTextNode(entry.usernameText));
    usernameElement.classList.add("username");
    contentElement.appendChild(document.createTextNode(entry.contentText));
    contentElement.classList.add("content");
    blogElement.appendChild(titleElement);
    blogElement.appendChild(usernameElement);
    blogElement.appendChild(contentElement);
    document.querySelector("#blog-container").appendChild(blogElement);
  }
});
