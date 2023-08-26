import { API_LOGIN } from "/src/js/api/constants/api.mjs";
import { headers } from "/src/js/api/headers.mjs";
import { save } from "../../services/storage.mjs";

export async function login(email, password) {
  const response = await fetch(API_LOGIN, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: headers("application/json"),
  });

  if (response.ok) {
    const profile = await response.json();
    save("token", profile.accessToken);
    delete profile.accessToken;
    save("profile", profile);
    return profile;
  }

  throw new Error(response.statusText);
}
