import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD9HzqdjcnNOfUIUFkkBNH1W8M3Dm1KMH8",
  authDomain: "collegeproject-d31fe.firebaseapp.com",
  projectId: "collegeproject-d31fe",
  storageBucket: "collegeproject-d31fe.appspot.com",
  messagingSenderId: "468747276569",
  appId: "1:468747276569:web:9493310cf35618116db588",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Check if the user is logged in
onAuthStateChanged(auth, (user) => {
  const loginButton = document.getElementById("loginButton");
  const logoutButton = document.getElementById("logoutButton");

  if (user) {
    // User is logged in
    loginButton.style.display = "none"; // Hide login button
    logoutButton.style.display = "block"; // Show logout button
  } else {
    // User is not logged in
    loginButton.style.display = "block"; // Show login button
    logoutButton.style.display = "none"; // Hide logout button
  }
});

document.getElementById("logoutButton").addEventListener("click", () => {
  localStorage.removeItem("loggedInUserId");
  signOut(auth)
    .then(() => {
      window.location.href = "/signin";
    })
    .catch((error) => {
      console.error("Error Signing out:", error);
    });
});
