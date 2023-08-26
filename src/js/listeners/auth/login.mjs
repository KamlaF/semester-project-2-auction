import displayMessage from "../../ui/common/displayMessage.js";
import { login } from "../../api/auth/login.mjs";

export function addLoginListener() {
  const loginForm = document.querySelector("form#logInForm");
  loginForm.addEventListener("submit", loginListener);
}

function loginListener(event) {
  event.preventDefault();

  const email = document.querySelector("#emailInput").value;
  const password = document.querySelector("#passwordInput").value;

  login(email, password)
    .then((profile) => {
      displayMessage("success", "Login successful!", "#message");

      // Redirect to the profile page after a short delay
      setTimeout(() => {
        window.location.href = "/profile/index.html";
      }, 1000);
    })
    .catch((error) => {
      console.error("Login error:", error);
      displayMessage("danger", error.message || "Login failed!", "#message");
    });
}


