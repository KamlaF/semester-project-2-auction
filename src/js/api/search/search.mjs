import { API_LISTINGS } from "../../constants/api.mjs";

export async function search(tag) {
  const url = `${API_LISTINGS}?_tag=${tag}`;

  const response = await fetch(url, {});
  if (response.ok) {
    const json = await response.json();
    return json;
  }
  throw new Error("Search failed");
}
