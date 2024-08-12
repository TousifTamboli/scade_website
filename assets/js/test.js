console.log("Script Loaded");

const logoutButton = document.getElementById("logout");

logoutButton.addEventListener("click", () => {
  // Clear user session
  sessionStorage.removeItem("user");
  // Redirect to login page
  window.location.href = "login.html";
});
