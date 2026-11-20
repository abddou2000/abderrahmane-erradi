# Abderrahmane Erradi - Portfolio

Personal portfolio of Abderrahmane Erradi, Fullstack Developer (Flutter & Laravel) based in Marrakech, Morocco.

Built with React, Vite, Three.js / React Three Fiber, Framer Motion and Tailwind CSS.

## Run locally

```bash
npm install --legacy-peer-deps
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build
```

## Contact form

The contact form uses EmailJS. Copy `.env.example` to `.env` and fill in the three
`VITE_APP_EMAILJS_*` values. Until they are set, submitting the form shows a
"coming soon" message instead of sending an email.

## Content

All text content (profile, services, technologies, experience, projects, testimonials)
lives in `src/constants/index.js`. Images are in `src/assets/`.
