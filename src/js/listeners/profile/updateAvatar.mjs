import { updateAvatar } from "../../api/profile/updateAvatar.mjs";
import * as storage from "../../services/storage.mjs";


export function setupAvatarUpdateListener() {
  const form = document.getElementById("avatarForm");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const avatarUrlInput = document.getElementById("avatarUrl");
    const displayedAvatar = document.getElementById("displayedAvatar");

    const profile = storage.get("profile");
    if (profile && profile.name) {
      try {
        const updatedProfile = await updateAvatar(
          profile.name,
          avatarUrlInput.value
        );
        displayedAvatar.src = updatedProfile.avatar;

       
        storage.save("profile", updatedProfile);
      } catch (error) {
        console.error("Failed to update avatar:", error);
      }
    }
  });
}
