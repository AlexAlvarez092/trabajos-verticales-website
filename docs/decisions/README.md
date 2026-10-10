# Registro de decisiones de arquitectura (ADR)

Esta carpeta guarda las **decisiones significativas** del proyecto y el porqué de cada una.
Un ADR (Architecture Decision Record) es un documento corto e inmutable: una vez aceptado,
no se edita; si una decisión cambia, se crea un ADR nuevo que **sustituye** al anterior.

## ¿Cuándo escribir un ADR?

- Elección de stack tecnológico (framework, lenguaje, librerías).
- Decisión de alojamiento / despliegue.
- Estructura del proyecto o arquitectura de la información.
- Cualquier decisión difícil de revertir o con impacto a largo plazo.

## Convención de nombres

```
NNNN-titulo-en-kebab-case.md
```

Ejemplo: `0001-eleccion-de-stack.md`. La numeración es secuencial y correlativa.

## Plantilla

Copia este esqueleto para cada nuevo ADR:

```markdown
# NNNN. Título de la decisión

- **Estado:** Propuesto | Aceptado | Rechazado | Sustituido por ADR-XXXX
- **Fecha:** AAAA-MM-DD

## Contexto

Qué problema o necesidad motiva la decisión. Restricciones conocidas.

## Decisión

Qué se decide, de forma clara y afirmativa.

## Alternativas consideradas

Opciones evaluadas y por qué se descartaron.

## Consecuencias

Resultados positivos y negativos, compromisos (trade-offs) y qué implica para el futuro.
```

## Índice de decisiones

> Aún no se ha registrado ninguna decisión. Las decisiones de stack y alojamiento
> se tomarán cuando se resuelvan las preguntas abiertas del brief (`../project-brief.md` §7).

| ADR | Título | Estado |
|-----|--------|--------|
| — | — | — |
