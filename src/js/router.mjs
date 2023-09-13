import { addLoginListener } from "./listeners/auth/login.mjs";
import buildMenu from "/src/js/ui/common/buildMenu.mjs";
import { addRegisterListener } from "./listeners/auth/register.mjs";
import { redirectBasedOnLogin } from "./helpers/auth/index.mjs";
import { displayRecentListings } from "./listeners/listings/displayListings.mjs";
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
        addCreateListingListener(); // Invoke the create listing listener here
      } else {
        // e.g., window.location.href = "/auth/login/index.html";
      }
      break;
  }
}
