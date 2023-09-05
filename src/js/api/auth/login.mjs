import { API_LOGIN } from "../../constants/api.mjs";
import { headers } from "/src/js/api/headers.mjs";

export async function login(email, password) {
  const response = await fetch(API_LOGIN, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: headers("application/json"),
  });
  if (response.ok) {
    const profile = await response.json();
    if (!profile.accessToken) {
      throw new Error("Token is missing in the response");
    }
    localStorage.setItem("token", profile.accessToken); // Save the token
    return profile;
  }


  throw new Error(response.statusText);
}

