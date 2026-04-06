---
name: design-taste-frontend
description: Core design taste system for frontend engineering. Corrects LLM statistical biases toward generic UI. Three configurable dials: DESIGN_VARIANCE, MOTION_INTENSITY, VISUAL_DENSITY. React/Next.js + Tailwind. Bans Inter, emojis, AI purple/blue, and 3-column card layouts.
---

# SKILL: Design Taste Frontend

## Core Configuration Framework

The system establishes three primary design dials:
- **DESIGN_VARIANCE** (1–10): Controls layout predictability, from symmetrical (1–3) through offset patterns (4–7) to asymmetric masonry (8–10)
- **MOTION_INTENSITY** (1–10): Ranges from static CSS-only interactions to advanced Framer Motion choreography
- **VISUAL_DENSITY** (1–10): Spans from gallery-like spaciousness through standard app spacing to cockpit-dense data layouts

Default baseline is **(8, 6, 4)**, but these values must adapt dynamically based on explicit user requests.

## Mandatory Technical Constraints

**Dependency verification** is non-negotiable: before importing any third-party library, check `package.json` or output installation commands. The architecture defaults to React/Next.js with Server Components, isolating interactivity in dedicated Client Components to prevent prop-drilling complexity.

Styling uses Tailwind CSS (v3/v4) with version-specific syntax enforcement. A critical viewport stability rule mandates `min-h-[100dvh]` instead of `h-screen` to prevent mobile layout collapse. CSS Grid replaces flexbox percentage math for reliable responsive structures.

**Emojis are completely banned.** Replace all symbolic content with high-quality icon libraries (Phosphor, Radix).

## Anti-LLM Bias Corrections

The system directly counters statistical LLM tendencies:

1. **Typography:** Headlines default to `text-4xl md:text-6xl tracking-tighter`. Fonts like Inter are prohibited; use Geist, Outfit, or Cabinet Grotesk instead. Serif fonts are strictly forbidden in dashboard UIs.

2. **Color:** Maximum one accent color with saturation below 80%. The "AI Purple/Blue" aesthetic is explicitly banned. Use neutral bases (Zinc/Slate) with singular, high-contrast accents.

3. **Layout:** Centered hero sections are prohibited when variance exceeds 4. Force split-screen, left-aligned, or asymmetric white-space structures instead.

4. **Materiality:** Generic card overuse is banned for high-density interfaces. Use logical grouping via borders or negative space; cards only when elevation serves hierarchy.

5. **Interaction states:** Complete cycles are mandatory—loading skeletons, empty states, errors, and tactile feedback (e.g., `-translate-y-[1px]` on active).

6. **Forms:** Labels sit above inputs; helper text is optional; error text sits below.

## Motion & Performance Philosophy

When motion intensity exceeds 5, implement "Liquid Glass" (inner borders with subtle inner shadows) and magnetic micro-physics exclusively via Framer Motion's `useMotionValue` and `useTransform` outside render cycles.

**Critical performance rule:** Never animate `top`, `left`, `width`, or `height` — animate exclusively via `transform` and `opacity`. All perpetual animations must live in isolated, memoized Client Components. Grain filters belong only in fixed, pointer-event-none pseudo-elements.

Staggered orchestration uses either Framer's `staggerChildren` or CSS cascade delays. For async data, pass it as props into a centralized Motion wrapper.

## Forbidden AI Patterns

Strictly avoid:
- Neon outer glows or pure black (`#000000`)
- Oversaturated accents or excessive gradient text
- Generic names ("John Doe") or placeholder avatars
- Predictable percentages (`99.99%`) or "startup slop" brand names ("Nexus", "SmartFlow")
- Broken Unsplash links (use reliable placeholders like `picsum.photos`)
- 3-column card feature rows (use zig-zag, asymmetric grids, or horizontal scrolling)
- Custom mouse cursors or serif fonts in dashboards

## Advanced Inspiration Library

The system references high-end patterns: Bento grids, masonry layouts, parallax tilt cards, spotlight borders, glassmorphism, sticky scroll stacks, horizontal scroll hijacks, dome galleries, coverflow carousels, kinetic marquees, text mask reveals, particle explosions, liquid pull-to-refresh, mesh gradients, and animated SVG line drawing.

For scrolltelling or 3D work, use GSAP (ScrollTrigger) or Three.js in isolated components — never mix with Framer Motion in the same tree.

## The Bento 2.0 Paradigm

Modern SaaS dashboards use:
- **Background:** `#f9fafb`; cards in white with 1px `border-slate-200/50` borders
- **Radii:** `rounded-[2.5rem]` on major containers
- **Shadows:** Diffusion shadows like `shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]`
- **Typography:** Geist/Satoshi with tight tracking
- **Padding:** Generous `p-8` or `p-10`
- **Spring physics:** `stiffness: 100, damping: 20` for all interactive elements

Every card requires perpetual micro-interactions: infinite loops (Pulse, Typewriter, Float, Carousel) ensuring the interface feels alive. Five archetypal cards define this pattern: Intelligent List, Command Input, Live Status, Wide Data Stream, and Contextual UI (Focus Mode).

## Pre-Flight Validation Checklist

Before output:
- Verify global state necessity (prop-drilling avoidance, not arbitrary use)
- Confirm mobile layout collapse for high-variance designs
- Validate `min-h-[100dvh]` usage instead of `h-screen`
- Ensure `useEffect` animations include cleanup functions
- Provide empty, loading, and error states
- Omit cards where spacing suffices
- Isolate CPU-heavy perpetual animations in dedicated Client Components
