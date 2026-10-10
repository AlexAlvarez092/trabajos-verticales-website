# Brief del proyecto — Website Evolution Vertical

> **Estado:** Mezcla de hechos conocidos y supuestos. Los supuestos y preguntas abiertas
> están marcados explícitamente y deben confirmarse con el cliente antes de decidir el stack.
> Última actualización: 2026-10-10.

## 1. Cliente

Evolution Vertical, empresa de **trabajos verticales / multiservicios** (acceso por cuerda) para edificios. Nueva empresa que necesita presencia web.

> El proyecto llega a través de un conocido del cliente; la información inicial se limita a los materiales gráficos en `./resources`.

## 2. Descripción del negocio

Servicios técnicos en altura mediante técnicas de acceso por cuerda (rápel), evitando andamios. La oferta cubre rehabilitación y mantenimiento de fachadas, impermeabilizaciones, reparaciones estructurales menores, instalaciones y sistemas antipalomas. Ver listado completo en `brand-guidelines.md` §7.

## 3. Público objetivo (supuesto a partir del tipo de servicio)

- **Comunidades de propietarios / vecinos.**
- **Administradores de fincas.**
- **Propietarios de edificios y locales.**
- Posiblemente constructoras o empresas de mantenimiento como subcontrata.

> **Supuesto.** No confirmado por el cliente.

## 4. Objetivo del sitio

Objetivo primario (propuesto): **generar contactos / solicitudes de presupuesto** (lead generation) y dar credibilidad profesional a una empresa nueva.

El sitio debe:
- Comunicar qué hace la empresa y qué servicios ofrece.
- Transmitir confianza (seguridad, experiencia, profesionalidad).
- Facilitar el contacto inmediato (llamada / WhatsApp / email / formulario).

> **Supuesto.** Confirmar con el cliente si el objetivo es captar clientes, solo tener presencia, o ambos.

## 5. Alcance

### Dentro del alcance (propuesta inicial)
- Sitio web público e informativo con la estética de marca.
- Presentación de servicios.
- Sección de contacto con llamada directa a la acción.
- Diseño responsive y accesible.

### Fuera del alcance (salvo que el cliente lo pida)
- Tienda online / pagos.
- Área privada o login de clientes.
- Blog o gestor de contenidos (CMS) complejo.
- Reserva de citas online.
- Multidioma.

## 6. Supuestos

1. El contenido será **solo en español**.
2. El negocio opera en España (número de teléfono español `614 ...`).
3. La prioridad del cliente es un sitio sencillo, rápido de publicar y de bajo coste de mantenimiento.
4. El canal preferente de contacto es el teléfono/WhatsApp (muy habitual en este sector).

## 7. Preguntas abiertas (pendientes de confirmar con el cliente)

| # | Pregunta | Impacto |
|---|----------|---------|
| 1 | ¿Qué quiere exactamente: una landing de una página o un sitio multipágina? | Alcance y arquitectura |
| 2 | ¿En qué zona geográfica / provincia trabaja? | SEO local, textos |
| 3 | ¿Quiere formulario de contacto o basta con botones llamar/WhatsApp/email? | Requisitos funcionales, backend |
| 4 | ¿Tiene dominio contratado? ¿Y hosting/preferencia de alojamiento? | Despliegue (ADR) |
| 5 | ¿Dispone de logo en vectorial (SVG) y fotos originales sin texto? | Assets, calidad visual |
| 6 | ¿Tiene redes sociales (Instagram/Facebook) a enlazar? | Enlaces, footer |
| 7 | ¿Año de fundación / años de experiencia reales que podamos afirmar? | Credibilidad, evitar afirmaciones falsas |
| 8 | ¿Dispone de licencias/certificaciones de seguridad en altura a mostrar? | Confianza, cumplimiento |
| 9 | ¿Hay fotos de trabajos reales (antes/después) disponibles? | Galería / portfolio |
| 10 | ¿Presupuesto y plazo para el proyecto? | Planificación |

> **Nota de honestidad:** no inventaremos años de experiencia, número de trabajos realizados, certificaciones ni testimonios. Esos contenidos quedan pendientes de datos reales del cliente.
