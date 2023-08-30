import displayMessage from "../../ui/common/displayMessage.js";
import { register } from "../../api/auth/register.mjs";

export function addRegisterListener() {
  const form = document.querySelector("form#register");
  if (form) {
    form.addEventListener("submit", registerListener);
  }
}

export async function registerListener(event) {
  event.preventDefault();

  const name = document.getElementById("usernameInput").value;
  const email = document.getElementById("emailInput").value;
  const password = document.getElementById("passwordInput").value;
  const avatar = document.getElementById("avatarInput").value;

  const profile = {
    name,
    email,
    password,
  };

  if (avatar.trim().length > 0) {
    profile.avatar = avatar;
  }

  // Logging for debugging
  console.log("Profile data:", profile);

  try {
    const response = await register(profile); // Call the register function with the profile object.

    console.log("Registration response:", response);

    displayMessage(
      "success",
      "Registration successful! <a href='/auth/login/index.html'>Click here to login.</a>",
      "#message"
    );
  } catch (error) {
    console.error("There was an error registering:", error);
    displayMessage("danger", error, "#message");
  }
}
