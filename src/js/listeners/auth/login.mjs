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
      // Do something with the profile, e.g., redirecting the user or updating UI
      displayMessage("success", "Login successful!", "#message");
      // Optionally, you can redirect the user to a dashboard or profile page, for example:
      // window.location.href = '/dashboard.html';
    })
    .catch((error) => {
      console.error("Login error:", error);
      displayMessage("danger", error.message || "Login failed!", "#message");
    });
}

