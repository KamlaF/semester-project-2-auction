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
 

  // Making the request
  const response = await fetch(API_REGISTER, {
    method: "POST",
    body: JSON.stringify(profile),
    headers: headers("application/json; charset=UTF-8"),
  });

   const result = await response.json();

  if (response.ok) {
    console.log("Server response:", result);
    return result;
  }

    throw new Error(result.message || response.statusText);
  }

 

