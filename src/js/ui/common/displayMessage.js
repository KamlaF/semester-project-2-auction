export default function displayMessage(type, message, target) {
    console.log(
      "Displaying message:",
      message,
      "of type:",
      type,
      "on target:",
      target
    );
  const container = document.querySelector(target);

  container.innerHTML = `
    <div class="alert alert-${type}">
      ${message}
    </div>
  `;
}
