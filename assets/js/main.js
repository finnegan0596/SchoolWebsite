const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

const statusText = document.querySelector("#form-status");
if (statusText) {
  const params = new URLSearchParams(window.location.search);
  if (params.get("submitted") === "true") {
    statusText.textContent = "Thanks! Your inquiry was submitted successfully.";
  }
}
