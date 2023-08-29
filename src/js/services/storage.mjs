export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function get(key) {
  const item = localStorage.getItem(key);
  if (item && item !== "undefined") {
    return JSON.parse(item);
  }
  return null;
}

export function remove(key) {
  localStorage.removeItem(key);
}
