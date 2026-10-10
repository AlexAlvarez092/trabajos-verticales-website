# Requisitos — Website Evolution Vertical

> **Estado:** Propuesta inicial. Algunos requisitos dependen de las preguntas abiertas
> del brief (`project-brief.md` §7) y están marcados como **(a confirmar)**.
> Última actualización: 2026-10-10.

## Convenciones

- **MUST** = imprescindible · **SHOULD** = recomendable · **MAY** = opcional.

## 1. Requisitos funcionales

| ID | Prioridad | Requisito |
|----|-----------|-----------|
| RF-01 | MUST | Mostrar la identidad de marca: logo, nombre y descriptor. |
| RF-02 | MUST | Sección de servicios con el listado de `brand-guidelines.md` §7, con iconos. |
| RF-03 | MUST | Mostrar los datos de contacto: teléfono, WhatsApp y email. |
| RF-04 | MUST | Botón/enlace de **llamada directa** (`tel:`) funcional en móvil. |
| RF-05 | MUST | Botón/enlace de **WhatsApp** (`wa.me`) con el número de la empresa. |
| RF-06 | MUST | Botón/enlace de **email** (`mailto:`). |
| RF-07 | SHOULD | Sección "sobre nosotros" / propuesta de valor (Seguridad, Experiencia, Compromiso, Eficacia). |
| RF-08 | SHOULD | Llamada a la acción (CTA) visible para pedir presupuesto. |
| RF-09 | MAY | Formulario de contacto para solicitar presupuesto. **(a confirmar — requiere backend/servicio de envío)** |
| RF-10 | MAY | Galería de trabajos realizados (antes/después). **(a confirmar — requiere fotos reales)** |
| RF-11 | MAY | Enlaces a redes sociales. **(a confirmar — ¿existen?)** |
| RF-12 | MAY | Botón flotante de WhatsApp persistente. |

## 2. Requisitos no funcionales

| ID | Prioridad | Requisito |
|----|-----------|-----------|
| RNF-01 | MUST | **Responsive**: correcto en móvil, tablet y escritorio. Mobile-first (el público llegará mayoritariamente desde el móvil). |
| RNF-02 | MUST | **Accesibilidad**: cumplir WCAG 2.1 nivel AA (contraste, foco visible, alt en imágenes, HTML semántico, navegación por teclado). Vigilar el contraste del verde lima sobre blanco. |
| RNF-03 | MUST | **Rendimiento**: carga rápida; imágenes optimizadas; objetivo Core Web Vitals en verde. |
| RNF-04 | MUST | **SEO básico**: títulos, meta description, Open Graph, encabezados jerárquicos, `sitemap` y `robots`. |
| RNF-05 | SHOULD | **SEO local**: datos de negocio (NAP) y marcado estructurado `LocalBusiness` (schema.org). **(depende de zona geográfica — ver brief)** |
| RNF-06 | MUST | **Idioma**: español (`lang="es"`). |
| RNF-07 | SHOULD | Compatibilidad con navegadores modernos (últimas 2 versiones de Chrome, Firefox, Safari, Edge). |
| RNF-08 | SHOULD | Fidelidad a la **guía de marca** (`brand-guidelines.md`): paleta negro/verde/blanco y estética industrial. |
| RNF-09 | SHOULD | Mantenimiento sencillo y bajo coste de alojamiento. |
| RNF-10 | MUST | Cumplimiento legal mínimo si hay recogida de datos: aviso legal, política de privacidad y cookies. **(obligatorio si se añade formulario — RF-09)** |

## 3. Contenido pendiente de aportar por el cliente

Para completar el sitio sin inventar información (ver nota de honestidad en el brief):

- Textos reales de "sobre nosotros" y años de experiencia.
- Zona geográfica de servicio.
- Fotos de trabajos reales y/o del equipo.
- Logo vectorial (SVG) y assets en alta.
- Datos legales (razón social, NIF) si se requiere aviso legal.
- Certificaciones de seguridad en altura, si las hay.

## 4. Criterios de aceptación (alto nivel)

- El sitio se ve y funciona correctamente en un móvil real.
- Teléfono, WhatsApp y email abren la acción correspondiente desde el dispositivo.
- Todos los servicios del material gráfico están representados.
- Contraste y navegación por teclado verificados (AA).
- Lighthouse: rendimiento, accesibilidad, buenas prácticas y SEO en rango objetivo (a definir en el ADR de stack).
