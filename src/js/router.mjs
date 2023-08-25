import { addRegisterListener } from "./listeners/auth/index.mjs";

export default function router() {
  const pathname = window.location.pathname;

  switch (pathname) {
    case "/":
    case "/index.html":
      break;
    case "/auth/register/register.html":
      addRegisterListener();
      break;
  }
}
