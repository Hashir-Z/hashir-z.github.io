<!-- baa58acb-f308-4d1b-80a0-648392c74f0b f89250fa-ff19-4bae-b8d8-07ce1af5389d -->
# Portfolio Implementation Plan

## Sections & Routing

1. **Project setup**  

- Scaffold a Next.js app in `Portfolio 2025 CMU/` (likely `app/` router) with Tailwind or CSS modules matching palette (#11172a, #626c7d, #599692).  
- Configure global styles (fonts, base colors) and import shared components (TextType, LiquidEther, ProfileCard, SpotlightCard, LogoLoop, CountUp).

2. **Hero / Intro screen**  

- Full-height section containing `LiquidEther` background and overlay text stack using `TextType` for a rotating greeting (e.g., "Booting HashirOS...", "Deploying creative code", "Hey, I'm Hashir Bin Zahid") plus CTA.  
- Display profile card (ProfileCard component) alongside typed intro, ensuring responsive layout.

3. **Experience & Certifications**  

- Build data-driven sections fed from `data/content.ts`.  
- Certifications grid (6 items) rendered via cards using SpotlightCard for interactivity; include issuer, year, key tech.  
- Experience cards for Infodat, Data Annotations, UserTesting; highlight roles, durations, bullet highlights.

4. **Projects & Research**  

- Split into Personal Projects and Research Projects categories.  
- Each project card uses SpotlightCard with tech badges + one-line summary, plus `Learn more` button linking to dynamic route `/projects/[slug]`.  
- For Half-Life Alyx FakeVR Mod, include `CountUp` component to show player metrics/statistic per design.  
- Implement detail pages (at least placeholders) with hero, gallery/text.

5. **Tech Stack & Contact**  

- Insert LogoLoop section showcasing core tools (React, Next.js, TypeScript, Tailwind CSS).  
- Provide alternative dataset for company logos if needed, with responsive container.  
- Add a dedicated contact section/page with CTA buttons linking to `hashir2k@yahoo.com` and resume (`https://docs.google.com/document/d/1OBOplwiRCuMMoevqYHKO-hHrqKwLBQ7P`).

6. **Responsive styling & accessibility**  

- Ensure sections adapt down to mobile breakpoints, align color scheme, and include focus states/aria labels for interactive cards.  
- Verify hero, cards, loops, and contact CTA degrade gracefully on touch devices.

## Implementation Todos

- setup-app: Initialize Next.js project, dependencies, base theme.
- hero-section: Implement LiquidEther + TextType hero with ProfileCard overlay.
- experiences-certifications: Build data layer and spotlight cards for certifications & experience.
- projects-research: Implement project cards, dynamic routes, CountUp metric usage.
- logo-loop: Add LogoLoop tech marquee section.
- responsive-pass: Polish responsive styles and accessibility.