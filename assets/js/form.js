function submitBlogEntry() {
  //grabs items from the form
  let usernameText = document.forms["Form"]["Username"].value;
  let titleText = document.forms["Form"]["Title"].value;
  let contentText = document.forms["Form"]["Content"].value;
  //alerts user to fill out boxes if they are empty
  if (usernameText == "" || titleText == "" || contentText == "") {
    alert("Please fill out all boxes");
    return false;
  }
  //defines variable blogEntry with items from the form
  const blogEntry = {
    usernameText,
    titleText,
    contentText,
  };
  //puts entries into local storage
  let entries = JSON.parse(localStorage.getItem("blogEntries")) || [];
  entries.unshift(blogEntry);
  localStorage.setItem("blogEntries", JSON.stringify(entries));
  console.log("is this working?");
}
