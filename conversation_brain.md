# Portfolio Project - Conversation Brain

This document serves as the "brain" or memory of our recent AI development session. It captures the current state of the project, the architecture, and the specific changes that have been implemented so you can easily share this context with future AI sessions.

## 🏗️ Project Architecture & Tech Stack
*   **Framework:** React 19 + Vite (`npm run dev` to start)
*   **Styling:** Vanilla CSS with CSS Variables for theming (Dark/Light mode). Global styles and variables are in `index.css`.
*   **Animations:** GSAP (GreenSock) and `ScrollTrigger` used heavily across components for scroll-reveal animations, word-by-word text reveals, and parallax effects.
*   **Icons:** `lucide-react`
*   **Structure:** Single-page application format. Components are located in `src/components/`.

## ✨ Phase 2: Design Aesthetics Overhaul (Adding the "Wow Factor")
To achieve a premium, Framer-style "cohesion" aesthetic, we significantly upgraded the global UI:
*   **Deep Space Theme:** Shifted the primary dark background from basic `#0a0a0a` to a richer `#09090b` for depth.
*   **Glassmorphism 2.0:** Upgraded `.glass-panel` globally to include multi-layered shadows, an inner 1px white-light border, and a subtle SVG noise texture (`mix-blend-mode: overlay`) for a physical frosted glass feel.
*   **Typography & Gradients:** Introduced `.text-gradient` for stunning metallic/chrome fade effects on key headings (like the Hero name). Hero name size significantly increased for impact.
*   **Volumetric Lighting:** The floating ambient orbs now have a massive `150px` blur, a slow 60s rotation, and use `mix-blend-mode: screen`. They now behave as true volumetric light sources rather than flat colored blobs.
*   **Magnetic Micro-interactions:** Added physical float/tilt effects (`rotate(-2deg) scale(1.05)`) to the hero profile picture, and added glowing drop-shadows to primary buttons on hover.
*   **UX Scroll Optimization:** Upgraded the Lenis smooth scroll configuration in `SmoothScroll.jsx`. Swapped the static `duration` for a physics-based `lerp: 0.08` for fluid momentum, and enabled `normalizeWheel: true` to ensure scroll speed consistency across trackpads and mice.
*   **Performance Optimization (Lag Fix):** Identified and fixed three GPU-killers:
    1. Removed `rotate-bg` animation — was continuously rotating a viewport-sized fixed element with 150px-blurred orbs (forced full re-composition every frame).
    2. Removed SVG noise `::before` pseudo-element from `.glass-panel` — was generating an SVG filter texture on dozens of cards simultaneously.
    3. Removed `mix-blend-mode: screen` from ambient orbs — blend modes on blurred elements prevent GPU layer caching.
    4. Reduced blur from 150px to 120px, added `translateZ(0)` for proper GPU layer promotion.
    5. Restored `border: 1px solid var(--glass-border)` on `.glass-panel` and reduced blur from 16px to 12px.
*   **Vite Config Fix:** Added `server.fs.strict` and `optimizeDeps.entries` to `vite.config.js` to prevent Vite from scanning the entire hard drive (was causing OOM crashes due to anaconda3 `.html` files being picked up).

## ✨ Phase 3: Functionality & 3D Assets (Larry Framer Style)
*   **3D Floating Assets:** Created a custom `FloatingAsset.jsx` component that renders huge 3D-styled emojis (🔮, 🧊, ⭐, 🐈, 📝, 🏖️) with overlapping drop-shadows. They use GSAP yoyo float animations and mouse-move parallax to perfectly mimic the "Larry" Framer template aesthetic without the heavy load of rendering real 3D objects or images.
*   **Certificate Lightbox:** Clicking on the main TESDA certificate now opens it in a full-screen, high-resolution lightbox modal.
*   **Light Mode Legibility Fix:** Overrode `.text-gradient` in light mode to use `#0f172a` to `#64748b` so your name is visible on white backgrounds.
*   **Global Spacing:** Reduced `.section-container` padding from `140px` to `80px` to tighten up whitespace globally.
*   **YouTube Integration:** Added a YouTube button to the Meowderer project showcase (linked alongside GitHub).

## 🛠️ Phase 1: Structural & Content Overhaul

### 1. Navigation & Theme (`Navbar.jsx`, `Navbar.css`)
*   Replaced the plain text logo with the official **JDR interlocking lettermark**.
*   The logo automatically switches between `JDR logo dark.png` (dark mode) and `JDR logo light.png` (light mode).
*   Added a subtle purple/blue glow filter to the logo on hover.
*   Added a "Certs" link to the navigation menu.

### 2. Hero Section (`Hero.jsx`)
*   **Subtitle:** Updated from a generic frontend developer text to a highly personal statement: *"4th-year BSIT student at Gordon College — I design, I build, and I obsess over the details most people scroll past..."*
*   **Stats:** Changed "417+ Hackathon Devs" to **"3+ Years Continuous Learning"**.

### 3. About Section (`About.jsx`, `About.css`)
*   Fixed a visual bug in the GSAP word-by-word animation where words were running together. Added `margin-right: 0.3em` to `.about-statement .word`.

### 4. Projects Showcase (`Projects.jsx`, `Projects.css`)
*   **Meowderer:** Removed the video background. Added a `.gradient-purple` radial background. Role updated to *Frontend Developer & Editor*. Fixed GitHub link to `pvrylle/Meowderer`.
*   **GC Smart Check:** Added a `.gradient-green` radial background. Role updated to *Project Manager & Designer*.
*   **Sandyfeet Reserve:** Added a `.gradient-ocean` radial background. Role updated to *Frontend Developer*. Stack explicitly lists Next.js and Firebase.
*   **Other Experience:** Updated the secondary cards to accurately reflect the Devpost *Build & Beyond* hackathon and a *Confidential Project* (UI/UX Mobile App Prototyping).

### 5. Leadership & Experience (`Leadership.jsx`)
*   Removed the "Community Service" entry to keep the timeline focused on high-impact professional/academic achievements.
*   Updated ELITES entry to reflect 4th-year status.
*   Added the **🏆 3rd Place — HackTheKitty International** win.
*   Updated High School achievements to include Valedictorian, Top 1, and Student Merit Award.
*   Updated Academic Excellence to mention consistent Dean's Lister status.

### 6. Certificates Section [NEW] (`Certificates.jsx`, `Certificates.css`, `App.jsx`)
*   Created a brand new section to showcase professional certifications.
*   Uses a responsive grid of glass-panel cards.
*   Displays a real image preview for the TESDA Digital Marketing certificate.
*   Displays stylized icon-based cards for Cisco CCNA, Endpoint Security, Cybersecurity, Hardware Basics, Udemy Figma UI/UX, and ELITES IT trends.

### 7. Contact Section (`Contact.jsx`, `Contact.css`)
*   Overhauled the contact footer to include a fully functional **"Hire Me" Form**.
*   The form captures Email and Message and uses a `mailto:` link to pre-fill the user's default email client, sending inquiries directly to `justin.delrosario.dev@gmail.com`.
*   Updated the subtitle to express openness to freelance, internships, and full-time roles.

## 🚀 How to Run
1. Ensure dependencies are installed: `npm install`
2. Start the Vite dev server: `npm run dev`
3. View the app at `http://localhost:5173`

*(Note: If you need this context in a future chat, simply attach or paste this file so the AI instantly knows the current state of your portfolio!)*
