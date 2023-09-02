
import hideSearchResults from"../../ui/search/hideSearchResults.mjs";
export default function hideResultContainerOnClick() {
  document.addEventListener("click", (event) => {
    const seachInput = document.querySelector("#search");
    const resultsContainer = document.querySelector("#searchResults");

   
    if (!seachInput || !resultsContainer) return;

    if (
      event.target !== seachInput &&
      event.target !== resultsContainer &&
      !resultsContainer.contains(event.target)
    ) {
      hideSearchResults(seachInput);
    }
  });
}
