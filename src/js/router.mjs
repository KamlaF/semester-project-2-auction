import { addLoginListener } from "./listeners/auth/login.mjs";
import buildMenu from "/src/js/ui/common/buildMenu.mjs";
import { addRegisterListener } from "./listeners/auth/register.mjs";
import { redirectBasedOnLogin } from "./helpers/auth/index.mjs";
import { displayRecentListings } from "./listeners/listings/displayListings.mjs"; // This is already imported

export default function router() {
  const pathname = window.location.pathname;

  redirectBasedOnLogin(pathname);
  buildMenu(pathname);

  switch (pathname) {
    case "/":
    case "/index.html":
      // Fetch and render listings for the main page using the encapsulated function
      displayRecentListings();
      break;
    case "/auth/register/index.html":
      addRegisterListener();
      break;
    case "/login":
    case "/auth/login/index.html":
      addLoginListener(); // Call the addLoginListener function for the login route.
      break;
    // Add more routes as necessary
  }
}
