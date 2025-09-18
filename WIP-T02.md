# T02-Introducción a Kotlin

## Crash Course para Alumnos de Java

### Introducción

Kotlin apareció oficialmente en 2016, aunque su desarrollo comenzó en 2011. Este lenguaje fue creado por JetBrains, la empresa detrás del popular IDE IntelliJ IDEA, con un objetivo claro: evolucionar Java manteniendo su compatibilidad.

<p style="display: flex; align-items: center; gap: 10px;">
  <img src="https://tse4.mm.bing.net/th/id/OIP.xs72iGxv6vU2w23bxIIgZQHaGL?rs=1&pid=ImgDetMain&o=7&rm=3" alt="JetBrains" style="width:80px; height:80px; object-fit:cover;">
  <img src="https://th.bing.com/th/id/R.98865e06d77faca32b3e118df119049e?rik=AU0%2bE0ROLAbnog&riu=http%3a%2f%2flogonoid.com%2fimages%2fintellij-idea-logo.png&ehk=CapqYnZAeX0cbsUWxFNWr913YwdQDC7OFt%2ftIAEb%2fBU%3d&risl=&pid=ImgRaw&r=0" alt="IntelliJ IDEA" style="width:80px; height:80px; object-fit:cover;">
  <img src="https://www.liblogo.com/img-logo/ko114cab3-kotlin-logo-cropped-kotlin-logo-png-kotlin-expertise-blog.png" alt="Kotlin" style="width:80px; height:80px; object-fit:cover;">
</p>

Los expertos de JetBrains se propusieron crear un lenguaje que aprovechara los 30 años de aprendizaje de Java, corrigiendo sus limitaciones y añadiendo características modernas que los desarrolladores necesitan hoy.

![Línea temporal de Kotlin](img/T02/linea_temporal_kotlin.png)

La adopción de Kotlin por parte de Google marcó un punto de inflexión. Esto significa que las características más novedosas y potentes de Android se desarrollan primero en Kotlin, haciendo casi imprescindible su aprendizaje para desarrolladores móviles.

**¿Por qué gusta tanto Kotlin?**:

- **Interoperabilidad Total**: Funciona perfectamente con código Java existente. Puedes migrar gradualmente sin reescribir todo tu proyecto.
- **Misma JVM**: Utiliza la Java Virtual Machine, aprovechando toda la infraestructura y librerías del ecosistema Java.

![Misma JVM](img/T02/misma_jvm.png)


- **Sintaxis Moderna**: Código más conciso y legible que Java, con características que mejoran la productividad del desarrollador.
- **Seguridad de Tipos**: Reduce errores comunes como los `NullPointerException` con un sistema de tipos más robusto.
- **Soporte Oficial de Google**: Kotlin es un lenguaje de primera clase para Android, con soporte completo en Android Studio y nuevas APIs diseñadas para Kotlin. Bueno, aunque con Google nunca se sabe [Cementerio de Google](https://killedbygoogle.com/)... pero de momento es así.

**¿Qué IDE se recomienda para Kotlin?**:

- IntelliJ IDEA: El IDE por excelencia para Kotlin. Creado por los mismos desarrolladores del lenguaje, ofrece el mejor soporte y características avanzadas.
- Android Studio: Versión especializada de IntelliJ para desarrollo Android. Incluye todas las herramientas necesarias para crear aplicaciones móviles. ⭐ -> **Nuestra elección en este módulo debido a que nos conviene familiarizarnos todo lo posible con el IDE oficial de Android.**
- Visual Studio Code: Opción ligera con la extensión de Kotlin. Perfecto para pruebas rápidas y desarrollo básico.

**Recursos Kotlin curated** 🧀:

- [Kotlin Documentation](https://kotlinlang.org/docs/home.html): La documentación oficial es siempre el mejor lugar para empezar.
- [Kotlin Tour](https://kotlinlang.org/docs/kotlin-tour-welcome.html): Una introducción interactiva a Kotlin.
- [Guía de Kotlin by Develou](https://www.develou.com/guia-de-kotlin/): Un recurso completo para aprender Kotlin desde cero. Prácticamente te acompaña hasta la frontera de los temas intermedios-avanzados. En general nos apoyaremos en esta guía para el curso.
- [Kotlin Koans](https://kotlinlang.org/docs/koans.html): Una serie de ejercicios interactivos para aprender Kotlin de manera práctica.

[!NOTE]
> Una vez terminado el curso de Develou puedes explorar otras temáticas como: Gradle con Kotlin DSL, Coroutines (concurrencia), patrones de diseño, testing y serialization por proponer algunos campos.

¿Probamos a instalar JetBrains Academy plugin en Android Studio en los PCs del aula? --> Ya veremos si funciona, los ejercicios del curso tampoco se entienden muy bien todo sea dicho.

Otros recursos interesantes para darle duro durísimo 🌯 al coding son:

- [Exercism - Kotlin Track](https://exercism.org/tracks/kotlin): Plataforma con ejercicios prácticos y mentoría.
- [LeetCode - Kotlin Problems](https://leetcode.com/problemset/all/?difficulty=All&status=All&tags=&listId=&page=1&language=Kotlin): Problemas de algoritmos y estructuras de datos para practicar.
- [HackerRank - Kotlin Challenges](https://www.hackerrank.com/domains/tutorials/10-days-of-kotlin): Desafíos de programación en Kotlin.

### **1. La función `main()`**

En **Java**, estamos acostumbrados a la verbosidad (sí, este adjetivo existe en castellano) de una clase solo para empezar:

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

Otros ejemplos de esta concisión del lenguaje los encontramos con los

- **Lambdas**

```java
boton.setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View v) {
        // Acción al hacer clic
    }
});
```

```kotlin
boton.setOnClickListener {
    // Acción al hacer clic
}
```

- **Definifición de clases**

```java
public class Persona {

    // Atributos
    private String nombre;
    private int edad;

    // Constructor
    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
  
    // Getters y Setters
    public String getNombre() {
        return nombre;
    }
    public int getEdad() {
        return edad;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public void setEdad(int edad) {
        this.edad = edad;
    }

    // toString, hashCode, equals, copy...

    //Resto de métodos...
}
```

```kotlin
data class Persona(var nombre: String, var edad: Int)
// Resto de métodos
```

-----

### **2. Sacando información por pantalla: `print()` y `println()`**

De nuevo, la simpleza es la clave. En Java imprimíamos por pantalla usando `System.out.println()`. Esto son tres niveles de jerarquía para algo tan básico como mostrar texto. Clase `System`, objeto `out` (salida estándar), método `println()`.

- En **Kotlin**, las funciones `print()` y `println()` están disponibles directamente.
- `println()` añade un salto de línea al final, mientras que `print()` no lo hace.

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

### **3. Nomenclatura: `Naming Conventions`**

Normalmente el tema de la nomenclatura se pasa demasiado por alto, pero desde la experiencia personal en proyectos software, es lo primero que muchos miramos para saber si podemos esperar un código profesional y mantenible o un circo de los horrores. Si la gente no ha sido capaz de seguir unas simples convenciones de nombres, ¿cómo podemos confiar en que su código sea sólido y bien estructurado? Lo mismo sucede con las faltas de ortografía en la UI, generan desconfianza sobre la calidad del producto. ¿Sí algo tan obvio se ha escapado de las pruebas, qué más puede estar mal?

Aquí puedes tranquilizarles: las convenciones son prácticamente idénticas a las de Java, lo que facilita la transición.

- **Clases e Interfaces:** `PascalCase` (ej. `MiClaseAdaptadora`).
- **Funciones y Variables:** `camelCase` (ej. `miVariable`, `calcularTotal()`).
- **Constantes:** `SNAKE_CASE` en mayúsculas (ej. `const val MAX_INTENTOS = 3`).
- **Diferencia clave con Java ‼️:** En Kotlin, el nombre del paquete (ej. `package com.ies.proyecto`) **no tiene por qué coincidir con la estructura de directorios**. Aunque es una buena práctica mantener la coherencia, no es una imposición del compilador como en Java. Normalmente de esto se encarga el IDE automáticamente, pero no está de más mencionarlo.

-----

### Variables y Tipos de Datos: La magia de Kotlin

### **4. Manejo de Strings: Más allá de Java**

Aquí es donde Kotlin empieza a brillar de verdad para los que vienen de Java. Esta parte era un dolor de muelas en Java y Kotlin lo hace mucho más sencillo e intuitivo, similar a las string templates de JavaScript o Python.

- **Strings Multilínea:** En Java, crear un string multilínea es engorroso (`"línea1\n" + "línea2"`). En Kotlin, se usan las triples comillas `"""`. ¡Igual que en Python! 🐍

    ```kotlin
    // Ideal para JSON, SQL, o cualquier texto largo como menus, mensajes de ayuda, etc.
    val miJson = """
    {
        "usuario": "Juan",
        "activo": true
    }
    """
    println(miJson)
    ```

- **String Templates (Plantillas de Strings):** Mientras que en Java se concatena con `+` o se usa `String.format()`, Kotlin lo integra de forma nativa con el símbolo `$`.

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

### **5. Mutabilidad: `val` vs. `var`**

Este es un cambio de paradigma fundamental respecto a Java.

- `val` (de *value*): Se usa para declarar variables **inmutables** (solo lectura). Es el análogo al `final` de Java. Una vez asignado un valor, no se puede reasignar.

```kotlin
val nombre = "María"
// nombre = "Lucía" // Error de compilación: Val cannot be reassigned
// en Java sería: final String nombre = "María";
```

- `var` (de *variable*): Se usa para variables **mutables**, cuyo valor puede cambiar.

```kotlin
var contador = 0
contador += 1 // Correcto
```


```kotlin
val nombreCompleto = "Carlos" // No se puede reasignar, pero el objeto al que apunta podría ser mutable. En cualquier caso, String es inmutable en Kotlin (igual que en Java).
var edadActual = 22
// nombreCompleto = "Luis" // Error de compilación: Val cannot be reassigned
edadActual = 23 // Correcto
```

En la medida de lo posible utilizar `val` como buena práctica para prevenir errores. Si intentamos reasignar un `val`, el compilador nos avisará inmediatamente.

-----

### **6. Sistema de tipos e inferencia**

Este es un tema que merece un poco más de atención porque hay importantes diferencias entre los lenguajes de programación. Si bien en este curso nos centraremos en Kotlin, no es raro que a lo largo de vuestra carrera profesional os toque trabajar con distintos lenguajes, frameworks y paradigmas (ya sabéis... adaptarse o morir).

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

-----

**🔍 Cuadro resumen:**

| Lenguaje  | Dinámico/Estático | Fuerte/Débil | ¿Inferencia de tipos? |
|-----------|-------------------|--------------|-----------------------|
| **Python** | Dinámico          | **Fuerte** | Sí (a partir del valor asignado) |
| **Kotlin** | Estático          | Fuerte       | Sí (muy potente con `val`/`var`) |
| **Java**   | Estático          | Fuerte       | Sí, desde Java 10 con `var` (antes no) |

Ojo que todavía mucho code legacy de Java es de Java 8 o anterior, donde no existía `var` y la inferencia de tipos era muy limitada. Muchos venimos de ahí y arrastramos esa fosilización mental.

```kotlin
// Inferencia de tipos (el compilador sabe que son String e Int)
val mensaje = "Bienvenida a PMDM"
var anno = 2025

// Tipado explícito (a veces necesario o preferible por claridad)
val notaFinal: Double = 9.5
var profesor: String = "Profesor Sergio"
```

En Kotlin, los literales enteros son `Int` por defecto y los literales con decimales son `Double` por defecto.  

```kotlin
val numeroEntero = 42        // Int por defecto
val numeroDecimal = 3.14     // Double por defecto
```

Si queremos `Long` o `Float`, debemos indicarlo explícitamente, ya sea con anotación de tipo o usando los sufijos `L` (para `Long`) o `f`/`F` (para `Float`).  

En el caso de `Byte` y `Short`, no existen sufijos de literal, por lo que siempre hay que indicarlos de forma explícita mediante anotación de tipo o conversión (`toByte()`, `toShort()`).

Insistir que la inferencia de tipos no hace que Kotlin sea "débilmente tipado" como Python o JavaScript. El tipo sigue estando ahí, es inmutable y se comprueba en compilación, lo que nos da la seguridad de Java con la verbosidad reducida de un lenguaje de scripting.

### 7. Ejercicios propuestos - I🏋️‍♂️

#### Ejercicio 0: Setup del entorno

1. Instala Android Studio (si no lo tienes ya).
2. Crea un nuevo proyecto Android con una Activity vacía.
3. Añade un nuevo fichero Kotlin `EjerciciosT02` en el directorio.
4. Crea un repo privado en GitHub dentro de tu organización de Móvil 2025.
5. Configura el remote, la autenticación.

#### Ejercicio 1: Hola Mundo en Kotlin

1. En el fichero `Main.kt`, escribe la función `main()` esta llamara a una función ejercicio1() que deberás definir a continuación.
2. Dentro de `ejercicio1()`, utiliza `println()` para mostrar "Hola, soy [tu nombre completo] y este es mi primer programa en Kotlin".
3. Llama a `ejercicio1()` desde `main()`.
4. Ejecuta el programa, si todo está correcto haz un commit y push a tu repo de GitHub.

#### Ejercicio 2: Variables y Tipos

Crea un programa en Kotlin que pida dos números al usuario y muestre por pantalla la suma, la resta y la multiplicación. Procura que la entrada sea en la misma línea como la imagen. Por el momento no comprobamos los tipos, ve la nota abajo. Imprime primero un mensaje en el que aparezca tu nombre “Ejercicio 2: Sergio Contreras".

![Ejemplo de entrada en la misma línea](img/T02/ej02-ejemplo.png)

Empaqueta todo en una función `ejercicio2()` y llámala desde `main()`.

[!NOTE]
> Puedes usar `readln().toInt()` para leer la entrada del usuario y convertirla a un entero sin preocuparte todavía por la anulabilidad (lo veremos en detalle más adelante). Recuerda usar `val` y `var` adecuadamente.

-----

### Flujo de Entrada y Salida (I/O) ⌨️

Mientras que en **Java** se necesita un objeto `Scanner` para leer desde la consola, Kotlin lo simplifica enormemente.

En **Kotlin**, la función principal para leer una línea de texto desde la entrada estándar es `readln()`. Es importante destacar que `readln()` siempre devuelve un `String`, lo que nos servirá de gancho para el tema de la conversión de tipos.

[!NOTE]
> Antes de Kotlin 1.6, se usaba `readLine()`, que devolvía un `String?` (un String que podía ser nulo). Aunque `readln()` es más sencillo para empezar, es bueno que sepáis que `readLine()` sigue existiendo y es útil cuando se quiere manejar la posibilidad de entrada nula. Lo veremos más adelante.

```kotlin
fun main() {
    println("Por favor, introduce tu nombre:")
    val nombre = readln()

    println("Hola, $nombre. Ahora, introduce tu edad:")
    val edadString = readln()

    // Adelanto de la conversión de tipos
    val edad = edadString.toInt()

    println("Gracias. Has confirmado que tienes $edad años.")
}
```

  * **Consejo de Coach 🧑‍🏫:** Este es un excelente momento para introducir el concepto de **nulabilidad** en Kotlin. La función `readln()` lanza una excepción si no hay línea que leer, pero su predecesora `readLine()` devuelve un `String?` (un String que puede ser nulo). Puedes usar esto para explicarles cómo Kotlin obliga a manejar los nulos de forma segura, una de sus mayores ventajas sobre Java para evitar el famoso `NullPointerException`.

-----

### 9. Variables (`val` y `var`) - Profundizando 🔬

Ya introdujimos `val` y `var`, pero un punto clave que confunde a los que vienen de Java es la diferencia entre **referencia inmutable y objeto inmutable**.

Un `val` declara una **referencia inmutable**, similar a `final` en Java. Esto significa que no puedes reasignar la variable para que apunte a otro objeto, pero si el objeto en sí es mutable (como una lista mutable), **su contenido sí puede cambiar**. Para poder ver esto me toca adelantarme un poco al tema de las colecciones con el código de abajo.

```kotlin
// La lista es una referencia inmutable (val)
val colores = mutableListOf("rojo", "verde", "azul")

// Esto daría un error de compilación, no podemos reasignar la variable 'colores'
// colores = mutableListOf("amarillo", "naranja")

// Pero sí podemos modificar el contenido del objeto al que apunta
colores.add("amarillo") // ¡Esto es totalmente válido!
println(colores) // Imprime [rojo, verde, azul, amarillo]
```

-----

### 10. Tipos de Datos: ¿Primitivos o no? 📦

Esta es una de las diferencias más elegantes y simplificadoras de Kotlin respecto a Java es la siguiente: En **Java**, existen tipos primitivos (`int`, `double`, `boolean`) y sus clases envoltorio (wrapper) (`Integer`, `Double`, `Boolean`). En **Kotlin**, **todo es un objeto**. No hay distinción a nivel de código entre primitivos y sus envoltorios; usamos `Int`, `Double`, `Boolean`, etc., directamente.

```kotlin
val numero: Int = 42
// Podemos llamar a métodos directamente sobre el número, porque es un objeto.
val numeroComoString: String = numero.toString()
```

-----

### 11. Arrays y Strings ⛓️

Ambos son fundamentales, y Kotlin ofrece mejoras de calidad de vida.

  * **Strings:** Además de las plantillas y los strings multilínea, muchas operaciones son ahora propiedades en lugar de métodos. Por ejemplo, se usa `.length` en lugar del método `.length()` de Java. Se queda como en Python.

```kotlin
val saludo = "Hola, Mundo"
println("La longitud es: ${saludo.length}") // .length es una propiedad
```

  * **Arrays:** La sintaxis de creación es más limpia. Se usan funciones de librería como `arrayOf()` para crear arrays con elementos, o `IntArray()` / `DoubleArray()` para arrays de tipos primitivos (que, de nuevo, son más eficientes).

    ```kotlin
    // En Java: String[] nombres = {"Juan", "Eva"};
    val nombres = arrayOf("Juan", "Eva")

    // En Java: int[] numeros = new int[5];
    val numeros = IntArray(5) // Crea un array de 5 enteros, inicializados a 0

    println(nombres[0]) // El acceso es igual, con corchetes
    ```

-----

### 12. Conversión de Tipos (Casting) 🔄

Es casi una ironía siendo su código más sucinto, pero Kotlin es más estricto y seguro que Java en este aspecto para evitar errores sutiles.

En **Java**, las conversiones de un tipo numérico "más pequeño" a uno "más grande" (ej. `int` a `long`) son implícitas. En **Kotlin**, toda conversión de tipo debe ser **explícita**. Esto previene la pérdida accidental de información y hace el código más claro.

```kotlin
val miInt: Int = 100
// val miLong: Long = miInt // ¡ERROR de compilación!

// La forma correcta es usar las funciones de conversión explícitas:
val miLong: Long = miInt.toLong()
val miDouble: Double = miInt.toDouble()

val texto: String = "42"
val numeroDesdeTexto: Int = texto.toInt()
```

Esta "molestia" inicial es en realidad una gran ventaja. Obliga al programador a ser consciente de las conversiones que realiza, lo que conduce a un código más robusto y con menos errores inesperados.

### 13. Lecturas obligatorias I

Muchas cosas se han visto en esta presentación, pero revisando las fuentes originales se asientan mejor los conceptos. Asegurate de leer las siguientes secciones de la guía de Develou antes de continuar:

- [Introducción a Kotlin](https://www.develou.com/introduccion-a-kotlin/)
- [Hola Mundo en Kotlin](https://www.develou.com/hola-mundo-en-kotlin/)
- [Flujo de Entrada y Salida en Kotlin](https://www.develou.com/flujo-de-entrada-y-salida-en-kotlin/)
- [Variables](https://www.develou.com/variables-en-kotlin/)
- [Tipos primitivos en Kotlin](https://www.develou.com/tipos-primitivos-en-kotlin/)
- [Strings en Kotlin](https://www.develou.com/strings-en-kotlin/)
- [Arrays](https://www.develou.com/arrays-en-kotlin/)
- [Conversión de tipos](https://www.develou.com/conversion-de-tipos-en-kotlin/)

### 14. Anulabilidad y Seguridad de Nulos

En **Java**, cualquier variable de tipo objeto puede ser `null` por defecto. Si intentan usar un método o propiedad de una variable que es `null`, la aplicación se detiene bruscamente en tiempo de ejecución como el infame `NullPointerException` (NPE).

El creador de `null`, Tony Hoare, se refirió a su invención como su "error del billón (inglés) de dólares" por la incalculable cantidad de horas de depuración y errores en producción que ha causado a lo largo de los años. [Fuente](https://www.infoq.com/presentations/Null-References-The-Billion-Dollar-Mistake-Tony-Hoare/)

-----

#### La Solución de Kotlin: El Sistema de Tipos Nulables ✅

Kotlin aborda este problema directamente desde su sistema de tipos. La regla fundamental es: **por defecto, las variables no pueden ser nulas**. El propio compilador no te dejará asignar `null` a una variable normal.

Para permitir que una variable pueda contener `null`, debemos declararlo explícitamente añadiendo una interrogación (`?`) al final del tipo.

```kotlin
// TIPO NO NULABLE (por defecto)
var nombre: String = "IES Severo Ochoa"
// nombre = null  // ¡ERROR DE COMPILACIÓN! El compilador nos protege.

// TIPO NULABLE (explícito con ?)
var alias: String? = "El mejor instituto"
alias = null // ¡Correcto! Esta variable está diseñada para poder ser nula.
```

[!NOTA]
> Es un cambio de paradigma importante con respecto a Java. En Java, se asume que algo *puede* ser nulo y es responsabilidad del programador recordarlo. En Kotlin, se asume que algo *nunca* es nulo, y si puede serlo, el compilador te **obliga** a manejar esa posibilidad.

-----

#### Herramientas para Manejar Nulos de Forma Segura 🛠️

Una vez que tienes una variable nulable (con `?`), el compilador no te dejará usarla directamente. Te obligará a usar una de estas herramientas para garantizar la seguridad.

##### **1. El Operador de Llamada Segura (`?.`)**

Es la forma más común y elegante. Ejecuta la acción (llamar a un método, acceder a una propiedad) solo si el objeto no es nulo. Si es nulo, toda la expresión devuelve `null` y la ejecución continúa sin fallar.

```kotlin
val instituto: String? = "IES Severo Ochoa"
println(instituto?.length) // Imprime 16

val institutoNulo: String? = null
println(institutoNulo?.length) // Imprime "null" en la consola, ¡pero no rompe la app!
```

##### **2. El Operador Elvis (`?:`)**

![Elvis Operator](img/T02/elvis_operator.webp)

Perfecto para proporcionar un valor por defecto cuando una variable es nula. Si la expresión a la izquierda del operador Elvis no es nula, se usa su valor; si es nula, se usa el valor de la derecha.

```kotlin
val nombreProfesor: String? = null
val nombreAMostrar = nombreProfesor ?: "Profesor Desconocido"
println(nombreAMostrar) // Imprime "Profesor Desconocido"

// Se puede encadenar con la llamada segura:
val longitud = nombreProfesor?.length ?: 0
println("La longitud del nombre es $longitud") // Imprime "La longitud del nombre es 0"
```

#### **3. El Operador de Aserción No Nula (`!!`)**

Esta es la opción más arriesgada y la que más se parece al comportamiento de Java. Le dice al compilador: "Te aseguro que esta variable no es nula aquí. Confía en mí y déjame usarla" **Trust me bro**. Si te equivocas y la variable es `null`, **la aplicación se romperá con un `KotlinNullPointerException`**.

```kotlin
val direccion: String? = "Av. de la Unesco, s/n"
val longitud = direccion!!.length // Funciona porque no es nulo

val direccionNula: String? = null
// val longitudNula = direccionNula!!.length // ¡CRASH! Lanza una excepción.
```

El operador `!!` es lo que llamos un **code smell**, algo que pinta mal. Por lo general **evitad el operador `!!` siempre que sea posible**. Su uso es considerado una mala práctica y a menudo indica que la lógica del programa podría mejorarse usando llamadas seguras u operadores Elvis. Es una "salida de emergencia", no una herramienta de uso diario.

#### **4. `Smart Casts` (Conversiones Inteligentes)**

El compilador de Kotlin es lo suficientemente inteligente como para saber que si has comprobado que una variable no es nula, dentro de ese bloque de código, puede tratarla como si fuera no nulable, sin necesidad de operadores.

```kotlin
var email: String? = "info@iesseveroochoa.com"

if (email != null) {
    // Dentro de este 'if', el compilador sabe que 'email' no es nulo.
    // Podemos usarlo como un String normal, sin '?' ni '!!'.
    println("El email tiene ${email.length} caracteres.")
}
```

### 15. Ejercicios propuestos - II🏋️‍♂

####️ Ejercicio 3: Preguntas Anulabilidad

Crea un nuevo archivo en Kotlin de tipo File, llamado `preguntas1.md` (es como un readme) en el que copiarás y contestarás las siguientes preguntas:

1.	¿Qué sucede cuando intentas asignar un valor nulo a una variable no anulable? ¿Cómo cambiarías su definición?

```
val nombre: String = null
```

2.	Declara una variable de tipo entero que permita nulo inicializa a null

3.	Qué tipo tendrá la variable “tam” y que valor tendrá. ¿Se produce error de compilación o ejecución?

```
val nombre: String?=null
val tam=nombre?.length
```

4.	Qué tipo tendrá la variable “tam” y que valor tendrá. ¿Se produce error de compilación o ejecución?

```
val nombre: String?=null
val tam=nombre!!.length
```

5.	Qué tipo tendrá la variable “tam” y que valor tendrá. ¿Se produce error de compilación o ejecución?

```
val nombre: String?=null
val tam=nombre!!.length
```

6.	Qué tipo tendrá la variable “tam” y que valor tendrá. ¿Se produce error de compilación o ejecución?

```
val nombre: String?="Pepe"
val tam=nombre!!.length
```

7.	Investiga para sirve la función checkNotNull()


8.	Qué valor tiene longitud

```
val nombre: String?="Pepe"    
val longitud = nombre?.length ?: 0
```

9.	¿Qué valor tiene longitud?
```
val nombre: String?=null    
val longitud = nombre?.length ?: 0
```



