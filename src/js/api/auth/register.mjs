import { API_REGISTER } from "/src/js/api/constants/api.mjs";
import { headers } from "/src/js/api/headers.mjs";

/**
 * Registers a new user.
 * @param {Object} profile - The user's profile data.
 * @param {string} profile.name - The username.
 * @param {string} profile.email - The user's email.
 * @param {string} profile.password - The password.
 * @param {string} [profile.avatar] - The user's avatar URL (optional).
 * @returns {Promise<Object>} - The response JSON object.
 */
export async function register(profile) {
  // Logging data
  console.log("Name value:", profile.name, "Type:", typeof profile.name);
  console.log("Email value:", profile.email, "Type:", typeof profile.email);
  console.log(
    "Password value:",
    profile.password,
    "Type:",
    typeof profile.password
  );
  if (profile.avatar) {
    console.log(
      "Avatar value:",
      profile.avatar,
      "Type:",
      typeof profile.avatar
    );
  } else {
    console.log("Avatar is not provided");
  }

  // Structuring data for the request
  
  const data = {
    name: profile.name,
    email: profile.email,
    password: profile.password,
  };
  if (profile.avatar) {
    data.avatar = profile.avatar;
  }

  // Making the request
  const response = await fetch(API_REGISTER, {
    method: "POST",
    body: JSON.stringify(data),
    headers: headers("application/json; charset=UTF-8"),
  });

  const result = await response.json();
  console.log("Server response:", result);

  if (!response.ok) {
    throw new Error(result.message || response.statusText);
  }

  return result;
}
