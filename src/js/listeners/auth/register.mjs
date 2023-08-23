// listeners/auth/register.mjs

import { register } from "/src/js/auth/index.mjs";

document
  .querySelector(".card-body form")
  .addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevents form from submitting the traditional way

    const username = document.getElementById("usernameInput").value;
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;
    const avatar = document.getElementById("avatarInput").value;


    try {
      const response = await register(username, email, password, avatar);
      console.log(response); // Should be the response from the API. Adjust this to handle however you need.

      // Store token if it's returned from the response
      if (response.token) {
        localStorage.setItem("token", response.token);
      }

      // Inform the user of success, navigate to a new page, or any other logic you want here
    } catch (error) {
      console.error("There was an error registering:", error);
      // Display error to the user, possibly in a div or alert
    }
  });
