# Lindsey Howard — Florida Real Estate Candidate Site

> live link is [here](https://realtor-linds-howard.netlify.app/)

A clean, responsive, static website that communicates my real estate licensing status, client-ready systems, and a no-pressure approach to communication. Built with HTML, CSS, and JavaScript (plus Bootstrap + Font Awesome via CDN).

> **Compliance:** Florida Real Estate Sales Associate license pending — not yet licensed. Services available after passing and activation.

![screenshot](https://res.cloudinary.com/dhw9dl4gm/image/upload/v1772970195/Lindsey-Howard-Florida-Real-Estate-Candidate-03-08-2026_06_42_AM_pwuqvf.png)

---

## ✨ Features

- **Responsive navbar** with mobile toggle
- **Hero section** with background image
- **Buyer Journey Workflow** page (step-by-step process)
- **Lead Follow-up & Pipeline System** page (cadence, stages, templates)
- **Projects** page (filterable cards)
- **Contact** page with:
  - Embedded **Fort Walton Beach** map
  - Working contact form setup (Netlify-ready + mailto fallback)
- **Polished footer** with emerald gradient + “ooze” effect and social icons

---

## 🧱 Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Bootstrap 5.3 (CDN)
- Font Awesome 6 (CDN)
- Google Fonts (Playfair Display + Inter)

---

## 📁 Project Structure

```txt
.
├─ index.html
├─ pages/
│  ├─ buyer-journey.html
│  ├─ case-studies.html
│  ├─ pipeline.html
│  ├─ projects.html
│  └─ contact.html
├─ css/
│  └─ styles.css
├─ js/
│  └─ main.js
└─ images/
   ├─ logo.png
   ├─ hero-img-2.jpg
   ├─ pic-of-me.jpg
   └─ hero-img-destin.png
````

---

## 🚀 Getting Started (Local)

### Option A: VS Code Live Server (recommended)

1. Install the **Live Server** extension
2. Right-click `index.html` → **Open with Live Server**

### Option B: Python simple server

From the project folder:

```bash
python -m http.server 5500
```

Then open:

```txt
http://localhost:5500
```

> Tip: Running a local server helps external CDNs (like Font Awesome) load reliably.

---

## 🔧 Configuration Notes

### Contact Form

The contact form is set up for **Netlify Forms**:

* Works automatically once deployed on Netlify
* Includes a honeypot field for spam reduction
* Includes a **“Send via email app”** mailto fallback for local testing

To change the recipient email for the mailto fallback, update it in:

* `pages/contact.html` → `mailto:` link and script `mailto:` target

### Social Links

Update your social URLs in the footer and contact page:

* LinkedIn
* Facebook
* Instagram

---

## 🎨 Styling & Theme

The accent color is a **dark emerald green** and is controlled via CSS variables in `css/styles.css`:

```css
:root {
  --accent: #0f4d3f;
  --accent2: #0b3a30;
  --accent-soft: rgba(15, 77, 63, 0.12);
  --accent-soft-strong: rgba(15, 77, 63, 0.18);
}
```

---

## ✅ Accessibility

* Skip link included (`Skip to content`)
* Semantic HTML structure
* `aria-label` on icon links
* Mobile menu uses `aria-expanded`

---

## 📌 Roadmap (Optional)

* [ ] Add a lightweight “Resources” page (buyer checklist, glossary, local tips)
* [ ] Add form submission success/thank-you page (Netlify redirect)
* [ ] Add a post-license homepage version (toggleable)

---

## 📄 License

This project is currently for personal/professional use. If you’d like to reuse parts, please credit the original author.

---

## 👋 Contact

**Lindsey Howard**
Emerald Coast, Florida
Email: `the.wifey91@gmail.com`

```
```
