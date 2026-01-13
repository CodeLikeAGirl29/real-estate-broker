/* ===========================
   Mobile Navigation Toggle
   =========================== */
const toggleBtn = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (toggleBtn && nav) {
  toggleBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  });
}

/* ===========================
   Footer Year (Auto-update)
   =========================== */
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/* ===========================
   Optional: Close mobile menu
   when a link is clicked
   =========================== */
const navLinks = document.querySelectorAll(".site-nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (nav.classList.contains("open")) {
      nav.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
    }
  });
});
