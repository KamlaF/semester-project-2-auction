import { search } from "../../api/search/search.mjs";
import hideSearchResults from "../../ui/search/hideSearchResults.mjs";
import displaySearchResults from "../../ui/search/displaySearchResults.mjs";
import displayMessage from "../../ui/common/displayMessage.js";
import deBounce from "../../helpers/deBounce.mjs";

export default function handleSearch() {
  const input = document.querySelector("#search");
  if (input) {
    input.addEventListener("input", deBouncedSearch);
  }
}

const deBouncedSearch = deBounce(doSearch, 1000);

async function doSearch(event) {
  const tag = event.target.value.trim();

  if (tag.length < 3) {
    return hideSearchResults();
  }
  try {
    const results = await search(tag);
    console.log(results);
    displaySearchResults(results);
  } catch (error) {
    console.log(error);
    displayMessage(
      "danger",
      "Search failed. Please try again.",
      "#searchResults"
    );
  }
}
