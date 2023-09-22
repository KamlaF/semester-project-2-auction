import buildMenu from "/src/js/ui/common/buildMenu.mjs";
import { addRegisterListener } from "./listeners/auth/register.mjs";
import { redirectBasedOnLogin } from "./helpers/auth/index.mjs";
import { addLoginListener } from "./listeners/auth/login.mjs";
import { displayRecentListings } from "./listeners/listings/displayListings.mjs";
import { displaySingleListing } from "./listeners/listings/displaySingleListingListener.mjs";
import { addPlaceBidListener } from "./listeners/bids/placeBidListener.mjs"; // adjust the path as necessary

import handleSearch from "./listeners/search/handleSearch.mjs";
import hideResultContainerOnClick from "./listeners/search/hideResultContainerOnClick.mjs";
import { displayUserCreditsListener } from "./listeners/profile/profile.mjs";
import { setupAvatarUpdateListener } from "./listeners/profile/updateAvatar.mjs";
import { addCreateListingListener } from "./listeners/listings/createListing.mjs";
import { isLoggedIn } from "./helpers/storage/index.mjs";

export default function router() {
  const pathname = window.location.pathname;

  redirectBasedOnLogin(pathname);
  buildMenu(pathname);

  switch (pathname) {
    case "/":
    case "/index.html":
      handleSearch();
      hideResultContainerOnClick();
      displayRecentListings();
      break;
    case "/auth/register/index.html":
      addRegisterListener();
      break;
    case "/login":
    case "/auth/login/":
    case "/auth/login/index.html":
      addLoginListener();
      break;
    case "/profile":
    case "/profile/index.html":
      if (isLoggedIn()) {
        displayUserCreditsListener();
        setupAvatarUpdateListener();
        addCreateListingListener();
      } else {
        // If not logged in, redirect to login
        window.location.href = "/auth/login/index.html";
      }
      break;
    case "/Listings/singleListing.html":
      displaySingleListing(); // To fetch and display the single listing
      addPlaceBidListener(); // To add the bid event listener
      break;

    case "/Listings/singleListing.html":
      // Here, you'll extract the ID and then fetch and display the listing
      displaySingleListing();
      break;
    default:
      console.log(`No specific behavior defined for pathname: ${pathname}`);
  }
}
