import * as storage from "../../services/storage.mjs";

export function logoutListener() {
  const logoutButton = document.querySelector("#logout");

logoutButton.addEventListener("click", (event) => {
  event.preventDefault();
  storage.remove("token");
  storage.remove("name");
  location.href = "/";
});
}



