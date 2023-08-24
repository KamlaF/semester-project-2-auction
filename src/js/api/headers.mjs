// src/js/api/headers.mjs
export function headers(contentType) {
  const defaultHeaders = {
    "Content-Type": contentType,
  };

  // Check for a token in localStorage
  const token = localStorage.getItem("token");
  if (token) {
    defaultHeaders["Authorization"] = `Bearer ${token}`;
  }

  return defaultHeaders;
}
