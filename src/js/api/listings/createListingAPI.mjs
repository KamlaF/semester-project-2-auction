import { API_LISTINGS } from "../../constants/api.mjs";
import { isLoggedIn } from "../../helpers/storage/isLoggedIn.mjs";
import * as storage from "../../services/storage.mjs";

export async function createListing(listingData) {
  try {
    if (!isLoggedIn()) {
      throw new Error("User is not logged in");
    }

    const token = storage.get("token");

    const response = await fetch(API_LISTINGS, {
      method: "POST",
      body: JSON.stringify(listingData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
