import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);

console.log(app);