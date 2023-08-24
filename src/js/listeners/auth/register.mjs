import { register } from "../../api/auth/register.mjs";

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

  if (avatar) {
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
      // Handle success - inform the user, navigate, etc.
      alert("Registration successful! You can now login.");
    } else {
      // Handle scenarios where registration succeeds but no token is provided
      alert("Registration successful, but no access token received.");
    }
  } catch (error) {
    console.error("There was an error registering:", error);
    alert("There was a problem creating your account.");
  }
}

// Bind the listener to the form submission
document
  .querySelector(".card-body form")
  .addEventListener("submit", registerListener);
