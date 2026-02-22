/* ===========================
   Site JS (main.js)
   - Mobile nav toggle
   - Fun navbar indicator + header shrink
   - Close mobile menu on link click
   - Footer year
   - Spotlight feature grid
   =========================== */

(() => {
  const header = document.querySelector(".site-header");
  const nav = document.getElementById("site-nav") || document.querySelector(".site-nav");
  const toggleBtn = document.querySelector(".nav-toggle");

  /* ===========================
     Mobile Navigation Toggle
     =========================== */
  const setNavOpen = (open) => {
    if (!nav || !toggleBtn) return;
    nav.classList.toggle("open", open);
    toggleBtn.setAttribute("aria-expanded", String(open));
  };

  if (toggleBtn && nav) {
    toggleBtn.addEventListener("click", () => {
      const isOpen = !nav.classList.contains("open");
      setNavOpen(isOpen);
    });
  }

  /* ===========================
     Close mobile menu on link click
     =========================== */
  if (nav) {
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (nav.classList.contains("open")) setNavOpen(false);
      });
    });
  }

  /* ===========================
     Header shrink on scroll
     =========================== */
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ===========================
     Fun Navbar Indicator
     =========================== */
  // NOTE: you MUST have <span class="nav-indicator"></span> inside .site-nav in your HTML
  // If you don’t, we’ll create it automatically.
  if (nav) {
    let indicator = nav.querySelector(".nav-indicator");
    if (!indicator) {
      indicator = document.createElement("span");
      indicator.className = "nav-indicator";
      nav.prepend(indicator);
    }

    const links = nav.querySelectorAll(".nav-link");
    const getActive = () => nav.querySelector(".nav-link.active") || nav.querySelector(".nav-link");

    const setIndicatorTo = (el, bounce = true) => {
      if (!indicator || !el) return;

      const navRect = nav.getBoundingClientRect();
      const linkRect = el.getBoundingClientRect();
      const x = linkRect.left - navRect.left;

      indicator.style.width = `${linkRect.width}px`;
      indicator.style.transform = `translateX(${x}px) scale(1.02)`;

      if (!bounce) return;

      window.clearTimeout(indicator._t);
      indicator._t = window.setTimeout(() => {
        indicator.style.transform = `translateX(${x}px) scale(1)`;
      }, 120);
    };

    // Initial position
    const activeLink = getActive();
    setIndicatorTo(activeLink, false);

    // Hover / focus moves indicator
    links.forEach((link) => {
      link.addEventListener("mouseenter", () => setIndicatorTo(link));
      link.addEventListener("focus", () => setIndicatorTo(link));
    });

    // Return to active link when leaving nav
    nav.addEventListener("mouseleave", () => setIndicatorTo(getActive()));
    nav.addEventListener("focusout", (e) => {
      if (!nav.contains(e.relatedTarget)) setIndicatorTo(getActive());
    });

    // Recalc on resize
    window.addEventListener("resize", () => setIndicatorTo(getActive(), false));
  }

  /* ===========================
     Footer Year (Auto-update)
     =========================== */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ===========================
     Spotlight grid (Buyer Journey)
     =========================== */
  const featuresEl = document.querySelector(".features");
  if (featuresEl) {
    const featureEls = featuresEl.querySelectorAll(".feature");

    const update = (ev) => {
      featureEls.forEach((featureEl) => {
        const rect = featureEl.getBoundingClientRect();
        const x = ev.clientX - rect.left;
        const y = ev.clientY - rect.top;
        featureEl.style.setProperty("--x", x);
        featureEl.style.setProperty("--y", y);
      });
    };

    featuresEl.addEventListener("pointermove", update);
    featuresEl.addEventListener("pointerenter", update);

    featuresEl.addEventListener("pointerleave", () => {
      featureEls.forEach((featureEl) => {
        featureEl.style.setProperty("--x", featureEl.clientWidth / 2);
        featureEl.style.setProperty("--y", featureEl.clientHeight / 2);
      });
    });

    // Init center glow
    featureEls.forEach((featureEl) => {
      featureEl.style.setProperty("--x", featureEl.clientWidth / 2);
      featureEl.style.setProperty("--y", featureEl.clientHeight / 2);
    });
  }
})();