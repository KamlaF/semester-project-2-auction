export function renderSingleListing(listing) {
  const container = document.querySelector("#singleListingDetails");
  const imageUrl = listing.media[0] || "/Images/FB_IMG_1592496406529.jpg";
  const tags = listing.tags
    ? listing.tags
        .map((tag) => `<span class="badge bg-primary me-2">${tag}</span>`)
        .join("")
    : "No tags available";
  const formattedCreatedDate = new Date(listing.created).toLocaleDateString(
    "en-US"
  );
  const formattedUpdatedDate = new Date(listing.updated).toLocaleDateString(
    "en-US"
  );
  const formattedEndsAtDate = new Date(listing.endsAt).toLocaleDateString(
    "en-US"
  );

  // Calculate the highest bid
  const highestBid =
    listing.bids && listing.bids.length > 0
      ? listing.bids.sort((a, b) => b.amount - a.amount)[0]
      : null;
  const highestBidDisplay = highestBid
    ? `<li class="list-group-item"><strong>Highest Bid:</strong> ${highestBid.amount}</li>`
    : '<li class="list-group-item">No bids yet.</li>';

  // Include the highestBidDisplay in the html template
  const html = `
        <div class="listing-detail card">
            <img src="${imageUrl}" class="card-img-top" alt="${listing.title}" />
            <div class="card-body">
                <h2 class="card-title">${listing.title}</h2>
                <p class="card-text">${listing.description}</p>
                <div>${tags}</div>
                <hr>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>Created:</strong> ${formattedCreatedDate}</li>
                    <li class="list-group-item"><strong>Updated:</strong> ${formattedUpdatedDate}</li>
                    <li class="list-group-item"><strong>Ends At:</strong> ${formattedEndsAtDate}</li>
                    <li class="list-group-item"><strong>Bids:</strong> ${listing._count.bids}</li>
                    ${highestBidDisplay}
                </ul>
            </div>
        </div>
    `;

  container.innerHTML = html;
}
