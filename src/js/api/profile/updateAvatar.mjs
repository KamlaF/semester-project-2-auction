import { API_UPDATE_AVATAR } from "../../constants/api.mjs";
import { headers } from "/src/js/api/headers.mjs";

export async function updateAvatar(username, avatarUrl) {
  console.log("Sending token:", localStorage.getItem("token"));

  const response = await fetch(API_UPDATE_AVATAR(username), {
    method: "PUT",
    body: JSON.stringify({ avatar: avatarUrl }),
    headers: headers("application/json"),
  });

  if (response.ok) {
    const updatedProfile = await response.json();

    // Store the new avatar URL in local storage
    localStorage.setItem("avatarUrl", updatedProfile.avatar);

    return updatedProfile;
  }

  throw new Error(response.statusText);
}

// Function to retrieve the stored avatar URL
export function getStoredAvatarUrl() {
  return localStorage.getItem("avatarUrl");
}

// Function to set the avatar image source to the stored URL
export function displayStoredAvatar() {
  const storedAvatarUrl = getStoredAvatarUrl();
  if (storedAvatarUrl) {
    document.getElementById("displayedAvatar").src = storedAvatarUrl;
  }
}
