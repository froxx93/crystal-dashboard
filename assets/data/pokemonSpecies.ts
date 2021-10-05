import PokemonSpecies from '~/domains/PokemonSpecies'
import * as types from '~/assets/data/types'

export const CELEBI: PokemonSpecies = {
  id: 'celebi',
  name: 'Celebi',
  types: [types.PSYCHIC, types.GRASS],
  evolvesTo: [],
}
export const HO_OH: PokemonSpecies = {
  id: 'ho-oh',
  name: 'Ho-Oh',
  types: [types.FIRE, types.FLYING],
  evolvesTo: [],
}
export const LUGIA: PokemonSpecies = {
  id: 'lugia',
  name: 'Lugia',
  types: [types.PSYCHIC, types.FLYING],
  evolvesTo: [],
}
export const TYRANITAR: PokemonSpecies = {
  id: 'tyranitar',
  name: 'Tyranitar',
  types: [types.ROCK, types.DARK],
  evolvesTo: [],
}
export const PUPITAR: PokemonSpecies = {
  id: 'pupitar',
  name: 'Pupitar',
  types: [types.ROCK, types.GROUND],
  evolvesTo: [TYRANITAR],
}
export const LARVITAR: PokemonSpecies = {
  id: 'larvitar',
  name: 'Larvitar',
  types: [types.ROCK, types.GROUND],
  evolvesTo: [PUPITAR],
}
export const SUICUNE: PokemonSpecies = {
  id: 'suicune',
  name: 'Suicune',
  types: [types.WATER],
  evolvesTo: [],
}
export const ENTEI: PokemonSpecies = {
  id: 'entei',
  name: 'Entei',
  types: [types.FIRE],
  evolvesTo: [],
}
export const RAIKOU: PokemonSpecies = {
  id: 'raikou',
  name: 'Raikou',
  types: [types.ELECTRIC],
  evolvesTo: [],
}
export const BLISSEY: PokemonSpecies = {
  id: 'blissey',
  name: 'Blissey',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const MILTANK: PokemonSpecies = {
  id: 'miltank',
  name: 'Miltank',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const HITMONTOP: PokemonSpecies = {
  id: 'hitmontop',
  name: 'Hitmontop',
  types: [types.FIGHTING],
  evolvesTo: [],
}
export const SMEARGLE: PokemonSpecies = {
  id: 'smeargle',
  name: 'Smeargle',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const STANTLER: PokemonSpecies = {
  id: 'stantler',
  name: 'Stantler',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const PORYGON2: PokemonSpecies = {
  id: 'porygon2',
  name: 'Porygon2',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const DONPHAN: PokemonSpecies = {
  id: 'donphan',
  name: 'Donphan',
  types: [types.GROUND],
  evolvesTo: [],
}
export const PHANPY: PokemonSpecies = {
  id: 'phanpy',
  name: 'Phanpy',
  types: [types.GROUND],
  evolvesTo: [DONPHAN],
}
export const KINGDRA: PokemonSpecies = {
  id: 'kingdra',
  name: 'Kingdra',
  types: [types.WATER, types.DRAGON],
  evolvesTo: [],
}
export const HOUNDOOM: PokemonSpecies = {
  id: 'houndoom',
  name: 'Houndoom',
  types: [types.DARK, types.FIRE],
  evolvesTo: [],
}
export const HOUNDOUR: PokemonSpecies = {
  id: 'houndour',
  name: 'Houndour',
  types: [types.DARK, types.FIRE],
  evolvesTo: [HOUNDOOM],
}
export const SKARMORY: PokemonSpecies = {
  id: 'skarmory',
  name: 'Skarmory',
  types: [types.STEEL, types.FLYING],
  evolvesTo: [],
}
export const MANTINE: PokemonSpecies = {
  id: 'mantine',
  name: 'Mantine',
  types: [types.WATER, types.FLYING],
  evolvesTo: [],
}
export const DELIBIRD: PokemonSpecies = {
  id: 'delibird',
  name: 'Delibird',
  types: [types.ICE, types.FLYING],
  evolvesTo: [],
}
export const OCTILLERY: PokemonSpecies = {
  id: 'octillery',
  name: 'Octillery',
  types: [types.WATER],
  evolvesTo: [],
}
export const REMORAID: PokemonSpecies = {
  id: 'remoraid',
  name: 'Remoraid',
  types: [types.WATER],
  evolvesTo: [OCTILLERY],
}
export const CORSOLA: PokemonSpecies = {
  id: 'corsola',
  name: 'Corsola',
  types: [types.WATER, types.ROCK],
  evolvesTo: [],
}
export const PILOSWINE: PokemonSpecies = {
  id: 'piloswine',
  name: 'Piloswine',
  types: [types.ICE, types.GROUND],
  evolvesTo: [],
}
export const SWINUB: PokemonSpecies = {
  id: 'swinub',
  name: 'Swinub',
  types: [types.ICE, types.GROUND],
  evolvesTo: [PILOSWINE],
}
export const MAGCARGO: PokemonSpecies = {
  id: 'magcargo',
  name: 'Magcargo',
  types: [types.FIRE, types.ROCK],
  evolvesTo: [],
}
export const SLUGMA: PokemonSpecies = {
  id: 'slugma',
  name: 'Slugma',
  types: [types.FIRE],
  evolvesTo: [MAGCARGO],
}
export const URSARING: PokemonSpecies = {
  id: 'ursaring',
  name: 'Ursaring',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const TEDDIURSA: PokemonSpecies = {
  id: 'teddiursa',
  name: 'Teddiursa',
  types: [types.NORMAL],
  evolvesTo: [URSARING],
}
export const SNEASEL: PokemonSpecies = {
  id: 'sneasel',
  name: 'Sneasel',
  types: [types.DARK, types.ICE],
  evolvesTo: [],
}
export const HERACROSS: PokemonSpecies = {
  id: 'heracross',
  name: 'Heracross',
  types: [types.BUG, types.FIGHTING],
  evolvesTo: [],
}
export const SHUCKLE: PokemonSpecies = {
  id: 'shuckle',
  name: 'Shuckle',
  types: [types.BUG, types.ROCK],
  evolvesTo: [],
}
export const SCIZOR: PokemonSpecies = {
  id: 'scizor',
  name: 'Scizor',
  types: [types.BUG, types.STEEL],
  evolvesTo: [],
}
export const QWILFISH: PokemonSpecies = {
  id: 'qwilfish',
  name: 'Qwilfish',
  types: [types.WATER, types.POISON],
  evolvesTo: [],
}
export const GRANBULL: PokemonSpecies = {
  id: 'granbull',
  name: 'Granbull',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const SNUBBULL: PokemonSpecies = {
  id: 'snubbull',
  name: 'Snubbull',
  types: [types.NORMAL],
  evolvesTo: [GRANBULL],
}
export const STEELIX: PokemonSpecies = {
  id: 'steelix',
  name: 'Steelix',
  types: [types.STEEL, types.GROUND],
  evolvesTo: [],
}
export const GLIGAR: PokemonSpecies = {
  id: 'gligar',
  name: 'Gligar',
  types: [types.GROUND, types.FLYING],
  evolvesTo: [],
}
export const DUNSPARCE: PokemonSpecies = {
  id: 'dunsparce',
  name: 'Dunsparce',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const FORRETRESS: PokemonSpecies = {
  id: 'forretress',
  name: 'Forretress',
  types: [types.BUG, types.STEEL],
  evolvesTo: [],
}
export const PINECO: PokemonSpecies = {
  id: 'pineco',
  name: 'Pineco',
  types: [types.BUG],
  evolvesTo: [FORRETRESS],
}
export const GIRAFARIG: PokemonSpecies = {
  id: 'girafarig',
  name: 'Girafarig',
  types: [types.NORMAL, types.PSYCHIC],
  evolvesTo: [],
}
export const WOBBUFFET: PokemonSpecies = {
  id: 'wobbuffet',
  name: 'Wobbuffet',
  types: [types.PSYCHIC],
  evolvesTo: [],
}
export const UNOWN: PokemonSpecies = {
  id: 'unown',
  name: 'Unown',
  types: [types.PSYCHIC],
  evolvesTo: [],
}
export const MISDREAVUS: PokemonSpecies = {
  id: 'misdreavus',
  name: 'Misdreavus',
  types: [types.GHOST],
  evolvesTo: [],
}
export const SLOWKING: PokemonSpecies = {
  id: 'slowking',
  name: 'Slowking',
  types: [types.WATER, types.PSYCHIC],
  evolvesTo: [],
}
export const MURKROW: PokemonSpecies = {
  id: 'murkrow',
  name: 'Murkrow',
  types: [types.DARK, types.FLYING],
  evolvesTo: [],
}
export const UMBREON: PokemonSpecies = {
  id: 'umbreon',
  name: 'Umbreon',
  types: [types.DARK],
  evolvesTo: [],
}
export const ESPEON: PokemonSpecies = {
  id: 'espeon',
  name: 'Espeon',
  types: [types.PSYCHIC],
  evolvesTo: [],
}
export const QUAGSIRE: PokemonSpecies = {
  id: 'quagsire',
  name: 'Quagsire',
  types: [types.WATER, types.GROUND],
  evolvesTo: [],
}
export const WOOPER: PokemonSpecies = {
  id: 'wooper',
  name: 'Wooper',
  types: [types.WATER, types.GROUND],
  evolvesTo: [QUAGSIRE],
}
export const YANMA: PokemonSpecies = {
  id: 'yanma',
  name: 'Yanma',
  types: [types.BUG, types.FLYING],
  evolvesTo: [],
}
export const SUNFLORA: PokemonSpecies = {
  id: 'sunflora',
  name: 'Sunflora',
  types: [types.GRASS],
  evolvesTo: [],
}
export const SUNKERN: PokemonSpecies = {
  id: 'sunkern',
  name: 'Sunkern',
  types: [types.GRASS],
  evolvesTo: [SUNFLORA],
}
export const AIPOM: PokemonSpecies = {
  id: 'aipom',
  name: 'Aipom',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const JUMPLUFF: PokemonSpecies = {
  id: 'jumpluff',
  name: 'Jumpluff',
  types: [types.GRASS, types.FLYING],
  evolvesTo: [],
}
export const SKIPLOOM: PokemonSpecies = {
  id: 'skiploom',
  name: 'Skiploom',
  types: [types.GRASS, types.FLYING],
  evolvesTo: [JUMPLUFF],
}
export const HOPPIP: PokemonSpecies = {
  id: 'hoppip',
  name: 'Hoppip',
  types: [types.GRASS, types.FLYING],
  evolvesTo: [SKIPLOOM],
}
export const POLITOED: PokemonSpecies = {
  id: 'politoed',
  name: 'Politoed',
  types: [types.WATER],
  evolvesTo: [],
}
export const SUDOWOODO: PokemonSpecies = {
  id: 'sudowoodo',
  name: 'Sudowoodo',
  types: [types.ROCK],
  evolvesTo: [],
}
export const AZUMARILL: PokemonSpecies = {
  id: 'azumarill',
  name: 'Azumarill',
  types: [types.WATER],
  evolvesTo: [],
}
export const MARILL: PokemonSpecies = {
  id: 'marill',
  name: 'Marill',
  types: [types.WATER],
  evolvesTo: [AZUMARILL],
}
export const BELLOSSOM: PokemonSpecies = {
  id: 'bellossom',
  name: 'Bellossom',
  types: [types.GRASS],
  evolvesTo: [],
}
export const AMPHAROS: PokemonSpecies = {
  id: 'ampharos',
  name: 'Ampharos',
  types: [types.ELECTRIC],
  evolvesTo: [],
}
export const FLAAFFY: PokemonSpecies = {
  id: 'flaaffy',
  name: 'Flaaffy',
  types: [types.ELECTRIC],
  evolvesTo: [AMPHAROS],
}
export const MAREEP: PokemonSpecies = {
  id: 'mareep',
  name: 'Mareep',
  types: [types.ELECTRIC],
  evolvesTo: [FLAAFFY],
}
export const XATU: PokemonSpecies = {
  id: 'xatu',
  name: 'Xatu',
  types: [types.PSYCHIC, types.FLYING],
  evolvesTo: [],
}
export const NATU: PokemonSpecies = {
  id: 'natu',
  name: 'Natu',
  types: [types.PSYCHIC, types.FLYING],
  evolvesTo: [XATU],
}
export const TOGETIC: PokemonSpecies = {
  id: 'togetic',
  name: 'Togetic',
  types: [types.NORMAL, types.FLYING],
  evolvesTo: [],
}
export const TOGEPI: PokemonSpecies = {
  id: 'togepi',
  name: 'Togepi',
  types: [types.NORMAL],
  evolvesTo: [TOGETIC],
}
export const LANTURN: PokemonSpecies = {
  id: 'lanturn',
  name: 'Lanturn',
  types: [types.WATER, types.ELECTRIC],
  evolvesTo: [],
}
export const CHINCHOU: PokemonSpecies = {
  id: 'chinchou',
  name: 'Chinchou',
  types: [types.WATER, types.ELECTRIC],
  evolvesTo: [LANTURN],
}
export const CROBAT: PokemonSpecies = {
  id: 'crobat',
  name: 'Crobat',
  types: [types.POISON, types.FLYING],
  evolvesTo: [],
}
export const ARIADOS: PokemonSpecies = {
  id: 'ariados',
  name: 'Ariados',
  types: [types.BUG, types.POISON],
  evolvesTo: [],
}
export const SPINARAK: PokemonSpecies = {
  id: 'spinarak',
  name: 'Spinarak',
  types: [types.BUG, types.POISON],
  evolvesTo: [ARIADOS],
}
export const LEDIAN: PokemonSpecies = {
  id: 'ledian',
  name: 'Ledian',
  types: [types.BUG, types.FLYING],
  evolvesTo: [],
}
export const LEDYBA: PokemonSpecies = {
  id: 'ledyba',
  name: 'Ledyba',
  types: [types.BUG, types.FLYING],
  evolvesTo: [LEDIAN],
}
export const NOCTOWL: PokemonSpecies = {
  id: 'noctowl',
  name: 'Noctowl',
  types: [types.NORMAL, types.FLYING],
  evolvesTo: [],
}
export const HOOTHOOT: PokemonSpecies = {
  id: 'hoothoot',
  name: 'Hoothoot',
  types: [types.NORMAL, types.FLYING],
  evolvesTo: [NOCTOWL],
}
export const FURRET: PokemonSpecies = {
  id: 'furret',
  name: 'Furret',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const SENTRET: PokemonSpecies = {
  id: 'sentret',
  name: 'Sentret',
  types: [types.NORMAL],
  evolvesTo: [FURRET],
}
export const FERALIGATR: PokemonSpecies = {
  id: 'feraligatr',
  name: 'Feraligatr',
  types: [types.WATER],
  evolvesTo: [],
}
export const CROCONAW: PokemonSpecies = {
  id: 'croconaw',
  name: 'Croconaw',
  types: [types.WATER],
  evolvesTo: [FERALIGATR],
}
export const TOTODILE: PokemonSpecies = {
  id: 'totodile',
  name: 'Totodile',
  types: [types.WATER],
  evolvesTo: [CROCONAW],
}
export const TYPHLOSION: PokemonSpecies = {
  id: 'typhlosion',
  name: 'Typhlosion',
  types: [types.FIRE],
  evolvesTo: [],
}
export const QUILAVA: PokemonSpecies = {
  id: 'quilava',
  name: 'Quilava',
  types: [types.FIRE],
  evolvesTo: [TYPHLOSION],
}
export const CYNDAQUIL: PokemonSpecies = {
  id: 'cyndaquil',
  name: 'Cyndaquil',
  types: [types.FIRE],
  evolvesTo: [QUILAVA],
}
export const MEGANIUM: PokemonSpecies = {
  id: 'meganium',
  name: 'Meganium',
  types: [types.GRASS],
  evolvesTo: [],
}
export const BAYLEEF: PokemonSpecies = {
  id: 'bayleef',
  name: 'Bayleef',
  types: [types.GRASS],
  evolvesTo: [MEGANIUM],
}
export const CHIKORITA: PokemonSpecies = {
  id: 'chikorita',
  name: 'Chikorita',
  types: [types.GRASS],
  evolvesTo: [BAYLEEF],
}
export const MEW: PokemonSpecies = {
  id: 'mew',
  name: 'Mew',
  types: [types.PSYCHIC],
  evolvesTo: [],
}
export const MEWTWO: PokemonSpecies = {
  id: 'mewtwo',
  name: 'Mewtwo',
  types: [types.PSYCHIC],
  evolvesTo: [],
}
export const DRAGONITE: PokemonSpecies = {
  id: 'dragonite',
  name: 'Dragonite',
  types: [types.DRAGON, types.FLYING],
  evolvesTo: [],
}
export const DRAGONAIR: PokemonSpecies = {
  id: 'dragonair',
  name: 'Dragonair',
  types: [types.DRAGON],
  evolvesTo: [DRAGONITE],
}
export const DRATINI: PokemonSpecies = {
  id: 'dratini',
  name: 'Dratini',
  types: [types.DRAGON],
  evolvesTo: [DRAGONAIR],
}
export const MOLTRES: PokemonSpecies = {
  id: 'moltres',
  name: 'Moltres',
  types: [types.FIRE, types.FLYING],
  evolvesTo: [],
}
export const ZAPDOS: PokemonSpecies = {
  id: 'zapdos',
  name: 'Zapdos',
  types: [types.ELECTRIC, types.FLYING],
  evolvesTo: [],
}
export const ARTICUNO: PokemonSpecies = {
  id: 'articuno',
  name: 'Articuno',
  types: [types.ICE, types.FLYING],
  evolvesTo: [],
}
export const SNORLAX: PokemonSpecies = {
  id: 'snorlax',
  name: 'Snorlax',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const AERODACTYL: PokemonSpecies = {
  id: 'aerodactyl',
  name: 'Aerodactyl',
  types: [types.ROCK, types.FLYING],
  evolvesTo: [],
}
export const KABUTOPS: PokemonSpecies = {
  id: 'kabutops',
  name: 'Kabutops',
  types: [types.ROCK, types.WATER],
  evolvesTo: [],
}
export const KABUTO: PokemonSpecies = {
  id: 'kabuto',
  name: 'Kabuto',
  types: [types.ROCK, types.WATER],
  evolvesTo: [KABUTOPS],
}
export const OMASTAR: PokemonSpecies = {
  id: 'omastar',
  name: 'Omastar',
  types: [types.ROCK, types.WATER],
  evolvesTo: [],
}
export const OMANYTE: PokemonSpecies = {
  id: 'omanyte',
  name: 'Omanyte',
  types: [types.ROCK, types.WATER],
  evolvesTo: [OMASTAR],
}
export const PORYGON: PokemonSpecies = {
  id: 'porygon',
  name: 'Porygon',
  types: [types.NORMAL],
  evolvesTo: [PORYGON2],
}
export const FLAREON: PokemonSpecies = {
  id: 'flareon',
  name: 'Flareon',
  types: [types.FIRE],
  evolvesTo: [],
}
export const JOLTEON: PokemonSpecies = {
  id: 'jolteon',
  name: 'Jolteon',
  types: [types.ELECTRIC],
  evolvesTo: [],
}
export const VAPOREON: PokemonSpecies = {
  id: 'vaporeon',
  name: 'Vaporeon',
  types: [types.WATER],
  evolvesTo: [],
}
export const EEVEE: PokemonSpecies = {
  id: 'eevee',
  name: 'Eevee',
  types: [types.NORMAL],
  evolvesTo: [VAPOREON, JOLTEON, FLAREON, ESPEON, UMBREON],
}
export const DITTO: PokemonSpecies = {
  id: 'ditto',
  name: 'Ditto',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const LAPRAS: PokemonSpecies = {
  id: 'lapras',
  name: 'Lapras',
  types: [types.WATER, types.ICE],
  evolvesTo: [],
}
export const GYARADOS: PokemonSpecies = {
  id: 'gyarados',
  name: 'Gyarados',
  types: [types.WATER, types.FLYING],
  evolvesTo: [],
}
export const MAGIKARP: PokemonSpecies = {
  id: 'magikarp',
  name: 'Magikarp',
  types: [types.WATER],
  evolvesTo: [GYARADOS],
}
export const TAUROS: PokemonSpecies = {
  id: 'tauros',
  name: 'Tauros',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const PINSIR: PokemonSpecies = {
  id: 'pinsir',
  name: 'Pinsir',
  types: [types.BUG],
  evolvesTo: [],
}
export const MAGMAR: PokemonSpecies = {
  id: 'magmar',
  name: 'Magmar',
  types: [types.FIRE],
  evolvesTo: [],
}
export const ELECTABUZZ: PokemonSpecies = {
  id: 'electabuzz',
  name: 'Electabuzz',
  types: [types.ELECTRIC],
  evolvesTo: [],
}
export const JYNX: PokemonSpecies = {
  id: 'jynx',
  name: 'Jynx',
  types: [types.ICE, types.PSYCHIC],
  evolvesTo: [],
}
export const MAGBY: PokemonSpecies = {
  id: 'magby',
  name: 'Magby',
  types: [types.FIRE],
  evolvesTo: [MAGMAR],
}
export const ELEKID: PokemonSpecies = {
  id: 'elekid',
  name: 'Elekid',
  types: [types.ELECTRIC],
  evolvesTo: [ELECTABUZZ],
}
export const SMOOCHUM: PokemonSpecies = {
  id: 'smoochum',
  name: 'Smoochum',
  types: [types.ICE, types.PSYCHIC],
  evolvesTo: [JYNX],
}
export const SCYTHER: PokemonSpecies = {
  id: 'scyther',
  name: 'Scyther',
  types: [types.BUG, types.FLYING],
  evolvesTo: [SCIZOR],
}
export const MR_MIME: PokemonSpecies = {
  id: 'mr-mime',
  name: 'Mr. Mime',
  types: [types.PSYCHIC],
  evolvesTo: [],
}
export const STARMIE: PokemonSpecies = {
  id: 'starmie',
  name: 'Starmie',
  types: [types.WATER, types.PSYCHIC],
  evolvesTo: [],
}
export const STARYU: PokemonSpecies = {
  id: 'staryu',
  name: 'Staryu',
  types: [types.WATER],
  evolvesTo: [STARMIE],
}
export const SEAKING: PokemonSpecies = {
  id: 'seaking',
  name: 'Seaking',
  types: [types.WATER],
  evolvesTo: [],
}
export const GOLDEEN: PokemonSpecies = {
  id: 'goldeen',
  name: 'Goldeen',
  types: [types.WATER],
  evolvesTo: [SEAKING],
}
export const SEADRA: PokemonSpecies = {
  id: 'seadra',
  name: 'Seadra',
  types: [types.WATER],
  evolvesTo: [KINGDRA],
}
export const HORSEA: PokemonSpecies = {
  id: 'horsea',
  name: 'Horsea',
  types: [types.WATER],
  evolvesTo: [SEADRA],
}
export const KANGASKHAN: PokemonSpecies = {
  id: 'kangaskhan',
  name: 'Kangaskhan',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const TANGELA: PokemonSpecies = {
  id: 'tangela',
  name: 'Tangela',
  types: [types.GRASS],
  evolvesTo: [],
}
export const CHANSEY: PokemonSpecies = {
  id: 'chansey',
  name: 'Chansey',
  types: [types.NORMAL],
  evolvesTo: [BLISSEY],
}
export const RHYDON: PokemonSpecies = {
  id: 'rhydon',
  name: 'Rhydon',
  types: [types.GROUND, types.ROCK],
  evolvesTo: [],
}
export const RHYHORN: PokemonSpecies = {
  id: 'rhyhorn',
  name: 'Rhyhorn',
  types: [types.GROUND, types.ROCK],
  evolvesTo: [RHYDON],
}
export const WEEZING: PokemonSpecies = {
  id: 'weezing',
  name: 'Weezing',
  types: [types.POISON],
  evolvesTo: [],
}
export const KOFFING: PokemonSpecies = {
  id: 'koffing',
  name: 'Koffing',
  types: [types.POISON],
  evolvesTo: [WEEZING],
}
export const LICKITUNG: PokemonSpecies = {
  id: 'lickitung',
  name: 'Lickitung',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const HITMONCHAN: PokemonSpecies = {
  id: 'hitmonchan',
  name: 'Hitmonchan',
  types: [types.FIGHTING],
  evolvesTo: [],
}
export const HITMONLEE: PokemonSpecies = {
  id: 'hitmonlee',
  name: 'Hitmonlee',
  types: [types.FIGHTING],
  evolvesTo: [],
}
export const TYROGUE: PokemonSpecies = {
  id: 'tyrogue',
  name: 'Tyrogue',
  types: [types.FIGHTING],
  evolvesTo: [HITMONLEE, HITMONCHAN, HITMONTOP],
}
export const MAROWAK: PokemonSpecies = {
  id: 'marowak',
  name: 'Marowak',
  types: [types.GROUND],
  evolvesTo: [],
}
export const CUBONE: PokemonSpecies = {
  id: 'cubone',
  name: 'Cubone',
  types: [types.GROUND],
  evolvesTo: [MAROWAK],
}
export const EXEGGUTOR: PokemonSpecies = {
  id: 'exeggutor',
  name: 'Exeggutor',
  types: [types.GRASS, types.PSYCHIC],
  evolvesTo: [],
}
export const EXEGGCUTE: PokemonSpecies = {
  id: 'exeggcute',
  name: 'Exeggcute',
  types: [types.GRASS, types.PSYCHIC],
  evolvesTo: [EXEGGUTOR],
}
export const ELECTRODE: PokemonSpecies = {
  id: 'electrode',
  name: 'Electrode',
  types: [types.ELECTRIC],
  evolvesTo: [],
}
export const VOLTORB: PokemonSpecies = {
  id: 'voltorb',
  name: 'Voltorb',
  types: [types.ELECTRIC],
  evolvesTo: [ELECTRODE],
}
export const KINGLER: PokemonSpecies = {
  id: 'kingler',
  name: 'Kingler',
  types: [types.WATER],
  evolvesTo: [],
}
export const KRABBY: PokemonSpecies = {
  id: 'krabby',
  name: 'Krabby',
  types: [types.WATER],
  evolvesTo: [KINGLER],
}
export const HYPNO: PokemonSpecies = {
  id: 'hypno',
  name: 'Hypno',
  types: [types.PSYCHIC],
  evolvesTo: [],
}
export const DROWZEE: PokemonSpecies = {
  id: 'drowzee',
  name: 'Drowzee',
  types: [types.PSYCHIC],
  evolvesTo: [HYPNO],
}
export const ONIX: PokemonSpecies = {
  id: 'onix',
  name: 'Onix',
  types: [types.ROCK, types.GROUND],
  evolvesTo: [STEELIX],
}
export const GENGAR: PokemonSpecies = {
  id: 'gengar',
  name: 'Gengar',
  types: [types.GHOST, types.POISON],
  evolvesTo: [],
}
export const HAUNTER: PokemonSpecies = {
  id: 'haunter',
  name: 'Haunter',
  types: [types.GHOST, types.POISON],
  evolvesTo: [GENGAR],
}
export const GASTLY: PokemonSpecies = {
  id: 'gastly',
  name: 'Gastly',
  types: [types.GHOST, types.POISON],
  evolvesTo: [HAUNTER],
}
export const CLOYSTER: PokemonSpecies = {
  id: 'cloyster',
  name: 'Cloyster',
  types: [types.WATER, types.ICE],
  evolvesTo: [],
}
export const SHELLDER: PokemonSpecies = {
  id: 'shellder',
  name: 'Shellder',
  types: [types.WATER],
  evolvesTo: [CLOYSTER],
}
export const MUK: PokemonSpecies = {
  id: 'muk',
  name: 'Muk',
  types: [types.POISON],
  evolvesTo: [],
}
export const GRIMER: PokemonSpecies = {
  id: 'grimer',
  name: 'Grimer',
  types: [types.POISON],
  evolvesTo: [MUK],
}
export const DEWGONG: PokemonSpecies = {
  id: 'dewgong',
  name: 'Dewgong',
  types: [types.WATER, types.ICE],
  evolvesTo: [],
}
export const SEEL: PokemonSpecies = {
  id: 'seel',
  name: 'Seel',
  types: [types.WATER],
  evolvesTo: [DEWGONG],
}
export const DODRIO: PokemonSpecies = {
  id: 'dodrio',
  name: 'Dodrio',
  types: [types.NORMAL, types.FLYING],
  evolvesTo: [],
}
export const DODUO: PokemonSpecies = {
  id: 'doduo',
  name: 'Doduo',
  types: [types.NORMAL, types.FLYING],
  evolvesTo: [DODRIO],
}
export const FARFETCHD: PokemonSpecies = {
  id: 'farfetchd',
  name: "Farfetch'd",
  types: [types.NORMAL, types.FLYING],
  evolvesTo: [],
}
export const MAGNETON: PokemonSpecies = {
  id: 'magneton',
  name: 'Magneton',
  types: [types.ELECTRIC, types.STEEL],
  evolvesTo: [],
}
export const MAGNEMITE: PokemonSpecies = {
  id: 'magnemite',
  name: 'Magnemite',
  types: [types.ELECTRIC, types.STEEL],
  evolvesTo: [MAGNETON],
}
export const SLOWBRO: PokemonSpecies = {
  id: 'slowbro',
  name: 'Slowbro',
  types: [types.WATER, types.PSYCHIC],
  evolvesTo: [],
}
export const SLOWPOKE: PokemonSpecies = {
  id: 'slowpoke',
  name: 'Slowpoke',
  types: [types.WATER, types.PSYCHIC],
  evolvesTo: [SLOWBRO, SLOWKING],
}
export const RAPIDASH: PokemonSpecies = {
  id: 'rapidash',
  name: 'Rapidash',
  types: [types.FIRE],
  evolvesTo: [],
}
export const PONYTA: PokemonSpecies = {
  id: 'ponyta',
  name: 'Ponyta',
  types: [types.FIRE],
  evolvesTo: [RAPIDASH],
}
export const GOLEM: PokemonSpecies = {
  id: 'golem',
  name: 'Golem',
  types: [types.ROCK, types.GROUND],
  evolvesTo: [],
}
export const GRAVELER: PokemonSpecies = {
  id: 'graveler',
  name: 'Graveler',
  types: [types.ROCK, types.GROUND],
  evolvesTo: [GOLEM],
}
export const GEODUDE: PokemonSpecies = {
  id: 'geodude',
  name: 'Geodude',
  types: [types.ROCK, types.GROUND],
  evolvesTo: [GRAVELER],
}
export const TENTACRUEL: PokemonSpecies = {
  id: 'tentacruel',
  name: 'Tentacruel',
  types: [types.WATER, types.POISON],
  evolvesTo: [],
}
export const TENTACOOL: PokemonSpecies = {
  id: 'tentacool',
  name: 'Tentacool',
  types: [types.WATER, types.POISON],
  evolvesTo: [TENTACRUEL],
}
export const VICTREEBEL: PokemonSpecies = {
  id: 'victreebel',
  name: 'Victreebel',
  types: [types.GRASS, types.POISON],
  evolvesTo: [],
}
export const WEEPINBELL: PokemonSpecies = {
  id: 'weepinbell',
  name: 'Weepinbell',
  types: [types.GRASS, types.POISON],
  evolvesTo: [VICTREEBEL],
}
export const BELLSPROUT: PokemonSpecies = {
  id: 'bellsprout',
  name: 'Bellsprout',
  types: [types.GRASS, types.POISON],
  evolvesTo: [WEEPINBELL],
}
export const MACHAMP: PokemonSpecies = {
  id: 'machamp',
  name: 'Machamp',
  types: [types.FIGHTING],
  evolvesTo: [],
}
export const MACHOKE: PokemonSpecies = {
  id: 'machoke',
  name: 'Machoke',
  types: [types.FIGHTING],
  evolvesTo: [MACHAMP],
}
export const MACHOP: PokemonSpecies = {
  id: 'machop',
  name: 'Machop',
  types: [types.FIGHTING],
  evolvesTo: [MACHOKE],
}
export const ALAKAZAM: PokemonSpecies = {
  id: 'alakazam',
  name: 'Alakazam',
  types: [types.PSYCHIC],
  evolvesTo: [],
}
export const KADABRA: PokemonSpecies = {
  id: 'kadabra',
  name: 'Kadabra',
  types: [types.PSYCHIC],
  evolvesTo: [ALAKAZAM],
}
export const ABRA: PokemonSpecies = {
  id: 'abra',
  name: 'Abra',
  types: [types.PSYCHIC],
  evolvesTo: [KADABRA],
}
export const POLIWRATH: PokemonSpecies = {
  id: 'poliwrath',
  name: 'Poliwrath',
  types: [types.WATER, types.FIGHTING],
  evolvesTo: [],
}
export const POLIWHIRL: PokemonSpecies = {
  id: 'poliwhirl',
  name: 'Poliwhirl',
  types: [types.WATER],
  evolvesTo: [POLIWRATH, POLITOED],
}
export const POLIWAG: PokemonSpecies = {
  id: 'poliwag',
  name: 'Poliwag',
  types: [types.WATER],
  evolvesTo: [POLIWHIRL],
}
export const ARCANINE: PokemonSpecies = {
  id: 'arcanine',
  name: 'Arcanine',
  types: [types.FIRE],
  evolvesTo: [],
}
export const GROWLITHE: PokemonSpecies = {
  id: 'growlithe',
  name: 'Growlithe',
  types: [types.FIRE],
  evolvesTo: [ARCANINE],
}
export const PRIMEAPE: PokemonSpecies = {
  id: 'primeape',
  name: 'Primeape',
  types: [types.FIGHTING],
  evolvesTo: [],
}
export const MANKEY: PokemonSpecies = {
  id: 'mankey',
  name: 'Mankey',
  types: [types.FIGHTING],
  evolvesTo: [PRIMEAPE],
}
export const GOLDUCK: PokemonSpecies = {
  id: 'golduck',
  name: 'Golduck',
  types: [types.WATER],
  evolvesTo: [],
}
export const PSYDUCK: PokemonSpecies = {
  id: 'psyduck',
  name: 'Psyduck',
  types: [types.WATER],
  evolvesTo: [GOLDUCK],
}
export const PERSIAN: PokemonSpecies = {
  id: 'persian',
  name: 'Persian',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const MEOWTH: PokemonSpecies = {
  id: 'meowth',
  name: 'Meowth',
  types: [types.NORMAL],
  evolvesTo: [PERSIAN],
}
export const DUGTRIO: PokemonSpecies = {
  id: 'dugtrio',
  name: 'Dugtrio',
  types: [types.GROUND],
  evolvesTo: [],
}
export const DIGLETT: PokemonSpecies = {
  id: 'diglett',
  name: 'Diglett',
  types: [types.GROUND],
  evolvesTo: [DUGTRIO],
}
export const VENOMOTH: PokemonSpecies = {
  id: 'venomoth',
  name: 'Venomoth',
  types: [types.BUG, types.POISON],
  evolvesTo: [],
}
export const VENONAT: PokemonSpecies = {
  id: 'venonat',
  name: 'Venonat',
  types: [types.BUG, types.POISON],
  evolvesTo: [VENOMOTH],
}
export const PARASECT: PokemonSpecies = {
  id: 'parasect',
  name: 'Parasect',
  types: [types.BUG, types.GRASS],
  evolvesTo: [],
}
export const PARAS: PokemonSpecies = {
  id: 'paras',
  name: 'Paras',
  types: [types.BUG, types.GRASS],
  evolvesTo: [PARASECT],
}
export const VILEPLUME: PokemonSpecies = {
  id: 'vileplume',
  name: 'Vileplume',
  types: [types.GRASS, types.POISON],
  evolvesTo: [],
}
export const GLOOM: PokemonSpecies = {
  id: 'gloom',
  name: 'Gloom',
  types: [types.GRASS, types.POISON],
  evolvesTo: [VILEPLUME, BELLOSSOM],
}
export const ODDISH: PokemonSpecies = {
  id: 'oddish',
  name: 'Oddish',
  types: [types.GRASS, types.POISON],
  evolvesTo: [GLOOM],
}
export const GOLBAT: PokemonSpecies = {
  id: 'golbat',
  name: 'Golbat',
  types: [types.POISON, types.FLYING],
  evolvesTo: [CROBAT],
}
export const ZUBAT: PokemonSpecies = {
  id: 'zubat',
  name: 'Zubat',
  types: [types.POISON, types.FLYING],
  evolvesTo: [GOLBAT],
}
export const WIGGLYTUFF: PokemonSpecies = {
  id: 'wigglytuff',
  name: 'Wigglytuff',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const JIGGLYPUFF: PokemonSpecies = {
  id: 'jigglypuff',
  name: 'Jigglypuff',
  types: [types.NORMAL],
  evolvesTo: [WIGGLYTUFF],
}
export const NINETALES: PokemonSpecies = {
  id: 'ninetales',
  name: 'Ninetales',
  types: [types.FIRE],
  evolvesTo: [],
}
export const VULPIX: PokemonSpecies = {
  id: 'vulpix',
  name: 'Vulpix',
  types: [types.FIRE],
  evolvesTo: [NINETALES],
}
export const CLEFABLE: PokemonSpecies = {
  id: 'clefable',
  name: 'Clefable',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const CLEFAIRY: PokemonSpecies = {
  id: 'clefairy',
  name: 'Clefairy',
  types: [types.NORMAL],
  evolvesTo: [CLEFABLE],
}
export const IGGLYBUFF: PokemonSpecies = {
  id: 'igglybuff',
  name: 'Igglybuff',
  types: [types.NORMAL],
  evolvesTo: [JIGGLYPUFF],
}
export const CLEFFA: PokemonSpecies = {
  id: 'cleffa',
  name: 'Cleffa',
  types: [types.NORMAL],
  evolvesTo: [CLEFAIRY],
}
export const NIDOKING: PokemonSpecies = {
  id: 'nidoking',
  name: 'Nidoking',
  types: [types.POISON, types.GROUND],
  evolvesTo: [],
}
export const NIDORINO: PokemonSpecies = {
  id: 'nidorino',
  name: 'Nidorino',
  types: [types.POISON],
  evolvesTo: [NIDOKING],
}
export const NIDORAN_M: PokemonSpecies = {
  id: 'nidoran-m',
  name: 'Nidoran ♂',
  types: [types.POISON],
  evolvesTo: [NIDORINO],
}
export const NIDOQUEEN: PokemonSpecies = {
  id: 'nidoqueen',
  name: 'Nidoqueen',
  types: [types.POISON, types.GROUND],
  evolvesTo: [],
}
export const NIDORINA: PokemonSpecies = {
  id: 'nidorina',
  name: 'Nidorina',
  types: [types.POISON],
  evolvesTo: [NIDOQUEEN],
}
export const NIDORAN_F: PokemonSpecies = {
  id: 'nidoran-f',
  name: 'Nidoran ♀',
  types: [types.POISON],
  evolvesTo: [NIDORINA],
}
export const SANDSLASH: PokemonSpecies = {
  id: 'sandslash',
  name: 'Sandslash',
  types: [types.GROUND],
  evolvesTo: [],
}
export const SANDSHREW: PokemonSpecies = {
  id: 'sandshrew',
  name: 'Sandshrew',
  types: [types.GROUND],
  evolvesTo: [SANDSLASH],
}
export const RAICHU: PokemonSpecies = {
  id: 'raichu',
  name: 'Raichu',
  types: [types.ELECTRIC],
  evolvesTo: [],
}
export const PIKACHU: PokemonSpecies = {
  id: 'pikachu',
  name: 'Pikachu',
  types: [types.ELECTRIC],
  evolvesTo: [RAICHU],
}
export const PICHU: PokemonSpecies = {
  id: 'pichu',
  name: 'Pichu',
  types: [types.ELECTRIC],
  evolvesTo: [PIKACHU],
}
export const ARBOK: PokemonSpecies = {
  id: 'arbok',
  name: 'Arbok',
  types: [types.POISON],
  evolvesTo: [],
}
export const EKANS: PokemonSpecies = {
  id: 'ekans',
  name: 'Ekans',
  types: [types.POISON],
  evolvesTo: [ARBOK],
}
export const FEAROW: PokemonSpecies = {
  id: 'fearow',
  name: 'Fearow',
  types: [types.NORMAL, types.FLYING],
  evolvesTo: [],
}
export const SPEAROW: PokemonSpecies = {
  id: 'spearow',
  name: 'Spearow',
  types: [types.NORMAL, types.FLYING],
  evolvesTo: [FEAROW],
}
export const RATICATE: PokemonSpecies = {
  id: 'raticate',
  name: 'Raticate',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const RATTATA: PokemonSpecies = {
  id: 'rattata',
  name: 'Rattata',
  types: [types.NORMAL],
  evolvesTo: [RATICATE],
}
export const PIDGEOT: PokemonSpecies = {
  id: 'pidgeot',
  name: 'Pidgeot',
  types: [types.NORMAL, types.FLYING],
  evolvesTo: [],
}
export const PIDGEOTTO: PokemonSpecies = {
  id: 'pidgeotto',
  name: 'Pidgeotto',
  types: [types.NORMAL, types.FLYING],
  evolvesTo: [PIDGEOT],
}
export const PIDGEY: PokemonSpecies = {
  id: 'pidgey',
  name: 'Pidgey',
  types: [types.NORMAL, types.FLYING],
  evolvesTo: [PIDGEOTTO],
}
export const BEEDRILL: PokemonSpecies = {
  id: 'beedrill',
  name: 'Beedrill',
  types: [types.BUG, types.POISON],
  evolvesTo: [],
}
export const KAKUNA: PokemonSpecies = {
  id: 'kakuna',
  name: 'Kakuna',
  types: [types.BUG, types.POISON],
  evolvesTo: [BEEDRILL],
}
export const WEEDLE: PokemonSpecies = {
  id: 'weedle',
  name: 'Weedle',
  types: [types.BUG, types.POISON],
  evolvesTo: [KAKUNA],
}
export const BUTTERFREE: PokemonSpecies = {
  id: 'butterfree',
  name: 'Butterfree',
  types: [types.BUG, types.FLYING],
  evolvesTo: [],
}
export const METAPOD: PokemonSpecies = {
  id: 'metapod',
  name: 'Metapod',
  types: [types.BUG],
  evolvesTo: [BUTTERFREE],
}
export const CATERPIE: PokemonSpecies = {
  id: 'caterpie',
  name: 'Caterpie',
  types: [types.BUG],
  evolvesTo: [METAPOD],
}
export const BLASTOISE: PokemonSpecies = {
  id: 'blastoise',
  name: 'Blastoise',
  types: [types.WATER],
  evolvesTo: [],
}
export const WARTORTLE: PokemonSpecies = {
  id: 'wartortle',
  name: 'Wartortle',
  types: [types.WATER],
  evolvesTo: [BLASTOISE],
}
export const SQUIRTLE: PokemonSpecies = {
  id: 'squirtle',
  name: 'Squirtle',
  types: [types.WATER],
  evolvesTo: [WARTORTLE],
}
export const CHARIZARD: PokemonSpecies = {
  id: 'charizard',
  name: 'Charizard',
  types: [types.FIRE, types.FLYING],
  evolvesTo: [],
}
export const CHARMELEON: PokemonSpecies = {
  id: 'charmeleon',
  name: 'Charmeleon',
  types: [types.FIRE],
  evolvesTo: [CHARIZARD],
}
export const CHARMANDER: PokemonSpecies = {
  id: 'charmander',
  name: 'Charmander',
  types: [types.FIRE],
  evolvesTo: [CHARMELEON],
}
export const VENUSAUR: PokemonSpecies = {
  id: 'venusaur',
  name: 'Venusaur',
  types: [types.GRASS, types.POISON],
  evolvesTo: [],
}
export const IVYSAUR: PokemonSpecies = {
  id: 'ivysaur',
  name: 'Ivysaur',
  types: [types.GRASS, types.POISON],
  evolvesTo: [VENUSAUR],
}
export const BULBASAUR: PokemonSpecies = {
  id: 'bulbasaur',
  name: 'Bulbasaur',
  types: [types.GRASS, types.POISON],
  evolvesTo: [IVYSAUR],
}

const data: PokemonSpecies[] = [
  BULBASAUR,
  IVYSAUR,
  VENUSAUR,
  CHARMANDER,
  CHARMELEON,
  CHARIZARD,
  SQUIRTLE,
  WARTORTLE,
  BLASTOISE,
  CATERPIE,
  METAPOD,
  BUTTERFREE,
  WEEDLE,
  KAKUNA,
  BEEDRILL,
  PIDGEY,
  PIDGEOTTO,
  PIDGEOT,
  RATTATA,
  RATICATE,
  SPEAROW,
  FEAROW,
  EKANS,
  ARBOK,
  PIKACHU,
  RAICHU,
  SANDSHREW,
  SANDSLASH,
  NIDORAN_F,
  NIDORINA,
  NIDOQUEEN,
  NIDORAN_M,
  NIDORINO,
  NIDOKING,
  CLEFAIRY,
  CLEFABLE,
  VULPIX,
  NINETALES,
  JIGGLYPUFF,
  WIGGLYTUFF,
  ZUBAT,
  GOLBAT,
  ODDISH,
  GLOOM,
  VILEPLUME,
  PARAS,
  PARASECT,
  VENONAT,
  VENOMOTH,
  DIGLETT,
  DUGTRIO,
  MEOWTH,
  PERSIAN,
  PSYDUCK,
  GOLDUCK,
  MANKEY,
  PRIMEAPE,
  GROWLITHE,
  ARCANINE,
  POLIWAG,
  POLIWHIRL,
  POLIWRATH,
  ABRA,
  KADABRA,
  ALAKAZAM,
  MACHOP,
  MACHOKE,
  MACHAMP,
  BELLSPROUT,
  WEEPINBELL,
  VICTREEBEL,
  TENTACOOL,
  TENTACRUEL,
  GEODUDE,
  GRAVELER,
  GOLEM,
  PONYTA,
  RAPIDASH,
  SLOWPOKE,
  SLOWBRO,
  MAGNEMITE,
  MAGNETON,
  FARFETCHD,
  DODUO,
  DODRIO,
  SEEL,
  DEWGONG,
  GRIMER,
  MUK,
  SHELLDER,
  CLOYSTER,
  GASTLY,
  HAUNTER,
  GENGAR,
  ONIX,
  DROWZEE,
  HYPNO,
  KRABBY,
  KINGLER,
  VOLTORB,
  ELECTRODE,
  EXEGGCUTE,
  EXEGGUTOR,
  CUBONE,
  MAROWAK,
  HITMONLEE,
  HITMONCHAN,
  LICKITUNG,
  KOFFING,
  WEEZING,
  RHYHORN,
  RHYDON,
  CHANSEY,
  TANGELA,
  KANGASKHAN,
  HORSEA,
  SEADRA,
  GOLDEEN,
  SEAKING,
  STARYU,
  STARMIE,
  MR_MIME,
  SCYTHER,
  JYNX,
  ELECTABUZZ,
  MAGMAR,
  PINSIR,
  TAUROS,
  MAGIKARP,
  GYARADOS,
  LAPRAS,
  DITTO,
  EEVEE,
  VAPOREON,
  JOLTEON,
  FLAREON,
  PORYGON,
  OMANYTE,
  OMASTAR,
  KABUTO,
  KABUTOPS,
  AERODACTYL,
  SNORLAX,
  ARTICUNO,
  ZAPDOS,
  MOLTRES,
  DRATINI,
  DRAGONAIR,
  DRAGONITE,
  MEWTWO,
  MEW,
  CHIKORITA,
  BAYLEEF,
  MEGANIUM,
  CYNDAQUIL,
  QUILAVA,
  TYPHLOSION,
  TOTODILE,
  CROCONAW,
  FERALIGATR,
  SENTRET,
  FURRET,
  HOOTHOOT,
  NOCTOWL,
  LEDYBA,
  LEDIAN,
  SPINARAK,
  ARIADOS,
  CROBAT,
  CHINCHOU,
  LANTURN,
  PICHU,
  CLEFFA,
  IGGLYBUFF,
  TOGEPI,
  TOGETIC,
  NATU,
  XATU,
  MAREEP,
  FLAAFFY,
  AMPHAROS,
  BELLOSSOM,
  MARILL,
  AZUMARILL,
  SUDOWOODO,
  POLITOED,
  HOPPIP,
  SKIPLOOM,
  JUMPLUFF,
  AIPOM,
  SUNKERN,
  SUNFLORA,
  YANMA,
  WOOPER,
  QUAGSIRE,
  ESPEON,
  UMBREON,
  MURKROW,
  SLOWKING,
  MISDREAVUS,
  UNOWN,
  WOBBUFFET,
  GIRAFARIG,
  PINECO,
  FORRETRESS,
  DUNSPARCE,
  GLIGAR,
  STEELIX,
  SNUBBULL,
  GRANBULL,
  QWILFISH,
  SCIZOR,
  SHUCKLE,
  HERACROSS,
  SNEASEL,
  TEDDIURSA,
  URSARING,
  SLUGMA,
  MAGCARGO,
  SWINUB,
  PILOSWINE,
  CORSOLA,
  REMORAID,
  OCTILLERY,
  DELIBIRD,
  MANTINE,
  SKARMORY,
  HOUNDOUR,
  HOUNDOOM,
  KINGDRA,
  PHANPY,
  DONPHAN,
  PORYGON2,
  STANTLER,
  SMEARGLE,
  TYROGUE,
  HITMONTOP,
  SMOOCHUM,
  ELEKID,
  MAGBY,
  MILTANK,
  BLISSEY,
  RAIKOU,
  ENTEI,
  SUICUNE,
  LARVITAR,
  PUPITAR,
  TYRANITAR,
  LUGIA,
  HO_OH,
  CELEBI,
]

export default data
