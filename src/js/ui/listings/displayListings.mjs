export function renderListings(listings) {
  const listingsContainer = document.getElementById("listingsContainer");

  let html = "";
  listings.forEach((listing) => {
    html += `
     <div class="listing-item col-12 col-sm-6 col-md-4 col-lg-3 mb-4 p-2 ">
    <div class="card ">
      <img class="card-img-top" src="${listing.media[0]}" alt="${listing.title}" />
      <div class="card-body">
        <h3 class="card-title">${listing.title}</h3>
       
      </div>
      </div>
    </div>
  </div>
    `;
  });

  listingsContainer.innerHTML = html;
}
