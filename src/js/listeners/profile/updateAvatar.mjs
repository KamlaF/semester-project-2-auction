import { updateAvatar } from "../../api/profile/updateAvatar.mjs";
import { get } from "../../services/storage.mjs";
import displayMessage from "../../ui/common/displayMessage.js"; // Import the displayMessage function

export function setupAvatarUpdateListener() {
  const form = document.getElementById("avatarForm");

  // Load avatar from local storage and display
  const displayedAvatar = document.getElementById("displayedAvatar");
  const storedAvatarUrl = localStorage.getItem("avatarUrl");
  if (storedAvatarUrl) {
    displayedAvatar.src = storedAvatarUrl;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const avatarUrlInput = document.getElementById("avatarUrl").value;
    const profile = get("profile");
    console.log("Profile from storage:", profile);

    if (profile && profile.name) {
      try {
        const newAvatarUrl = await updateAvatar(avatarUrlInput);
        displayedAvatar.src = newAvatarUrl;
        localStorage.setItem("avatarUrl", newAvatarUrl);

        displayMessage("success", "Avatar updated successfully!", "#message"); // Display success message
      } catch (error) {
        console.error("Failed to update avatar:", error);
        displayMessage(
          "danger",
          error.message || "Failed to update avatar!",
          "#message"
        ); // Display error message
      }
    }
  });
}
