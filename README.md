**TowardBetter Announcement — Static Demonstration Site**

This repository contains a static announcement/landing page built to demonstrate design and frontend engineering skills. It's not a full product backend — it's a polished, component-driven static site showing what I can deliver: layout, responsive UI, animations, forms, and small serverless routes for demo purposes.

**What This Is**
- **Purpose:** A static marketing/announcement page intended as a demonstration of frontend craft and product thinking.
- **Stack:** Next.js (App Router), TypeScript, Tailwind CSS, modular React components, and a small set of serverless API routes for demo form/email flows.
- **Static-first:** The site is built to be exported/deployed as a static site or hosted on serverless platforms (Vercel, Netlify). There is no production database — all dynamic examples are self-contained and demo-focused.

**Highlights / Features**
- **Design & Layout:** Clean, responsive landing layout with a hero, features, FAQ, and CTA sections.
- **Component Library:** Reusable components in the `components/` folder (cards, forms, buttons, dialogs, inputs).
- **Interactions & Accessibility:** Keyboard accessible UI, lightbox, parallax image, and subtle animations for an engaging experience.
- **Forms & Demo API:** Email/Signup forms wired to demo serverless routes under `app/api/` to show end-to-end flow without a full backend.
- **Content Modules:** Central content and copy live in the `site/` folder for easy editing and reuse.

**Project Structure (short)**
- `app/` — Next.js app entry, global layout, and top-level routes.
- `components/` — UI components organized by purpose (containers, forms, ui primitives).
- `site/` — Content modules (features, faqs, media, pitch deck data).
- `styles/` — Tailwind config and global styles.
- `public/` — Static images and assets.

**Run locally**
1. Install dependencies:

	`npm install`

2. Run development server:

	`npm run dev`

3. Build for production:

	`npm run build`

4. Start the production server (if needed):

	`npm run start`

Notes: This project uses Next.js and is intended to be previewed locally or deployed to a static/serverless host. If you want a fully static export, you can use hosting options that support Next.js static output or run an export process depending on your preferred hosting provider.

**Editing & Extending**
- Update copy and structured content in the `site/` folder.
- Add or modify components in `components/` and styles in `styles/`.
- Serverless demo endpoints live in `app/api/` — they are lightweight examples and can be replaced with real APIs if you connect a backend.

**Deployment**
- Recommended: Deploy to Vercel for best compatibility with Next.js app and serverless functions.
- Alternatives: Netlify or other static hosts (may require build/export configuration).

**Why this repo**
This project exists to show a complete, polished static announcement page that you can use as a starting point or a live portfolio sample. It demonstrates:
- Frontend engineering with modern React/Next.js patterns
- Component-driven UI and design consistency
- Attention to accessibility, responsive design, and micro-interactions
- Practical demo of connecting forms to serverless endpoints

**Contact / Attribution**
If you'd like to discuss this project, request changes, or see more work, reach out to the author directly (contact details in my portfolio). This repository is a demonstration and may be updated periodically to reflect new experiments and UI ideas.

---
_Project: TowardBetter-Announcement-Page_

