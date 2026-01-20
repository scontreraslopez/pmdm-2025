// Cloudflare Worker para servir el JSON de Master of Orion 2 Race Picker
// Deploy en: workers.cloudflare.com
//
// Endpoints disponibles:
//   GET /         -> Todas las opciones (por defecto)
//   GET /options  -> Todas las opciones disponibles
//   GET /races    -> Razas preconstruidas
//   GET /races/:id -> Una raza específica (humans, trilarians, klackons)

const raceOptions = {
  "categories": [
    {
      "id": "population",
      "name": "Population",
      "options": [
        { "name": "-50% Growth", "cost": -4 },
        { "name": "+50% Growth", "cost": 3 },
        { "name": "+100% Growth", "cost": 6 }
      ]
    },
    {
      "id": "farming",
      "name": "Farming",
      "options": [
        { "name": "-1/2 Food", "cost": -3 },
        { "name": "-1 Food", "cost": -4 },
        { "name": "+1 Food", "cost": 3 }
      ]
    },
    {
      "id": "industry",
      "name": "Industry",
      "options": [
        { "name": "-1 Production", "cost": -2 },
        { "name": "-2 Production", "cost": -3 },
        { "name": "+1 Production", "cost": 2 },
        { "name": "+2 Production", "cost": 4 }
      ]
    },
    {
      "id": "science",
      "name": "Science",
      "options": [
        { "name": "-1 Research", "cost": -3 },
        { "name": "-2 Research", "cost": -5 },
        { "name": "+1 Research", "cost": 2 },
        { "name": "+2 Research", "cost": 4 }
      ]
    },
    {
      "id": "money",
      "name": "Money",
      "options": [
        { "name": "-0.5 BC", "cost": -2 },
        { "name": "+0.5 BC", "cost": 2 }
      ]
    },
    {
      "id": "ship_defense",
      "name": "Ship Defense",
      "options": [
        { "name": "-20", "cost": -2 },
        { "name": "-10", "cost": -1 },
        { "name": "+10", "cost": 1 },
        { "name": "+20", "cost": 2 }
      ]
    },
    {
      "id": "ship_attack",
      "name": "Ship Attack",
      "options": [
        { "name": "-20", "cost": -2 },
        { "name": "-10", "cost": -1 },
        { "name": "+10", "cost": 1 },
        { "name": "+20", "cost": 2 }
      ]
    },
    {
      "id": "ground_combat",
      "name": "Ground Combat",
      "options": [
        { "name": "-10", "cost": -2 },
        { "name": "-5", "cost": -1 },
        { "name": "+5", "cost": 1 },
        { "name": "+10", "cost": 2 }
      ]
    },
    {
      "id": "spying",
      "name": "Spying",
      "options": [
        { "name": "-10", "cost": -3 },
        { "name": "-5", "cost": -2 },
        { "name": "+5", "cost": 2 },
        { "name": "+10", "cost": 3 }
      ]
    },
    {
      "id": "governments",
      "name": "Governments",
      "options": [
        { "name": "Feudal", "cost": -4 },
        { "name": "Dictatorship", "cost": 0 },
        { "name": "Democracy", "cost": 7 },
        { "name": "Unification", "cost": 6 }
      ]
    },
    {
      "id": "special_abilities",
      "name": "Special Abilities",
      "options": [
        { "name": "Low-G World", "cost": -5 },
        { "name": "High-G World", "cost": -3 },
        { "name": "Aquatic", "cost": 4 },
        { "name": "Subterranean", "cost": 5 },
        { "name": "Large Home World", "cost": 4 },
        { "name": "Rich Home World", "cost": 3 },
        { "name": "Poor Home World", "cost": -1 },
        { "name": "Artifacts World", "cost": 3 },
        { "name": "Cybernetic", "cost": 6 },
        { "name": "Lithovore", "cost": 10 },
        { "name": "Repulsive", "cost": -6 },
        { "name": "Charismatic", "cost": 3 },
        { "name": "Uncreative", "cost": -6 },
        { "name": "Creative", "cost": 8 },
        { "name": "Tolerant", "cost": 5 },
        { "name": "Fantastic Traders", "cost": 2 },
        { "name": "Telepathic", "cost": 4 },
        { "name": "Lucky", "cost": 4 },
        { "name": "Omniscient", "cost": 6 },
        { "name": "Stealthy Ships", "cost": 4 },
        { "name": "Trans Dimensional", "cost": 4 },
        { "name": "Warlord", "cost": 3 }
      ]
    }
  ]
};

// Razas preconstruidas del juego original
const prebuiltRaces = {
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
    {
      "id": "trilarians",
      "name": "Trilarians",
      "description": "Aquatic beings with dimensional travel capabilities",
      "picks": [
        {
          "category": "special_abilities",
          "option": "Aquatic",
          "cost": 4
        },
        {
          "category": "special_abilities",
          "option": "Trans Dimensional",
          "cost": 4
        },
        {
          "category": "governments",
          "option": "Dictatorship",
          "cost": 0
        }
      ],
      "totalCost": 8
    },
    {
      "id": "klackons",
      "name": "Klackons",
      "description": "Industrious insectoid race",
      "picks": [
        {
          "category": "farming",
          "option": "+1 Food",
          "cost": 3
        },
        {
          "category": "industry",
          "option": "+1 Production",
          "cost": 2
        },
        {
          "category": "special_abilities",
          "option": "Large Home World",
          "cost": 4
        },
        {
          "category": "special_abilities",
          "option": "Uncreative",
          "cost": -6
        },
        {
          "category": "governments",
          "option": "Unification",
          "cost": 6
        }
      ],
      "totalCost": 9
    }
  ]
};

export default {
  async fetch(request, env, ctx) {
    // Headers CORS para permitir peticiones desde Android
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json'
    };

    // Manejar preflight request (OPTIONS)
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // Solo aceptar GET
    if (request.method !== 'GET') {
      return new Response('Method not allowed', { status: 405, headers: corsHeaders });
    }

    // ========================================================================
    // ROUTING - Parsear la URL para determinar qué endpoint se está llamando
    // ========================================================================
    const url = new URL(request.url);
    const path = url.pathname;

    // GET / o GET /options -> Todas las opciones disponibles
    if (path === '/' || path === '/options') {
      return new Response(
        JSON.stringify(raceOptions, null, 2),
        { headers: corsHeaders, status: 200 }
      );
    }

    // GET /races -> Todas las razas preconstruidas
    if (path === '/races') {
      return new Response(
        JSON.stringify(prebuiltRaces, null, 2),
        { headers: corsHeaders, status: 200 }
      );
    }

    // GET /races/:id -> Una raza específica por su ID
    // Ejemplo: /races/humans, /races/trilarians, /races/klackons
    const raceMatch = path.match(/^\/races\/([a-z]+)$/);
    if (raceMatch) {
      const raceId = raceMatch[1]; // Extraer el ID de la URL
      const race = prebuiltRaces.races.find(r => r.id === raceId);

      if (race) {
        return new Response(
          JSON.stringify(race, null, 2),
          { headers: corsHeaders, status: 200 }
        );
      } else {
        return new Response(
          JSON.stringify({
            error: 'Race not found',
            message: `No existe una raza con id: ${raceId}`
          }),
          { headers: corsHeaders, status: 404 }
        );
      }
    }

    // Ruta no encontrada - Devolver lista de endpoints disponibles
    return new Response(
      JSON.stringify({
        error: 'Not found',
        message: 'Endpoint no encontrado',
        availableEndpoints: [
          'GET /',
          'GET /options',
          'GET /races',
          'GET /races/humans',
          'GET /races/trilarians',
          'GET /races/klackons'
        ]
      }),
      { headers: corsHeaders, status: 404 }
    );
  }
};
