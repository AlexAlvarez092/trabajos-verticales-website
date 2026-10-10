# Guía de marca - Evolution Vertical

> **Estado:** Hechos verificados a partir de los materiales gráficos en `./resources`.
> Todo lo recogido aquí procede directamente de las imágenes aportadas por el cliente.
> Última actualización: 2026-10-10.

## 1. Identidad

| Campo            | Valor                                                        |
| ---------------- | ------------------------------------------------------------ |
| Nombre comercial | **Evolution Vertical**                                       |
| Descriptor       | Trabajos Verticales · Multiservicios                         |
| Sector           | Trabajos verticales / acceso por cuerda (rápel) en edificios |

El nombre se compone visualmente en dos líneas: **EVOLUTION** (blanco) sobre **VERTICAL** (verde lima), con el descriptor "TRABAJOS VERTICALES" debajo y, en algunas piezas, "MULTISERVICIOS".

## 2. Logotipo

- **Símbolo:** siluetas de edificios estilizados (rascacielos) junto a la figura de un operario descendiendo en rápel con arnés y casco.
- **Variantes observadas en `./resources`:**
  - Logo sobre fondo negro (horizontal).
  - Versión circular con borde verde lima e iconos de servicios.
  - Cabeceras tipo banner con fotografía de un técnico trabajando en altura.
- **Fondo:** siempre oscuro/negro. El logo está diseñado para fondos oscuros.

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

Ubicados en `./resources/`:

| Archivo                                      | Contenido                                              |
| -------------------------------------------- | ------------------------------------------------------ |
| `44847442-06E6-4761-AC3C-AA3E2AB7C05A.png`   | Banner con logo + foto de técnico + contacto + valores |
| `5ABE1C52-93C3-402F-893E-0B4EBD79960D.png`   | Banner alternativo con foto de técnico y skyline       |
| `9790AB64-2771-4BAD-B20E-F2298BC239D8.png`   | Logo sobre fondo negro + contacto                      |
| `9790AB64-2771-4BAD-B20E-F2298BC239D8-1.png` | Duplicado del anterior                                 |
| `71837CD2-3F94-44D2-8228-EB4C559BF3A9.png`   | Logo circular con iconos de servicios y WhatsApp       |
| `FCAFB9C5-E8AA-4001-AEFB-3959AC4E8913.png`   | Pieza "NUESTROS SERVICIOS" con listado completo        |

> No disponemos de los logos en formato vectorial (SVG/AI) ni de las fotografías originales en alta sin texto superpuesto. **Pendiente de solicitar al cliente.**
