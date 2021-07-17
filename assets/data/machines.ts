import { Machine } from '~/domains/Machine'
import maps from '~/domains/Maps'

const data: Machine[] = [
  {
    id: 'hm01',
    name: 'HM01',
    move: {
      name: 'Cut',
    },
    itemSource: {
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
  },
  {
    id: 'hm02',
    name: 'HM02',
    move: {
      name: 'Fly',
    },
    itemSource: {
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
  },
  {
    id: 'hm03',
    name: 'HM03',
    move: {
      name: 'Surf',
    },
    itemSource: {
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
  },
  {
    id: 'hm04',
    name: 'HM04',
    move: {
      name: 'Strength',
    },
    itemSource: {
      type: 'npc',
      location: {
        map: maps.OLIVINE_CAFE,
        x: 4,
        y: 3,
      },
    },
  },
  {
    id: 'hm05',
    name: 'HM05',
    move: {
      name: 'Flash',
    },
    itemSource: {
      type: 'npc',
      location: {
        map: maps.SPROUT_TOWER_3F,
        x: 8,
        y: 2,
      },
    },
  },
  {
    id: 'hm06',
    name: 'HM06',
    move: {
      name: 'Whirlpool',
    },
    itemSource: {
      type: 'npc',
      location: {
        map: maps.ROCKET_HIDEOUT_B2F,
        x: 5,
        y: 13,
      },
      conditions: ['Reveicing HM from Lance after defeating Team Rocket'],
    },
  },
  {
    id: 'hm07',
    name: 'HM07',
    move: {
      name: 'Waterfall',
    },
    itemSource: {
      type: 'field-item',
      location: {
        map: maps.ICE_PATH_1F,
        x: 31,
        y: 7,
      },
    },
  },
  {
    id: 'tm01',
    name: 'TM01',
    move: {
      name: 'Dynamic Punch',
    },
    itemSource: {
      type: 'npc',
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
  },
  {
    id: 'tm02',
    name: 'TM02',
    move: {
      name: 'Headbutt',
    },
    itemSource: {
      type: 'npc',
      location: {
        map: maps.ILEX_FOREST,
        x: 17,
        y: 16,
      },
    },
  },
  {
    id: 'tm03',
    name: 'TM03',
    move: {
      name: 'Curse',
    },
    itemSource: {
      type: 'field-item',
      location: {
        map: maps.CELADON_CONDOMINIUMS_4F,
        x: 4,
        y: 3,
      },
      conditions: ['Only during night time'],
    },
  },
  {
    id: 'tm04',
    name: 'TM04',
    move: {
      name: 'Rollout',
    },
    itemSource: {
      type: 'field-item',
      location: {
        map: maps.ROUTE_35,
        x: 14,
        y: 16,
      },
    },
  },
  {
    id: 'tm05',
    name: 'TM05',
    move: {
      name: 'Roar',
    },
    itemSource: {
      type: 'npc',
      location: {
        map: maps.ROUTE_32,
        x: 15,
        y: 13,
      },
      conditions: ['Requires HM01 (Cut)'],
    },
  },
  {
    id: 'tm06',
    name: 'TM06',
    move: {
      name: 'Toxic',
    },
    itemSource: {
      type: 'npc',
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
  },
  {
    id: 'tm07',
    name: 'TM07',
    move: {
      name: 'Zap Cannon',
    },
    itemSource: {
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
  },
  {
    id: 'tm08',
    name: 'TM08',
    move: {
      name: 'Rock Smash',
    },
    itemSource: {
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
  },
  {
    id: 'tm09',
    name: 'TM09',
    move: {
      name: 'Psych Up',
    },
    itemSource: {
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
  },
  {
    id: 'tm10',
    name: 'TM10',
    move: {
      name: 'Hidden Power',
    },
    itemSource: {
      type: 'npc',
      location: {
        map: maps.CELADON_DEPARTMENT_STORE_3F,
        x: 7,
        y: 1,
      },
      conditions: [
        'Can be bought for 3.000 Pokédollar',
        'Requires Kanto access',
      ],
    },
  },
  {
    id: 'tm11',
    name: 'TM11',
    move: {
      name: 'Sunny Day',
    },
    itemSource: {
      type: 'npc',
      location: {
        map: maps.CELADON_DEPARTMENT_STORE_3F,
        x: 7,
        y: 1,
      },
      conditions: [
        'Can be bought for 2.000 Pokédollar',
        'Requires Kanto access',
      ],
    },
  },
  {
    id: 'tm12',
    name: 'TM12',
    move: {
      name: 'Sweet Scent',
    },
    itemSource: {
      type: 'npc',
      location: {
        map: maps.ROUTE_34_ENTRANCE,
        x: 9,
        y: 3,
      },
    },
  },
  {
    id: 'tm13',
    name: 'TM13',
    move: {
      name: 'Snore',
    },
    itemSource: {
      type: 'npc',
      location: {
        map: maps.MOOMOO_FARM,
        x: 4,
        y: 3,
      },
      conditions: ['Reward for feeding the sick Miltank 7 Berries'],
    },
  },
  {
    id: 'tm14',
    name: 'TM14',
    move: {
      name: 'Blizzard',
    },
    itemSource: {
      type: 'npc',
      location: {
        map: maps.GOLDENROD_GAME_CORNER,
        x: 16,
        y: 2,
      },
      conditions: ['Can be bought for 5.500 Coins', 'Requires Coin Case'],
    },
  },
  {
    id: 'tm15',
    name: 'TM15',
    move: {
      name: 'Hyper Beam',
    },
    itemSource: {
      type: 'npc',
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
  },
  {
    id: 'tm16',
    name: 'TM16',
    move: {
      name: 'Icy Wind',
    },
    itemSource: {
      type: 'npc',
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
  },
  {
    id: 'tm17',
    name: 'TM17',
    move: {
      name: 'Protect',
    },
    itemSource: {
      type: 'npc',
      location: {
        map: maps.CELADON_DEPARTMENT_STORE_3F,
        x: 7,
        y: 1,
      },
      conditions: [
        'Can be bought for 3.000 Pokédollar',
        'Requires Kanto access',
      ],
    },
  },
  {
    id: 'tm18',
    name: 'TM18',
    move: {
      name: 'Rain Dance',
    },
    itemSource: {
      type: 'field-item',
      location: {
        map: maps.SLOWPOKE_WELL_B2F,
        x: 15,
        y: 5,
      },
      conditions: ['Requires HM03 (Surf)', 'Requires HM04 (Strength)'],
    },
  },
  {
    id: 'tm19',
    name: 'TM19',
    move: {
      name: 'Giga Drain',
    },
    itemSource: {
      type: 'npc',
      location: {
        map: maps.CELADON_GYM,
        x: 5,
        y: 3,
      },
      conditions: ['Requires Kanto Access', 'Requires HM01 (Cut)'],
    },
  },
  {
    id: 'tm20',
    name: 'TM20',
    move: {
      name: 'Endure',
    },
    itemSource: {
      type: 'field-item',
      location: {
        map: maps.BURNED_TOWER_B1F,
        x: 16,
        y: 4,
      },
      conditions: ['Requires HM04 (Strength)'],
    },
  },
  {
    id: 'tm21',
    name: 'TM21',
    move: {
      name: 'Frustration',
    },
    itemSource: {
      type: 'npc',
      location: {
        map: maps.GOLDENROD_DEPARTMENT_STORE_5F,
        x: 7,
        y: 5,
      },
      conditions: ['Sunday only', 'Must carry a Pokémon disliking you'],
    },
  },
  {
    id: 'tm22',
    name: 'TM22',
    move: {
      name: 'Solar Beam',
    },
    itemSource: {
      type: 'field-item',
      location: {
        map: maps.ROUTE_27,
        x: 60,
        y: 12,
      },
      conditions: ['Requires HM03 (Surf)', 'Requires HM06 (Whirlpool)'],
    },
  },
  {
    id: 'tm23',
    name: 'TM23',
    move: {
      name: 'Iron Tail',
    },
    itemSource: {
      type: 'npc',
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
  },
  {
    id: 'tm24',
    name: 'TM24',
    move: {
      name: 'Dragon Breath',
    },
    itemSource: {
      type: 'npc',
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
  },
  {
    id: 'tm25',
    name: 'TM25',
    move: {
      name: 'Thunder',
    },
    itemSource: {
      type: 'npc',
      location: {
        map: maps.GOLDENROD_GAME_CORNER,
        x: 16,
        y: 2,
      },
      conditions: ['Can be bought for 5.500 Coins', 'Requires Coin Case'],
    },
  },
  {
    id: 'tm26',
    name: 'TM26',
    move: {
      name: 'Earthquake',
    },
    itemSource: {
      type: 'field-item',
      location: {
        map: maps.VICTORY_ROAD_1F,
        x: 3,
        y: 4,
      },
    },
  },
  {
    id: 'tm27',
    name: 'TM27',
    move: {
      name: 'Return',
    },
    itemSource: {
      type: 'npc',
      location: {
        map: maps.GOLDENROD_DEPARTMENT_STORE_5F,
        x: 7,
        y: 5,
      },
      conditions: ['Sunday only', 'Must carry a Pokémon liking you'],
    },
  },
  {
    id: 'tm28',
    name: 'TM28',
    move: {
      name: 'Dig',
    },
    itemSource: {
      type: 'field-item',
      location: {
        map: maps.NATIONAL_PARK,
        x: 3,
        y: 43,
      },
    },
  },
  {
    id: 'tm29',
    name: 'TM29',
    move: {
      name: 'Psychic',
    },
    itemSource: {
      type: 'npc',
      location: {
        map: maps.MR_PSYCHICS_HOUSE,
        x: 5,
        y: 3,
      },
      conditions: ['Requires Kanto access'],
    },
  },
  {
    id: 'tm30',
    name: 'TM30',
    move: {
      name: 'Shadow Ball',
    },
    itemSource: {
      type: 'npc',
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
  },
  {
    id: 'tm31',
    name: 'TM31',
    move: {
      name: 'Mud-Slap',
    },
    itemSource: {
      type: 'npc',
      location: {
        map: maps.VIOLET_GYM,
        x: 5,
        y: 1,
      },
      conditions: ['Reward for defeating Falkner (gym leader of Violet City)'],
    },
  },
  {
    id: 'tm32',
    name: 'TM32',
    move: {
      name: 'Double Team',
    },
    itemSource: {
      type: 'npc',
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
  },
  {
    id: 'tm33',
    name: 'TM33',
    move: {
      name: 'Ice Punch',
    },
    itemSource: {
      type: 'npc',
      location: {
        map: maps.GOLDENROD_DEPARTMENT_STORE_5F,
        x: 8,
        y: 5,
      },
      conditions: ['Can be bought for 3.000 Pokédollar'],
    },
  },
  {
    id: 'tm34',
    name: 'TM34',
    move: {
      name: 'Swagger',
    },
    itemSource: {
      type: 'field-item',
      location: {
        map: maps.LIGHTHOUSE_5F,
        x: 2,
        y: 13,
      },
      conditions: ['Can be bought for 3.000 Pokédollar'],
    },
  },
  {
    id: 'tm35',
    name: 'TM35',
    move: {
      name: 'Sleep Talk',
    },
    itemSource: {
      type: 'field-item',
      location: {
        map: maps.GOLDENROD_UNDERGROUND_WAREHOUSE,
        x: 13,
        y: 9,
      },
    },
  },
  {
    id: 'tm36',
    name: 'TM36',
    move: {
      name: 'Sludge Bomb',
    },
    itemSource: {
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
  },
  {
    id: 'tm37',
    name: 'TM37',
    move: {
      name: 'Sandstorm',
    },
    itemSource: {
      type: 'npc',
      location: {
        map: maps.CELADON_DEPARTMENT_STORE_3F,
        x: 7,
        y: 1,
      },
      conditions: [
        'Can be bought for 2.000 Pokédollar',
        'Requires Kanto access',
      ],
    },
  },
  {
    id: 'tm38',
    name: 'TM38',
    move: {
      name: 'Fire Blast',
    },
    itemSource: {
      type: 'npc',
      location: {
        map: maps.GOLDENROD_GAME_CORNER,
        x: 16,
        y: 2,
      },
      conditions: ['Can be bought for 5.500 Coins', 'Requires Coin Case'],
    },
  },
  {
    id: 'tm39',
    name: 'TM39',
    move: {
      name: 'Swift',
    },
    itemSource: {
      type: 'npc',
      location: {
        map: maps.UNION_CAVE_B1F,
        x: 2,
        y: 16,
      },
    },
  },
  {
    id: 'tm40',
    name: 'TM40',
    move: {
      name: 'Defense Curl',
    },
    itemSource: {
      type: 'field-item',
      location: {
        map: maps.MT_MORTAR_2F,
        x: 19,
        y: 17,
      },
      conditions: ['Requires HM03 (Surf)', 'Requires HM07 (Waterfall)'],
    },
  },
  {
    id: 'tm41',
    name: 'TM41',
    move: {
      name: 'Thunder Punch',
    },
    itemSource: {
      type: 'npc',
      location: {
        map: maps.GOLDENROD_DEPARTMENT_STORE_5F,
        x: 8,
        y: 5,
      },
      conditions: ['Can be bought for 3.000 Pokédollar'],
    },
  },
  {
    id: 'tm42',
    name: 'TM42',
    move: {
      name: 'Dream Eater',
    },
    itemSource: {
      type: 'npc',
      location: {
        map: maps.VERIDIAN_CITY,
        x: 6,
        y: 23,
      },
      conditions: ['Requires Kanto access', 'Requires HM01 (Cut)'],
    },
  },
  {
    id: 'tm43',
    name: 'TM43',
    move: {
      name: 'Detect',
    },
    itemSource: {
      type: 'field-item',
      location: {
        map: maps.LAKE_OF_RAGE,
        x: 34,
        y: 4,
      },
      conditions: ['Requires HM01 (Cut)'],
    },
  },
  {
    id: 'tm44',
    name: 'TM44',
    move: {
      name: 'Rest',
    },
    itemSource: {
      type: 'field-item',
      location: {
        map: maps.ICE_PATH_B2FB,
        x: 8,
        y: 16,
      },
      conditions: ['Requires HM04 (Strength)'],
    },
  },
  {
    id: 'tm45',
    name: 'TM45',
    move: {
      name: 'Attract',
    },
    itemSource: {
      type: 'npc',
      location: {
        map: maps.GOLDENROD_GYM,
        x: 8,
        y: 3,
      },
    },
  },
  {
    id: 'tm46',
    name: 'TM46',
    move: {
      name: 'Thief',
    },
    itemSource: {
      type: 'field-item',
      location: {
        map: maps.ROCKET_HIDEOUT_B2F,
        x: 3,
        y: 10,
      },
    },
  },
  {
    id: 'tm47',
    name: 'TM47',
    move: {
      name: 'Steel Wing',
    },
    itemSource: {
      type: 'field-item',
      location: {
        map: maps.ROUTE_28_HOUSE,
        x: 2,
        y: 3,
      },
      conditions: ['Requires HM01 (Cut)'],
    },
  },
  {
    id: 'tm48',
    name: 'TM48',
    move: {
      name: 'Fire Punch',
    },
    itemSource: {
      type: 'npc',
      location: {
        map: maps.GOLDENROD_DEPARTMENT_STORE_5F,
        x: 8,
        y: 5,
      },
      conditions: ['Can be bought for 3.000 Pokédollar'],
    },
  },
  {
    id: 'tm49',
    name: 'TM49',
    move: {
      name: 'Fury Cutter',
    },
    itemSource: {
      type: 'npc',
      location: {
        map: maps.AZALEA_GYM,
        x: 5,
        y: 8,
      },
      conditions: ['Can be bought for 3.000 Pokédollar'],
    },
  },
  {
    id: 'tm50',
    name: 'TM50',
    move: {
      name: 'Nightmare',
    },
    itemSource: {
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
  },
]

export default data
