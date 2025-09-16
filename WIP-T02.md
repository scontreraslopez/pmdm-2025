# T02-Introducción a Kotlin

## Crash Course para Alumnos de Java

### Introducción

Kotlin apareció oficialmente en 2016, aunque su desarrollo comenzó en 2011. Este lenguaje fue creado por JetBrains, la empresa detrás del popular IDE IntelliJ IDEA, con un objetivo claro: evolucionar Java manteniendo su compatibilidad.



Los expertos de JetBrains se propusieron crear un lenguaje que aprovechara los 30 años de aprendizaje de Java, corrigiendo sus limitaciones y añadiendo características modernas que los desarrolladores necesitan hoy.

![Línea temporal de Kotlin](img/T02/linea_temporal_kotlin.png)

La adopción de Kotlin por parte de Google marcó un punto de inflexión. Esto significa que las características más novedosas y potentes de Android se desarrollan primero en Kotlin, haciendo casi imprescindible su aprendizaje para desarrolladores móviles.

**¿Qué gusta tanto de Kotlin?**:

- Interoperabilidad Total: Funciona perfectamente con código Java existente. Puedes migrar gradualmente sin reescribir todo tu proyecto.

- Misma JVM: Utiliza la Java Virtual Machine, aprovechando toda la infraestructura y librerías del ecosistema Java.

- Sintaxis Moderna: Código más conciso y legible que Java, con características que mejoran la productividad del desarrollador.

Recurso adicional: [Primeros pasos con Kotlin by MoureDev](https://www.youtube.com/watch?v=T3ugOYTRF7c)

**¿Qué IDE se recomienda para Kotlin?**:

- IntelliJ IDEA: El IDE por excelencia para Kotlin. Creado por los mismos desarrolladores del lenguaje, ofrece el mejor soporte y características avanzadas.

- Android Studio: Versión especializada de IntelliJ para desarrollo Android. Incluye todas las herramientas necesarias para crear aplicaciones móviles. ⭐ -> Nuestra elección en este módulo.

- Visual Studio Code: Opción ligera con la extensión de Kotlin. Perfecto para pruebas rápidas y desarrollo básico.

### **1. La función `main()`**

En **Java**, estamos acostumbrados a la verbosidad de una clase solo para empezar:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hola desde Java");
    }
}
```

En **Kotlin**, la entrada es mucho más directa. Es una función de nivel superior (no necesita una clase que la contenga), lo que reduce el código "boilerplate" o repetitivo.

```kotlin
fun main() {
    println("¡Hola desde Kotlin!")
}
```

Esta filosofía es troncal al lenguaje Kotlin, que busca ser **conciso y pragmático**. Menos código para hacer lo mismo significa menos errores y más legibilidad. En general a la gente que viene de Java le encanta este enfoque.

-----

#### **2. Sacando información por pantalla: `print()` y `println()`**

De nuevo, la simpleza es la clave. En Java imprimíamos por pantalla usando `System.out.println()`. Esto son tres niveles de jerarquía para algo tan básico como mostrar texto. Clase `System`, objeto `out` (salida estándar), método `println()`.

  * En **Kotlin**, las funciones `print()` y `println()` están disponibles directamente.
  * `println()` añade un salto de línea al final, mientras que `print()` no lo hace.

```kotlin
fun main() {
    print("Esto es una línea.")
    print(" Y esto sigue en la misma línea.")
    println() // Salto de línea explícito
    println("Esto aparece en una nueva línea.")
    println("Y esto en otra.")
}
```

En Kotlin, estas funciones forman parte de la librería estándar de Kotlin, que se importa por defecto en todos los ficheros `.kt`. Por eso nos ahorramos escribir `System.out...` cada vez. Sin duda una lección aprendida de esos 30 años de Java.

![Meme: aprendiendo a depurar con console.log](https://devs.lol/uploads/2021/11/meme-dev-humor-learning-how-to-debug-code-with-console-log-44.jpg)

-----

#### **3. Nomenclatura: `Naming Conventions`**

Normalmente el tema de la nomenclatura se pasa demasiado por alto, pero desde la experiencia personal en el lado de proyecto, es lo primero que miro para saber si me puedo esperar un código profesional y mantenible o un circo de los horrores. Si la gente no ha sido capaz de seguir unas simples convenciones de nombres, ¿cómo voy a confiar en que su código es sólido y bien estructurado? Lo mismo sucede con las faltas de ortografía en la UI, de cara confiar en la rigurosidad de las pruebas y la calidad del software, pero eso es otro tema.

Aquí puedes tranquilizarles: las convenciones son prácticamente idénticas a las de Java, lo que facilita la transición.

  * **Clases e Interfaces:** `PascalCase` (ej. `MiClaseAdaptadora`).
  * **Funciones y Variables:** `camelCase` (ej. `miVariable`, `calcularTotal()`).
  * **Constantes:** `SNAKE_CASE` en mayúsculas (ej. `const val MAX_INTENTOS = 3`).
  * **Diferencia clave con Java ‼️:** En Kotlin, el nombre del paquete (ej. `package com.ies.proyecto`) **no tiene por qué coincidir con la estructura de directorios**. Aunque es una buena práctica mantener la coherencia, no es una imposición del compilador como en Java. Normalmente de esto se encarga el IDE automáticamente, pero no está de más mencionarlo.

-----

### Variables y Tipos de Datos: La magia de Kotlin

#### **4. Manejo de Strings: Más allá de Java**

Aquí es donde Kotlin empieza a brillar de verdad para los que vienen de Java. Esta parte era un dolor de muelas en Java y Kotlin lo hace mucho más sencillo e intuitivo, similar a las string templates de JavaScript o Python.

  * **Strings Multilínea:** En Java, crear un string multilínea es engorroso (`"línea1\n" + "línea2"`). En Kotlin, se usan las triples comillas `"""`.

    ```kotlin
    // Ideal para JSON, SQL, o cualquier texto largo
    val miJson = """
    {
        "usuario": "Juan",
        "activo": true
    }
    """
    println(miJson)
    ```

  * **String Templates (Plantillas de Strings):** Mientras que en Java se concatena con `+` o se usa `String.format()`, Kotlin lo integra de forma nativa con el símbolo `$`.

    ```kotlin
    val nombre = "Ana"
    val edad = 28
    // En Java: String saludo = "Hola, me llamo " + nombre + " y tengo " + edad + " años.";
    // En Kotlin:
    val saludo = "Hola, me llamo $nombre y tengo $edad años."
    println(saludo)
    // Para expresiones más complejas, se usan llaves
    println("El año que viene, ${nombre} tendrá ${edad + 1} años.")
    ```

-----

#### **5. Mutabilidad: `val` vs. `var`**

Este es un cambio de paradigma fundamental respecto a Java.

  * `val` (de *value*): Se usa para declarar variables **inmutables** (solo lectura). Es el análogo al `final` de Java. Una vez asignado un valor, no se puede reasignar.
  * `var` (de *variable*): Se usa para variables **mutables**, cuyo valor puede cambiar.

<!-- end list -->

```kotlin
val nombreCompleto = "Carlos " // No se puede reasignar, pero el objeto al que apunta podría ser mutable.
var edadActual = 22
// nombreCompleto = "Luis" // Error de compilación: Val cannot be reassigned
edadActual = 23 // Correcto
```

En la medida de lo posible utilizar `val` como buena práctica para prevenir errores. Si intentamos reasignar un `val`, el compilador nos avisará inmediatamente.

-----

#### **6. Inferencia de Tipos vs. Tipado Estático**

Este es un tema que merece un poco más de atención porque hay importantes diferencias entre los lenguajes de programación. Si bien en este curso nos centraremos en Kotlin, y el campo de la informática suele recompensar más a los especalistas sobre los generalistas, no es raro que a lo largo de vuestra carrera profesional os toque trabajar con distintos lenguajes, frameworks y paradigmas (ya sabéis... adaptarse o morir).

[Popularidad de los lenguajes de programación](https://www.youtube.com/watch?v=ZTPrbAKmcdo)

##### 📌 Tipado dinámico vs. estático

- **Dinámico** → El tipo se asocia al valor y se comprueba **en tiempo de ejecución**. Una variable puede cambiar de tipo durante la ejecución.  
  Ej.: Python:  
  ```python
  x = 5       # int
  x = "hola"  # str 
  ```
- **Estático** → El tipo se asocia a la variable y se comprueba **en tiempo de compilación**. Una variable no puede cambiar de tipo en compilación. No puedes reasignar un tipo distinto.  
  Ej.: Kotlin / Java:  
  ```kotlin
  var x: Int = 5
  x = "hola" // ❌ Error de compilación
  ```

---

##### 📌 Tipado fuerte vs. débil

- **Fuerte** → No permite mezclar tipos incompatibles sin conversión explícita.  
  Ej.: Python y Kotlin:  
  ```python
  5 + "7"  # ❌ TypeError
  ```
- **Débil** → Hace conversiones implícitas para que la operación funcione.  
  Ej.: JavaScript:  
  ```javascript
  5 + "7" // "57" (convierte implícitamente el número a string)
  ```

El caso de JavaScript es paradigmático con la de comportamientos inesperados. Midudev hace frecuentemente tests en instagram sobre esto y son complicados si no estas muy en el mindset de JavaScript.

---

## 🔍 Cuadro resumen
| Lenguaje  | Dinámico/Estático | Fuerte/Débil | ¿Inferencia de tipos? |
|-----------|-------------------|--------------|-----------------------|
| **Python** | Dinámico          | **Fuerte** | Sí (a partir del valor asignado) |
| **Kotlin** | Estático          | Fuerte       | Sí (muy potente con `val`/`var`) |
| **Java**   | Estático          | Fuerte       | Sí, desde Java 10 con `var` (antes no) |

Ojo que todavía mucho code legacy de Java es de Java 8 o anterior, donde no existía `var` y la inferencia de tipos era muy limitada.

```kotlin
// Inferencia de tipos (el compilador sabe que son String e Int)
val mensaje = "Bienvenida a PMDM"
var anno = 2025

// Tipado explícito (a veces necesario o preferible por claridad)
val notaFinal: Double = 9.5
var profesor: String = "Profesor Coach"
```

Insistir que la inferencia de tipos no hace que Kotlin sea "débilmente tipado" como Python o JavaScript. El tipo sigue estando ahí, es inmutable y se comprueba en compilación, lo que nos da la seguridad de Java con la verbosidad reducida de un lenguaje de scripting.

