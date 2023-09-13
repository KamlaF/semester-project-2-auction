import { createListing } from "/src/js/api/listings/createListingAPI.mjs";
import displayMessage from "/src/js/ui/common/displayMessage.js";

export function addCreateListingListener() {
  document
    .querySelector("#listingForm")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      try {
        const listingData = {
          title: document.querySelector("#listingTitle").value,
          description: document.querySelector("#listingDescription").value,
          media: document.querySelector("#mediaGallery").value.split(","),
          endsAt: new Date(
            document.querySelector("#deadlineDate").value
          ).toISOString(),
        };

        const result = await createListing(listingData);
        displayMessage("success", "Listing created successfully!", "#message");
      } catch (error) {
        displayMessage("danger", error.message, "#message");
      }
    });
}

