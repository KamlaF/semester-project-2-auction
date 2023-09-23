import { placeBid } from "../../api/bids/placeBid.mjs";
import displayMessage from "../../ui/common/displayMessage.js"; // Importing displayMessage function

export function addPlaceBidListener() {
  const bidForm = document.querySelector("#bidForm");

  bidForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const amount = parseFloat(event.target.elements.amount.value);
    const listingId = getListingIdFromURL();

    try {
      const response = await placeBid(listingId, amount);
      console.log("Bid placed successfully:", response);
      displayMessage("success", "Bid placed successfully!", "#message"); // Display success message
    } catch (error) {
      console.error("Failed to place bid:", error);
      displayMessage(
        "danger",
        error.message || "Failed to place bid!",
        "#message"
      ); // Display error message
    }
  });
}

function getListingIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}
