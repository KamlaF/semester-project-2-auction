// src/js/api/listings/getListingById.mjs
import { API_SINGLE_LISTING } from "../../constants/api.mjs";
import { headers } from "../headers.mjs";

export async function fetchListingById(listingId) {
  try {
    const response = await fetch(
      `${API_SINGLE_LISTING(listingId)}?_bids=true`,
      {
        method: "GET",
        headers: headers("application/json"),
      }
    );

    if (response.ok) {
      const listing = await response.json();
      return listing;
    } else {
      throw new Error(`Error fetching listing: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Failed to fetch listing by ID:", error);
    throw error;
  }
}
