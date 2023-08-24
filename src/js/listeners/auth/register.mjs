import { register } from "../../api/auth/register.mjs";

export async function registerListener(event) {
  event.preventDefault();

  const form = event.target;
  const data = new FormData(form);
  


  
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

  
  console.log("Name:", name);
 console.log(typeof email);

  console.log("Password:", password);
  console.log("Avatar:", avatar);

  try {
    const response = await register(name, email, password, avatar);

    console.log(response); // Adjust this as needed.

    // Check if response contains a token (based on API documentation, the key should be 'accessToken')
    if (response.accessToken) {
      localStorage.setItem("token", response.accessToken);
    }

    // Handle success - inform the user, navigate, etc.
  } catch (error) {
    console.error("There was an error registering:", error);
    alert("There was a problem creating your account");
  }
}

// Bind the listener to the form submission
document
  .querySelector(".card-body form")
  .addEventListener("submit", registerListener);
