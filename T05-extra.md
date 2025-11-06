# Azúcar Sintáctico en la Gestión de Estado en Compose

## Introducción

Kotlin tiene bastante "azúcar sintáctico" esta es una cosa controvertida (opinionated), por ejemplo el PEP de python nos dice que *"there should be one-- and preferably only one --obvious way to do it"*, aunque luego tampoco sucede siempre. Referencia: [Python PEP 20](https://peps.python.org/pep-0020/).

Bueno, que me voy por las ramas, habéis visto, y me habéis preguntado con buen criterio acerca de las diferentes maneras que tiene Kotlin para manejar `MutableState` y cuando usar cada una. Intento aclararlo por aquí y comentaros mis preferencias personales. Esta es una cuestión de estilo y preferencia personal, no hay una única forma "correcta" de hacerlo, como bien apunta Google aquí [https://developer.android.com/develop/ui/compose/state](https://developer.android.com/develop/ui/compose/state).

-----

## Las 3 formas de declarar estado en Compose

Básicamente, tienes tres formas de declarar el estado en un composable. Para el propósito básico de almacenar y actualizar un valor, **son funcionalmente equivalentes**:

1. `val mutableState = remember { mutableStateOf(default) }` (La forma "raw". Tienes que usar `.value` para leer y escribir).
2. `var value by remember { mutableStateOf(default) }` (Delegación de propiedad. Lees/escribes `value` directamente).
3. `val (value, setValue) = remember { mutableStateOf(default) }` (Declaración de desestructuración. Lees `value` y escribes llamando a `setValue(newValue)`).

-----

## El Hoisting Idiomático: Desestructuración `(value, setValue)`

La tercera opción, `val (value, setValue)`, es la que más verás en la documentación de Google. Es la forma idiomática para hacer **State Hoisting** (elevación de estado).

Su gran ventaja es que **separa explícitamente la lectura de la escritura**:

* `value` es un `val` (solo lectura, sí, un **val**) que pasas "hacia abajo" a los composables hijos.
* `setValue` es la función lambda que pasas "hacia arriba" para que los hijos notifiquen un cambio. Sale implícitamente con la firma `(newValue: T) -> Unit`.

Cuando un hijo (como un `TextField`) solo necesita actualizar el valor, le pasas `setValue` directamente (`onValueChange = setValue`), y queda súper limpio.

```kotlin
val (text, setText) = remember { mutableStateOf("") }
TextField(
    value = text,
    onValueChange = setText // Limpio y directo
)
```

La confusión surge porque `setValue` es un lambda *implícito* que solo hace la asignación. Si necesitas lógica extra (validar, mostrar un `Toast`), tienes que "envolver" ese `setValue` en un nuevo lambda, y el código puede perder claridad.

```kotlin
val (selectedExercise, setSelectedExercise) = remember { mutableStateOf(opciones[0]) }
val onValueChangedEvent: (String) -> Unit = { 
    setSelectedExercise(it) // 1. Cambia el estado
    Toast.makeText(context, "Has elegido $it", Toast.LENGTH_SHORT).show() // 2. Añade lógica extra
}
```

Para mi gusto, esto hace el código menos legible y más difícil de mantener, especialmente si tienes muchos estados y eventos.

-----

## Mi favorito: Delegación `by`

En lo personal, prefiero la segunda opción (delegación con `by`) para la mayoría de los casos. Leer y escribir el estado se siente más natural (`selectedExercise = newValue` en lugar de `setValue(newValue)`).

Lo mejor es cómo maneja los eventos. Como la delegación "esconde" el *setter*, nos *obliga* a crear nuestro propio lambda de evento (como el `onValueChangedEvent` ejemplificado abajo) si queremos añadir lógica extra. Así también nos acostumbramos a pensar en los eventos como algo más que simples asignaciones.

Esto hace el código mucho más explícito, menos "mágico" y más fácil de mantener.

```kotlin
var selectedExercise by remember { mutableStateOf(opciones[0]) }
```

Y luego, creas un lambda *explícito* y "tuneado" que **además** de cambiar el estado, hace más cosas:

```kotlin
val onValueChangedEvent: (String) -> Unit = {
    selectedExercise = it // 1. Cambia el estado
    Toast.makeText(context, "Has elegido $it", Toast.LENGTH_SHORT).show() // 2. Añade lógica extra
}
```

A mi juicio, esto hace el código mucho más legible y mantenible que intentar "envolver" el `setValue` implícito que te da la tercera opción.
