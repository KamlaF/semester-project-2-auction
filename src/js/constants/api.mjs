export const API_HOST_URL = "https://api.noroff.dev";
export const API_BASE = "/api/v1";
export const API_AUCTION_BASE = "/auction";
export const API_AUCTION_URL = `${API_HOST_URL}${API_BASE}${API_AUCTION_BASE}`;

// auction-auth related
export const API_REGISTER = `${API_AUCTION_URL}/auth/register`;
export const API_LOGIN = `${API_AUCTION_URL}/auth/login`;

// auction-profiles related
export const API_UPDATE_AVATAR = name => `${API_AUCTION_URL}/profiles/${name}/media`;
export const API_CREDITS_BY_PROFILE = name => `${API_AUCTION_URL}/profiles/${name}/credits`;

// auction-listings related
export const API_LISTINGS = `${API_AUCTION_URL}/listings`;
export const API_ADD_BID_TO_LISTING = id => `${API_AUCTION_URL}/listings/${id}/bids`;
