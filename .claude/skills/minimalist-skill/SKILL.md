---
name: premium-utilitarian-minimalism
description: Premium editorial-style web interfaces that reject generic SaaS trends. Forbidden elements: Inter/Roboto fonts, Lucide icons, heavy Tailwind shadows, bright primary backgrounds, gradients, neon colors, pill containers, emojis. Warm monochrome palettes, curated fonts, crisp 8-12px border-radius, subtle motion only.
---

# SKILL: Premium Utilitarian Minimalism UI

## Core Principles

**Color is a scarce resource, utilized only for semantic meaning or subtle accents.**

**Forbidden Elements:** Inter, Roboto, Arial, Open Sans, Helvetica typefaces; Lucide icons; heavy Tailwind shadows; bright primary backgrounds; gradients; neon colors; pill-shaped containers; emojis.

## Typography

Extreme contrast through curated font stacks:
- **Body:** Geometric sans-serifs like Geist Sans
- **Headings:** Editorial serifs like Lyon Text with tight tracking
- **Technical content:** Monospace fonts

Text must use off-black (`#111111`) rather than pure black.

## Color Strategy

The palette centers on warm monochrome:
- **Backgrounds:** Pure white or bone `#F7F6F3`
- **Borders:** Ultra-light gray `#EAEAEA`
- **Accents:** Highly desaturated pastels for badges and tags only
- **Never** use pure black (`#000000`) or oversaturated accents

Maximum **one** accent color. Saturation below 80%.

## Components

- Bento-grid layouts with crisp 8–12px border-radius
- Solid `#111111` buttons without shadows
- Stripped-down accordions using only `border-bottom` dividers
- Faux-OS window chrome for software mockups
- Cards only when elevation communicates hierarchy — not for decoration

## Motion

Animations prioritize subtlety:
- Fade-in effects via `IntersectionObserver`
- Hover card lifts with minimal shadow shifts
- Staggered list reveals
- All animation must use **`transform` and `opacity` only** to avoid layout thrashing

## Layout

- CSS Grid over Flexbox
- `min-h-[100dvh]` never `h-screen`
- Max-width container ~1200–1440px with auto margins
- Generous whitespace — double spacing before reducing
- Asymmetric layouts when structure allows

## Typography Scale

- Headlines: large with tight tracking (`tracking-tighter`), reduced line-height
- Body: ~65 character max-width, comfortable line-height (1.6–1.8)
- Labels/captions: small, generous tracking, sentence case (not all-caps)
- No `text-wrap: nowrap` on headlines — use `text-wrap: balance`

## Anti-Patterns

- No 3-column equal card layouts
- No centered hero when variance is high
- No carousel testimonials with dots
- No pill badges — use square or flag shapes
- No generic shadows — tint to background hue
- No placeholder text (Lorem Ipsum, John Doe, Acme Corp)
- No AI clichés: "Seamless", "Unleash", "Elevate", "Next-Gen"
