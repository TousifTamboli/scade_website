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
const auth = getAuth();
const db = database(app); // Initialize Realtime Database


console.log(app);

    // Login form handling
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in successfully
                const user = userCredential.user;
                alert('Logged in successfully');
                // You may want to redirect or show a success message
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
    });

    