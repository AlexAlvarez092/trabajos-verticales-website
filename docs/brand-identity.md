# Brand Identity — Evolution Vertical

Central document for the visual identity of **Evolution Vertical** (vertical works /
rope access).

## Logos

The vector assets are in `assets/`.

| Asset | File | viewBox | Content |
|-------|------|---------|---------|
| Main logo | `assets/logo.svg` | `0 0 1600 926` | Full scene: buildings + technician descending on rope (rope access) over the curved ground line. |
| Building (standalone) | `assets/building.svg` | `0 0 883 449` | Buildings symbol only, with the cut-out vertical gaps and the ground line. |

### Technical characteristics

Both SVGs share the same properties:

- **Vector** (paths): scalable to any size without loss of quality.
- **Recolorable via CSS**: they use `fill="currentColor"`, inheriting the value of the CSS
  `color` property. Example:
  ```css
  .logo { color: #000; }       /* logo in black */
  .logo:hover { color: #fff; } /* or any color */
  ```
- **No fixed `width`/`height`**: they scale to the container size while keeping their
  aspect ratio (via `viewBox`).
- They include `<title>` for accessibility.
- Monochrome (a single ink per asset).

## Typography

The brand typeface is **Montserrat**.

| Use | Weight | Notes |
|-----|--------|-------|
| Company name | ExtraBold (800) | Uppercase |
| Headings (H1–H2) | Bold (700) | |
| Subheadings (H3–H4) | SemiBold (600) | |
| Emphasized / highlighted text | SemiBold (600) | Within paragraphs |
| Body text | Regular (400) | |
| Secondary text / captions | Medium (500) | |
| Buttons and action links | SemiBold (600) | Uppercase optional |

## Colors

| Color | Hex | Use |
|-------|-----|-----|
| Black | `#0E0E10` | Main background |
| White | `#F5F5F2` | Text and light surfaces |
| Lime green | `#B4D73A` | Accent color |
| Dark lime green | `#8FAE2B` | Button hover/pressed |
| Gray | `#2A2C30` | Subtle background details |
