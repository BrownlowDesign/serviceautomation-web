# Design System — Service Automation

## Color Palette

| Token    | Hex       | Usage                              |
|----------|-----------|------------------------------------|
| `--bg`   | `#F5F2EC` | Page background (warm cream)       |
| `--ink`  | `#1A1A18` | Primary text, buttons, dark blocks |
| `--muted`| `#6B6459` | Secondary text, labels             |
| `--faint`| `#9A9080` | Placeholders, subtle text          |
| `--rule` | `#E8E4DC` | Borders, dividers                  |

### Extended Palette

| Color     | Hex       | Context                          |
|-----------|-----------|----------------------------------|
| Card bg   | `#FDFAF6` | Form inputs, pricing cards       |
| Hover ink | `#2C2C28` | Button/CTA hover state           |
| Footer bg | `#1A1A18` | Same as `--ink`                  |
| Gold      | `#C9A96E` | Value page accent (math labels)  |
| Cream alt | `#EDE9E1` | Inverted button hover (on dark)  |

## Typography

| Property       | Value                                           |
|----------------|-------------------------------------------------|
| Font family    | Inter (variable), system-ui fallback            |
| Body size      | 15–17px                                         |
| Body weight    | 400                                             |
| Line height    | 1.6 (body), 1.05–1.15 (headings)               |
| Antialiasing   | `-webkit-font-smoothing: antialiased`           |

### Type Scale

| Element       | Size                             | Weight | Letter-spacing |
|---------------|----------------------------------|--------|----------------|
| H1 (hero)     | `clamp(2.5rem, 5.5vw, 4.5rem)` | 900    | -0.035em       |
| H2 (section)  | `clamp(1.5rem, 2.8vw, 2.25rem)`| 800    | -0.025em       |
| Eyebrow       | 11px                             | 500–600| 0.08–0.1em     |
| Body (section)| 17px                             | 400    | —              |
| Nav link      | 15px                             | 400    | —              |
| Small/labels  | 13–14px                          | 400–600| —              |
| Stat number   | 28px                             | 800    | -0.03em        |

## Spacing & Layout

| Token      | Value                         | Usage                   |
|------------|-------------------------------|-------------------------|
| `--gutter` | `clamp(24px, 5.5vw, 80px)`   | Page side padding       |
| `--max`    | `1440px`                      | Max content width       |
| Section    | `72px` top/bottom padding     | Content sections        |
| Hero       | `72px` top, `56px` bottom     | Hero area               |
| Gap (nav)  | `32px`                        | Between nav links       |
| Gap (form) | `10px`                        | Between form fields     |

## Components

### Navigation
- Sticky header with 68px height
- Logo left, links center, CTA right
- Dropdown panel: 240px min-width, 8px radius, subtle shadow
- CTA button: `--ink` bg, 6px radius, 14px font, 600 weight

### Buttons / CTAs
- Primary: `--ink` background, `--bg` text, 7px radius, 600 weight
- Primary hover: `#2C2C28`
- Inverted (on dark): `--bg` background, `--ink` text
- Inverted hover: `#EDE9E1`
- Padding: 14px 28px (hero), 13px 24px (footer), 14px full-width (form)

### Cards (Pricing)
- Grid of 3, 12px border-radius on container
- Card padding: 40px 36px 48px
- Standard: `#FDFAF6` background
- Featured: `--ink` background with inverted colors
- Separated by 1px `--rule` border

### Form Inputs
- 13px 16px padding, 7px radius
- `#FDFAF6` background, `--rule` border
- Focus: border transitions to `--ink`
- Placeholder color: `--faint`

### Stats Strip
- Horizontal flex, divided by `--rule` borders
- Number: 28px/800 weight
- Label: 13px `--muted`

### FAQ
- `<details>` elements, 680px max-width
- Summary: 17px/600 weight
- Answer: 16px, `--muted` color
- Separated by `--rule` bottom borders

### Footer
- Full-width `--ink` background
- 4-column grid: brand (2fr), products (1.2fr), company (1fr), legal (1fr)
- Links: 14px, `#9A9080` → white on hover
- Column headings: 11px uppercase, 0.1em spacing
- Bottom bar: `#2C2C28` top border

## Responsive Breakpoints

| Breakpoint | Changes                                           |
|------------|---------------------------------------------------|
| ≤ 900px    | Pricing grid → single column                      |
| ≤ 768px    | Nav links hidden, stats 2-col wrap, footer 2-col  |
| ≤ 640px    | About intro stacks, value taglines stack           |
| ≤ 480px    | Footer → single column                            |

## Design Principles

1. **Editorial feel** — Large type, generous whitespace, minimal decoration
2. **Warm neutrals** — Cream base avoids sterile white; dark ink feels grounded
3. **Border-driven structure** — Sections divided by `--rule` lines, not background changes
4. **No icons or illustrations** — Typography and spacing do the heavy lifting
5. **Dark sections for emphasis** — CTA blocks and footer use inverted `--ink` backgrounds
