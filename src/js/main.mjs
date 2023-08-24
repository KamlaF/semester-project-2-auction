// main.mjs


import { register } from "./api/auth/index.mjs";


import { registerListener } from "./listeners/auth/index.mjs";

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".card-body form").addEventListener("submit", registerListener);
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".card-body form")
    .addEventListener("submit", register);
});

