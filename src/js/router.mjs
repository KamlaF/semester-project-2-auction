// src/js/router.mjs
import { addLoginListener } from "./listeners/auth/login.mjs"; 
import  buildMenu from "/src/js/ui/common/buildMenu.mjs";
import { addRegisterListener } from "./listeners/auth/register.mjs"; 
import { redirectBasedOnLogin } from "./helpers/auth/index.mjs";

export default function router() {
  const pathname = window.location.pathname;

  redirectBasedOnLogin(pathname);
  buildMenu(pathname);

  switch (pathname) {
    case "/":
    case "/index.html":
      // Do something for the main page, if needed.
      break;
    case "/auth/register/index.html":
      addRegisterListener();
      break;
    case "/login":
    case "/auth/login/index.html":
      addLoginListener(); // Call the addLoginListener function for the login route.
      break;
  }
}
