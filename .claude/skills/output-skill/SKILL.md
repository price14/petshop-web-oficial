---
name: full-output-enforcement
description: Enforces complete, production-ready outputs without truncation or placeholders. Treat every task as production-critical. A partial output is a broken output. Bans all code shortcuts (TODO, ..., etc.) and prose filler.
---

# SKILL: Full Output Enforcement

## Core Principle

**Treat every task as production-critical. A partial output is a broken output.**

## Key Prohibitions

### Code shortcuts — never use:
- `// ...`
- `// rest of the code`
- `// TODO`
- `/* ... */`
- Bare ellipses (`...`) as placeholders
- `// implementation here`
- `// similar to above`

### Prose filler — never use:
- "I can provide more details if needed"
- "The rest follows the same pattern"
- "And so on..."
- "Similar logic applies to..."
- "You can add the remaining..."

## Delivery Method

1. Identify total expected deliverables upfront
2. Generate each one fully and completely
3. Cross-check against the original request before responding

## For Long Outputs

Stop at a natural breakpoint rather than compressing content. Use a pause marker indicating progress ("X of Y complete") and resume cleanly on request without repetition.

## Verification Checklist

Before finalizing, confirm:
- No banned patterns exist in the output
- All requested items are complete
- Code is runnable (not descriptive or pseudocode)
- Nothing was shortened for brevity
- All imports exist in the project dependencies
- All referenced functions/components are actually defined

## Priority

Completeness always takes priority over space efficiency.
