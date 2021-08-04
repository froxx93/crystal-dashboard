import { Machine } from '~/domains/Machine'
import maps from '~/assets/data/maps'

const data: Machine[] = [
  {
    id: 'hm01',
    type: 'hm',
    name: 'HM01',
    move: {
      name: 'Cut',
    },
    itemSources: [
      {
        type: 'npc',
        location: {
          map: maps.ILEX_FOREST,
          x: 7,
          y: 30,
        },
        conditions: [
          'Requires defeating Team Rocket in the Slowpoke Well',
          "Requires solving the Farfetch'd puzzle",
        ],
      },
    ],
  },
  {
    id: 'hm02',
    type: 'hm',
    name: 'HM02',
    move: {
      name: 'Fly',
    },
    itemSources: [
      {
        type: 'npc',
        location: {
          map: maps.CIANWOOD_CITY,
          x: 8,
          y: 46,
        },
        conditions: [
          'Requires defeating Chuck (gym leader of Cianwood City) to make NPC appear',
        ],
      },
    ],
  },
  {
    id: 'hm03',
    type: 'hm',
    name: 'HM03',
    move: {
      name: 'Surf',
    },
    itemSources: [
      {
        type: 'npc',
        location: {
          map: maps.ECRUTEAK_DANCE_THEATER,
          x: 7,
          y: 10,
        },
        conditions: [
          'Requires defeating all 5 Kimono Girls in the dance theater',
        ],
      },
    ],
  },
  {
    id: 'hm04',
    type: 'hm',
    name: 'HM04',
    move: {
      name: 'Strength',
    },
    itemSources: [
      {
        type: 'npc',
        location: {
          map: maps.OLIVINE_CAFE,
          x: 4,
          y: 3,
        },
      },
    ],
  },
  {
    id: 'hm05',
    type: 'hm',
    name: 'HM05',
    move: {
      name: 'Flash',
    },
    itemSources: [
      {
        type: 'npc',
        location: {
          map: maps.SPROUT_TOWER_3F,
          x: 8,
          y: 2,
        },
      },
    ],
  },
  {
    id: 'hm06',
    type: 'hm',
    name: 'HM06',
    move: {
      name: 'Whirlpool',
    },
    itemSources: [
      {
        type: 'npc',
        location: {
          map: maps.ROCKET_HIDEOUT_B2F,
          x: 5,
          y: 13,
        },
        conditions: ['Reveicing HM from Lance after defeating Team Rocket'],
      },
    ],
  },
  {
    id: 'hm07',
    type: 'hm',
    name: 'HM07',
    move: {
      name: 'Waterfall',
    },
    itemSources: [
      {
        type: 'field-item',
        location: {
          map: maps.ICE_PATH_1F,
          x: 31,
          y: 7,
        },
      },
    ],
  },
  {
    id: 'tm01',
    type: 'tm',
    name: 'TM01',
    move: {
      name: 'Dynamic Punch',
    },
    itemSources: [
      {
        type: 'gym-leader',
        location: {
          map: maps.CIANWOOD_GYM,
          x: 4,
          y: 1,
        },
        conditions: [
          'Reward for defeating Chuck (gym leader of Cianwood City)',
          'Requires HM03 (Surf)',
          'Requires HM04 (Strength)',
        ],
      },
    ],
  },
  {
    id: 'tm02',
    type: 'tm',
    name: 'TM02',
    move: {
      name: 'Headbutt',
    },
    itemSources: [
      {
        type: 'npc',
        location: {
          map: maps.ILEX_FOREST,
          x: 17,
          y: 16,
        },
      },
      {
        type: 'npc',
        location: {
          map: maps.GOLDENROD_DEPARTMENT_STORE_5F,
          x: 8,
          y: 5,
        },
        conditions: [
          'Requires to have the TM gotten from the NPC in Ilex Forest before',
          'Can be bought for 2.000 pokédollar',
        ],
      },
    ],
  },
  {
    id: 'tm03',
    type: 'tm',
    name: 'TM03',
    move: {
      name: 'Curse',
    },
    itemSources: [
      {
        type: 'field-item',
        location: {
          map: maps.CELADON_CONDOMINIUMS_4F,
          x: 4,
          y: 3,
        },
        conditions: ['Only during night time'],
      },
    ],
  },
  {
    id: 'tm04',
    type: 'tm',
    name: 'TM04',
    move: {
      name: 'Rollout',
    },
    itemSources: [
      {
        type: 'field-item',
        location: {
          map: maps.ROUTE_35,
          x: 14,
          y: 16,
        },
      },
    ],
  },
  {
    id: 'tm05',
    type: 'tm',
    name: 'TM05',
    move: {
      name: 'Roar',
    },
    itemSources: [
      {
        type: 'npc',
        location: {
          map: maps.ROUTE_32,
          x: 15,
          y: 13,
        },
        conditions: ['Requires HM01 (Cut)'],
      },
    ],
  },
  {
    id: 'tm06',
    type: 'tm',
    name: 'TM06',
    move: {
      name: 'Toxic',
    },
    itemSources: [
      {
        type: 'gym-leader',
        location: {
          map: maps.FUCHSIA_GYM,
          x: 1,
          y: 10,
        },
        conditions: [
          'Reward for defeating Janine (gym leader of Fuchsia City)',
          'Requires Kanto access',
        ],
      },
    ],
  },
  {
    id: 'tm07',
    type: 'tm',
    name: 'TM07',
    move: {
      name: 'Zap Cannon',
    },
    itemSources: [
      {
        type: 'npc',
        location: {
          map: maps.POWER_PLANT,
          x: 14,
          y: 10,
        },
        conditions: [
          'Reward from the director of the Power Plant after bringing back the Machine Part from the Cerulean Gym',
          'Requires Kanto access',
          'Requires HM01 (Cut)',
          'Requires HM03 (Surf)',
        ],
      },
    ],
  },
  {
    id: 'tm08',
    type: 'tm',
    name: 'TM08',
    move: {
      name: 'Rock Smash',
    },
    itemSources: [
      {
        type: 'npc',
        location: {
          map: maps.ROUTE_36,
          x: 30,
          y: 9,
        },
        conditions: [
          'Reward from an NPC after removing the static Sudowoodo encounter on Route 36',
          'Requires Squirt Bottle',
        ],
      },
      {
        type: 'npc',
        location: {
          map: maps.GOLDENROD_DEPARTMENT_STORE_5F,
          x: 8,
          y: 5,
        },
        conditions: [
          'Requires to have the TM gotten from the NPC on Route 36 before',
          'Can be bought for 1.000 pokédollar',
        ],
      },
    ],
  },
  {
    id: 'tm09',
    type: 'tm',
    name: 'TM09',
    move: {
      name: 'Psych Up',
    },
    itemSources: [
      {
        type: 'other',
        location: {
          map: maps.POKEMON_CENTER_2F,
          x: 13,
          y: 3,
        },
        conditions: [
          'Held by traded Abras / Kadabras from generation 1 games',
          'Requires to have beaten Morty (gym leader of Ecruteak City)',
          'Requires to have entered the Pokémon Center in Ecruteak City to trigger Bill and unlock the Time Capsule',
        ],
      },
    ],
  },
  {
    id: 'tm10',
    type: 'tm',
    name: 'TM10',
    move: {
      name: 'Hidden Power',
    },
    itemSources: [
      {
        type: 'npc',
        location: {
          map: maps.LAKE_OF_RAGE_HOUSE,
          x: 2,
          y: 3,
        },
        conditions: ['Requires HM01 (Cut)'],
      },
      {
        type: 'npc',
        location: {
          map: maps.CELADON_DEPARTMENT_STORE_3F,
          x: 7,
          y: 1,
        },
        conditions: [
          'Can be bought for 3.000 pokédollar',
          'Requires Kanto access',
        ],
      },
    ],
  },
  {
    id: 'tm11',
    type: 'tm',
    name: 'TM11',
    move: {
      name: 'Sunny Day',
    },
    itemSources: [
      {
        type: 'npc',
        location: {
          map: maps.GOLDENROD_RADIO_TOWER_3F,
          x: 11,
          y: 3,
        },
        conditions: ['Reward for defeating Team Rocket'],
      },
      {
        type: 'npc',
        location: {
          map: maps.CELADON_DEPARTMENT_STORE_3F,
          x: 7,
          y: 1,
        },
        conditions: [
          'Can be bought for 2.000 pokédollar',
          'Requires Kanto access',
        ],
      },
    ],
  },
  {
    id: 'tm12',
    type: 'tm',
    name: 'TM12',
    move: {
      name: 'Sweet Scent',
    },
    itemSources: [
      {
        type: 'npc',
        location: {
          map: maps.ROUTE_34_ENTRANCE,
          x: 9,
          y: 3,
        },
      },
    ],
  },
  {
    id: 'tm13',
    type: 'tm',
    name: 'TM13',
    move: {
      name: 'Snore',
    },
    itemSources: [
      {
        type: 'npc',
        location: {
          map: maps.MOOMOO_FARM,
          x: 4,
          y: 3,
        },
        conditions: ['Reward for feeding the sick Miltank 7 Berries'],
      },
      {
        type: 'field-item',
        location: {
          map: maps.DARK_CAVE_INNER,
          x: 7,
          y: 22,
        },
        conditions: ['Requires HM03 (Surf)', 'Requires HM04 (Strength)'],
      },
    ],
  },
  {
    id: 'tm14',
    type: 'tm',
    name: 'TM14',
    move: {
      name: 'Blizzard',
    },
    itemSources: [
      {
        type: 'game-corner',
        location: {
          map: maps.GOLDENROD_GAME_CORNER,
          x: 16,
          y: 2,
        },
        conditions: ['Can be bought for 5.500 Coins', 'Requires Coin Case'],
      },
    ],
  },
  {
    id: 'tm15',
    type: 'tm',
    name: 'TM15',
    move: {
      name: 'Hyper Beam',
    },
    itemSources: [
      {
        type: 'game-corner',
        location: {
          map: maps.CELADON_GAME_CORNER,
          x: 2,
          y: 1,
        },
        conditions: [
          'Can be bought for 7.500 Coins',
          'Requires Coin Case',
          'Requires Kanto access',
        ],
      },
    ],
  },
  {
    id: 'tm16',
    type: 'tm',
    name: 'TM16',
    move: {
      name: 'Icy Wind',
    },
    itemSources: [
      {
        type: 'gym-leader',
        location: {
          map: maps.MAHAGONY_GYM,
          x: 5,
          y: 3,
        },
        conditions: [
          'Reward for defeating Pryce (gym leader of Magahony City)',
          'Requires HM03 (Surf) or(!) HM04 (Strength)',
        ],
      },
    ],
  },
  {
    id: 'tm17',
    type: 'tm',
    name: 'TM17',
    move: {
      name: 'Protect',
    },
    itemSources: [
      {
        type: 'npc',
        location: {
          map: maps.CELADON_DEPARTMENT_STORE_3F,
          x: 7,
          y: 1,
        },
        conditions: [
          'Can be bought for 3.000 pokédollar',
          'Requires Kanto access',
        ],
      },
    ],
  },
  {
    id: 'tm18',
    type: 'tm',
    name: 'TM18',
    move: {
      name: 'Rain Dance',
    },
    itemSources: [
      {
        type: 'field-item',
        location: {
          map: maps.SLOWPOKE_WELL_B2F,
          x: 15,
          y: 5,
        },
        conditions: ['Requires HM03 (Surf)', 'Requires HM04 (Strength)'],
      },
    ],
  },
  {
    id: 'tm19',
    type: 'tm',
    name: 'TM19',
    move: {
      name: 'Giga Drain',
    },
    itemSources: [
      {
        type: 'gym-leader',
        location: {
          map: maps.CELADON_GYM,
          x: 5,
          y: 3,
        },
        conditions: ['Requires Kanto Access', 'Requires HM01 (Cut)'],
      },
    ],
  },
  {
    id: 'tm20',
    type: 'tm',
    name: 'TM20',
    move: {
      name: 'Endure',
    },
    itemSources: [
      {
        type: 'field-item',
        location: {
          map: maps.BURNED_TOWER_B1F,
          x: 16,
          y: 4,
        },
        conditions: ['Requires HM04 (Strength)'],
      },
    ],
  },
  {
    id: 'tm21',
    type: 'tm',
    name: 'TM21',
    move: {
      name: 'Frustration',
    },
    itemSources: [
      {
        type: 'npc',
        location: {
          map: maps.GOLDENROD_DEPARTMENT_STORE_5F,
          x: 7,
          y: 5,
        },
        conditions: ['Sunday only', 'Must carry a Pokémon disliking you'],
      },
    ],
  },
  {
    id: 'tm22',
    type: 'tm',
    name: 'TM22',
    move: {
      name: 'Solar Beam',
    },
    itemSources: [
      {
        type: 'field-item',
        location: {
          map: maps.ROUTE_27,
          x: 60,
          y: 12,
        },
        conditions: ['Requires HM03 (Surf)', 'Requires HM06 (Whirlpool)'],
      },
    ],
  },
  {
    id: 'tm23',
    type: 'tm',
    name: 'TM23',
    move: {
      name: 'Iron Tail',
    },
    itemSources: [
      {
        type: 'gym-leader',
        location: {
          map: maps.OLIVINE_GYM,
          x: 5,
          y: 3,
        },
        conditions: [
          'Reward for defeating Jasmine (gym leader of Olivine City)',
          'Requires giving the Secret Potion to the sick Ampharos in the Light House',
        ],
      },
    ],
  },
  {
    id: 'tm24',
    type: 'tm',
    name: 'TM24',
    move: {
      name: 'Dragon Breath',
    },
    itemSources: [
      {
        type: 'gym-leader',
        location: {
          map: maps.BLACKTHORN_GYM,
          x: 5,
          y: 3,
        },
        conditions: [
          'Reward for defeating Clair (gym leader of Blackthorn City)',
          'Requires HM04 (Strength)',
        ],
      },
    ],
  },
  {
    id: 'tm25',
    type: 'tm',
    name: 'TM25',
    move: {
      name: 'Thunder',
    },
    itemSources: [
      {
        type: 'game-corner',
        location: {
          map: maps.GOLDENROD_GAME_CORNER,
          x: 16,
          y: 2,
        },
        conditions: ['Can be bought for 5.500 Coins', 'Requires Coin Case'],
      },
    ],
  },
  {
    id: 'tm26',
    type: 'tm',
    name: 'TM26',
    move: {
      name: 'Earthquake',
    },
    itemSources: [
      {
        type: 'field-item',
        location: {
          map: maps.VICTORY_ROAD_1F,
          x: 3,
          y: 4,
        },
      },
    ],
  },
  {
    id: 'tm27',
    type: 'tm',
    name: 'TM27',
    move: {
      name: 'Return',
    },
    itemSources: [
      {
        type: 'npc',
        location: {
          map: maps.GOLDENROD_DEPARTMENT_STORE_5F,
          x: 7,
          y: 5,
        },
        conditions: ['Sunday only', 'Must carry a Pokémon liking you'],
      },
    ],
  },
  {
    id: 'tm28',
    type: 'tm',
    name: 'TM28',
    move: {
      name: 'Dig',
    },
    itemSources: [
      {
        type: 'field-item',
        location: {
          map: maps.NATIONAL_PARK,
          x: 3,
          y: 43,
        },
      },
    ],
  },
  {
    id: 'tm29',
    type: 'tm',
    name: 'TM29',
    move: {
      name: 'Psychic',
    },
    itemSources: [
      {
        type: 'npc',
        location: {
          map: maps.MR_PSYCHICS_HOUSE,
          x: 5,
          y: 3,
        },
        conditions: ['Requires Kanto access'],
      },
      {
        type: 'game-corner',
        location: {
          map: maps.CELADON_GAME_CORNER,
          x: 2,
          y: 1,
        },
        conditions: [
          'Can be bought for 3.500 Coins',
          'Requires Coin Case',
          'Requires Kanto access',
        ],
      },
    ],
  },
  {
    id: 'tm30',
    type: 'tm',
    name: 'TM30',
    move: {
      name: 'Shadow Ball',
    },
    itemSources: [
      {
        type: 'gym-leader',
        location: {
          map: maps.ECRUTEAK_GYM,
          x: 5,
          y: 1,
        },
        conditions: [
          'Reward for defeating Morty (gym leader of Ecruteak City)',
          'Requires to have the legendary dogs triggered in the Burned Tower',
        ],
      },
    ],
  },
  {
    id: 'tm31',
    type: 'tm',
    name: 'TM31',
    move: {
      name: 'Mud-Slap',
    },
    itemSources: [
      {
        type: 'gym-leader',
        location: {
          map: maps.VIOLET_GYM,
          x: 5,
          y: 1,
        },
        conditions: [
          'Reward for defeating Falkner (gym leader of Violet City)',
        ],
      },
    ],
  },
  {
    id: 'tm32',
    type: 'tm',
    name: 'TM32',
    move: {
      name: 'Double Team',
    },
    itemSources: [
      {
        type: 'game-corner',
        location: {
          map: maps.CELADON_GAME_CORNER,
          x: 2,
          y: 1,
        },
        conditions: [
          'Can be bought for 1.500 Coins',
          'Requires Coin Case',
          'Requires Kanto access',
        ],
      },
    ],
  },
  {
    id: 'tm33',
    type: 'tm',
    name: 'TM33',
    move: {
      name: 'Ice Punch',
    },
    itemSources: [
      {
        type: 'npc',
        location: {
          map: maps.GOLDENROD_DEPARTMENT_STORE_5F,
          x: 8,
          y: 5,
        },
        conditions: ['Can be bought for 3.000 pokédollar'],
      },
    ],
  },
  {
    id: 'tm34',
    type: 'tm',
    name: 'TM34',
    move: {
      name: 'Swagger',
    },
    itemSources: [
      {
        type: 'field-item',
        location: {
          map: maps.LIGHTHOUSE_5F,
          x: 2,
          y: 13,
        },
        conditions: ['Can be bought for 3.000 pokédollar'],
      },
    ],
  },
  {
    id: 'tm35',
    type: 'tm',
    name: 'TM35',
    move: {
      name: 'Sleep Talk',
    },
    itemSources: [
      {
        type: 'field-item',
        location: {
          map: maps.GOLDENROD_UNDERGROUND_WAREHOUSE,
          x: 13,
          y: 9,
        },
      },
    ],
  },
  {
    id: 'tm36',
    type: 'tm',
    name: 'TM36',
    move: {
      name: 'Sludge Bomb',
    },
    itemSources: [
      {
        type: 'npc',
        location: {
          map: maps.ROUTE_43_PASSAGE,
          x: 0,
          y: 4,
        },
        conditions: [
          'Obtainable after defeating Team Rocket',
          'Requires HM03 (Surf) or(!) HM04 (Strength)',
        ],
      },
    ],
  },
  {
    id: 'tm37',
    type: 'tm',
    name: 'TM37',
    move: {
      name: 'Sandstorm',
    },
    itemSources: [
      {
        type: 'npc',
        location: {
          map: maps.ROUTE_27_HOUSE,
          x: 2,
          y: 4,
        },
        conditions: ['Must carry a Pokémon liking you', 'Requires HM03 (Surf)'],
      },
      {
        type: 'npc',
        location: {
          map: maps.CELADON_DEPARTMENT_STORE_3F,
          x: 7,
          y: 1,
        },
        conditions: [
          'Can be bought for 2.000 pokédollar',
          'Requires Kanto access',
        ],
      },
    ],
  },
  {
    id: 'tm38',
    type: 'tm',
    name: 'TM38',
    move: {
      name: 'Fire Blast',
    },
    itemSources: [
      {
        type: 'game-corner',
        location: {
          map: maps.GOLDENROD_GAME_CORNER,
          x: 16,
          y: 2,
        },
        conditions: ['Can be bought for 5.500 Coins', 'Requires Coin Case'],
      },
    ],
  },
  {
    id: 'tm39',
    type: 'tm',
    name: 'TM39',
    move: {
      name: 'Swift',
    },
    itemSources: [
      {
        type: 'npc',
        location: {
          map: maps.UNION_CAVE_B1F,
          x: 2,
          y: 16,
        },
      },
    ],
  },
  {
    id: 'tm40',
    type: 'tm',
    name: 'TM40',
    move: {
      name: 'Defense Curl',
    },
    itemSources: [
      {
        type: 'field-item',
        location: {
          map: maps.MT_MORTAR_2F,
          x: 19,
          y: 17,
        },
        conditions: ['Requires HM03 (Surf)', 'Requires HM07 (Waterfall)'],
      },
    ],
  },
  {
    id: 'tm41',
    type: 'tm',
    name: 'TM41',
    move: {
      name: 'Thunder Punch',
    },
    itemSources: [
      {
        type: 'npc',
        location: {
          map: maps.GOLDENROD_DEPARTMENT_STORE_5F,
          x: 8,
          y: 5,
        },
        conditions: ['Can be bought for 3.000 pokédollar'],
      },
    ],
  },
  {
    id: 'tm42',
    type: 'tm',
    name: 'TM42',
    move: {
      name: 'Dream Eater',
    },
    itemSources: [
      {
        type: 'npc',
        location: {
          map: maps.VERIDIAN_CITY,
          x: 6,
          y: 23,
        },
        conditions: ['Requires Kanto access', 'Requires HM01 (Cut)'],
      },
    ],
  },
  {
    id: 'tm43',
    type: 'tm',
    name: 'TM43',
    move: {
      name: 'Detect',
    },
    itemSources: [
      {
        type: 'field-item',
        location: {
          map: maps.LAKE_OF_RAGE,
          x: 34,
          y: 4,
        },
        conditions: ['Requires HM01 (Cut)'],
      },
    ],
  },
  {
    id: 'tm44',
    type: 'tm',
    name: 'TM44',
    move: {
      name: 'Rest',
    },
    itemSources: [
      {
        type: 'field-item',
        location: {
          map: maps.ICE_PATH_B2FB,
          x: 8,
          y: 16,
        },
        conditions: ['Requires HM04 (Strength)'],
      },
    ],
  },
  {
    id: 'tm45',
    type: 'tm',
    name: 'TM45',
    move: {
      name: 'Attract',
    },
    itemSources: [
      {
        type: 'gym-leader',
        location: {
          map: maps.GOLDENROD_GYM,
          x: 8,
          y: 3,
        },
      },
    ],
  },
  {
    id: 'tm46',
    type: 'tm',
    name: 'TM46',
    move: {
      name: 'Thief',
    },
    itemSources: [
      {
        type: 'field-item',
        location: {
          map: maps.ROCKET_HIDEOUT_B2F,
          x: 3,
          y: 10,
        },
      },
    ],
  },
  {
    id: 'tm47',
    type: 'tm',
    name: 'TM47',
    move: {
      name: 'Steel Wing',
    },
    itemSources: [
      {
        type: 'field-item',
        location: {
          map: maps.ROUTE_28_HOUSE,
          x: 2,
          y: 3,
        },
        conditions: ['Requires HM01 (Cut)', 'Requires Kanto access'],
      },
      {
        type: 'field-item',
        location: {
          map: maps.ROCK_TUNNEL_1F,
          x: 9,
          y: 14,
        },
        conditions: ['Requires Kanto access'],
      },
    ],
  },
  {
    id: 'tm48',
    type: 'tm',
    name: 'TM48',
    move: {
      name: 'Fire Punch',
    },
    itemSources: [
      {
        type: 'npc',
        location: {
          map: maps.GOLDENROD_DEPARTMENT_STORE_5F,
          x: 8,
          y: 5,
        },
        conditions: ['Can be bought for 3.000 pokédollar'],
      },
    ],
  },
  {
    id: 'tm49',
    type: 'tm',
    name: 'TM49',
    move: {
      name: 'Fury Cutter',
    },
    itemSources: [
      {
        type: 'gym-leader',
        location: {
          map: maps.AZALEA_GYM,
          x: 5,
          y: 8,
        },
        conditions: ['Can be bought for 3.000 pokédollar'],
      },
    ],
  },
  {
    id: 'tm50',
    type: 'tm',
    name: 'TM50',
    move: {
      name: 'Nightmare',
    },
    itemSources: [
      {
        type: 'npc',
        location: {
          map: maps.ROUTE_31,
          x: 17,
          y: 7,
        },
        conditions: [
          'Bring any Pokémon holding the Flower Letter from the Spearow from Goldenrod North Gate',
        ],
      },
    ],
  },
]

export default data
