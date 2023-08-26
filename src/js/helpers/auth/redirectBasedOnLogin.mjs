import { isLoggedIn } from "../storage/index.mjs";



export function redirectBasedOnLogin(pathname) {
  if (isLoggedIn()) {
    if (pathname === "/auth/login.html" || pathname === "/auth/register.html") {
      location.href = "/index.html";
    }
  } else {
    if (pathname === "/profile/" || pathname === "/profile/index.html") {
      location.href = "/auth/login.html";
    }
  }
}


