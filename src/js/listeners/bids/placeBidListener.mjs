import { placeBid } from "../../api/bids/placeBid.mjs";

export function addPlaceBidListener() {
  const bidForm = document.querySelector("#bidForm");

  bidForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const amount = parseFloat(event.target.elements.amount.value);
    const listingId = getListingIdFromURL(); // Assuming you've imported this function or it's available in the scope

    try {
      const response = await placeBid(listingId, amount);
      console.log("Bid placed successfully:", response);
      // Add any additional logic or display messages here
    } catch (error) {
      console.error("Failed to place bid:", error);
      // Handle error, maybe show a message to the user.
    }
  });
}

function getListingIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}
