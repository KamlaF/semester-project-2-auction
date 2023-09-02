import { addLoginListener } from "./listeners/auth/login.mjs";
import buildMenu from "/src/js/ui/common/buildMenu.mjs";
import { addRegisterListener } from "./listeners/auth/register.mjs";
import { redirectBasedOnLogin } from "./helpers/auth/index.mjs";
import { displayRecentListings } from "./listeners/listings/displayListings.mjs";
import handleSearch from "./listeners/search/handleSearch.mjs";
import hideResultContainerOnClick from "./listeners/search/hideResultContainerOnClick.mjs";

export default function router() {
  

  const pathname = window.location.pathname;

  redirectBasedOnLogin(pathname);
  buildMenu(pathname);

  switch (pathname) {
    case "/":
    case "/index.html":
      // As an example, only run the search handlers on the main page (or other relevant pages)
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
  }
  console.log("Routing to:", pathname);
}
