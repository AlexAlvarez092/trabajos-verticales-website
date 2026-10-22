# Technical Specification — Evolution Vertical Website

## Stack

- **Framework:** Astro. Generates static HTML with zero unnecessary JavaScript, ideal for
  SEO and performance. Native i18n support for the three languages.
- **Styling:** Plain CSS with custom properties (brand tokens from `brand-identity.md`).
  No CSS framework dependency.
- **Output:** Fully static site, deployable to any static host.

## Responsive design

Mobile-first. The site must work correctly on:

- Mobile (primary audience; most traffic expected here)
- Tablet
- Desktop

Fluid layouts, scalable images, and breakpoints covering phone, tablet, and desktop widths.

## SEO

SEO is a priority. Requirements:

- Semantic HTML with a correct heading hierarchy.
- Unique `<title>` and meta description per language.
- Open Graph / social sharing metadata.
- `sitemap.xml` and `robots.txt`.
- `hreflang` tags for the three languages.
- Canonical URLs.
- Structured data (`LocalBusiness` schema) with the business NAP (name, address, phone).
- Fast load times / Core Web Vitals in the green.
- Image `alt` text and descriptive link text.

### Target keywords

Based on services and location (Valencian Community):

- trabajos verticales valencia
- trabajos verticales comunidad valenciana
- rehabilitación de fachadas valencia
- impermeabilización de terrazas valencia
- reparación de fachadas comunidad valenciana
- pintura en altura valencia
- tratamiento de humedades valencia
- trabajos en altura valencia
- limpieza de fachadas valencia
- sistemas antipalomas valencia
- acceso por cuerda valencia
- rope access valencia

## Languages (i18n)

Spanish, Valencian, and English. Language-prefixed routes (`/es/`, `/va/`, `/en/`) with
correct `hreflang` tags.

## Work gallery

The nine client photographs in `assets/pictures/` are WebP files, resized without
upscaling to a maximum 1600px on either side at quality 78. Orientation is applied
before conversion and metadata is stripped, including EXIF, GPS, XMP, IPTC and ICC.
The processed WebP files replace the supplied JPEGs.

`WorkGallery.astro` imports these files in numeric filename order and displays them
immediately above Services. Astro generates responsive 320px, 640px and 960px WebP
variants; images load lazily with explicit dimensions to avoid layout shifts.
Photographs are contained rather than cropped.

The carousel uses native horizontal scrolling and CSS scroll snap, with touch,
keyboard and previous/next controls. It does not autoplay, respects reduced motion,
and remains scrollable without JavaScript. Labels and photo descriptions are
localized in all three languages. When adding a photograph, optimize and strip it
first, then add a matching filename key and accurate description to each locale's
`gallery.photos` array; missing descriptions fail the build.

## Service photographs

Add client-approved real photographs to `src/assets/services/` (create the directory
when adding the first photo). Use one photo per service, named with the service key
below and a lowercase `.jpg`, `.jpeg`, `.png`, `.webp` or `.avif` extension:

| Service | Filename stem |
|---------|---------------|
| Facades and party walls | `facades` |
| Painting at height | `painting` |
| Terrace and roof waterproofing | `waterproofing` |
| Concrete and cracks | `concrete` |
| Damp and leaks | `damp` |
| Air-conditioning pipes | `ac` |
| Light wells and skylights | `courtyards` |
| Roofs | `roofs` |
| Masonry | `masonry` |
| Anti-pigeon systems | `antibird` |
| Facade cleaning | `cleaning` |
| Downpipes | `downpipes` |
| Window and expansion joint sealing | `sealing` |
| Rope access maintenance | `maintenance` |

For example, `src/assets/services/downpipes.jpg` automatically appears in the
downpipe card in all three languages after rebuilding. No component edits are
needed. Use only one extension per key.

Astro optimizes the images, generates 400px and 800px responsive variants and
loads them lazily. Cards crop photos to an 8:5 ratio; choose images whose subject
remains visible in a centred crop. Alternative text uses the localized service
name; review it when adding a photo and add a more specific localized description
if needed. Cards without a supplied photograph keep the original icon layout.
Do not use stock imagery to imply completed company work.

## Analytics

**Cloudflare Web Analytics**: free, cookie-less, no personal data collected. No consent
banner required.
