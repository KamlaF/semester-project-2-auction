import * as storage from "../../services/storage.mjs";

export function isLoggedIn() {
  const token = storage.get("token");
  console.log("Token from storage:", token);
  return token ? true : false;
}
