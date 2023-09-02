export function renderLoggedInListings(listings) {
  const listingsContainer = document.getElementById("listingsContainer");

  let html = "";
  listings.forEach((listing) => {
    html += `
     
  <div class="listing-item col-12 col-sm-6 col-md-4 col-lg-3 mb-4 p-2">
    <div class="card h-100">
      <img class="card-img-top" src="${listing.media[0]}" alt="${listing.title}" />
      <div class="card-body">
        <h3 class="card-title">${listing.title}</h3>
        <p class="card-text">${listing.description}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>Bids:</strong> ${listing._count.bids}</li>
      </ul>
      <div class="card-footer bg-transparent border-top-0">
        <a href="Listings/singleListing.html?id=${listing.id}" class="text-primary stretched-link">View Listing</a>
      </div>
    </div>
  </div>

    `;
  });

 

  listingsContainer.innerHTML = html;
}
