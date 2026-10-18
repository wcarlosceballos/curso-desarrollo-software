# Curso autoguiado de desarrollo de software

Sitio: pendiente de publicar en GitHub Pages.

## Qué es

Un curso de desarrollo de software **sin horario y sin horas obligatorias**. El avance
se decide por **puertas de salida**: evidencia concreta que demuestra que entendiste.
Puedes tomar tres meses o tres años.

**13 módulos (12 + el proyecto real).** El proyecto arranca en M3 —cuando consigues
un cliente con un problema real— y termina en M12, cuando el sistema está en manos de
esa persona.

Todo es gratuito y no hay que comprar nada en el camino.

## Por qué existe así

El curso nació de revisar dos programas reales:

- **ADSO** — Tecnólogo en Análisis y Desarrollo de Software, SENA. Resolución MEN 14215,
  83 créditos, 3.984 horas, código SENA 228118, SNIES 110731.
- **Media Técnica en Programación de Software** — SENA, código 228120, articulada con
  instituciones de educación media bajo el Acuerdo 9 de 2024.

Los dos tienen competencias bien construidas: un ciclo de vida completo y coherente. Lo
que **no** tienen, y es lo que este curso resuelve:

| Falta en ambos | Dónde está aquí |
|---|---|
| Lógica y algoritmos — la base de todo | M1, y es el módulo que más se salta |
| Frontend (HTML, CSS, JavaScript) | M3 y M4 |
| Un problema real, con alguien real | M14, obligatorio |
| Depurar código | M1, M4, y la página de atascos |
| Accesibilidad | M12 |
| Seguridad web — contraseñas, inyección, secretos | M13 |

Las competencias de esos programas dicen **qué debe poder hacer** alguien, pero no
dicen **qué hay que estudiar** para poder hacerlo, y no cubren ni la base lógica ni el
frontend ni el proyecto con cliente. Ese es el hueco que este curso llena.

## Estructura

```
ova/
├── index.html          ruta, progreso y "continuar donde quedaste"
├── diagnostico.html    5 preguntas que fijan el punto de entrada
├── modulo0/ … modulo13/   los 14 módulos con su puerta de salida
├── proyecto.html       M12 · el proyecto real, con campos que se guardan
├── atascos.html        qué hacer cuando te bloqueas
├── resultados.html     recorrido, insignias y exportación del progreso
├── js/
│   ├── storage.js      progreso en localStorage, 13 puertas
│   ├── progress.js     barra de progreso y estado del menú lateral
│   └── gate.js         el botón de "puerta superada" y el checklist
└── css/style.css
```

## Las 15 puertas

| | Módulo | Puerta de salida |
|---|---|---|
| M0 | Método | Programa siguiendo documentación en inglés |
| M1 | Lógica y algoritmos | 10 problemas en pseudocódigo, 5 traducidos a código |
| M2 | Programación base | 3 programas propios que corren |
| M3 | HTML y CSS | Página publicada y enviada a alguien + cliente real |
| M4 | JavaScript | La interfaz responde y guarda datos del cliente |
| M5 | Git y GitHub | Repositorio público con 20 commits |
| M6 | Bases de datos y SQL | Datos del cliente en base de datos, consultas que funcionan |
| M7 | Programación a objetos | Diagrama de clases que coincide con el código |
| M8 | Requisitos y UML | 3 diagramas aprobados por el cliente |
| M9 | Backend y API | Sistema integrado de extremo a extremo |
| M10 | Publicar | URL pública y visto bueno por escrito |
| M11 | Probar | Casos de prueba ejecutados y errores documentados |
| M12 | Accesibilidad | Se opera sin ratón + auditoría con herramientas + una persona real lo probó |
| M13 | Seguridad web | Contraseñas hasheadas, consultas parametrizadas, secretos fuera del repo |
| M14 | Proyecto real | Sistema en manos del cliente + repo + documentación |

## Arquitectura

**Sin build.** HTML, CSS y JS planos. No hay `npm install`, ni bundler, ni generador.
Editar un `.md` no cambia el sitio: hay que editar el HTML de `ova/` a mano.

**Sin registro.** El progreso va en `localStorage`, así que funciona sin internet. Eso
también significa que **si borras los datos del navegador, pierde el registro** — por eso
`resultados.html` tiene un botón para copiarlo.

## Lo que este curso NO da

- **Un título.** Si necesitas certificado, aquí no lo emiten.
- **Acompañamiento.** Nadie revisa el código.
- **Experiencia con usuarios difíciles.**
- **Red de contactos.** Sigue siendo lo que más pesa en el mercado.

Está escrito en la portada y en `resultados.html`, a propósito.

---

Basado en la revisión de los programas **ADSO** (SENA, Resolución MEN 14215 de 2021) y
**Media Técnica en Programación de Software** (SENA, código 228120).