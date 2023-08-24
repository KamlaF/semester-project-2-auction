import { registerListener } from "./listeners/auth/index.mjs";

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".card-body form")
    .addEventListener("submit", registerListener);
});
