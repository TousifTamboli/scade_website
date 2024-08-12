import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCC7PCS8THdg5GKPqKl-w3FiB898NGal3s",
    authDomain: "scade-website.firebaseapp.com",
    projectId: "scade-website",
    storageBucket: "scade-website.appspot.com",
    messagingSenderId: "528561962338",
    appId: "1:528561962338:web:317afbc9c42463f458803b",
    measurementId: "G-4D3K51P8E3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const userSession = sessionStorage.getItem("user");

if (userSession) {
    console.log("User session found:");
    // console.log(JSON.parse(userSession));
} else {
    console.log("No user session found.");
    alert("Log out and Login again");
    window.location.href = 'login.html'
}





const logoutButton = document.getElementById("logout");

logoutButton.addEventListener("click", () => {
    // Clear user session
    sessionStorage.removeItem("user");
    // Redirect to login page
    window.location.href = "login.html";
});



