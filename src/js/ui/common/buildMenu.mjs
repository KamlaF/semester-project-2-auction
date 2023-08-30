import { isLoggedIn, getName } from "../../helpers/storage/index.mjs";
import * as listeners from "../../listeners/auth/index.mjs";

export default function buildMenu(pathname) {
  const menu = document.querySelector("#menu");
  const searchContainer = document.querySelector("#searchContainer");

  // Clear current content first
  menu.innerHTML = "";
  searchContainer.innerHTML = "";

  // Common search bar
  const searchBar = `
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="search" list="searchResults" />
            <div id="searchResults" class="search-results"></div>
        </form>
    `;

  if (isLoggedIn()) {
    const name = getName();

    menu.innerHTML = `
            <li class="nav-item">
                <a class="nav-link ${
                  pathname === "/" || pathname === "/index.html" ? "active" : ""
                }" href="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link ${
                  pathname === "/profile/index.html" ? "active" : ""
                }" href="/profile/index.html">Profile</a>
            </li>
            <li class="nav-item">
                <button class="btn btn-primary" id="logout">Log out ${name}</button>
            </li>
        `;

    searchContainer.innerHTML = searchBar;
    listeners.logoutListener();
  } else {
    menu.innerHTML = `
            <li class="nav-item">
                <a class="nav-link ${
                  pathname === "/" || pathname === "/index.html" ? "active" : ""
                }" href="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link ${
                  pathname === "/auth/login/index.html" ? "active" : ""
                }" href="/auth/login/index.html">Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link ${
                  pathname === "/auth/register/index.html" ? "active" : ""
                }" href="/auth/register/index.html">Register</a>
            </li>
        `;

    searchContainer.innerHTML = searchBar;
  }
}
