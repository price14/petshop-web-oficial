---
name: stitch-design-taste
description: Generates DESIGN.md files for Google Stitch screen generation. Translates frontend engineering directives into semantic design language. Single source of truth for prompting Stitch AI to produce premium, non-generic interfaces.
---

# SKILL: Stitch Design Taste — Semantic Design System

## Purpose

Generate `DESIGN.md` files for Google Stitch screen generation. Translate frontend engineering directives into semantic design language that Stitch's AI agent can use to produce premium, non-generic interfaces.

## Visual Atmosphere Spectrum

Evaluate projects across three dimensions:
- **Density** (1–10): Airy → Cockpit-dense
- **Variance** (1–10): Symmetric → Chaotic
- **Motion** (1–10): Static → Cinematic

Default baseline: **Variance 8, Motion 6, Density 4** — adjust dynamically based on project requirements.

## Color Calibration Constraints

- Maximum **one** accent color with saturation below 80%
- Strictly ban purple/blue neon aesthetics and outer glow effects
- Use absolute neutral bases (Zinc/Slate) with high-contrast singular accents
- Never use pure black (`#000000`) — substitute Off-Black, Zinc-950, or Charcoal
- Shadows must be tinted to background hue, never generic black

## Typography Rules

- **Inter is BANNED** for premium/creative contexts
- Force unique character: Geist, Outfit, Cabinet Grotesk, or Satoshi
- Generic serif fonts prohibited in dashboards
- Modern serifs (Fraunces, Instrument Serif) permitted **only** in editorial contexts
- Dashboard constraint: Sans-serif pairings exclusively
- High-density designs require monospace for all numerals

## Hero Section Standards

- Embed inline contextual images at type-height, acting as visual punctuation
- No overlapping text or images
- Asymmetric layouts when variance exceeds 4
- Centered designs banned when variance > 4
- Maximum **one** primary CTA per hero

## Anti-Patterns (Explicit Bans)

- Emojis
- Inter font
- Pure black
- Neon glows
- 3-column equal card layouts
- Generic placeholder names (John Doe, Jane Smith)
- AI clichés: "Seamless", "Unleash", "Elevate", "Next-Gen", "Game-changer"
- Filler UI text ("Scroll to explore", "Learn more", "Click here")
- Broken image links (use `picsum.photos` for reliable placeholders)

## Layout & Responsive Principles

- CSS Grid preferred over Flexbox
- Avoid percentage-based `calc()` hacks
- Mobile-first: collapse below 768px to single column
- Use `clamp()` for typography scaling
- `min-h-[100dvh]` for full-height sections (never `h-screen`)
- Minimum 44px touch targets on interactive elements

## Motion Philosophy

- Spring physics default: `stiffness: 100, damping: 20`
- Perpetual micro-interactions on active components
- Staggered cascade reveals for lists and grids
- Animate **only** via `transform` and `opacity`
- Remove complex motion on mobile (< 768px)

## Output Format

Generate a structured `DESIGN.md` with these sections:

```markdown
## Visual Theme
[atmosphere, mood, archetype]

## Color Palette
[hex values with functional roles]

## Typography
[font pairings, scale, tracking rules]

## Component Styling
[card styles, button styles, form patterns]

## Layout Principles
[grid system, spacing scale, breakpoints]

## Motion & Interaction
[animation specs, spring values, hover states]

## Anti-Patterns
[project-specific bans]
```

Each section must include precise hex codes, functional roles, and descriptive language — not vague directives.
