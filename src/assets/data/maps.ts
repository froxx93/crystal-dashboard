import Map from "../../domains/Map";

// worlds
const JOHTO: Map = {
  id: "johto",
  name: "Johto",
  type: "region",
  width: 18,
  height: 14,
  fileName: "johto.png",
};
const KANTO: Map = {
  id: "kanto",
  name: "Kanto",
  type: "region",
  width: 18,
  height: 14,
  fileName: "kanto.png",
};

// routes and cities
const ROUTE_9: Map = {
  id: "route-9",
  name: "Route 9",
  type: "area",
  width: 60,
  height: 18,
  fileName: "route-9.png",
  parentLocation: {
    map: KANTO,
    x: 13,
    y: 3,
  },
};
const ROUTE_10: Map = {
  id: "route-10",
  name: "Route 10",
  type: "area",
  width: 20,
  height: 36,
  fileName: "route-10.jpeg",
  parentLocation: {
    map: KANTO,
    x: 15,
    y: 4,
  },
};
const ROUTE_23: Map = {
  id: "route-23",
  name: "Route 23",
  type: "area",
  width: 20,
  height: 18,
  fileName: "route-23.png",
  parentLocation: {
    map: KANTO,
    x: 2,
    y: 2,
  },
};
const ROUTE_27: Map = {
  id: "route-27",
  name: "Route 27",
  type: "area",
  width: 80,
  height: 18,
  fileName: "route-27.png",
  parentLocation: {
    map: KANTO,
    x: 1,
    y: 9,
  },
};
const ROUTE_28: Map = {
  id: "route-28",
  name: "Route 28",
  type: "area",
  width: 40,
  height: 14,
  fileName: "route-28.png",
  parentLocation: {
    map: KANTO,
    x: 0,
    y: 5,
  },
};
const ROUTE_29: Map = {
  id: "route-29",
  name: "Route 29",
  type: "area",
  width: 3,
  height: 3,
  fileName: "route-29.jpeg",
  parentLocation: {
    map: JOHTO,
    x: 1,
    y: 2,
  },
};
const ROUTE_30: Map = {
  id: "route-30",
  name: "Route 30",
  type: "area",
  width: 3,
  height: 3,
  fileName: "route-30.jpeg",
  parentLocation: {
    map: JOHTO,
    x: 1,
    y: 2,
  },
};
const ROUTE_31: Map = {
  id: "route-31",
  name: "Route 31",
  type: "area",
  width: 40,
  height: 18,
  fileName: "route-31.jpeg",
  parentLocation: {
    map: JOHTO,
    x: 10,
    y: 4,
  },
};
const ROUTE_32: Map = {
  id: "route-32",
  name: "Route 32",
  type: "area",
  width: 20,
  height: 90,
  fileName: "route-32.jpeg",
  parentLocation: {
    map: JOHTO,
    x: 9,
    y: 8,
  },
};
const ROUTE_33: Map = {
  id: "route-33",
  name: "Route 33",
  type: "area",
  width: 20,
  height: 18,
  fileName: "route-33.jpeg",
  parentLocation: {
    map: JOHTO,
    x: 8,
    y: 12,
  },
};
const ROUTE_34: Map = {
  id: "route-34",
  name: "Route 34",
  type: "area",
  width: 22,
  height: 54,
  fileName: "route-34.jpeg",
  parentLocation: {
    map: JOHTO,
    x: 5,
    y: 10,
  },
};
const ROUTE_35: Map = {
  id: "route-35",
  name: "Route 35",
  type: "area",
  width: 20,
  height: 36,
  fileName: "route-35.jpeg",
  parentLocation: {
    map: JOHTO,
    x: 5,
    y: 6,
  },
};
const ROUTE_36: Map = {
  id: "route-36",
  name: "Route 36",
  type: "area",
  width: 46,
  height: 18,
  fileName: "route-36.jpeg",
  parentLocation: {
    map: JOHTO,
    x: 7,
    y: 4,
  },
};
const ROUTE_37: Map = {
  id: "route-37",
  name: "Route 37",
  type: "area",
  width: 3,
  height: 3,
  fileName: "route-37.jpeg",
  parentLocation: {
    map: JOHTO,
    x: 1,
    y: 2,
  },
};
const ROUTE_38: Map = {
  id: "route-38",
  name: "Route 38",
  type: "area",
  width: 3,
  height: 3,
  fileName: "route-38.jpeg",
  parentLocation: {
    map: JOHTO,
    x: 1,
    y: 2,
  },
};
const ROUTE_39: Map = {
  id: "route-39",
  name: "Route 39",
  type: "area",
  width: 21,
  height: 38,
  fileName: "route-39.jpeg",
  parentLocation: {
    map: JOHTO,
    x: 3,
    y: 3,
  },
};
const ROUTE_40: Map = {
  id: "route-40",
  name: "Route 40",
  type: "area",
  width: 3,
  height: 3,
  fileName: "route-40.jpeg",
  parentLocation: {
    map: JOHTO,
    x: 1,
    y: 2,
  },
};
const ROUTE_41: Map = {
  id: "route-41",
  name: "Route 41",
  type: "area",
  width: 3,
  height: 3,
  fileName: "route-41.jpeg",
  parentLocation: {
    map: JOHTO,
    x: 1,
    y: 2,
  },
};
const ROUTE_42: Map = {
  id: "route-42",
  name: "Route 42",
  type: "area",
  width: 60,
  height: 18,
  fileName: "route-42.jpeg",
  parentLocation: {
    map: JOHTO,
    x: 10,
    y: 2,
  },
};
const ROUTE_43: Map = {
  id: "route-43",
  name: "Route 43",
  type: "area",
  width: 22,
  height: 54,
  fileName: "route-43.jpeg",
  parentLocation: {
    map: JOHTO,
    x: 12,
    y: 1,
  },
};
const ROUTE_44: Map = {
  id: "route-44",
  name: "Route 44",
  type: "area",
  width: 60,
  height: 17,
  fileName: "route-44.jpeg",
  parentLocation: {
    map: JOHTO,
    x: 14,
    y: 2,
  },
};
const ROUTE_45: Map = {
  id: "route-45",
  name: "Route 45",
  type: "area",
  width: 20,
  height: 89,
  fileName: "route-45.jpeg",
  parentLocation: {
    map: JOHTO,
    x: 15,
    y: 4,
  },
};
const ROUTE_46: Map = {
  id: "route-46",
  name: "Route 46",
  type: "area",
  width: 3,
  height: 3,
  fileName: "route-46.jpeg",
  parentLocation: {
    map: JOHTO,
    x: 1,
    y: 2,
  },
};
const CIANWOOD_CITY: Map = {
  id: "cianwood-city",
  name: "Cianwood City",
  type: "area",
  width: 28,
  height: 51,
  fileName: "cianwood-city.jpeg",
  parentLocation: {
    map: JOHTO,
    x: 1,
    y: 9,
  },
};
const ILEX_FOREST: Map = {
  id: "ilex-forest",
  name: "Ilex Forest",
  type: "area",
  width: 34,
  height: 48,
  fileName: "ilex-forest.jpeg",
  parentLocation: {
    map: JOHTO,
    x: 6,
    y: 12,
  },
};
const CELADON_CITY: Map = {
  id: "celadon-city",
  name: "Celadon City",
  type: "area",
  width: 40,
  height: 36,
  fileName: "celadon-city.jpeg",
  parentLocation: {
    map: KANTO,
    x: 8,
    y: 5,
  },
};
const FUCHSIA_CITY: Map = {
  id: "fuchsia-city",
  name: "Fuchsia City",
  type: "area",
  width: 40,
  height: 36,
  fileName: "fuchsia-city.jpeg",
  parentLocation: {
    map: KANTO,
    x: 10,
    y: 11,
  },
};
const GOLDENROD_CITY: Map = {
  id: "goldenrod-city",
  name: "Goldenrod City",
  type: "area",
  width: 40,
  height: 36,
  fileName: "goldenrod-city.png",
  parentLocation: {
    map: JOHTO,
    x: 5,
    y: 8,
  },
};
const SAFFRON_CITY: Map = {
  id: "saffron-city",
  name: "Saffron City",
  type: "area",
  width: 40,
  height: 36,
  fileName: "saffron-city.png", // unclean file size
  parentLocation: {
    map: KANTO,
    x: 11,
    y: 5,
  },
};
const MAHAGONY_TOWN: Map = {
  id: "mahagony-town",
  name: "Mahagony Town",
  type: "area",
  width: 20,
  height: 18,
  fileName: "mahagony-town.png",
  parentLocation: {
    map: JOHTO,
    x: 12,
    y: 2,
  },
};
const AZALEA_TOWN: Map = {
  id: "azalea-town",
  name: "Azalea Town",
  type: "area",
  width: 34,
  height: 23,
  fileName: "azalea-town.png",
  parentLocation: {
    map: JOHTO,
    x: 7,
    y: 12,
  },
};
const ECRUTEAK_CITY: Map = {
  id: "ecruteak-city",
  name: "Ecruteak City",
  type: "area",
  width: 40,
  height: 36,
  fileName: "ecruteak-city.png",
  parentLocation: {
    map: JOHTO,
    x: 7,
    y: 2,
  },
};
const OLIVINE_CITY: Map = {
  id: "olivine-city",
  name: "Olivine City",
  type: "area",
  width: 40,
  height: 36,
  fileName: "olivine-city.png",
  parentLocation: {
    map: JOHTO,
    x: 3,
    y: 4,
  },
};
const BLACKTHORN_CITY: Map = {
  id: "blackthorn-city",
  name: "Blackthorn City",
  type: "area",
  width: 40,
  height: 36,
  fileName: "blackthorn-city.png",
  parentLocation: {
    map: JOHTO,
    x: 15,
    y: 2,
  },
};
const NATIONAL_PARK: Map = {
  id: "national-park",
  name: "National Park",
  type: "area",
  width: 44,
  height: 56,
  fileName: "national-park.png",
  parentLocation: {
    map: JOHTO,
    x: 5,
    y: 4,
  },
};
const VIOLET_CITY: Map = {
  id: "violet-city",
  name: "Violet City",
  type: "area",
  width: 50,
  height: 38,
  fileName: "violet-city.png",
  parentLocation: {
    map: JOHTO,
    x: 9,
    y: 4,
  },
};
const VERIDIAN_CITY: Map = {
  id: "veridian-city",
  name: "Veridian City",
  type: "area",
  width: 40,
  height: 36,
  fileName: "veridian-city.png",
  parentLocation: {
    map: KANTO,
    x: 5,
    y: 6,
  },
};
const LAKE_OF_RAGE: Map = {
  id: "lake-of-rage",
  name: "Lake of Rage",
  type: "area",
  width: 40,
  height: 38,
  fileName: "lake-of-rage.jpeg",
  parentLocation: {
    map: JOHTO,
    x: 12,
    y: 0,
  },
};
const ROCK_TUNNEL_1F: Map = {
  id: "rock-tunnel-1f",
  name: "Rock Tunnel (1F)",
  type: "area",
  width: 28,
  height: 26,
  fileName: "rock-tunnel-1f.png",
  parentLocation: {
    map: ROUTE_10,
    x: 6,
    y: 19,
  },
};

// houses
const CIANWOOD_GYM: Map = {
  id: "cianwood-gym",
  name: "Cianwood Gym",
  type: "house",
  width: 10,
  height: 18,
  fileName: "cianwood-gym.png",
  parentLocation: {
    map: CIANWOOD_CITY,
    x: 6,
    y: 43,
  },
};
const CELADON_CONDOMINIUMS_4F: Map = {
  id: "celadon-condominiums-4f",
  name: "Celadon Condominiums (4F)",
  type: "house",
  width: 8,
  height: 8,
  fileName: "celadon-condominiums-4f.png",
  parentLocation: {
    map: CELADON_CITY,
    x: 16,
    y: 3,
  },
};
const FUCHSIA_GYM: Map = {
  id: "fuchsia-gym",
  name: "Fuchsia Gym",
  type: "house",
  width: 10,
  height: 18,
  fileName: "fuchsia-gym.png", // unclean file size
  parentLocation: {
    map: FUCHSIA_CITY,
    x: 8,
    y: 27,
  },
};
const POWER_PLANT: Map = {
  id: "power-plant",
  name: "Power Plant",
  type: "house",
  width: 20.5,
  height: 18.5,
  fileName: "power-plant.png", // unclean file size
  parentLocation: {
    map: ROUTE_10,
    x: 3,
    y: 9,
  },
};
const CELADON_DEPARTMENT_STORE_3F: Map = {
  id: "celadon-department-store-3f",
  name: "Celadon Department Store (3F)",
  type: "house",
  width: 16,
  height: 8,
  fileName: "celadon-department-store-3f.png",
  parentLocation: {
    map: CELADON_CITY,
    x: 4,
    y: 9,
  },
};
const ROUTE_34_ENTRANCE: Map = {
  id: "route-34-entrance",
  name: "Route 34 Entrance",
  type: "house",
  width: 10,
  height: 8,
  fileName: "route-34-entrance.png", // slightly blurred
  parentLocation: {
    map: ROUTE_34,
    x: 13,
    y: 37,
  },
};
const MOOMOO_FARM: Map = {
  id: "moomoo-farm",
  name: "Moomoo Farm",
  type: "house",
  width: 8,
  height: 8,
  fileName: "moomoo-farm.png", // twice as large
  parentLocation: {
    map: ROUTE_39,
    x: 2,
    y: 5,
  },
};
const GOLDENROD_GAME_CORNER: Map = {
  id: "goldenrod-game-corner",
  name: "Goldenrod Game Corner",
  type: "house",
  width: 20,
  height: 14,
  fileName: "goldenrod-game-corner.png",
  parentLocation: {
    map: GOLDENROD_CITY,
    x: 14,
    y: 21,
  },
};
const CELADON_GAME_CORNER: Map = {
  id: "celadon-game-corner",
  name: "Celadon Game Corner",
  type: "house",
  width: 6,
  height: 6,
  fileName: "celadon-game-corner.png",
  parentLocation: {
    map: CELADON_CITY,
    x: 18,
    y: 19,
  },
};
const MR_PSYCHICS_HOUSE: Map = {
  id: "mr-psychics-house",
  name: "Mr. Psychic's House",
  type: "house",
  width: 8,
  height: 8,
  fileName: "mr-psychics-house.png", // unclean file size
  parentLocation: {
    map: SAFFRON_CITY,
    x: 27,
    y: 29,
  },
};
const MAHAGONY_GYM: Map = {
  id: "mahagony-gym",
  name: "Mahagony Gym",
  type: "house",
  width: 10,
  height: 18,
  fileName: "mahagony-gym.png", // unclean file size
  parentLocation: {
    map: MAHAGONY_TOWN,
    x: 6,
    y: 13,
  },
};
const SLOWPOKE_WELL_B2F: Map = {
  id: "slowpoke-well-b2f",
  name: "Slowpoke Well (B2F)",
  type: "house",
  width: 20,
  height: 18,
  fileName: "slowpoke-well-b2f.png",
  parentLocation: {
    map: AZALEA_TOWN,
    x: 31,
    y: 8,
  },
};
const CELADON_GYM: Map = {
  id: "celadon-gym",
  name: "Celadon Gym",
  type: "house",
  width: 10,
  height: 18,
  fileName: "celadon-gym.png",
  parentLocation: {
    map: CELADON_CITY,
    x: 10,
    y: 29,
  },
};
const BURNED_TOWER_B1F: Map = {
  id: "burned-tower-b1f",
  name: "Burned Tower (B1F)",
  type: "house",
  width: 20,
  height: 18,
  fileName: "burned-tower-b1f.png", // missing strength rock
  parentLocation: {
    map: ECRUTEAK_CITY,
    x: 5,
    y: 5,
  },
};
const GOLDENROD_DEPARTMENT_STORE_5F: Map = {
  id: "goldenrod-department-store-5f",
  name: "Goldenrod Department Store (5F)",
  type: "house",
  width: 16,
  height: 8,
  fileName: "goldenrod-department-store-5f.png",
  parentLocation: {
    map: GOLDENROD_CITY,
    x: 24,
    y: 27,
  },
};
const OLIVINE_GYM: Map = {
  id: "olivine-gym",
  name: "Olivine Gym",
  type: "house",
  width: 10,
  height: 16,
  fileName: "olivine-gym.png", // unclean image size
  parentLocation: {
    map: OLIVINE_CITY,
    x: 10,
    y: 11,
  },
};
const BLACKTHORN_GYM: Map = {
  id: "blackthorn-gym",
  name: "Blackthorn Gym",
  type: "house",
  width: 10,
  height: 18,
  fileName: "blackthorn-gym.png",
  parentLocation: {
    map: BLACKTHORN_CITY,
    x: 18,
    y: 11,
  },
};
const VICTORY_ROAD_1F: Map = {
  id: "victory-road-1f",
  name: "Victory Road (1F)",
  type: "house",
  width: 20,
  height: 24,
  fileName: "victory-road-1f.png",
  parentLocation: {
    map: ROUTE_23,
    x: 9,
    y: 13,
  },
};
const ECRUTEAK_GYM: Map = {
  id: "ecruteak-gym",
  name: "Ecruteak Gym",
  type: "house",
  width: 10,
  height: 18,
  fileName: "ecruteak-gym.png", // unclean file size
  parentLocation: {
    map: ECRUTEAK_CITY,
    x: 6,
    y: 27,
  },
};
const VIOLET_GYM: Map = {
  id: "violet-gym",
  name: "Violet Gym",
  type: "house",
  width: 10,
  height: 18,
  fileName: "violet-gym.png", // twice as large
  parentLocation: {
    map: VIOLET_CITY,
    x: 22,
    y: 19,
  },
};
const LIGHTHOUSE_5F: Map = {
  id: "lighthouse-5f",
  name: "Lighthouse (5F)",
  type: "house",
  width: 20,
  height: 18,
  fileName: "lighthouse-5f.png",
  parentLocation: {
    map: OLIVINE_CITY,
    x: 29,
    y: 27,
  },
};
const GOLDENROD_UNDERGROUND_WAREHOUSE: Map = {
  id: "goldenrod-underground-warehouse",
  name: "Goldenrod Underground Warehouse",
  type: "house",
  width: 20,
  height: 17,
  fileName: "goldenrod-underground-warehouse.png",
  parentLocation: {
    map: GOLDENROD_CITY,
    x: 9,
    y: 5,
  },
};
const ROUTE_43_PASSAGE: Map = {
  id: "route-43-passage",
  name: "Route 43 Passage",
  type: "house",
  width: 10,
  height: 8,
  fileName: "route-43-passage.png", // twice as large
  parentLocation: {
    map: ROUTE_43,
    x: 18,
    y: 35,
  },
};
const UNION_CAVE_B1F: Map = {
  id: "union-cave-b1f",
  name: "Union Cave (B1F)",
  type: "house",
  width: 20,
  height: 36,
  fileName: "union-cave-b1f.png",
  parentLocation: {
    map: ROUTE_33,
    x: 11,
    y: 7,
  },
};
const MT_MORTAR_2F: Map = {
  id: "mt-mortar-2f",
  name: "Mt. Mortar (2F)",
  type: "house",
  width: 40,
  height: 36,
  fileName: "mt-mortar-2f.png",
  parentLocation: {
    map: ROUTE_42,
    x: 29,
    y: 9,
  },
};
const ICE_PATH_B2FA: Map = {
  id: "ice-path-b2fa",
  name: "Ice Path (B2Fa)",
  type: "house",
  width: 20,
  height: 18,
  fileName: "ice-path-b2fa.png",
  parentLocation: {
    map: ROUTE_43,
    x: 29,
    y: 9,
  },
};
const ICE_PATH_B2FB: Map = {
  id: "ice-path-b2fb",
  name: "Ice Path (B2Fb)",
  type: "house",
  width: 10,
  height: 18,
  fileName: "ice-path-b2fb.png",
  parentLocation: {
    map: BLACKTHORN_CITY,
    x: 36,
    y: 9,
  },
};
const GOLDENROD_GYM: Map = {
  id: "goldenrod-gym",
  name: "Goldenrod Gym",
  type: "house",
  width: 20,
  height: 18,
  fileName: "goldenrod-gym.png",
  parentLocation: {
    map: GOLDENROD_CITY,
    x: 24,
    y: 7,
  },
};
const ROCKET_HIDEOUT_B1F: Map = {
  id: "rocket-hideout-b1f",
  name: "Rocket Hideout (B1F)",
  type: "house",
  width: 30,
  height: 18,
  fileName: "rocket-hideout-b1f.png",
  parentLocation: {
    map: MAHAGONY_TOWN,
    x: 11,
    y: 7,
  },
};
const ROCKET_HIDEOUT_B2F: Map = {
  id: "rocket-hideout-b2f",
  name: "Rocket Hideout (B2F)",
  type: "house",
  width: 30,
  height: 18,
  fileName: "rocket-hideout-b2f.png",
  parentLocation: {
    map: MAHAGONY_TOWN,
    x: 11,
    y: 7,
  },
};
const ROCKET_HIDEOUT_B3F: Map = {
  id: "rocket-hideout-b3f",
  name: "Rocket Hideout (B3F)",
  type: "house",
  width: 30,
  height: 18,
  fileName: "rocket-hideout-b3f.png",
  parentLocation: {
    map: MAHAGONY_TOWN,
    x: 11,
    y: 7,
  },
};
const ROUTE_28_HOUSE: Map = {
  id: "route-28-house",
  name: "Route 28 House",
  type: "house",
  width: 8,
  height: 8,
  fileName: "route-28-house.png",
  parentLocation: {
    map: ROUTE_28,
    x: 7,
    y: 3,
  },
};
const AZALEA_GYM: Map = {
  id: "azalea-gym",
  name: "Azalea Gym",
  type: "house",
  width: 10,
  height: 18,
  fileName: "azalea-gym.png", // unclean file size
  parentLocation: {
    map: AZALEA_TOWN,
    x: 10,
    y: 16,
  },
};
const POKEMON_CENTER_2F: Map = {
  id: "pokemon-center-2f",
  name: "Pokémon Center (2F)",
  type: "house",
  width: 16,
  height: 8,
  fileName: "pokemon-center-2f.png",
};
const ECRUTEAK_DANCE_THEATER: Map = {
  id: "ecruteak-dance-theater",
  name: "Ecruteak Dance Theater",
  type: "house",
  width: 12,
  height: 14,
  fileName: "ecruteak-dance-theater.png",
  parentLocation: {
    map: ECRUTEAK_CITY,
    x: 23,
    y: 21,
  },
};
const OLIVINE_CAFE: Map = {
  id: "olivine-cafe",
  name: "Olivine Café",
  type: "house",
  width: 8,
  height: 8,
  fileName: "olivine-cafe.png",
  parentLocation: {
    map: OLIVINE_CITY,
    x: 7,
    y: 21,
  },
};
const SPROUT_TOWER_1F: Map = {
  id: "sprout-tower-1f",
  name: "Sprout Tower (1F)",
  type: "house",
  width: 16,
  height: 16,
  fileName: "sprout-tower-1f.png",
  parentLocation: {
    map: VIOLET_CITY,
    x: 27,
    y: 7,
  },
};
const SPROUT_TOWER_2F: Map = {
  id: "sprout-tower-2f",
  name: "Sprout Tower (2F)",
  type: "house",
  width: 16,
  height: 16,
  fileName: "sprout-tower-2f.png",
  parentLocation: {
    map: VIOLET_CITY,
    x: 27,
    y: 7,
  },
};
const SPROUT_TOWER_3F: Map = {
  id: "sprout-tower-3f",
  name: "Sprout Tower (3F)",
  type: "house",
  width: 16,
  height: 16,
  fileName: "sprout-tower-3f.png",
  parentLocation: {
    map: VIOLET_CITY,
    x: 27,
    y: 7,
  },
};
const ICE_PATH_1F: Map = {
  id: "ice-path-1f",
  name: "Ice Path (1F)",
  type: "house",
  width: 40,
  height: 36,
  fileName: "ice-path-1f.png",
  parentLocation: {
    map: ROUTE_44,
    x: 56,
    y: 7,
  },
};
const ROUTE_27_HOUSE: Map = {
  id: "route-27-house",
  name: "Route 27 House",
  type: "house",
  width: 8,
  height: 8,
  fileName: "route-27-house.png",
  parentLocation: {
    map: ROUTE_27,
    x: 33,
    y: 7,
  },
};
const LAKE_OF_RAGE_HOUSE: Map = {
  id: "lake-of-rage-house",
  name: "Lake of Rage House",
  type: "house",
  width: 8,
  height: 8,
  fileName: "lake-of-rage-house.png",
  parentLocation: {
    map: LAKE_OF_RAGE,
    x: 6,
    y: 5,
  },
};
const GOLDENROD_RADIO_TOWER_3F: Map = {
  id: "goldenrod-radio-tower-3f",
  name: "Goldenrod Radio Tower (3F)",
  type: "house",
  width: 18,
  height: 8,
  fileName: "goldenrod-radio-tower-3f.png",
  parentLocation: {
    map: GOLDENROD_CITY,
    x: 5,
    y: 15,
  },
};
const DARK_CAVE_INNER: Map = {
  id: "dark-cave-inner",
  name: "Dark Cave (Inner)",
  type: "house",
  width: 30,
  height: 36,
  fileName: "dark-cave-inner.png",
  parentLocation: {
    map: ROUTE_45,
    x: 2,
    y: 5,
  },
};
const DARK_CAVE_OUTER: Map = {
  id: "dark-cave-outer",
  name: "Dark Cave (Outer)",
  type: "house",
  width: 30,
  height: 36,
  fileName: "dark-cave-outer.png",
  parentLocation: {
    map: ROUTE_31,
    x: 34,
    y: 5,
  },
};

export const MAPS = {
  // worlds
  JOHTO,
  KANTO,

  // routes and cities
  ROUTE_9,
  ROUTE_10,
  ROUTE_23,
  ROUTE_27,
  ROUTE_28,
  ROUTE_29,
  ROUTE_30,
  ROUTE_31,
  ROUTE_32,
  ROUTE_33,
  ROUTE_34,
  ROUTE_35,
  ROUTE_36,
  ROUTE_37,
  ROUTE_38,
  ROUTE_39,
  ROUTE_40,
  ROUTE_41,
  ROUTE_42,
  ROUTE_43,
  ROUTE_44,
  ROUTE_45,
  ROUTE_46,
  CIANWOOD_CITY,
  ILEX_FOREST,
  CELADON_CITY,
  FUCHSIA_CITY,
  GOLDENROD_CITY,
  SAFFRON_CITY,
  MAHAGONY_TOWN,
  AZALEA_TOWN,
  ECRUTEAK_CITY,
  OLIVINE_CITY,
  BLACKTHORN_CITY,
  NATIONAL_PARK,
  VIOLET_CITY,
  VERIDIAN_CITY,
  LAKE_OF_RAGE,
  ROCK_TUNNEL_1F,

  // houses
  CIANWOOD_GYM,
  CELADON_CONDOMINIUMS_4F,
  FUCHSIA_GYM,
  POWER_PLANT,
  CELADON_DEPARTMENT_STORE_3F,
  ROUTE_34_ENTRANCE,
  MOOMOO_FARM,
  GOLDENROD_GAME_CORNER,
  CELADON_GAME_CORNER,
  MR_PSYCHICS_HOUSE,
  MAHAGONY_GYM,
  SLOWPOKE_WELL_B2F,
  CELADON_GYM,
  BURNED_TOWER_B1F,
  GOLDENROD_DEPARTMENT_STORE_5F,
  OLIVINE_GYM,
  BLACKTHORN_GYM,
  VICTORY_ROAD_1F,
  ECRUTEAK_GYM,
  VIOLET_GYM,
  LIGHTHOUSE_5F,
  GOLDENROD_UNDERGROUND_WAREHOUSE,
  ROUTE_43_PASSAGE,
  UNION_CAVE_B1F,
  MT_MORTAR_2F,
  ICE_PATH_B2FA,
  ICE_PATH_B2FB,
  GOLDENROD_GYM,
  ROCKET_HIDEOUT_B1F,
  ROCKET_HIDEOUT_B2F,
  ROCKET_HIDEOUT_B3F,
  ROUTE_28_HOUSE,
  AZALEA_GYM,
  POKEMON_CENTER_2F,
  ECRUTEAK_DANCE_THEATER,
  OLIVINE_CAFE,
  SPROUT_TOWER_1F,
  SPROUT_TOWER_2F,
  SPROUT_TOWER_3F,
  ICE_PATH_1F,
  ROUTE_27_HOUSE,
  LAKE_OF_RAGE_HOUSE,
  GOLDENROD_RADIO_TOWER_3F,
  DARK_CAVE_INNER,
  DARK_CAVE_OUTER,
} as const;
