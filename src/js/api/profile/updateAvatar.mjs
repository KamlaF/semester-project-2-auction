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
    return updatedProfile;
  }

    throw new Error(response.statusText);
    
}
