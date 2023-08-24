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
  // Validation
  if (
    typeof profile.name !== "string" ||
    !/^[\w]+$/.test(profile.name) ||
    profile.name.length > 20
  ) {
    throw new Error("Invalid name format.");
  }

  if (
    typeof profile.email !== "string" ||
    !/^[\w\-.]+@(stud\.)?noroff\.no$/.test(profile.email)
  ) {
    throw new Error("Invalid email format.");
  }

  if (typeof profile.password !== "string" || profile.password.length < 8) {
    throw new Error("Password too short.");
  }

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
