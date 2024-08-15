import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,  // Import onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC7PCS8THdg5GKPqKl-w3FiB898NGal3s",
  authDomain: "scade-website.firebaseapp.com",
  projectId: "scade-website",
  storageBucket: "scade-website.appspot.com",
  messagingSenderId: "528561962338",
  appId: "1:528561962338:web:317afbc9c42463f458803b",
  measurementId: "G-4D3K51P8E3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

// Login form handling
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Login successful");
      sessionStorage.setItem("user", JSON.stringify(user));
      window.location.href = "index.html"; // Redirect to index.html after login
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Forgot password handling
const forgotPasswordLink = document.getElementById("forgot-password-link");
const forgotPasswordForm = document.getElementById("forgotPasswordForm");

forgotPasswordLink.addEventListener("click", (e) => {
  e.preventDefault();
  forgotPasswordForm.classList.remove("d-none");
  loginForm.classList.add("d-none");
});

forgotPasswordForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("forgot-email").value;

  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Password reset email sent");
      forgotPasswordForm.classList.add("d-none");
      loginForm.classList.remove("d-none");
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Check if user is already logged in
onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = "index.html"; // Redirect if user is already logged in
  }
});
