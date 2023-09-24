import { API_UPDATE_AVATAR } from "../../constants/api.mjs";
import { headers } from "/src/js/api/headers.mjs";

export async function updateAvatar(avatarUrl) {
  const profileString = localStorage.getItem("profile");
  const profile = profileString ? JSON.parse(profileString) : null;

  if (!profile || !profile.name) {
    throw new Error("No profile name found in local storage");
  }

  const response = await fetch(API_UPDATE_AVATAR(profile.name), {
    method: "PUT",
    body: JSON.stringify({ avatar: avatarUrl }),
    headers: headers("application/json"),
  });

  if (response.ok) {
    return avatarUrl; 
  }
  throw new Error(response.statusText);
}
