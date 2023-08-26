import * as storage from "../../services/storage.mjs";

export function getName() {
  const profile = storage.get("profile");
  return profile ? profile.name : null;
}
