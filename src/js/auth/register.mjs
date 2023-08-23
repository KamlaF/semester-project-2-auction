import { API_REGISTER } from "../constants/api.mjs";

export async function register(name, email, password, avatar) {
  const data = {
    name: name,
    email: email,
    password: password,
    avatar: avatar, // Only add this if it's not null or empty
  };

  const response = await fetch(API_REGISTER, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}
