# Funciones en Kotlin

## 1. Anatomía básica de la función

La firma de la función en Kotlin tiene 4 partes esenciales:

- **fun**: La palabra clave para declarar la función
- *nombreFuncion*: El nombre que le damos a la función
- (*parametro*: *Tipo*): Los datos que necesita para trabajar
- *TipoDeRetorno*: Lo que nos va a devolver tras ejecutarse

El void de java, aquí se llama Unit y va implícito, es decir se puede omitir para simplificar.

## 2. Parámetros por nombre y por defecto

Gran mejora sobre Java. En Kotlin es **MUCHO** más sencillo la sobrecarga de funciones gracias a los parámetros por defecto y por nombre. Ya no es necesario crear múltiples versiones de la misma función.

Para ello basta con asignar un valor por defecto a los parámetros que queramos mediante el operador =

```kotlin
// El parámetro 'saludo' tiene un valor por defecto
fun crearSaludo(nombre: String, saludo: String = "Hola") {
    println("$saludo, $nombre")
}
```

Esto nos permite llamar a la función de varias formas:

```kotlin
crearSaludo("Ana") // Usa el valor por defecto: "Hola, Ana"
crearSaludo("Ana", "Buenos días") // Sobrescribe el valor por defecto: "Buenos días, Ana"
```

Así, los parámetros que tienen un valor por defecto, son los que llamamos opcionales. Podemos omitirlos en la llamada a la función.

Esto no debe confundirse con los parámetros que pueden ser nulos (nullables). Estos son parámetros que pueden aceptar el valor null, y se declaran con el operador ?.

```kotlin
fun procesarTexto(texto: String?) {
    if (texto != null) {
        println("El texto tiene ${texto.length} caracteres.")
    } else {
        println("No se proporcionó ningún texto.")
    }
}
```

Aquí, texto es un parámetro que puede ser null, y debemos manejar ese caso dentro de la función. Pero texto no es un parámetro opcional, ya que no tiene un valor por defecto.

Del mismo modo un parámetro puede ser opcional y nullable a la vez:

```kotlin
fun mostrarMensaje(mensaje: String? = null) {
    if (mensaje != null) {
        println(mensaje)
    } else {
        println("No hay mensaje para mostrar.")
    }
}
```

Aquí, mensaje es un parámetro opcional (porque tiene un valor por defecto de null) y también es nullable (porque puede aceptar el valor null).

Así estas tres llamadas son posibles:

```kotlin
mostrarMensaje() // Usa el valor por defecto: "No hay mensaje para mostrar."
mostrarMensaje("Hola Mundo") // Proporciona un mensaje: "Hola Mundo"
mostrarMensaje(null) // Proporciona null explícitamente: "No hay mensaje para mostrar."
```

Ahora en lo que respecta a los parámetros por nombre, en Kotlin es posible especificar los nombres de los parámetros al llamar a una función. Esto mejora la legibilidad y permite omitir parámetros opcionales.

Imagina la siguiente función que transforma números entre bases, y admite tres parámetros, el número (como `String`), base origen y base destino. Y que por defecto transforma de decimal (base 10) a binario (base 2).

```kotlin
fun transformarNumero(numero: String, baseOrigen: Int = 10, baseDestino: Int = 2): String {
    val decimal = numero.toInt(baseOrigen)
    return decimal.toString(baseDestino)
}
```

Gracias a los parámetros por nombre, podemos llamar a esta función de varias formas:

```kotlin
transformarNumero("15") // Usa los valores por defecto: de base 10 a base 2
transformarNumero("15", baseDestino = 16) // De base 10 a base
transformarNumero("1111", baseOrigen = 16) // De base 16 a base 2 (sin cambio)
transformarNumero("1111", baseOrigen = 16, baseDestino = 10) // De base 16 a base 10
```

## 3. Refrescando los One-Liners

Para funciones de una sola expresión, Kotlin permite una sintaxis más concisa usando el operador `=`. Esto elimina la necesidad de llaves `{}` y la palabra clave `return`.

```kotlin
// En lugar de:
fun duplicar(numero: Int): Int {
    return numero * 2
}

// Se puede escribir como:
fun duplicar(numero: Int): Int = numero * 2
```

## 4. Funciones de orden superior y Lambdas

Como habéis visto, en Kotlin las funciones son ciudadanos de primera clase, lo que significa que pueden ser tratadas como cualquier otra variable. Pueden ser asignadas a variables, pasadas como argumentos a otras funciones y devueltas desde funciones. Tampoco necesitan estar dentro de una clase. A esto se le llama "funciones de orden superior" y nos permite un estilo de programación funcional.

```kotlin
// Función que toma otra función como parámetro
fun operarSobreNumeros(a: Int, b: Int, operacion: (Int, Int) -> Int): Int {
    return operacion(a, b)
}
// Uso con una lambda para sumar
val resultadoSuma = operarSobreNumeros(5, 3, { x, y -> x + y })

Ahora bien, Kotlin tiene una sintaxis especial para las lambdas (funciones anónimas) que hace que sean muy concisas y fáciles de usar. Si la lambda es el último parámetro de una función, puede ir fuera de los paréntesis. Y si es el único parámetro, se pueden omitir los paréntesis por completo. Esto se llama "trailing lambda syntax".

```kotlin
// Uso con trailing lambda syntax
val resultadoResta = operarSobreNumeros(5, 3) { x, y -> x - y }
```

## 5. Lambdas

Expliquemos ahora las lambdas en Kotlin son funciones anónimas que pueden ser tratadas como valores. Se definen entre llaves `{}` y pueden tomar parámetros y devolver un valor.

```kotlin
val suma: (Int, Int) -> Int = { x, y -> x + y }
val resultado = suma(5, 3) // resultado es 8
```

Analicemos ahora la sintaxis de las lambdas:

- **Parámetros**: Los parámetros de la lambda se definen antes del operador `->`. Si hay más de un parámetro, se separan por comas. Si no hay parámetros, se omite esta parte. Si hay un solo parámetro, se puede usar la palabra clave `it` para referirse a él sin necesidad de declararlo explícitamente.
- Operador `->`: Separa la lista de parámetros del cuerpo de la lambda. Si no hay parámetros, el operador `->` también se omite.
- **Cuerpo**: El cuerpo de la lambda va después del operador `->`. Puede contener una o más expresiones. La última expresión es el valor devuelto por la lambda.

Ejemplos:

```kotlin
val sinParametros = { println("Hola Mundo") }
val unParametro = { x: Int -> x * 2 }
val dosParametros = { x: Int, y: Int -> x + y }
val unParametroIt = { it * 2 } // Usando 'it' para un solo parámetro
```

Veamos un ejemplo más complejo donde usamos una lambda como callback:

```kotlin
fun descargarArchivo(url: String, callback: (Boolean) -> Unit) {
    // Simula la descarga
    val exito = true // o false si falla
    callback(exito)
}
descargarArchivo("http://ejemplo.com/archivo") { exito ->
    if (exito) {
        println("Descarga completada")
    } else {
        println("Error en la descarga")
    }
}

Las lambdas además pueden ser multilinea. En este caso, el valor devuelto es la última expresión evaluada en el cuerpo de la lambda.

```kotlin
val operacionCompleja = { x: Int, y: Int ->
    val suma = x + y
    val producto = x * y
    suma * producto // Esta es la última expresión, que se devuelve
}
```

También es posible omitir el tipo de los parámetros si el compilador puede inferirlo:

```kotlin
val multiplicar = { x, y -> x * y } // El compilador infiere que x e y son Int
```

Y de manera similar a las llamadas por nombre en las que podemos omitir alguno de los parámetros opcionales, en las lambdas podemos omitir los parámetros que no usamos. Por ejemplo, si solo necesitamos el primer parámetro:

```kotlin
val soloPrimero = { x: Int, _: Int -> x * 2 } // El segundo parámetro se ignora
```

Este ejemplo puede parecer un poco pobre, pero es muy habitual en callbacks donde no siempre necesitamos todos los parámetros que se nos pasan.

```kotlin
@Composable
fun ListaUsuarios() {
    val usuarios = listOf("Ana", "Luis", "María")

    LazyColumn {
        itemsIndexed(usuarios) { _, usuario ->
            Text(text = usuario)
        }
    }
}
```

Aquí para `itemsIndexed` Android nos obliga a pasarle (entre otros parámetros) una función con dos parámetros (`index` e `item`). Para esto usamos nuestro lambda, pero, cómo sólo nos interesa el usuario usamos `_` para ignorar el índice. Podríamos nombrarla y no usarla, pero es una convención común usar `_` para indicar que no nos importa ese parámetro y así no se queja el compilador (warning variable no usada).

## 6. Funciones de extensión

Kotlin permite añadir nuevas funciones a clases existentes sin necesidad de heredar de ellas o usar patrones como el decorador. Esto se logra mediante las funciones de extensión.

```kotlin
// Función de extensión para la clase String
fun String.esPalindromo(): Boolean {
    val textoLimpio = this.replace(" ", "").lowercase()
    return textoLimpio == textoLimpio.reversed()
}
val palabra = "Anita lava la tina"
val esPalindromo = palabra.esPalindromo() // true
```

## 7. Otros conceptos avanzados

Las funciones de Kotlin tienen muchas más características avanzadas, como las funciones inline, las funciones infix, las funciones tail-recursive, las funciones locales (funciones anidadas), funciones con generics. Estas características permiten optimizar el rendimiento, evitar desbordamientos de pila y organizar mejor el código. Sin embargo, estas características son más avanzadas y se pueden explorar en profundidad en etapas posteriores del aprendizaje de Kotlin.

## Ejercicios Autocorregibles: Lectura de Funciones en Kotlin

### Nivel 1: Fundamentos (Parámetros y Llamadas)

**1. Parámetros por defecto.** Dada la siguiente función:

```kotlin
fun crearAlerta(mensaje: String, esError: Boolean = false, duracion: Int = 3000) { /* ... */ }
```

¿Cuál de las siguientes llamadas es **INVÁLIDA**?

- a) `crearAlerta("Todo OK")`
- b) `crearAlerta("Fallo de red", true)`
- c) `crearAlerta("Archivo no encontrado", duracion = 5000)`
- d) `crearAlerta(true, "Fallo grave")`

-----

**2. Parámetros con nombre.** Tienes esta función:

```kotlin
fun configurarGrafico(titulo: String, colorEjes: String = "#000000", mostrarLeyenda: Boolean) { /* ... */ }
```

¿Cómo la llamarías para configurar un gráfico con el título "Ventas 2025" y `mostrarLeyenda` a `true`, pero manteniendo el color de ejes por defecto? Escribe la llamada a la función.

-----

**3. Nulos vs. Opcionales.** Observa estas dos firmas:

```kotlin
// Firma A
fun buscarUsuario(id: Int?) { /* ... */ }

// Firma B
fun obtenerConfig(version: Int = 1) { /* ... */ }
```

¿Cuál de las siguientes afirmaciones es **CORRECTA**?

- a) En la Firma A, el parámetro `id` es opcional.
- b) En la Firma B, el parámetro `version` puede ser `null`.
- c) En la Firma A, el parámetro `id` puede ser `null`, pero es obligatorio pasarlo.
- d) La llamada `obtenerConfig(null)` es válida.

-----

### Nivel 2: Sintaxis Elegante (One-Liners y Extensiones)

**4. One-Liners.** Reescribe la siguiente función usando la sintaxis de una sola línea:

```kotlin
fun esPositivo(numero: Int): Boolean {
    return numero > 0
}
```

-----

**5. Funciones de Extensión.** Dada la siguiente función de extensión:

```kotlin
fun String.conEspacios(): String {
    return this.toList().joinToString(" ")
}
```

¿Qué imprimirá por pantalla la siguiente línea de código? `println("HOLA".conEspacios())`

-----

### Nivel 3: Lectura de Lambdas

*Contexto: En Jetpack Compose, casi todo lo que se muestra en pantalla es una función que recibe datos y, a menudo, otras funciones (lambdas) para definir su contenido o su comportamiento.*

**6. Identificando el tipo de un parámetro.** En la firma de un botón de Compose, ves esto:

```kotlin
fun Button(onClick: () -> Unit) { /* ... */ }
```

El parámetro `onClick` es:

- a) Un `String`
- b) Un `Boolean`
- c) Una función que no recibe parámetros y no devuelve nada (`Unit`).
- d) Un objeto de tipo `Unit`.

-----

**7. Entendiendo el contenido de un Composable.** La firma de un contenedor básico en Compose es:

```kotlin
fun Box(modifier: Modifier, content: @Composable () -> Unit) { /* ... */ }
```

¿Qué se le pasa al parámetro `content`?

- a) Un objeto de cualquier tipo con el contenido a mostrar.
- b) Otra función Composable que definirá lo que se dibuja *dentro* del `Box`.
- c) Un número que indica el tamaño.
- d) Un texto que se mostrará como etiqueta.

-----

**8. Relaciona la llamada con su firma.** Une cada llamada (A, B, C) con la firma de función correcta (1, 2, 3):

**Llamadas:**

  - **A**: `Listado(items) { item -> Text(item.nombre) }`
  - **B**: `Listado(items)`
  - **C**: `Listado { Text("Lista vacía") }`

**Firmas:**

  - **1**: `fun Listado(items: List<Item>)`
  - **2**: `fun Listado(contenidoVacio: @Composable () -> Unit)`
  - **3**: `fun Listado(items: List<Item>, itemContent: @Composable (Item) -> Unit)`

-----

<br>

## ✅ Soluciones

1.  **Respuesta: d) `crearAlerta(true, "Fallo grave")`**. Es inválida porque los argumentos se pasan en el orden incorrecto. `true` es un `Boolean` y `esError` es el segundo parámetro, pero la función espera un `String` como primer parámetro. Las llamadas a), b) y c) son correctas porque respetan el orden o usan parámetros con nombre.

2.  **Respuesta:** `configurarGrafico(titulo = "Ventas 2025", mostrarLeyenda = true)`. Al usar parámetros con nombre, podemos omitir el parámetro opcional `colorEjes` que está en medio y hacer el código mucho más legible.

3.  **Respuesta: c) En la Firma A, el parámetro `id` puede ser `null`, pero es obligatorio pasarlo.** El `?` indica que acepta `null` (**nullable**), pero al no tener un valor por defecto, no es opcional. En la Firma B, `version` es opcional, pero no nullable.

4.  **Respuesta:** `fun esPositivo(numero: Int): Boolean = numero > 0`

5.  **Respuesta:** `H O L A`. La función de extensión convierte la `String` "HOLA" en una lista de caracteres (`['H', 'O', 'L', 'A']`) y luego los une de nuevo en una `String`, pero separándolos con un espacio.

6.  **Respuesta: c) Una función que no recibe parámetros y no devuelve nada (`Unit`).** La firma `() -> Unit` define una acción o evento. Es el patrón típico para los callbacks como `onClick`.

7.  **Respuesta: b) Otra función Composable que definirá lo que se dibuja *dentro* del `Box`.** El parámetro `content` es una lambda Composable. Esto permite anidar componentes: `Box { Text("Hola") }`.

8.  **Respuesta:**

      * **A -\> 3**: Se pasa la lista de ítems y una lambda para definir cómo se dibuja cada ítem.
      * **B -\> 1**: Solo se pasa la lista de ítems; la función probablemente tenga una forma por defecto de dibujarlos.
      * **C -\> 2**: No se pasan ítems, solo una lambda para definir qué mostrar en su lugar (por ejemplo, cuando la lista está vacía).
