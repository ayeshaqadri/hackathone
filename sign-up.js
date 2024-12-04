import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyB4RWWruUA2VquqYVLR23ipUEoPIzlKFJc",
  authDomain: "project-dc717.firebaseapp.com",
  projectId: "project-dc717",
  storageBucket: "project-dc717.firebasestorage.app",
  messagingSenderId: "404723403613",
  appId: "1:404723403613:web:fc81e5a046cc163a2136b4",
  measurementId: "G-LGWX5ZQ714"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let signupBtn = document.getElementById("signup-btn");
let userEmail = document.getElementById("user-email");
let userPassword = document.getElementById("user-password");
let userPasswordRepeat = document.getElementById("user-password-repeat");

signupBtn.addEventListener("click", () => {
    if (userEmail.value.trim() && userPassword.value.trim() && userPasswordRepeat.value.trim()) {
        if (userPassword.value === userPasswordRepeat.value) {
            createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log("User created:", user);
                    Swal.fire({
                        icon: "success",
                        title: "Success!",
                        text: "You have successfully registered.",
                    }).then(() => {
                        location.href = "login.html";
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    Swal.fire({
                        icon: "error",
                        title: "Registration Failed",
                        text: errorMessage,
                    });
                });
        } else {
            Swal.fire({
                icon: "warning",
                title: "Password Mismatch",
                text: "The passwords do not match.",
            });
        }
    } else {
        Swal.fire({
            icon: "warning",
            title: "Incomplete Form",
            text: "Please fill out all fields.",
        });
    }
});
