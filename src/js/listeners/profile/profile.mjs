import { fetchUserCredits } from "../../api/profile/profileCredits.mjs";
import { getName } from "../../helpers/storage/getName.mjs";

export async function displayUserCreditsListener() {
  const creditElement = document.getElementById("creditCount");
  const username = getName();

  
  if (!username) {
    creditElement.textContent = "User not logged in";
    return; 
  }

  try {
    const credits = await fetchUserCredits(username);
    creditElement.textContent = `${credits} Credits`;
  } catch (error) {
    console.error(error);
    creditElement.textContent = "Failed to fetch credits";
  }
}
