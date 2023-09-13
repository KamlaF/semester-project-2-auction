import { API_LISTINGS } from "../../constants/api.mjs";

export async function editListing(listingId, listingData) {
  try {
    const response = await fetch(`${API_LISTINGS}/${listingId}`, {
      method: "PUT",
      body: JSON.stringify(listingData),
      headers: {
        "Content-Type": "application/json",
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
