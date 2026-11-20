# Team A notes - 3D developer portfolio personalized for Abderrahmane Erradi

Source template: adrianhajdin/project_3D_developer_portfolio (Vite 4 + React 18 + Three.js /
React Three Fiber + Framer Motion + Tailwind). Cloned with `--depth 1`, `.git` removed.

## How to run

```bash
npm install --legacy-peer-deps   # plain `npm install` fails on a react-tilt peer-dep conflict
npm run dev                      # Vite dev server -> http://localhost:5173
npm run build                    # production build -> dist/   (verified: succeeds)
npm run preview                  # serve dist/
```

Vite version: 4.1.4.

## What was changed

- `index.html` - title "Abderrahmane Erradi | Fullstack Developer", meta description/author/og tags, lang="en".
- `package.json` - name -> `abderrahmane-erradi-portfolio`.
- `src/constants/index.js` - all content: new `profile` export (name, headline, intro, location,
  social URLs), nav links (About / Work / Projects / Contact), 4 service cards, 13 technologies,
  3 experience entries, 3 generic placeholder testimonials, 4 projects with GitHub links.
- `src/assets/index.js` - re-exports for the new assets; template assets removed (company logos,
  carrent/jobit/tripguide screenshots, creator icon, unused tech icons).
- `src/assets/avatar.jpg` + `public/avatar.jpg` - profile photo (used in navbar + og:image).
- `src/assets/logo.svg` + `public/logo.svg` - "AE" monogram (favicon).
- `src/assets/tech/*.svg` - devicon logos downloaded for flutter, dart, laravel, php, vuejs,
  nextjs, mysql, postgresql, python (explicit width/height added so they texture correctly);
  javascript, typescript, tailwind, git, figma, docker PNGs reused from the template.
- `src/assets/company/*.svg` - timeline icons (IPT monogram, freelance mobile, freelance web).
- `src/assets/projects/*.svg` - generated cover cards for the 4 projects (no real screenshots).
- `src/assets/user.svg` - neutral avatar for placeholder testimonials (randomuser.me removed).
- `src/components/Hero.jsx` - name, headline, intro line.
- `src/components/About.jsx` - bio paragraph; card alt text.
- `src/components/Navbar.jsx` - avatar circle + "AE | Abderrahmane Erradi".
- `src/components/Works.jsx` - section id `projects`, copy tweaks, alt text.
- `src/components/Feedbacks.jsx` - heading "What clients say".
- `src/components/Contact.jsx` - EmailJS keys read from env; if any is missing the form shows a
  "coming soon" alert instead of calling EmailJS; template recipient email removed; location line
  and social links added.
- `src/components/SocialLinks.jsx` (new) - GitHub / LinkedIn / Instagram icon links.
- `src/components/Footer.jsx` (new) - name, headline, "Based in Marrakech, Morocco", socials, copyright.
- `src/components/index.js`, `src/App.jsx` - Footer wired in.
- `.env.example` (new) - placeholders for `VITE_APP_EMAILJS_SERVICE_ID / TEMPLATE_ID / PUBLIC_KEY`.
- `README.md` - rewritten (tutorial/promo content removed).

3D scenes (desktop computer, earth, stars, tech balls) are untouched.

## Limitations / notes

- EmailJS is not configured: copy `.env.example` to `.env` and fill the keys to enable the form.
- Testimonials are clearly generic placeholders ("Client", "Product owner", "SaaS / ERP project").
- Project images are generated SVG cards, not real screenshots.
- Tech balls limited to 13 (Dart and PHP dropped, implied by Flutter/Laravel) because each ball is a
  WebGL context and browsers cap around 16 contexts; the 3 scene canvases use the rest.
- `npm run build` warns that the main JS chunk is >500 kB (Three.js); this is inherited from the
  template and is a warning only.
- The template uses `react-tilt` 0.1.4 which needs `--legacy-peer-deps` with React 18.

## Mise à jour (20 nov. 2026) — contenu basé sur le CV

- Site passé en **français**, titre « Développeur Full Stack » (mention Flutter & Laravel retirée).
- Contenu aligné sur `CV_Abderrahmane_Erradi2.pdf` : profil (4+ ans, Laravel / React / React Native / SQL, ERP),
  3 expériences (Integral Progress Technology 2024–, Freelance 2022–2024, EniacIT 2021–2022),
  formation (SupMTI, ISGI-OFPPT, certification, bac), langues.
- Tech balls (13) : Laravel, PHP, JavaScript, React/React Native, HTML5, CSS3, MySQL, SQL Server, Firebase, Git, GitHub, Postman, Linux.
- Projets (6) : ERP Laravel/React, POS & Force de vente, Gestion du transport, Gestion des assurances
  (projets d'entreprise, badge « Projet d'entreprise », pas de lien) + GitSync Hub et Inventory Management (GitHub).
- Section « Témoignages » remplacée par « Formation — Diplômes & certification » + langues (`Feedbacks.jsx`, données `education` / `languages`).
- Email affiché dans Contact et footer : abderahmaneradi99@gmail.com (le téléphone du CV n'est volontairement pas publié).
- Tout le contenu se modifie dans `src/constants/index.js` ; le texte « Aperçu » dans `src/components/About.jsx`.
- Écran de l'ordinateur 3D : la texture `public/desktop_pc/textures/Material.074_30_baseColor.png` (1920x1080, stockée
  retournée verticalement) affiche maintenant le profil LinkedIn (capture dans `../assets/linkedin-profile.jpg`).
  L'original VS Code est sauvegardé dans `../assets/screen-backup/vscode_original.png`. Pour changer l'écran :
  image 16:9 → redimensionner en 1920x1080 → retourner verticalement → écraser ce PNG.
- Section Technologies : les 13 boules 3D (BallCanvas) sont remplacées par une grille de 6 cartes par catégorie
  (Back-end, Front-end, Mobile, Bases de données, Processus métiers, Outils) dans `Tech.jsx`, données `skillGroups`
  dans `constants/index.js`. Même style que les cartes services (bordure dégradée, tilt, reveal). Gain : 13 contextes WebGL en moins.
- Section Technologies (v3) : nuage 3D de logos (`canvas/TechCloud.jsx`) — un seul canvas, sprites sur une sphère de
  Fibonacci autour d'un noyau violet, rotation auto, drag (OrbitControls), survol = zoom + étiquette. Données
  `cloudTechnologies` + `extraSkills` dans `constants/index.js`. Les cartes par catégorie (v2) ont été retirées.
- « Futur ingénieur » mis en avant : badge animé dans le hero (`profile.badge`), titre « Développeur Full Stack · Futur Ingénieur »,
  phrase dans l'Aperçu, badge « En cours » sur la licence SupMTI (`education[0].current`), title/meta de la page.
- Mobile : les 4 cartes services passent en grille 2×2 centrée (`About.jsx`), cartes plus compactes sous 640px.
  Débordement horizontal corrigé : titre du hero réduit à 32px sous 450px (`styles.js`), badge `max-w-full`.
