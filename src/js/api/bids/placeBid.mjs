import { API_ADD_BID_TO_LISTING } from "../../constants/api.mjs";
import { headers } from "../headers.mjs";

export async function placeBid(listingId, amount) {
  try {
    const response = await fetch(API_ADD_BID_TO_LISTING(listingId), {
      method: "POST",
      headers: headers("application/json"),
      body: JSON.stringify({
        amount: amount,
      }),
    });

      if (!response.ok) {
         console.log("Server Response:", await response.text());
      throw new Error(`Error placing bid: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to place bid:", error);
    throw error;
  }
}
