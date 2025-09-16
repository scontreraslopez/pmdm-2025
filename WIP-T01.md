# T01-Tecnologías para aplicaciones en dispositivos móviles

# Desarrollo de aplicaciones Móviles – Metodologías de desarrollo

El desarrollo de aplicaciones móviles, como cualquier proyecto de software, sigue una serie de etapas bien definidas. Sin embargo, no existe un único camino; la metodología "elegida" (a veces impuesta) depende del tipo de proyecto, el cliente y la cultura de la empresa.

El desarrollo de aplicaciones móviles, como proyecto de software complejo, comparte las mismas etapas fundamentales que cualquier otro; la diferencia clave reside en la **metodología** que se elige para estructurar y organizar dichas etapas, distinguiendo así los siguientes enfoques:

### Modelo en Cascada (Waterfall)

Es el enfoque tradicional y **secuencial**. Las fases del proyecto (análisis, diseño, desarrollo, pruebas, despliegue) ocurren una detrás de otra, y no se puede avanzar a la siguiente sin haber completado la anterior. Aunque fue un estándar, hoy es poco práctico para el desarrollo móvil por su rigidez y su incapacidad para adaptarse a los cambios rápidos que exige el mercado.

### Reflexión

- ¿Qué problemas identificáis en el modelo en cascada para el desarrollo de una app móvil?
- A pesar de sus inconvenientes, ¿qué ventaja fundamental creéis que podría ofrecer este modelo en la gestión de un proyecto?

### Metodologías Ágiles (Scrum)

Este es el enfoque **iterativo e incremental**, y el estándar de facto en el desarrollo móvil. En lugar de un único gran lanzamiento, el trabajo se divide en ciclos cortos llamados **Sprints** (de 1 a 4 semanas), al final de los cuales se entrega una versión funcional del software. Esto permite lanzar un **Producto Mínimo Viable (MVP)** rápidamente en las tiendas de aplicaciones y mejorarlo continuamente con el feedback real de los usuarios.

Reflexión:

- Si una gran empresa os contrata para desarrollar una app con un presupuesto cerrado, ¿qué conflicto surge al aplicar Agile y cómo lo gestionaríais?
- Si Agile puede parecer un 'cheque en blanco' para el cliente, ¿qué argumentos usaríais para convencerle de sus ventajas frente a la aparente seguridad de un presupuesto cerrado?

- ¿Cómo evita el equipo que el cliente añada funcionalidades sin control en cada sprint, desvirtuando el proyecto y los plazos?
- En Agile, si el alcance es flexible, ¿cómo demostramos al cliente que el proyecto es un éxito y que su inversión está siendo rentable?

### El Híbrido "Scrummerfall" y similares

Este modelo híbrido nace de la colisión entre equipos de desarrollo ágiles y grandes organizaciones cliente con procesos muy rígidos. Combina una fase inicial de análisis y diseño muy definida (propia de Waterfall) con fases de desarrollo y pruebas que se ejecutan en Sprints (al estilo Scrum). Es un escenario muy común en grandes consultoras, y aunque no es "Agile puro", es una realidad pragmática del sector que debéis conocer, ya que es harto probable que lo acabéis viviendo.

Otro híbrido popular es **"Scrumban"**, que mezcla la estructura de roles y reuniones de Scrum con la flexibilidad y el flujo de trabajo continuo de Kanban. En lugar de Sprints con una duración fija, el equipo trabaja sobre un tablero Kanban, moviendo tareas de una columna a otra a medida que se completan. Este enfoque es ideal para proyectos con prioridades muy cambiantes o para equipos que combinan el desarrollo de nuevas funcionalidades con el mantenimiento y la resolución de incidencias urgentes.

Nótese que términos como "**Scrummerfall**" pueden ser peyorativos, pero representan el hecho de que la realidad es tozuda y muchas veces toca acomodar soluciones de compromiso para que el trabajo salga adelante.

Reflexión:

- Viendo que estos modelos no son "ni una cosa ni la otra", ¿qué problemas del mundo real creéis que intentan solucionar los enfoques híbridos?
- Un equipo que intenta trabajar con Sprints (Agile) dentro de una organización que exige un plan cerrado con meses de antelación (Waterfall) puede sufrir mucha frustración. ¿Qué conflictos o tensiones creéis que pueden surgir entre los desarrolladores y la gerencia en un entorno así?

[Android Mobile App Developer Tools](https://developer.android.com/) – Android Developers

## Limitaciones que plantea la ejecución de aplicaciones en dispositivos móviles

Desarrollar para móviles no es como hacerlo para un servidor o un ordenador de sobremesa. El entorno móvil presenta un conjunto único de desafíos que debemos conocer y mitigar desde la primera línea de código. No son meras limitaciones, sino las reglas del juego que definen una aplicación de calidad.

### **1. La Gestión de Recursos: Ser un buen compañero**

A diferencia de un PC, un dispositivo móvil funciona con una **batería limitada** y debe compartir memoria y procesador con muchas otras apps. Los sistemas operativos modernos (iOS y Android) son extremadamente agresivos para preservar esa autonomía, llegando a "matar" procesos en segundo plano que consumen demasiado. Nuestra aplicación debe comportarse como un buen "compañero" del sistema: optimizar el código para minimizar el consumo de CPU, gestionar la memoria de forma eficiente y usar las APIs correctas para tareas en segundo plano.

*Pregunta de reflexión: Piensa en una app que hayas desinstalado porque era lenta o agotaba tu batería. ¿Qué te dice eso sobre la tolerancia del usuario ante un mal rendimiento?*

### **2. La Arquitectura del Procesador: Un Mundo Diferente**

Un ordenador de sobremesa o portátil suele usar procesadores con arquitectura **x86/x64**, basados en un juego de instrucciones complejo (**CISC**). Son como una navaja suiza muy avanzada, capaz de realizar tareas complejas en una sola instrucción. En cambio, los móviles utilizan mayoritariamente la arquitectura **ARM**, basada en un juego de instrucciones reducido (**RISC**), que prioriza la ejecución de muchas instrucciones muy simples y rápidas, optimizando al máximo la **eficiencia energética**.

Aunque como desarrolladores no escribimos directamente en ensamblador, entender esta diferencia es clave. Un código limpio y optimizado, que descompone las tareas en pasos sencillos, se alineará mucho mejor con la filosofía del hardware para el que estamos programando, resultando en una app más fluida y que consume menos batería.

#### **3. La Conectividad Intermitente**

Un móvil está en constante movimiento, pasando de una red Wi-Fi de alta velocidad a 5G, 4G, o a una **desconexión total** al entrar en un túnel. Una aplicación que asume una conexión estable está destinada a fallar, creando una experiencia de usuario frustrante. Por ello, debemos diseñar con una mentalidad **offline-first**: guardar datos en local (caché) para que la app siga siendo funcional sin conexión y sincronizar la información cuando la conexión se restablezca.

*Pregunta de reflexión: ¿Qué esperas que haga una app como Spotify o Google Maps cuando pierdes la cobertura? ¿Cómo impacta en tu experiencia que siga funcionando o que se bloquee por completo?*

### **4. Un Entorno de Alta Vulnerabilidad**

Los móviles son inherentemente más inseguros: se conectan a redes Wi-Fi públicas, el usuario puede instalar apps de orígenes dudosos y el dispositivo físico puede ser robado. La seguridad, por tanto, no es una opción, sino una obligación. Debemos aplicar el **principio de mínimo privilegio** (solicitar solo los permisos estrictamente necesarios) y **cifrar toda la información sensible**, tanto la que se almacena en el dispositivo como la que se transmite por la red, usando siempre HTTPS.

*Pregunta de reflexión: Al instalar una app, ¿sueles revisar la lista de permisos que solicita? ¿Qué te hace desconfiar de una aplicación en este aspecto?*

### **5. El Laberinto de la Fragmentación**

No existe "un" móvil Android; existen miles de modelos con diferentes tamaños de pantalla, resoluciones, procesadores y versiones del sistema operativo. Esta **fragmentación** es un enorme desafío, ya que una interfaz que se ve perfecta en un dispositivo puede estar rota en otro. La solución es crear interfaces de usuario **adaptables (responsive)** que se ajusten a cualquier pantalla y programar de forma defensiva, comprobando siempre la versión del SO antes de usar una función específica y ofreciendo alternativas para las más antiguas.

### **6. La Batalla por la Relevancia**

El espacio en el móvil de un usuario es un terreno muy cotizado y la gente es reacia a instalar nuevas aplicaciones si no ven un valor claro. Nuestra app compite contra la saturación, el consumo de datos de la descarga y el espacio de almacenamiento que ocupará. Por ello, debe ofrecer un **valor añadido innegable** que justifique su instalación frente a una web móvil (p. ej., acceso al hardware, notificaciones avanzadas, mejor rendimiento) y debemos optimizar al máximo su tamaño para que la descarga sea lo más ligera posible.

[Coding conventions | Kotlin Documentation](https://kotlinlang.org/docs/coding-conventions.html) [Android Mobile App Developer Tools](https://developer.android.com/) – Android Developers

### Checklist:

- Java -version
- Git -version
- Gh-version

Hacemos un HelloWorld.kt y lo ejecutamos

### Tabla de Convenciones de Nomenclatura en Kotlin

| Elemento                         | Convención           | Ejemplo                                                           |
|----------------------------------|----------------------|-------------------------------------------------------------------|
| Clases, Interfaces y<br>Archivos | PascalCase           | class UserProfile<br>interface<br>ClickListener<br>UserProfile.kt |
| Funciones y Variables            | camelCase            | fun getUserName()<br>val userAge                                  |
| Constantes (const<br>val)        | SNAKE_CASE_UPPERCASE | const val MAX_RETRIES = 3                                         |

## Tecnologías disponibles

En el desarrollo de aplicaciones móviles, han surgido diversas tecnologías para adaptarse a las necesidades de cada proyecto. Tradicionalmente, los creadores de los sistemas operativos (como Android e iOS) definen un lenguaje y un entorno de desarrollo específicos para su plataforma, lo que se conoce como **desarrollo nativo**. Sin embargo, en los últimos años han ganado popularidad diversos *frameworks* que permiten el **desarrollo multiplataforma**, facilitando la creación de aplicaciones para diferentes sistemas operativos a partir de una base de código compartida.

El siguiente vídeo en los primeros 10 minutos te explica breve y claro las opciones actuales para el desarrollo para dispositivos móviles:

<https://www.youtube.com/watch?v=-pWSQYpkkjk>


---

# Apuntes de Clase: El Ecosistema del Desarrollo Móvil

## 1. Introducción: Los Dos Grandes Paradigmas

En el desarrollo de aplicaciones para dispositivos móviles, nos encontramos ante una decisión fundamental que define la arquitectura, el coste y el rendimiento de nuestro proyecto. Esta decisión se resume en dos grandes enfoques: el **desarrollo nativo** y el **desarrollo multiplataforma**.

El objetivo de esta unidad es comprender las características, ventajas y desventajas de cada uno, para que, como futuros desarrolladores, podáis tomar la decisión más informada para cada proyecto. [cite_start]Este conocimiento es clave para cumplir con el Resultado de Aprendizaje 1 (RA1) de nuestro módulo: **"Aplica tecnologías de desarrollo para dispositivos móviles evaluando sus características y capacidades"**[cite: 98, 267].

---

## 2. Desarrollo de Aplicaciones Nativas

Las aplicaciones nativas son aquellas que se implementan en el lenguaje y con las herramientas específicas que facilita el fabricante de la plataforma. Actualmente, el mercado está dominado por Android (Google) e iOS (Apple).

### **Android 🤖**

* **Lenguajes:** **Kotlin** (recomendado oficialmente) y Java.
* **Entorno de Desarrollo (IDE):** Android Studio.

### **iOS (iPhone) 🍏**

* **Lenguajes:** **Swift** (para las aplicaciones modernas) y Objective-C (en aplicaciones más antiguas).
* **Entorno de Desarrollo (IDE):** Xcode.



En un proyecto nativo, tendremos **dos bases de código completamente separadas**, una para cada sistema operativo. Esto implica que el flujo de trabajo, las versiones y los repositorios en el control de versiones (como Git) se gestionan de manera independiente.

---

## 3. Desarrollo de Aplicaciones Multiplataforma (Híbridas)

Las aplicaciones multiplataforma (a menudo llamadas híbridas en un sentido amplio) son aquellas en las que un **mismo código y lenguaje de programación** puede compilarse para ejecutarse en dos o más plataformas diferentes, buscando un ahorro de tiempo y recursos. En este caso, gestionamos un **único proyecto** para todas las plataformas.


### 3.1. Tipos de Enfoques Multiplataforma

Aunque a veces se agrupan bajo el término "híbrido", existen varias tecnologías con funcionamientos muy distintos:

#### **Aplicaciones Web Responsive (WebApps)**

No son aplicaciones instalables. Se basan en tecnología web estándar (HTML, CSS, JavaScript) y se ejecutan en el navegador del dispositivo. Su diseño *responsive* permite que la interfaz se adapte visualmente al tamaño de la pantalla.

#### **Aplicaciones Híbridas (Basadas en WebView)**

Utilizan tecnologías web (HTML, CSS, JS) para construir la aplicación, pero la empaquetan dentro de un contenedor nativo que la muestra a través de una `WebView`. Una `WebView` es, esencialmente, un navegador sin la barra de direcciones, lo que le da una apariencia de aplicación real.
* **Ejemplos:** **Ionic**, Apache Cordova.

#### **Aplicaciones Web Progresivas (PWA)**

Son la evolución de las WebApps. Aportan muchas de las ventajas de una aplicación nativa (como notificaciones push, funcionamiento sin conexión y la posibilidad de "instalar" un acceso directo en la pantalla de inicio) pero se desarrollan con tecnología web.
* **Ejemplos:** Frameworks como Angular PWA, Vue PWA o la librería React PWA.

[https://www.youtube.com/watch?v=iJteraObjgs](https://www.youtube.com/watch?v=iJteraObjgs)

#### **Aplicaciones Compiladas a Nativo o con Motor Propio**

Son el enfoque más moderno y con mejor rendimiento. El código escrito en un lenguaje se traduce (compila) a componentes nativos de cada plataforma o se renderiza con un motor gráfico propio de alto rendimiento.
* **Ejemplos:**
    * **React Native / Native Script:** Usan JavaScript para controlar componentes de UI nativos.
    * **Xamarin:** Usa C# que se compila a código nativo.
    **Flutter:** Usa Dart y su propio motor gráfico (Skia) para "pintar" la interfaz.

---

## 4. Comparativa de las Tecnologías

Aquí tienes la tabla actualizada con emojis, la unión de coste y tiempo, y la nueva fila sobre la curva de aprendizaje.

### **Comparativa de Tecnologías Móviles**

| Característica 📋 | Aplicaciones Nativas 👑 | Aplicaciones Híbridas/Compiladas 🛠️ | Aplicaciones Web (PWA) 🌐 |
| :--- | :--- | :--- | :--- |
| **Coste y Tiempo 💰⏰** | 🔴 Alto | 🟡 Medio | 🟢 Bajo |
| **Multiplataforma 📱📱**| ❌ No | ✅ Sí | ✅ Sí |
| **Rendimiento 🚀** | ⭐⭐⭐⭐⭐ Alto | ⭐⭐⭐⭐ Medio-Alto | ⭐⭐ Bajo |
| **Distribución (App Stores) 🛍️** | ✅ Sí | ✅ Sí | ❌ No |
| **Acceso al Dispositivo 📸** | ✅ Completo | 👍 Alto/Completo (vía plugins) | 🤏 Parcial |
| **Necesita Conexión 📶** | 😌 No siempre | 😌 No siempre | ⚠️ Generalmente sí |
| **Espacio en Dispositivo 💾** | ✅ Sí | ✅ Sí | ❌ No |
| **Curva de Aprendizaje 🧠** | 🧗 Alta | 🏃 Media | 🚶 Baja |

---

## 5. ¿Qué Estudiaremos en Este Módulo?

Como hemos visto el día de la presentación, el abanico de tecnologías es muy amplio. En este curso, nos centraremos en aprender a desarrollar **aplicaciones nativas para el sistema operativo Android con el lenguaje Kotlin**.



### ¿Por qué Nativo con Kotlin?

1.  **Base Fundamental:** Aprender desarrollo nativo te proporciona los cimientos más sólidos. Entenderás cómo funciona realmente el sistema operativo, la gestión de recursos, el ciclo de vida de una app y las guías de diseño oficiales. Este conocimiento es transferible y muy valioso, incluso si en el futuro decides usar una tecnología multiplataforma.
2.  **Demanda de Mercado:** Sigue habiendo una gran demanda de desarrolladores nativos puros, especialmente para aplicaciones de alto rendimiento y de grandes empresas.
3.  **La Tendencia de Kotlin:** Kotlin no solo es el lenguaje preferido para Android, sino que también es la base de **Kotlin Multiplatform (KMP)**, el nuevo framework con el que Google parece querer unificar el desarrollo multiplataforma. Aprender Kotlin ahora te posicionará perfectamente para el futuro del desarrollo móvil.

    * *Para saber más sobre KMP, puedes ver este vídeo:*
        [https://www.youtube.com/watch?v=Wib6pjJoFzc](https://www.youtube.com/watch?v=Wib6pjJoFzc)
    * *Artículo recomendado:*
        [¿Por qué empezar con Kotlin nativo en lugar de Flutter?](https://devexperto.com/flutter-vs-kotlin/)

### Nuestro Reto: Tiempo Limitado y Alta Complejidad

[cite_start]El temario de este módulo es extenso y el tiempo es limitado (4 horas semanales según el horario oficial [cite: 43, 56]). Aprender un nuevo lenguaje y un framework de desarrollo es un reto incluso para programadores con experiencia. Por tanto, va a requerir un **gran esfuerzo y dedicación** por vuestra parte para alcanzar los objetivos.

### Claves para Superar el Curso: Esfuerzo Diario

Para llevar el curso con éxito, es fundamental:

* **Llevar las tareas al día:** No dejes que se acumulen los conceptos. La programación es acumulativa.
* **Asimilar, no solo hacer:** Realizar una práctica no es suficiente. Debes repasarla después, entender el *porqué* de cada línea de código y preguntar todas tus dudas.
* **Repetir y Repasar:** Revisa las prácticas anteriores hasta que los conceptos se solidifiquen. La repetición es la clave del aprendizaje en programación.