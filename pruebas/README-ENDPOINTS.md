# Master of Orion 2 Race Picker - API Documentation

## Endpoints Disponibles

Tu Cloudflare Worker ahora soporta múltiples endpoints:

### 1. `GET /` o `GET /options`
Devuelve todas las opciones disponibles para crear una raza customizada.

**URL de ejemplo:**
```
https://tu-worker.tu-cuenta.workers.dev/
https://tu-worker.tu-cuenta.workers.dev/options
```

**Respuesta:**
```json
{
  "categories": [
    {
      "id": "population",
      "name": "Population",
      "options": [
        { "name": "-50% Growth", "cost": -4 },
        { "name": "+50% Growth", "cost": 3 }
      ]
    },
    ...
  ]
}
```

**Uso en Kotlin:**
```kotlin
val options = RetrofitInstance.api.getRaceOptions()
```

---

### 2. `GET /races`
Devuelve todas las razas preconstruidas del juego.

**URL de ejemplo:**
```
https://tu-worker.tu-cuenta.workers.dev/races
```

**Respuesta:**
```json
{
  "races": [
    {
      "id": "humans",
      "name": "Humans",
      "description": "Versatile and diplomatic race",
      "picks": [
        {
          "category": "special_abilities",
          "option": "Charismatic",
          "cost": 3
        },
        {
          "category": "governments",
          "option": "Democracy",
          "cost": 7
        }
      ],
      "totalCost": 10
    },
    ...
  ]
}
```

**Uso en Kotlin:**
```kotlin
val races = RetrofitInstance.api.getPrebuiltRaces()
```

---

### 3. `GET /races/{id}`
Devuelve una raza específica por su ID.

**IDs disponibles:**
- `humans`
- `trilarians`
- `klackons`

**URL de ejemplo:**
```
https://tu-worker.tu-cuenta.workers.dev/races/humans
https://tu-worker.tu-cuenta.workers.dev/races/trilarians
https://tu-worker.tu-cuenta.workers.dev/races/klackons
```

**Respuesta:**
```json
{
  "id": "humans",
  "name": "Humans",
  "description": "Versatile and diplomatic race",
  "picks": [
    {
      "category": "special_abilities",
      "option": "Charismatic",
      "cost": 3
    },
    {
      "category": "governments",
      "option": "Democracy",
      "cost": 7
    }
  ],
  "totalCost": 10
}
```

**Uso en Kotlin:**
```kotlin
val humanRace = RetrofitInstance.api.getRaceById("humans")
```

---

## Razas Preconstruidas

### Humans
- **Charismatic** (3 puntos)
- **Democracy** (7 puntos)
- **TOTAL: 10 puntos**

### Trilarians
- **Aquatic** (4 puntos)
- **Trans Dimensional** (4 puntos)
- **Dictatorship** (0 puntos)
- **TOTAL: 8 puntos**

### Klackons
- **+1 Food** (3 puntos)
- **+1 Production** (2 puntos)
- **Large Home World** (4 puntos)
- **Uncreative** (-6 puntos)
- **Unification** (6 puntos)
- **TOTAL: 9 puntos**

---

## Testing de los Endpoints

### Desde el navegador
Simplemente pega la URL en tu navegador:
```
https://tu-worker.tu-cuenta.workers.dev/races
```

### Desde Postman/Insomnia
1. Crea una nueva request GET
2. Pega la URL del endpoint
3. Send

### Desde curl
```bash
# Obtener todas las opciones
curl https://tu-worker.tu-cuenta.workers.dev/options

# Obtener todas las razas
curl https://tu-worker.tu-cuenta.workers.dev/races

# Obtener los Humans
curl https://tu-worker.tu-cuenta.workers.dev/races/humans
```

---

## Estructura del Proyecto Android

```
app/src/main/java/tu/paquete/
├── data/
│   ├── remote/
│   │   ├── RacePickerApiService.kt      # Interface de Retrofit
│   │   └── RetrofitInstance.kt          # Singleton de Retrofit
│   ├── repository/
│   │   └── RacePickerRepository.kt      # Capa de datos (opcional)
│   └── model/
│       ├── RaceCategory.kt              # Data classes
│       ├── RaceOption.kt
│       ├── PrebuiltRace.kt
│       └── RacePick.kt
├── ui/
│   ├── viewmodel/
│   │   └── RacePickerViewModel.kt       # ViewModel con StateFlow
│   └── screens/
│       ├── RacePickerScreen.kt          # Pantalla principal
│       ├── PrebuiltRacesTab.kt          # Tab de razas preconstruidas
│       └── CustomRaceTab.kt             # Tab de creación custom
└── MainActivity.kt
```

---

## Conceptos Clave para los Alumnos

### 1. Routing en Cloudflare Workers
```javascript
const url = new URL(request.url);
const path = url.pathname;

if (path === '/races') {
  // Devolver todas las razas
}

const raceMatch = path.match(/^\/races\/([a-z]+)$/);
if (raceMatch) {
  const raceId = raceMatch[1]; // Extraer el ID
  // Devolver una raza específica
}
```

### 2. Path Parameters en Retrofit
```kotlin
@GET("/races/{id}")
suspend fun getRaceById(@Path("id") raceId: String): PrebuiltRace
```

### 3. Múltiples Estados en el ViewModel
```kotlin
// Un StateFlow para cada tipo de datos
private val _optionsState = MutableStateFlow<OptionsUiState>(OptionsUiState.Loading)
private val _racesState = MutableStateFlow<RacesUiState>(RacesUiState.Loading)
```

### 4. Repository Pattern
```kotlin
// Encapsula la lógica de red y devuelve Result<T>
suspend fun getPrebuiltRaces(): Result<List<PrebuiltRace>> {
    return try {
        val response = api.getPrebuiltRaces()
        Result.success(response.races)
    } catch (e: Exception) {
        Result.failure(e)
    }
}
```

---

## Ejercicios Propuestos

### Nivel Básico
1. Desplegar el worker en Cloudflare
2. Testear los 3 endpoints desde el navegador
3. Implementar la llamada a `/races` en Android
4. Mostrar las razas preconstruidas en una LazyColumn

### Nivel Intermedio
5. Añadir una nueva raza preconstruida (ej: Meklars, Sakkra, etc.)
6. Crear un endpoint `/races/random` que devuelva una raza aleatoria
7. Implementar el Repository pattern completo
8. Añadir caché local con Room para las razas descargadas

### Nivel Avanzado
9. Crear un selector de opciones donde el usuario pueda construir su propia raza
10. Calcular el coste total en tiempo real mientras el usuario selecciona opciones
11. Guardar las razas custom del usuario en DataStore
12. Implementar un endpoint POST para enviar razas custom al servidor
