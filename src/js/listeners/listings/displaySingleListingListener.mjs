import { fetchListingById } from "../../api/listings/getListingById.mjs";
import { renderSingleListing } from "/src/js/ui/listings/displaySingleListing.mjs";

export async function displaySingleListing() {
  try {
    const listingId = getListingIdFromURL();
    if (listingId) {
      const listingData = await fetchListingById(listingId);
      renderSingleListing(listingData);
    } else {
      console.error("Listing ID not found in the URL");
    }
  } catch (error) {
    console.error("Failed to fetch and display the single listing:", error);
  }
}

function getListingIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  const listingId = params.get("id");
  console.log("URL:", window.location.href, "Listing ID:", listingId); // debugging line
  return listingId;
}
