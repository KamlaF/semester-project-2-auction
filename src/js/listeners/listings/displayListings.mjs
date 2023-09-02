import { fetchListings } from "../../api/listings/getListings.mjs";
import { renderListings } from "/src/js/ui/listings/displayListings.mjs";
import { renderLoggedInListings } from "/src/js/ui/listings/displayLoggedInListings.mjs";
import { isLoggedIn } from "../../helpers/storage/isLoggedIn.mjs";

export async function displayRecentListings() {
  try {
    const listings = await fetchListings();
    const recentListings = listings.slice(0, 16);

    // Check if the user is logged in
    if (isLoggedIn()) {
      renderLoggedInListings(recentListings);
    } else {
      renderListings(recentListings);
    }
  } catch (error) {
    console.error("Error displaying listings:", error);
    // Handle the error, maybe show a message to the user.
  }
}
