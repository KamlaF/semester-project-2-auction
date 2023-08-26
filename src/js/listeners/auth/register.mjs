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

    console.log("Registration response:", response); // Adjust this as needed.

    // Check if response contains a token
    if (response.accessToken) {
      localStorage.setItem("token", response.accessToken);
    }

    displayMessage(
      "success",
      "Registration successful! Redirecting to login...",
      "#message"
    );

    // Redirect to the login page after a slight delay, giving the user a chance to see the success message.
    setTimeout(() => {
      window.location.href = "/auth/login/index.html";
    }, 2000); // 2000 milliseconds (2 seconds) delay
  } catch (error) {
    console.error("There was an error registering:", error);
    displayMessage("danger", error, "#message");
  }
}

