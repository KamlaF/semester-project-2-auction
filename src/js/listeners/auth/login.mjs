import displayMessage from "../../ui/common/displayMessage.js";
import { login } from "../../api/auth/login.mjs";
import { save } from "../../services/storage.mjs";

export function addLoginListener() {
  console.log("Adding login listener");

  const loginForm = document.querySelector("form#logInForm");
  loginForm.addEventListener("submit", loginListener, true);
}

import buildMenu from "../../ui/common/buildMenu.mjs";

async function loginListener(event) {
  console.log("Login form submitted");
  event.preventDefault();

  const email = document.querySelector("#emailInput").value;
  const password = document.querySelector("#passwordInput").value;

  try {
    const profile = await login(email, password);
    save("token", profile.accessToken);

    const profileWithoutToken = { ...profile };
    delete profileWithoutToken.accessToken;
    save("profile", profileWithoutToken);

    displayMessage("success", "Login successful!", "#message");

    // Update the menu to reflect the logged-in status
    buildMenu(window.location.pathname);

    // Redirect  to the homepage
    window.location.href = "/index.html";
  } catch (error) {
    console.error("Login error:", error);
    displayMessage("danger", error.message || "Login failed!", "#message");
  }
  

}
