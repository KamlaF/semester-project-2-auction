import { API_LISTINGS } from "../../constants/api.mjs";
import { headers } from "../headers.mjs";


export async function fetchListings() {
  try {
    const response = await fetch(API_LISTINGS, {
      method: "GET",
      headers: headers("application/json"),
    });

    if (response.ok) {
      const listings = await response.json();
      return listings;
    } else {
      throw new Error(`Error fetching listings: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Failed to fetch listings:", error);
    throw error; // Re-throwing the error so that the calling function can handle it
  }
}
