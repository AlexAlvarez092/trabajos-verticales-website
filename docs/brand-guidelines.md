# Guía de marca - Evolution Vertical

> **Estado:** Documento mixto. Combina (a) hechos extraídos de los materiales gráficos
> del cliente en `./resources`, (b) **decisiones de marca del proyecto** ya tomadas
> (paleta canónica, tipografía) y (c) **assets vectoriales** ya producidos. Las secciones
> con decisiones o supuestos están marcadas. Quedan puntos abiertos listados en §11.
> Última actualización: 2026-10-10.

## 1. Identidad

| Campo            | Valor                                                        |
| ---------------- | ------------------------------------------------------------ |
| Nombre comercial | **Evolution Vertical**                                       |
| Descriptor       | Trabajos Verticales · Multiservicios                         |
| Sector           | Trabajos verticales / acceso por cuerda (rápel) en edificios |

El nombre se compone visualmente en dos líneas: **EVOLUTION** (blanco) sobre **VERTICAL** (verde lima), con el descriptor "TRABAJOS VERTICALES" debajo y, en algunas piezas, "MULTISERVICIOS".

## 2. Logotipo

El logotipo es un **símbolo compuesto** (edificios + operario en rápel), sin wordmark.
El nombre de la empresa se resuelve con tipografía en la web/materiales, no forma parte
del logo.

### 2.1 Logo compuesto — asset principal

| Asset | Archivo | Estado |
|-------|---------|--------|
| **Logo compuesto** | `resources/svg/logo.svg` | ✅ Listo |

Composición: el **edificio** (lima) a la izquierda y el **operario en rápel** (blanco) a su
derecha, pegados, sobre la **loma curva** de la base. Posicionamiento definido por el cliente
en Photopea y preservado exacto.

Características técnicas:
- **Paths inline** (no `<image>` ni base64) → ligero y editable.
- **Recoloreable con CSS** mediante `fill="currentColor"`. Ejemplo: `color: #C4F000`.
- **Escalable** sin pérdida: usa `viewBox` sin `width`/`height` fijos.
- Incluye `<title>` para accesibilidad. XML validado.
- Edificio y operario en `<g>` separados → se pueden colorear independientemente.

### 2.2 Componentes sueltos

Los dos elementos del logo también están disponibles por separado:

| Asset | Archivo | Origen |
|-------|---------|--------|
| Edificios | `resources/svg/edificio.svg` | Vectorizado (potrace) del logo real del cliente |
| Operario en rápel | `resources/svg/operario.svg` | Vectorizado (potrace) de la silueta editada por el cliente |

Mismas características: monocromos, `currentColor`, escalables, accesibles.

### 2.3 Fondo

El logo está diseñado para **fondos oscuros/negros**. Sobre fondo claro, al ser
`currentColor` se puede usar en negro/gris oscuro (nunca el lima como relleno sobre
blanco — ver §3.4).

## 3. Paleta de color

> **Metodología:** las imágenes son generadas por IA y el verde lima **no es consistente**
> entre piezas. Se muestrearon los píxeles reales de las 6 imágenes de `./resources` y el
> acento variaba en un rango amplio: de `#B9E210` (más verde) a `#EBFC06` (más amarillo),
> con un promedio de `#CAEF0A`. Como ninguna fuente es canónica, **se define aquí la paleta
> oficial del proyecto**. A partir de ahora estos son los valores de referencia.

### 3.1 Colores de marca

| Rol             | Nombre         | Hex       | Notas                                                                                       |
| --------------- | -------------- | --------- | ------------------------------------------------------------------------------------------- |
| Acento primario | Lima Evolution | `#C4F000` | Valor canónico elegido dentro del rango real medido (equilibrado entre verdoso y amarillo). |
| Fondo principal | Negro          | `#0A0A0A` | Casi negro; evita el `#000` puro para suavizar en pantalla.                                 |
| Texto / inverso | Blanco         | `#FFFFFF` |                                                                                             |

### 3.2 Escala de apoyo (neutros)

| Rol                                       | Hex       |
| ----------------------------------------- | --------- |
| Superficie elevada (tarjetas sobre negro) | `#161616` |
| Borde / divisor sutil                     | `#2A2A2A` |
| Texto secundario sobre negro              | `#B3B3B3` |
| Gris medio                                | `#555555` |

### 3.3 Variantes del lima (para estados de interfaz)

| Rol                                | Hex       |
| ---------------------------------- | --------- |
| Lima hover (ligeramente más claro) | `#D4FF1A` |
| Lima pressed / sombra (más oscuro) | `#A6CC00` |

### 3.4 Reglas de contraste y uso (verificadas WCAG 2.1)

Ratios calculados sobre los colores anteriores:

| Combinación                          | Ratio      | Resultado                |
| ------------------------------------ | ---------- | ------------------------ |
| Lima `#C4F000` sobre negro `#0A0A0A` | **14.9:1** | ✅ AA y AAA              |
| Texto negro sobre botón lima         | **14.9:1** | ✅ AA y AAA              |
| Blanco sobre negro                   | 20:1       | ✅ AAA                   |
| **Lima sobre blanco**                | **1.3:1**  | ❌ **FALLA — prohibido** |

**Reglas obligatorias:**

- El lima se usa sobre **fondo oscuro**, nunca como texto sobre fondo claro.
- Botones lima → **texto siempre en negro** (`#0A0A0A`), nunca blanco.
- El acento verde se reserva para: wordmark "VERTICAL", iconos, líneas/divisores diagonales,
  botones y CTA, y detalles. No usar como color de párrafos largos.
- Elemento gráfico recurrente: **líneas diagonales** en lima sobre negro.

## 4. Tipografía

> Fuentes elegidas en **Google Fonts** (gratuitas, autoalojables, licencia OFL) que reproducen
> el estilo de las imágenes. El material original no incluye las fuentes reales (texto rasterizado por IA).

| Rol                 | Fuente                                                       | Uso                                                                  |
| ------------------- | ------------------------------------------------------------ | -------------------------------------------------------------------- |
| Titulares / display | **Anton** (o _Oswald_ 600–700 como alternativa más versátil) | H1–H2, wordmark, etiquetas. Mayúsculas, condensada, muy pesada.      |
| Subtítulos / UI     | **Oswald**                                                   | H3–H4, botones, navegación.                                          |
| Texto corrido       | **Inter**                                                    | Párrafos, descripciones de servicios, formularios. Alta legibilidad. |

**Pauta de uso:**

- Titulares y etiquetas en **MAYÚSCULAS**, con `letter-spacing` ligero (0.02–0.05em).
- Jerarquía por peso y tamaño; el texto corrido en `Inter` 400/500 para legibilidad.
- Fallback del sistema: `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`.

### 4.1 Tokens (para implementación)

```css
:root {
  /* Marca */
  --color-lima: #c4f000;
  --color-lima-hover: #d4ff1a;
  --color-lima-dark: #a6cc00;
  --color-negro: #0a0a0a;
  --color-blanco: #ffffff;

  /* Neutros */
  --surface-raised: #161616;
  --border-subtle: #2a2a2a;
  --text-secondary: #b3b3b3;
  --gray-500: #555555;

  /* Tipografía */
  --font-display: "Anton", system-ui, sans-serif;
  --font-ui: "Oswald", system-ui, sans-serif;
  --font-body:
    "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
}
```

## 5. Tono visual

Industrial, moderno, enérgico y profesional. Transmite altura, seguridad y técnica. Alto contraste (verde fluorescente sobre negro).

## 6. Valores de marca

Aparecen de forma recurrente en las piezas:

- **Seguridad**
- **Experiencia**
- **Compromiso**
- **Eficacia**

## 7. Servicios (según material gráfico)

Listado tal y como figura en la pieza "NUESTROS SERVICIOS":

- Rehabilitación de fachadas — reparación, saneado y pintura.
- Pintura en altura — fachadas, patios de luces, medianeras, etc.
- Impermeabilización de terrazas y cubiertas — tratamientos y sellado.
- Reparación de hormigón y grietas — forjados, voladizos, cornisas, etc.
- Tratamiento de humedades y filtraciones — eliminación de verdín, moho y filtraciones.
- Instalación y reparación de tubos de aire acondicionado — líneas frigoríficas, desagües, soportes, etc.
- Patios de luces y lucernarios — limpieza, reparación e impermeabilización.
- Cubiertas y tejados — revisión, sellado e impermeabilización.
- Trabajos de albañilería en altura — revestimientos, enfoscados, remates, etc.
- Instalación de sistemas antipalomas — pinchos, mallas, redes, etc.
- Limpieza y mantenimiento de fachadas — eliminación de suciedad, musgo y verdín.

Otras piezas resumen la oferta como: reparaciones de fachadas, impermeabilización de terrazas, patios de luces y lucernarios, comunidades, trabajos en altura.

## 8. Datos de contacto

| Canal               | Valor                                   |
| ------------------- | --------------------------------------- |
| Teléfono / WhatsApp | **614 347 313**                         |
| Email               | **evolutiontejerina.oficial@gmail.com** |

> El número aparece asociado a un icono de WhatsApp en la pieza circular, por lo que se asume disponible por WhatsApp (pendiente de confirmar).

## 9. Assets disponibles

### 9.1 Materiales originales del cliente (`./resources/`)

| Archivo | Contenido |
| --- | --- |
| `44847442-06E6-4761-AC3C-AA3E2AB7C05A.png` | Banner con logo + foto de técnico + contacto + valores |
| `5ABE1C52-93C3-402F-893E-0B4EBD79960D.png` | Banner alternativo con foto de técnico y skyline |
| `9790AB64-2771-4BAD-B20E-F2298BC239D8.png` | Logo sobre fondo negro + contacto |
| `9790AB64-2771-4BAD-B20E-F2298BC239D8-1.png` | Duplicado del anterior |
| `71837CD2-3F94-44D2-8228-EB4C559BF3A9.png` | Logo circular con iconos de servicios y WhatsApp |
| `FCAFB9C5-E8AA-4001-AEFB-3959AC4E8913.png` | Pieza "NUESTROS SERVICIOS" con listado completo |
| `AdobeStock_1974586497.ai` | Ilustración de operario en rápel (Adobe Stock, prueba) |

> Las imágenes `.png` con nombre de hash fueron **generadas por IA** por el cliente; se usan
> solo como referencia de concepto, no como fuente canónica (de ahí la deriva de color, §3).

### 9.2 Assets vectoriales producidos (`./resources/svg/`)

| Archivo | Contenido | Estado |
| --- | --- | --- |
| `logo.svg` | Logo compuesto: edificio + operario en rápel, recoloreable | ✅ Listo |
| `edificio.svg` | Símbolo de edificios (componente suelto), monocromo recoloreable | ✅ Listo |
| `operario.svg` | Operario en rápel (componente suelto), monocromo recoloreable | ✅ Listo |

### 9.3 Pendiente de obtener

- Fotografías originales del cliente en alta, sin texto superpuesto.

## 10. Iconografía

Los servicios y valores se representan con **iconos** (estilo observado en las piezas:
pictogramas sólidos en lima sobre negro, dentro de círculo o sueltos).

> **Pendiente de decidir:** set de iconos a usar en la web (p. ej. una librería open source
> coherente con el estilo, o iconos a medida). Afecta a §7 (servicios) y a los valores (§6).

## 11. Qué falta para completar este documento

Estado de cada bloque y lo que queda por cerrar:

| Sección | Estado | Pendiente |
|---------|--------|-----------|
| 1. Identidad | ✅ Completo | — |
| 2. Logotipo | ✅ Completo | Logo compuesto (edificio + operario) terminado y recoloreable. |
| 3. Color | ✅ Completo | — (paleta canónica fijada y verificada WCAG). |
| 4. Tipografía | 🟡 Casi | Confirmar **pesos exactos** a autoalojar y añadir los archivos de fuente al repo. |
| 5. Tono visual | ✅ Completo | — |
| 6. Valores | ✅ Completo | — |
| 7. Servicios | ✅ Completo | — |
| 8. Contacto | 🟡 Casi | **Confirmar con el cliente** que WhatsApp está activo en el 614 347 313. |
| 9. Assets | 🟡 Casi | Falta solo fotos reales en alta del cliente. |
| 10. Iconografía | 🔴 Abierto | Elegir set de iconos. |

### Preguntas abiertas específicas de marca (para el cliente)

1. ¿Existe un **manual de marca** o valores de color oficiales previos? (Confirmaría o
   corregiría el lima canónico `#C4F000`.)
2. ¿Hay **logo en vectorial original** (AI/SVG/EPS) de quien le hizo la imagen gráfica?
3. ¿El descriptor oficial es "Trabajos Verticales" a secas o "…· Multiservicios"?
4. ¿WhatsApp activo en el número de contacto?
5. ¿Fotografías reales de trabajos y del equipo, en alta resolución?
6. ¿Logo pensado para usarse **solo sobre negro**, o también necesitará versión sobre
   fondo claro? (Determina si producimos variante monocroma en negro.)

> Cuando se resuelvan estas preguntas, el documento quedará cerrado. Las decisiones de
> implementación (stack, iconos) que excedan la marca se registrarán como ADR en
> `docs/decisions/`.
