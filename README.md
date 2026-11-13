# Phoenix Rise Home Improvement & Roofing — Preview Website

Preview website for **Phoenix Rise Home Improvement & Roofing** (2810 Louetta
Road #4, Spring, TX 77388), built as a client preview: the business reviews
the site and tells us what to fix or add, then decides whether to make it
theirs.

- **Stack:** Next.js 15 (App Router, static export) + React 19 + Tailwind CSS 3
- **Deploy:** Vercel (git route, same pattern as the Smiles Dental Care preview)
- **Design:** mobile-first, following the patterns of the top roofing sites
  (Zarla / Comrade roundups: tap-to-call header, free-inspection hero,
  proof strip, service cards, storm + insurance-claims flow, reviews, service
  area, booking form) and the structure of the Smiles v3 preview.

## Content

- Business facts (address, phones, hours, owner Jesse C. Puente Jr., BBB
  Awards for Excellence 2021 & 2023, services) are from the company's real
  BBB profile and review sites (checked 2026-11-13).
- Standard roofing-website content (full services, storm claims, FAQs,
  service areas, how-it-works) was added at the owner's request and is
  covered by the disclaimer banner on the site — the business corrects
  anything wrong.
- Reviews are clearly-labeled paraphrases of real Revdex reviews. No star
  rating is shown (the Revdex aggregate is broken); the BBB award is the
  proof point instead.
- Photography: Unsplash (generic stock, visually verified — no competitor
  photos, no fake portraits of the owner).

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export in out/
```
