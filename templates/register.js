// Import Firebase functions (ensure Firebase is correctly imported or added in your project)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Your Firebase configuration object (replace with your Firebase project credentials)
const firebaseConfig = {
    apiKey: "AIzaSyD9HzqdjcnNOfUIUFkkBNH1W8M3Dm1KMH8",
    authDomain: "collegeproject-d31fe.firebaseapp.com",
    projectId: "collegeproject-d31fe",
    storageBucket: "collegeproject-d31fe.appspot.com",
    messagingSenderId: "468747276569",
    appId: "1:468747276569:web:9493310cf35618116db588"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Form submission handling
document.getElementById('registerForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm_password').value;

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert("User registered successfully!");
  } catch (error) {
    console.error("Error during registration:", error);
    if (error.code === 'auth/email-already-in-use') {
      alert("This email is already registered.");
    } else if (error.code === 'auth/invalid-email') {
      alert("Invalid email format.");
    } else if (error.code === 'auth/weak-password') {
      alert("Password is too weak. Please use a stronger password.");
    } else {
      alert("Registration failed: " + error.message);
    }
  }
});
