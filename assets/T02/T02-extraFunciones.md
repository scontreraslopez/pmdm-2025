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

Este ejemplo puede parecer un poco pobre, pero es muy habitual en callbacks donde no siempre necesitamos todos los parámetros que se nos pasan. Como en los listeners de eventos en Android, donde a veces solo nos interesa el evento y no el objeto que lo genera.

```kotlin
// Asumimos que tenemos un Switch en nuestra vista
val switchNotificaciones = findViewById<Switch>(R.id.mi_switch)

// La firma del listener nos obliga a recibir la vista y el booleano.
// Usamos '_' para ignorar el primer parámetro (la vista), que no necesitamos.
// Dejamos claro que solo nos interesa el segundo parámetro (isChecked).
switchNotificaciones.setOnCheckedChangeListener { _, isChecked ->
    if (isChecked) {
        activarNotificaciones()
        println("Notificaciones activadas")
    } else {
        desactivarNotificaciones()
        println("Notificaciones desactivadas")
    }
}
```

Aquí Android nos obliga a recibir dos parámetros en el listener, pero solo nos interesa el segundo (isChecked). Usamos `_` para ignorar el primero y dejamos claro que no lo necesitamos. Esto adelanta alguna cosa, pero así os va sonando cuando nos toque utilizarlo en el curso.

## 6. Funciones infix

Kotlin permite definir funciones infix, que se pueden llamar sin el punto y los paréntesis, lo que mejora la legibilidad en ciertos casos. Para declarar una función infix, debe ser una función miembro o una función de extensión con un solo parámetro.

```kotlin
class Punto(val x: Int, val y: Int) {
    infix fun mover(direccion: String): Punto {
        return when (direccion) {
            "arriba" -> Punto(x, y + 1)
            "abajo" -> Punto(x, y - 1)
            "izquierda" -> Punto(x - 1, y)
            "derecha" -> Punto(x + 1, y)
            else -> this
        }
    }
}
val punto = Punto(0, 0)
val nuevoPunto = punto mover "arriba" // Llamada infix
```

## 7. Funciones de extensión

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

## 8. Otros conceptos avanzados

Las funciones de Kotlin tienen muchas más características avanzadas, como las funciones inline, las funciones tail-recursive, las funciones locales (funciones anidadas). Estas características permiten optimizar el rendimiento, evitar desbordamientos de pila y organizar mejor el código. Sin embargo, estas características son más avanzadas y se pueden explorar en profundidad en etapas posteriores del aprendizaje de Kotlin.

## Ejercicios autocorregibles de comprensión de firmas y funciones en Kotlin
