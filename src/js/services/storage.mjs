export function save(key, value) {
  if (key === "token") {
    localStorage.setItem(key, value); // If it's the token, set it directly.
  } else {
    localStorage.setItem(key, JSON.stringify(value)); // Otherwise, stringify the value.
  }
}

export function get(key) {
  const item = localStorage.getItem(key);
  console.log(`Getting key: ${key} with value:`, item);

  if (item && item !== "undefined") {
    if (key === "token") {
      return item; 
    }
    return JSON.parse(item);
  }

  return null;
}

export function remove(key) {
  localStorage.removeItem(key);
}
