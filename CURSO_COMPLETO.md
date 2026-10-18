# Curso autoguiado: desarrollo de software

**Cómo se avanza:** por capacidad demostrada, no por calendario.

Las horas de cada módulo son **orientativas y opcionales**. Sirven para dimensionar el esfuerzo, no para medir avance. Puedes tomar tres meses o tres años: el único requisito es poder pasar las puertas.

---

## Reglas del curso

**1. Las puertas son obligatorias, el tiempo no.** No avanzas al módulo siguiente hasta poder hacer lo que dice la puerta. Puedes repetir un módulo las veces que necesites.

**2. Todo es gratuito.** Solo recursos libres. Si un módulo te pide pagar, hay alternativa o el módulo está mal diseñado.

**3. El proyecto es acumulativo y único.** Desde el módulo 3 hasta el 12 trabajas sobre **un solo problema real**, no en ejercicios sueltos. Es la parte más importante del curso y la que más se abandona.

**4. El idioma de trabajo es el inglés.** Leer documentación en inglés no es opcional en este oficio. Cada módulo incluye vocabulario. No como Materia: como herramienta.

**5. Se aprende a(Projecto) con cliente real, no con ejercicios.** Nadie aprende a desarrollar software resolviéndole un problema a alguien. Eso empieza en el módulo 3 y dura hasta el final.

**6. Lo que no sabes, búscalo.** Un curso autoguiado no puede enseñarte lo que no previó. Buscar documentación es parte del curso, no una falla.

---

## Mapa general

```
M0 Método  ─┐
M1 Lógica  ─┤
M2 Programación base ─┤
M3 HTML/CSS  ──→──┐
M4 JavaScript  ──┤  ←──────── PROYECTO REAL (empieza aquí, termina al final)
M5 Git       ──┤              un solo sistema, un cliente, construido
M6 SQL/BD    ──┤              módulo a módulo
M7 POO       ──┤
M8 Requisitos y UML ─┤
M9 Backend/API  ──┤
M10 Publicar  ──┤
M11 Probar   ──┘
```

**Concentración de esfuerzo:** ~75 % del curso está en los módulos 1–4 y 9. Los demás son cortos comparados con esos.

---

## M0 · Método (2 h orientativas)

**Qué sales sabiendo hacer**
- Buscar en internet técnico de forma efectiva.
- Leer documentación en inglés aunque sea lenta.
- Usar la IA como herramienta y no como sustituto de entender.
- Explicar en voz alta qué es lo que estás intentando hacer.

**Contenido mínimo**
Cuadro de flujo,破解 de un problema, lectura de mensajes de error, uso de buscador técnico, cuándo preguntar.

**Puerta de salida**
✅ Escribes un programa mínimo en cualquier lenguaje que imprima algo, y **logras hacerlo siguiendo una documentación oficial en inglés sin ayuda**. Ya sabes lo esencial del método.

**Recursos**
- Cómo leer documentación: cualquier README de GitHub.
- `https://docs.github.com/es` (español, oficial).

---

## M1 · Lógica y algoritmos (el bloque más importante)

**Qué sales sabiendo hacer**
- Descomponer un problema en pasos.
- Escribir pseudocódigo antes de programar.
- Detectar el error de lógica que hace que tu programa no haga lo que querías.

**Contenido mínimo**
Variables y tipos · operadores · condicionales · ciclos · funciones · arreglos · descomposición · diagramas de flujo · corrección de errores de razonamiento.

**Contenido opcional** (si lo quieres fuerte)
Recursión · operadores lógicos y booleanos · nociones de teoría de conjuntos aplicadas.

**Puerta de salida**
✅ Resuelves **10 problemas de lógica distintos** en pseudocódigo, y **traduces 5 de ellos a código que corre**. No importa qué lenguaje. La descomposición es lo que se evalúa.

**Recursos**
- Khan Academy — *Programación y desarrollo de algoritmos*. Course.
- freeCodeCamp — *Scientific Computing with Python* (los primeros bloques) o *Algorithms and Data Structures*. Curso.
- CS50 (Harvard) — Seminario 0, gratis en YouTube.
- *Pensar como programador* (Allen Downey) — libro libre, cap. 0–2.

> ⚠️ **No te saltes este módulo.** Es el que más se salta y el que no se recupera. Todo lo que sigue se apoya aquí.

---

## M2 · Fundamentos de programación

**Qué sales sabiendo hacer**
- Escribir un programa completo de principio a fin.
- Guardarlo y volver a abrirlo sin perder nada.
- Interpretar el resultado que te da cuando lo ejecutas.

**Contenido mínimo**
Variables · estructuras de control · funciones · archivos · bibliotecas. En **un solo lenguaje**: elige Python o JavaScript y quédate ahí hasta M4.

**Puerta de salida**
✅ Tienes **3 programas propios** que corren: uno que calcula, uno que repite una tarea y uno que recibe datos del usuario y hace algo con ellos. Código guardado en un archivo, no en un bloc de notas temporal.

**Recursos**
- freeCodeCamp — *Responsive Web Design Certification*.
- freeCodeCamp — *JavaScript Algorithms and Data Structures*.
- Automate the Boring Stuff (gratis en línea).
- python.org / javascript.info

---

## M3 · HTML y CSS — y el proyecto arranca

**Qué sales sabiendo hacer**
- Poner una página en internet y que se vea en un navegador real.
- Publicar y **enviarle el enlace a alguien**.

**Contenido mínimo**
HTML semántico · CSS básico ·盒 modelo de caja · flexbox · formularios · un poco de accesibilidad (etiquetas, contraste).

**Contenido opcional**
CSS grid · variables CSS · diseño responsive · nociones de GitHub Pages.

**Proyecto**
Define en una frase el problema que vas a resolver y **busca quién lo tiene.** No loLEVEL inventado. Pregunta a alguien: una tienda, un consultorio, una association, la biblioteca, un"Sure, teacher."

**Puerta de salida**
✅ Tienes **una página publicada en un enlace real y mandada a alguien**. Y tienes el nombre del cliente y su problema escrito en una frase.

**Recursos**
- MDN Web Docs — la referencia oficial, gratis y en español.
- web.dev (Google, gratis).
- freeCodeCamp — *Responsive Web Design*.

> **Este es el momento más importante del curso.** Publicar algo y que alguien lo vea es el mejor motivador que existe. No lo aplaces.

---

## M4 · JavaScript — el módulo más pesado

**Qué sales sabiendo hacer**
- Que la página **reaccione**: clics, formularios, cambios de contenido sin recargar.
- Traer datos de otro lado y mostrarlos.
- Guardar información en el navegador.

**Contenido mínimo**
Variables · funciones · arreglos y objetos · condicionales y ciclos · DOM · eventos · fetch/API · JSON · almacenamiento local · manejo de errores.

**Contenido opcional**
Programación asíncrona (async/await) · módulos · destructuring · pruebas básicas · un framework.

**Puerta de salida**
✅ Tu página **responde a la información de tu cliente**: toma lo que él necesita, lo muestra y lo guarda. No es un ejercicio: es una primera versión funcional de su problema.

**Recursos**
- javascript.info — completo, gratuito, en español. **El mejor recurso que existe para esto.**
- MDN — referencia.
- Eloquent JavaScript (gratis en línea, disponible en español).
- freeCodeCamp.

> Este módulo concentra el mayor esfuerzo del curso. Si tomas tiempo, tómalo aquí. Está bien.

---

## M5 · Git y GitHub

**Qué sales sabiendo hacer**
- Guardar versiones de tu código y volver a una anterior.
- Compartir tu proyecto con alguien más.
- Demostrar tu trabajo.

**Contenido mínimo**
repositorio · commit · rama · merge · `.gitignore` · pull request · issues.

**Puerta de salida**
✅ Tu proyecto está en un repositorio **público**, con al menos **20 commits** con mensajes que expliquen qué cambió. Esto se ve hoy mismo en tu portafolio.

**Recursos**
- *Pro Git* — libro libre, **traducido al español**, gratuito.
- `https://git-scm.com/book/es/v2`
- GitHub Skills — `skills.github.com` (gratis, con ejercicios).

---

## M6 · Bases de datos y SQL

**Qué sales sabiendo hacer**
- Guardar datos de forma estructurada y relacionarlos.
- Consultarlos.
- Decidir qué información va en la base de datos y qué no.

**Contenido mínimo**
Modelo relacional · tablas · claves primarias y foráneas · `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `JOIN` · normalización hasta 3FN · índices básicos.

**Contenido opcional**
Modelos NoSQL · índices y optimización · transacciones · NoSQL/documentales.

**Puerta de salida**
✅ Los datos de tu cliente **están en una base de datos real**, con sus relaciones, y puedes responder preguntas sobre ellos con consultas SQL. Si tu proyecto necesita guardar pocos datos, justifica por qué no usas base de datos.

**Recursos**
- SQLBolt — interactivo, gratis, muy claro.
- W3Schools SQL.
- https://www.postgresql.org/docs/ (oficial).

---

## M7 · Programación orientada a objetos

**Qué sales sabiendo hacer**
- Modelar tu sistema como objetos con responsabilidades claras.
- Reutilizar código en vez de copiarlo.

**Contenido mínimo**
Clases y objetos · atributos y métodos · herencia · composición · encapsulamiento · interfaces · principios SOLID (conociéndolos, sin adorarlos).

**Puerta de salida**
✅ **Tu diagrama de clases describe el código que escribiste**, y el código sigue esa estructura. Si el diagrama y el código no coinciden, rehaz uno de los dos.

**Recursos**
- freeCodeCamp — *Object Oriented Programming*.
- Wikipedia en español: los principios SOLID.
- Diagramas: draw.io (gratis) o PlantUML.

---

## M8 · Requisitos y modelado

**Qué sales sabiendo hacer**
- Convertir lo que tu cliente pide en algo que se pueda construir.
- Mostrar cómo va a funcionar **antes** de programarlo.

**Contenido mínimo**
Entrevista y levantamiento de requisitos · historias de usuario · criterios de aceptación · diagramas de casos de uso, de clases y de secuencia · distinción entre lo que pidió y lo que realmente necesita.

**Contenido opcional**
Diagramas de estados, de despliegue y de paquetes · UML completo · priorización.

**Puerta de salida**
✅ Tienes un **documento de requisitos de tu cliente** y **al menos 3 diagramas** (casos de uso, clases, secuencia) que describen lo que vas a construir. Tu cliente los leyó y dijo que sí.

**Recursos**
- Wikipedia en español: UML, cada tipo de diagrama.
- draw.io — gratis, en el navegador.
- PlantUML — diagramas desde texto.

> Módulo despreciado y el que más falla después. Si haces todo lo demás y esto queda por fuera, el sistema va a quedar con problemas que no vas a poder arreglar.

---

## M9 · Backend y API

**Qué sales sabiendo hacer**
- Que la interfaz y los datos se conecten de verdad.
- Exponer y consumir datos entre sistemas.

**Contenido mínimo**
Un framework backend (elige uno: **Django**, **Express**, o **Spring**) · rutas · controladores · conexión con base de datos · autenticación básica · API REST y JSON.

**Contenido opcional**
Despliegue del backend · variables de entorno · manejo de sesiones · documentación de la API.

**Puerta de salida**
✅ **Tu sistema está integrado de extremo a extremo**: el cliente usa la interfaz, la interfaz llama al backend, el backend guarda y lee de la base de datos. No es un maqueta.

**Recursos**
- Documentación oficial de tu framework (obligatoria, en inglés).
- Django Girls Guide (tutorial de Django).
- roadmaps.sh — rutas por framework.

---

## M10 · Publicar

**Qué sales sabiendo hacer**
- Poner el sistema en un servidor real donde cualquiera lo use.
- Configurar el dominio.

**Contenido mínimo**
Un servicio de hosting (Railway, Render, PythonAnywhere, Vercel) · variables de entorno · despliegue continuo básico.

**Contenido opcional**
Contenedores (Docker) · CI/CD · servidor propio.

**Puerta de salida**
✅ **Tu cliente puede usar el sistema desde una URL pública** y te dio su visto bueno por escrito (un correo basta).

**Recursos**
- La documentación de tu proveedor de hosting.
- freeCodeCamp — *Relational Database*, sección despliegue.

---

## M11 · Probar

**Qué sales sabiendo hacer**
- Comprobar que lo que hiciste funciona antes de entregarlo.
- Encontrar los errores que tú no encuentras.

**Contenido mínimo**
Pruebas manuales · escribir casos de prueba · seguir errores · documentar un defecto · pruebas exploratorias · pruebas de usuario con el cliente.

**Contenido opcional**
Pruebas automatizadas · pruebas unitarias · cobertura · planes de prueba formales.

**Puerta de salida**
✅ **Tienes un documento con los casos de prueba que ejecutaste y qué encontraste**, incluidos los errores que el cliente reportó. Y un usuario real lo probó antes que tú.

**Recursos**
- w3schools manual testing.
- La documentación de testing de tu framework.

---

## M12 · Proyecto real — corre en paralelo, cierra al final

No es un módulo con contenido. Es el hilo que une todo.

**Dónde empieza:** en M3, cuando consigues el cliente.
**Dónde termina:** en M11, cuando el sistema está publicado y probado.

### El proyecto

Un problema real de una persona real de Lorica, resuelto hasta el final y en manos de esa persona.

**Puede ser pequeño.** Una ferretería que lleva el inventario en cuaderno. Una asociación que registra asistencia. Un restaurante que repite los mismos pedidos por WhatsApp. Un consultorio que pierde expedientes. La biblioteca municipal.

**No puede ser un ejercicio de libro.** Y no puede ser la idea loca de un estudiante de 17 años. Tiene que ser algo que alguien **ya está무리end hoy**.

### Cómo avanza con los módulos

| Módulo | Qué le entregas al cliente |
|---|---|
| M3 | Una frase: qué le duele |
| M6 | Dónde viven sus datos |
| M8 | Qué vas a construir, con diagramas, y él lo aprueba |
| M9 | Una versión que funciona |
| M10 | La URL |
| M11 | Los errores que encontramos y se arreglaron |

### Al final, cuatro cosas

1. **Sistema funcionando en producción**, en manos del cliente.
2. **Repositorio público** con el código y la documentación.
3. **Documento de mantenimiento**: qué hace, cómo instalarlo, qué cambiar si falla.
4. **Un párrafo de lo que no pudiste terminar.** Con honestidad. Eso también es parte del trabajo.

### Datos y clientes reales

Tu cliente es una persona real con datos reales. **Ley 1581 de 2012.**

- Pídele **autorización por escrito** para usar sus datos. Un correo basta.
- Datos de prueba siempre que puedas.
- **Nunca cédulas, nunca datos de salud, nunca datos de menores.**
- Borrado de datos cuando termina el proyecto, si él lo pide.

Si esto se descuida, el proyecto es un problema legal, no un proyecto.

---

## Qué hacer si se te atascó

Es la parte más difícil del curso y de la que nadie habla. Cuando eso pase, en este orden:

1. **Quítate el proyecto.** El error siempre se ve mejor después de descansar.
2. **Divide el error.** Un error en el navegador es un error. Un error en el código es otro.
3. **Reproduce el error aislado.** Un ejemplo mínimo que falla.
4. **Léelo completo**, incluyendo la primera línea y la última.
5. **Escribe tu versión.** Explicar el problema en voz alta lo ordena.
6. **Pregunta bien**: "qué espero / qué obtuve / qué ya probé". Ese formato funciona.
7. **Si no funciona**, vuelve al módulo anterior. Casi siempre el error está donde no duele.

**Un curso autoguiado no tiene quién te diga cuándo te estás equivocando.** Por eso la puerta de salida de cada módulo es un entregable, no un examen: el trabajo te lo muestra.

---

## Lo que este curso no da

- **Un título.** Si necesitas certificado, este curso no lo emite.
- **Acompañamiento.** Nadie te va a revisar el código.
- **Experiencia con usuarios difíciles.** Te toca a ti.
- **Red de contactos.** Sigue siendo lo que más pesa en el mercado.

---

## Resumen

| Módulo | Puerta de salida |
|---|---|
| M0 | Programa siguiendo documentación en inglés |
| M1 | 10 problemas en pseudocódigo, 5 traducidos a código |
| M2 | 3 programas propios que corren |
| M3 | Página publicada y enviada a alguien + cliente real |
| M4 | La interfaz responde y guarda datos del cliente |
| M5 | Repositorio público con 20 commits |
| M6 | Datos del cliente en base de datos, consultas que funcionan |
| M7 | Diagrama de clases que coincide con el código |
| M8 | Requisitos y 3 diagramas aprobados por el cliente |
| M9 | Sistema integrado de extremo a extremo |
| M10 | URL pública y visto bueno del cliente por escrito |
| M11 | Casos de prueba ejecutados y errores documentados |
| M12 | Sistema en manos del cliente + repo + documentación |

---

## Nota sobre el origen de este diseño

Este curso **no es la malla de ningún programa**. No proviene de ADSO, ni de un tecnólogo, ni de media técnica.

Las competencias técnicas que hoy existen en esos programas dicen **qué debe poder hacer** alguien, pero no dicen **qué hay que estudiar** para poder hacerlo, y no cubren ni la base lógica, ni el frontend, ni el proyecto con cliente real — las tres cosas que sostienen un aprendizaje autodidacta.

Por eso este curso invierte el punto de partida: primero las puertas de salida, después el contenido. Un módulo solo se enseña si sirve para pasar su puerta.

Si vienes de una media técnica o de un ADSO, este curso te va a exigir **empezar de nuevo en M1**. No es una wasted: es la base que a esos programas les falta explicitar.