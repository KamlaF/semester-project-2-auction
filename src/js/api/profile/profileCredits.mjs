import { API_CREDITS_BY_PROFILE } from "../../constants/api.mjs";
import * as storage from "../../services/storage.mjs";

export async function fetchUserCredits(username) {
  
  const token = storage.get("token");
  if (!token) {
    throw new Error("User is not authenticated");
  }

  const response = await fetch(`${API_CREDITS_BY_PROFILE(username)}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch credits for user ${username}`);
  }

  const data = await response.json();
  return data.credits;
}
