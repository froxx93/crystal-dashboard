import Pokemon from '~/domains/Pokemon'
import * as types from '~/assets/data/types'

export const CELEBI: Pokemon = {
  id: 'celebi',
  name: 'Celebi',
  types: [types.PSYCHIC, types.GRASS],
  evolvesTo: [],
}
export const HO_OH: Pokemon = {
  id: 'ho-oh',
  name: 'Ho-Oh',
  types: [types.FIRE, types.FLYING],
  evolvesTo: [],
}
export const LUGIA: Pokemon = {
  id: 'lugia',
  name: 'Lugia',
  types: [types.PSYCHIC, types.FLYING],
  evolvesTo: [],
}
export const TYRANITAR: Pokemon = {
  id: 'tyranitar',
  name: 'Tyranitar',
  types: [types.ROCK, types.DARK],
  evolvesTo: [],
}
export const PUPITAR: Pokemon = {
  id: 'pupitar',
  name: 'Pupitar',
  types: [types.ROCK, types.GROUND],
  evolvesTo: [TYRANITAR],
}
export const LARVITAR: Pokemon = {
  id: 'larvitar',
  name: 'Larvitar',
  types: [types.ROCK, types.GROUND],
  evolvesTo: [PUPITAR],
}
export const SUICUNE: Pokemon = {
  id: 'suicune',
  name: 'Suicune',
  types: [types.WATER],
  evolvesTo: [],
}
export const ENTEI: Pokemon = {
  id: 'entei',
  name: 'Entei',
  types: [types.FIRE],
  evolvesTo: [],
}
export const RAIKOU: Pokemon = {
  id: 'raikou',
  name: 'Raikou',
  types: [types.ELECTRIC],
  evolvesTo: [],
}
export const BLISSEY: Pokemon = {
  id: 'blissey',
  name: 'Blissey',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const MILTANK: Pokemon = {
  id: 'miltank',
  name: 'Miltank',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const HITMONTOP: Pokemon = {
  id: 'hitmontop',
  name: 'Hitmontop',
  types: [types.FIGHTING],
  evolvesTo: [],
}
export const SMEARGLE: Pokemon = {
  id: 'smeargle',
  name: 'Smeargle',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const STANTLER: Pokemon = {
  id: 'stantler',
  name: 'Stantler',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const PORYGON2: Pokemon = {
  id: 'porygon2',
  name: 'Porygon2',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const DONPHAN: Pokemon = {
  id: 'donphan',
  name: 'Donphan',
  types: [types.GROUND],
  evolvesTo: [],
}
export const PHANPY: Pokemon = {
  id: 'phanpy',
  name: 'Phanpy',
  types: [types.GROUND],
  evolvesTo: [DONPHAN],
}
export const KINGDRA: Pokemon = {
  id: 'kingdra',
  name: 'Kingdra',
  types: [types.WATER, types.DRAGON],
  evolvesTo: [],
}
export const HOUNDOOM: Pokemon = {
  id: 'houndoom',
  name: 'Houndoom',
  types: [types.DARK, types.FIRE],
  evolvesTo: [],
}
export const HOUNDOUR: Pokemon = {
  id: 'houndour',
  name: 'Houndour',
  types: [types.DARK, types.FIRE],
  evolvesTo: [HOUNDOOM],
}
export const SKARMORY: Pokemon = {
  id: 'skarmory',
  name: 'Skarmory',
  types: [types.STEEL, types.FLYING],
  evolvesTo: [],
}
export const MANTINE: Pokemon = {
  id: 'mantine',
  name: 'Mantine',
  types: [types.WATER, types.FLYING],
  evolvesTo: [],
}
export const DELIBIRD: Pokemon = {
  id: 'delibird',
  name: 'Delibird',
  types: [types.ICE, types.FLYING],
  evolvesTo: [],
}
export const OCTILLERY: Pokemon = {
  id: 'octillery',
  name: 'Octillery',
  types: [types.WATER],
  evolvesTo: [],
}
export const REMORAID: Pokemon = {
  id: 'remoraid',
  name: 'Remoraid',
  types: [types.WATER],
  evolvesTo: [OCTILLERY],
}
export const CORSOLA: Pokemon = {
  id: 'corsola',
  name: 'Corsola',
  types: [types.WATER, types.ROCK],
  evolvesTo: [],
}
export const PILOSWINE: Pokemon = {
  id: 'piloswine',
  name: 'Piloswine',
  types: [types.ICE, types.GROUND],
  evolvesTo: [],
}
export const SWINUB: Pokemon = {
  id: 'swinub',
  name: 'Swinub',
  types: [types.ICE, types.GROUND],
  evolvesTo: [PILOSWINE],
}
export const MAGCARGO: Pokemon = {
  id: 'magcargo',
  name: 'Magcargo',
  types: [types.FIRE, types.ROCK],
  evolvesTo: [],
}
export const SLUGMA: Pokemon = {
  id: 'slugma',
  name: 'Slugma',
  types: [types.FIRE],
  evolvesTo: [MAGCARGO],
}
export const URSARING: Pokemon = {
  id: 'ursaring',
  name: 'Ursaring',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const TEDDIURSA: Pokemon = {
  id: 'teddiursa',
  name: 'Teddiursa',
  types: [types.NORMAL],
  evolvesTo: [URSARING],
}
export const SNEASEL: Pokemon = {
  id: 'sneasel',
  name: 'Sneasel',
  types: [types.DARK, types.ICE],
  evolvesTo: [],
}
export const HERACROSS: Pokemon = {
  id: 'heracross',
  name: 'Heracross',
  types: [types.BUG, types.FIGHTING],
  evolvesTo: [],
}
export const SHUCKLE: Pokemon = {
  id: 'shuckle',
  name: 'Shuckle',
  types: [types.BUG, types.ROCK],
  evolvesTo: [],
}
export const SCIZOR: Pokemon = {
  id: 'scizor',
  name: 'Scizor',
  types: [types.BUG, types.STEEL],
  evolvesTo: [],
}
export const QWILFISH: Pokemon = {
  id: 'qwilfish',
  name: 'Qwilfish',
  types: [types.WATER, types.POISON],
  evolvesTo: [],
}
export const GRANBULL: Pokemon = {
  id: 'granbull',
  name: 'Granbull',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const SNUBBULL: Pokemon = {
  id: 'snubbull',
  name: 'Snubbull',
  types: [types.NORMAL],
  evolvesTo: [GRANBULL],
}
export const STEELIX: Pokemon = {
  id: 'steelix',
  name: 'Steelix',
  types: [types.STEEL, types.GROUND],
  evolvesTo: [],
}
export const GLIGAR: Pokemon = {
  id: 'gligar',
  name: 'Gligar',
  types: [types.GROUND, types.FLYING],
  evolvesTo: [],
}
export const DUNSPARCE: Pokemon = {
  id: 'dunsparce',
  name: 'Dunsparce',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const FORRETRESS: Pokemon = {
  id: 'forretress',
  name: 'Forretress',
  types: [types.BUG, types.STEEL],
  evolvesTo: [],
}
export const PINECO: Pokemon = {
  id: 'pineco',
  name: 'Pineco',
  types: [types.BUG],
  evolvesTo: [FORRETRESS],
}
export const GIRAFARIG: Pokemon = {
  id: 'girafarig',
  name: 'Girafarig',
  types: [types.NORMAL, types.PSYCHIC],
  evolvesTo: [],
}
export const WOBBUFFET: Pokemon = {
  id: 'wobbuffet',
  name: 'Wobbuffet',
  types: [types.PSYCHIC],
  evolvesTo: [],
}
export const UNOWN: Pokemon = {
  id: 'unown',
  name: 'Unown',
  types: [types.PSYCHIC],
  evolvesTo: [],
}
export const MISDREAVUS: Pokemon = {
  id: 'misdreavus',
  name: 'Misdreavus',
  types: [types.GHOST],
  evolvesTo: [],
}
export const SLOWKING: Pokemon = {
  id: 'slowking',
  name: 'Slowking',
  types: [types.WATER, types.PSYCHIC],
  evolvesTo: [],
}
export const MURKROW: Pokemon = {
  id: 'murkrow',
  name: 'Murkrow',
  types: [types.DARK, types.FLYING],
  evolvesTo: [],
}
export const UMBREON: Pokemon = {
  id: 'umbreon',
  name: 'Umbreon',
  types: [types.DARK],
  evolvesTo: [],
}
export const ESPEON: Pokemon = {
  id: 'espeon',
  name: 'Espeon',
  types: [types.PSYCHIC],
  evolvesTo: [],
}
export const QUAGSIRE: Pokemon = {
  id: 'quagsire',
  name: 'Quagsire',
  types: [types.WATER, types.GROUND],
  evolvesTo: [],
}
export const WOOPER: Pokemon = {
  id: 'wooper',
  name: 'Wooper',
  types: [types.WATER, types.GROUND],
  evolvesTo: [QUAGSIRE],
}
export const YANMA: Pokemon = {
  id: 'yanma',
  name: 'Yanma',
  types: [types.BUG, types.FLYING],
  evolvesTo: [],
}
export const SUNFLORA: Pokemon = {
  id: 'sunflora',
  name: 'Sunflora',
  types: [types.GRASS],
  evolvesTo: [],
}
export const SUNKERN: Pokemon = {
  id: 'sunkern',
  name: 'Sunkern',
  types: [types.GRASS],
  evolvesTo: [SUNFLORA],
}
export const AIPOM: Pokemon = {
  id: 'aipom',
  name: 'Aipom',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const JUMPLUFF: Pokemon = {
  id: 'jumpluff',
  name: 'Jumpluff',
  types: [types.GRASS, types.FLYING],
  evolvesTo: [],
}
export const SKIPLOOM: Pokemon = {
  id: 'skiploom',
  name: 'Skiploom',
  types: [types.GRASS, types.FLYING],
  evolvesTo: [JUMPLUFF],
}
export const HOPPIP: Pokemon = {
  id: 'hoppip',
  name: 'Hoppip',
  types: [types.GRASS, types.FLYING],
  evolvesTo: [SKIPLOOM],
}
export const POLITOED: Pokemon = {
  id: 'politoed',
  name: 'Politoed',
  types: [types.WATER],
  evolvesTo: [],
}
export const SUDOWOODO: Pokemon = {
  id: 'sudowoodo',
  name: 'Sudowoodo',
  types: [types.ROCK],
  evolvesTo: [],
}
export const AZUMARILL: Pokemon = {
  id: 'azumarill',
  name: 'Azumarill',
  types: [types.WATER],
  evolvesTo: [],
}
export const MARILL: Pokemon = {
  id: 'marill',
  name: 'Marill',
  types: [types.WATER],
  evolvesTo: [AZUMARILL],
}
export const BELLOSSOM: Pokemon = {
  id: 'bellossom',
  name: 'Bellossom',
  types: [types.GRASS],
  evolvesTo: [],
}
export const AMPHAROS: Pokemon = {
  id: 'ampharos',
  name: 'Ampharos',
  types: [types.ELECTRIC],
  evolvesTo: [],
}
export const FLAAFFY: Pokemon = {
  id: 'flaaffy',
  name: 'Flaaffy',
  types: [types.ELECTRIC],
  evolvesTo: [AMPHAROS],
}
export const MAREEP: Pokemon = {
  id: 'mareep',
  name: 'Mareep',
  types: [types.ELECTRIC],
  evolvesTo: [FLAAFFY],
}
export const XATU: Pokemon = {
  id: 'xatu',
  name: 'Xatu',
  types: [types.PSYCHIC, types.FLYING],
  evolvesTo: [],
}
export const NATU: Pokemon = {
  id: 'natu',
  name: 'Natu',
  types: [types.PSYCHIC, types.FLYING],
  evolvesTo: [XATU],
}
export const TOGETIC: Pokemon = {
  id: 'togetic',
  name: 'Togetic',
  types: [types.NORMAL, types.FLYING],
  evolvesTo: [],
}
export const TOGEPI: Pokemon = {
  id: 'togepi',
  name: 'Togepi',
  types: [types.NORMAL],
  evolvesTo: [TOGETIC],
}
export const LANTURN: Pokemon = {
  id: 'lanturn',
  name: 'Lanturn',
  types: [types.WATER, types.ELECTRIC],
  evolvesTo: [],
}
export const CHINCHOU: Pokemon = {
  id: 'chinchou',
  name: 'Chinchou',
  types: [types.WATER, types.ELECTRIC],
  evolvesTo: [LANTURN],
}
export const CROBAT: Pokemon = {
  id: 'crobat',
  name: 'Crobat',
  types: [types.POISON, types.FLYING],
  evolvesTo: [],
}
export const ARIADOS: Pokemon = {
  id: 'ariados',
  name: 'Ariados',
  types: [types.BUG, types.POISON],
  evolvesTo: [],
}
export const SPINARAK: Pokemon = {
  id: 'spinarak',
  name: 'Spinarak',
  types: [types.BUG, types.POISON],
  evolvesTo: [ARIADOS],
}
export const LEDIAN: Pokemon = {
  id: 'ledian',
  name: 'Ledian',
  types: [types.BUG, types.FLYING],
  evolvesTo: [],
}
export const LEDYBA: Pokemon = {
  id: 'ledyba',
  name: 'Ledyba',
  types: [types.BUG, types.FLYING],
  evolvesTo: [LEDIAN],
}
export const NOCTOWL: Pokemon = {
  id: 'noctowl',
  name: 'Noctowl',
  types: [types.NORMAL, types.FLYING],
  evolvesTo: [],
}
export const HOOTHOOT: Pokemon = {
  id: 'hoothoot',
  name: 'Hoothoot',
  types: [types.NORMAL, types.FLYING],
  evolvesTo: [NOCTOWL],
}
export const FURRET: Pokemon = {
  id: 'furret',
  name: 'Furret',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const SENTRET: Pokemon = {
  id: 'sentret',
  name: 'Sentret',
  types: [types.NORMAL],
  evolvesTo: [FURRET],
}
export const FERALIGATR: Pokemon = {
  id: 'feraligatr',
  name: 'Feraligatr',
  types: [types.WATER],
  evolvesTo: [],
}
export const CROCONAW: Pokemon = {
  id: 'croconaw',
  name: 'Croconaw',
  types: [types.WATER],
  evolvesTo: [FERALIGATR],
}
export const TOTODILE: Pokemon = {
  id: 'totodile',
  name: 'Totodile',
  types: [types.WATER],
  evolvesTo: [CROCONAW],
}
export const TYPHLOSION: Pokemon = {
  id: 'typhlosion',
  name: 'Typhlosion',
  types: [types.FIRE],
  evolvesTo: [],
}
export const QUILAVA: Pokemon = {
  id: 'quilava',
  name: 'Quilava',
  types: [types.FIRE],
  evolvesTo: [TYPHLOSION],
}
export const CYNDAQUIL: Pokemon = {
  id: 'cyndaquil',
  name: 'Cyndaquil',
  types: [types.FIRE],
  evolvesTo: [QUILAVA],
}
export const MEGANIUM: Pokemon = {
  id: 'meganium',
  name: 'Meganium',
  types: [types.GRASS],
  evolvesTo: [],
}
export const BAYLEEF: Pokemon = {
  id: 'bayleef',
  name: 'Bayleef',
  types: [types.GRASS],
  evolvesTo: [MEGANIUM],
}
export const CHIKORITA: Pokemon = {
  id: 'chikorita',
  name: 'Chikorita',
  types: [types.GRASS],
  evolvesTo: [BAYLEEF],
}
export const MEW: Pokemon = {
  id: 'mew',
  name: 'Mew',
  types: [types.PSYCHIC],
  evolvesTo: [],
}
export const MEWTWO: Pokemon = {
  id: 'mewtwo',
  name: 'Mewtwo',
  types: [types.PSYCHIC],
  evolvesTo: [],
}
export const DRAGONITE: Pokemon = {
  id: 'dragonite',
  name: 'Dragonite',
  types: [types.DRAGON, types.FLYING],
  evolvesTo: [],
}
export const DRAGONAIR: Pokemon = {
  id: 'dragonair',
  name: 'Dragonair',
  types: [types.DRAGON],
  evolvesTo: [DRAGONITE],
}
export const DRATINI: Pokemon = {
  id: 'dratini',
  name: 'Dratini',
  types: [types.DRAGON],
  evolvesTo: [DRAGONAIR],
}
export const MOLTRES: Pokemon = {
  id: 'moltres',
  name: 'Moltres',
  types: [types.FIRE, types.FLYING],
  evolvesTo: [],
}
export const ZAPDOS: Pokemon = {
  id: 'zapdos',
  name: 'Zapdos',
  types: [types.ELECTRIC, types.FLYING],
  evolvesTo: [],
}
export const ARTICUNO: Pokemon = {
  id: 'articuno',
  name: 'Articuno',
  types: [types.ICE, types.FLYING],
  evolvesTo: [],
}
export const SNORLAX: Pokemon = {
  id: 'snorlax',
  name: 'Snorlax',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const AERODACTYL: Pokemon = {
  id: 'aerodactyl',
  name: 'Aerodactyl',
  types: [types.ROCK, types.FLYING],
  evolvesTo: [],
}
export const KABUTOPS: Pokemon = {
  id: 'kabutops',
  name: 'Kabutops',
  types: [types.ROCK, types.WATER],
  evolvesTo: [],
}
export const KABUTO: Pokemon = {
  id: 'kabuto',
  name: 'Kabuto',
  types: [types.ROCK, types.WATER],
  evolvesTo: [KABUTOPS],
}
export const OMASTAR: Pokemon = {
  id: 'omastar',
  name: 'Omastar',
  types: [types.ROCK, types.WATER],
  evolvesTo: [],
}
export const OMANYTE: Pokemon = {
  id: 'omanyte',
  name: 'Omanyte',
  types: [types.ROCK, types.WATER],
  evolvesTo: [OMASTAR],
}
export const PORYGON: Pokemon = {
  id: 'porygon',
  name: 'Porygon',
  types: [types.NORMAL],
  evolvesTo: [PORYGON2],
}
export const FLAREON: Pokemon = {
  id: 'flareon',
  name: 'Flareon',
  types: [types.FIRE],
  evolvesTo: [],
}
export const JOLTEON: Pokemon = {
  id: 'jolteon',
  name: 'Jolteon',
  types: [types.ELECTRIC],
  evolvesTo: [],
}
export const VAPOREON: Pokemon = {
  id: 'vaporeon',
  name: 'Vaporeon',
  types: [types.WATER],
  evolvesTo: [],
}
export const EEVEE: Pokemon = {
  id: 'eevee',
  name: 'Eevee',
  types: [types.NORMAL],
  evolvesTo: [VAPOREON, JOLTEON, FLAREON, ESPEON, UMBREON],
}
export const DITTO: Pokemon = {
  id: 'ditto',
  name: 'Ditto',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const LAPRAS: Pokemon = {
  id: 'lapras',
  name: 'Lapras',
  types: [types.WATER, types.ICE],
  evolvesTo: [],
}
export const GYARADOS: Pokemon = {
  id: 'gyarados',
  name: 'Gyarados',
  types: [types.WATER, types.FLYING],
  evolvesTo: [],
}
export const MAGIKARP: Pokemon = {
  id: 'magikarp',
  name: 'Magikarp',
  types: [types.WATER],
  evolvesTo: [GYARADOS],
}
export const TAUROS: Pokemon = {
  id: 'tauros',
  name: 'Tauros',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const PINSIR: Pokemon = {
  id: 'pinsir',
  name: 'Pinsir',
  types: [types.BUG],
  evolvesTo: [],
}
export const MAGMAR: Pokemon = {
  id: 'magmar',
  name: 'Magmar',
  types: [types.FIRE],
  evolvesTo: [],
}
export const ELECTABUZZ: Pokemon = {
  id: 'electabuzz',
  name: 'Electabuzz',
  types: [types.ELECTRIC],
  evolvesTo: [],
}
export const JYNX: Pokemon = {
  id: 'jynx',
  name: 'Jynx',
  types: [types.ICE, types.PSYCHIC],
  evolvesTo: [],
}
export const MAGBY: Pokemon = {
  id: 'magby',
  name: 'Magby',
  types: [types.FIRE],
  evolvesTo: [MAGMAR],
}
export const ELEKID: Pokemon = {
  id: 'elekid',
  name: 'Elekid',
  types: [types.ELECTRIC],
  evolvesTo: [ELECTABUZZ],
}
export const SMOOCHUM: Pokemon = {
  id: 'smoochum',
  name: 'Smoochum',
  types: [types.ICE, types.PSYCHIC],
  evolvesTo: [JYNX],
}
export const SCYTHER: Pokemon = {
  id: 'scyther',
  name: 'Scyther',
  types: [types.BUG, types.FLYING],
  evolvesTo: [SCIZOR],
}
export const MR_MIME: Pokemon = {
  id: 'mr-mime',
  name: 'Mr. Mime',
  types: [types.PSYCHIC],
  evolvesTo: [],
}
export const STARMIE: Pokemon = {
  id: 'starmie',
  name: 'Starmie',
  types: [types.WATER, types.PSYCHIC],
  evolvesTo: [],
}
export const STARYU: Pokemon = {
  id: 'staryu',
  name: 'Staryu',
  types: [types.WATER],
  evolvesTo: [STARMIE],
}
export const SEAKING: Pokemon = {
  id: 'seaking',
  name: 'Seaking',
  types: [types.WATER],
  evolvesTo: [],
}
export const GOLDEEN: Pokemon = {
  id: 'goldeen',
  name: 'Goldeen',
  types: [types.WATER],
  evolvesTo: [SEAKING],
}
export const SEADRA: Pokemon = {
  id: 'seadra',
  name: 'Seadra',
  types: [types.WATER],
  evolvesTo: [KINGDRA],
}
export const HORSEA: Pokemon = {
  id: 'horsea',
  name: 'Horsea',
  types: [types.WATER],
  evolvesTo: [SEADRA],
}
export const KANGASKHAN: Pokemon = {
  id: 'kangaskhan',
  name: 'Kangaskhan',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const TANGELA: Pokemon = {
  id: 'tangela',
  name: 'Tangela',
  types: [types.GRASS],
  evolvesTo: [],
}
export const CHANSEY: Pokemon = {
  id: 'chansey',
  name: 'Chansey',
  types: [types.NORMAL],
  evolvesTo: [BLISSEY],
}
export const RHYDON: Pokemon = {
  id: 'rhydon',
  name: 'Rhydon',
  types: [types.GROUND, types.ROCK],
  evolvesTo: [],
}
export const RHYHORN: Pokemon = {
  id: 'rhyhorn',
  name: 'Rhyhorn',
  types: [types.GROUND, types.ROCK],
  evolvesTo: [RHYDON],
}
export const WEEZING: Pokemon = {
  id: 'weezing',
  name: 'Weezing',
  types: [types.POISON],
  evolvesTo: [],
}
export const KOFFING: Pokemon = {
  id: 'koffing',
  name: 'Koffing',
  types: [types.POISON],
  evolvesTo: [WEEZING],
}
export const LICKITUNG: Pokemon = {
  id: 'lickitung',
  name: 'Lickitung',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const HITMONCHAN: Pokemon = {
  id: 'hitmonchan',
  name: 'Hitmonchan',
  types: [types.FIGHTING],
  evolvesTo: [],
}
export const HITMONLEE: Pokemon = {
  id: 'hitmonlee',
  name: 'Hitmonlee',
  types: [types.FIGHTING],
  evolvesTo: [],
}
export const TYROGUE: Pokemon = {
  id: 'tyrogue',
  name: 'Tyrogue',
  types: [types.FIGHTING],
  evolvesTo: [HITMONLEE, HITMONCHAN, HITMONTOP],
}
export const MAROWAK: Pokemon = {
  id: 'marowak',
  name: 'Marowak',
  types: [types.GROUND],
  evolvesTo: [],
}
export const CUBONE: Pokemon = {
  id: 'cubone',
  name: 'Cubone',
  types: [types.GROUND],
  evolvesTo: [MAROWAK],
}
export const EXEGGUTOR: Pokemon = {
  id: 'exeggutor',
  name: 'Exeggutor',
  types: [types.GRASS, types.PSYCHIC],
  evolvesTo: [],
}
export const EXEGGCUTE: Pokemon = {
  id: 'exeggcute',
  name: 'Exeggcute',
  types: [types.GRASS, types.PSYCHIC],
  evolvesTo: [EXEGGUTOR],
}
export const ELECTRODE: Pokemon = {
  id: 'electrode',
  name: 'Electrode',
  types: [types.ELECTRIC],
  evolvesTo: [],
}
export const VOLTORB: Pokemon = {
  id: 'voltorb',
  name: 'Voltorb',
  types: [types.ELECTRIC],
  evolvesTo: [ELECTRODE],
}
export const KINGLER: Pokemon = {
  id: 'kingler',
  name: 'Kingler',
  types: [types.WATER],
  evolvesTo: [],
}
export const KRABBY: Pokemon = {
  id: 'krabby',
  name: 'Krabby',
  types: [types.WATER],
  evolvesTo: [KINGLER],
}
export const HYPNO: Pokemon = {
  id: 'hypno',
  name: 'Hypno',
  types: [types.PSYCHIC],
  evolvesTo: [],
}
export const DROWZEE: Pokemon = {
  id: 'drowzee',
  name: 'Drowzee',
  types: [types.PSYCHIC],
  evolvesTo: [HYPNO],
}
export const ONIX: Pokemon = {
  id: 'onix',
  name: 'Onix',
  types: [types.ROCK, types.GROUND],
  evolvesTo: [STEELIX],
}
export const GENGAR: Pokemon = {
  id: 'gengar',
  name: 'Gengar',
  types: [types.GHOST, types.POISON],
  evolvesTo: [],
}
export const HAUNTER: Pokemon = {
  id: 'haunter',
  name: 'Haunter',
  types: [types.GHOST, types.POISON],
  evolvesTo: [GENGAR],
}
export const GASTLY: Pokemon = {
  id: 'gastly',
  name: 'Gastly',
  types: [types.GHOST, types.POISON],
  evolvesTo: [HAUNTER],
}
export const CLOYSTER: Pokemon = {
  id: 'cloyster',
  name: 'Cloyster',
  types: [types.WATER, types.ICE],
  evolvesTo: [],
}
export const SHELLDER: Pokemon = {
  id: 'shellder',
  name: 'Shellder',
  types: [types.WATER],
  evolvesTo: [CLOYSTER],
}
export const MUK: Pokemon = {
  id: 'muk',
  name: 'Muk',
  types: [types.POISON],
  evolvesTo: [],
}
export const GRIMER: Pokemon = {
  id: 'grimer',
  name: 'Grimer',
  types: [types.POISON],
  evolvesTo: [MUK],
}
export const DEWGONG: Pokemon = {
  id: 'dewgong',
  name: 'Dewgong',
  types: [types.WATER, types.ICE],
  evolvesTo: [],
}
export const SEEL: Pokemon = {
  id: 'seel',
  name: 'Seel',
  types: [types.WATER],
  evolvesTo: [DEWGONG],
}
export const DODRIO: Pokemon = {
  id: 'dodrio',
  name: 'Dodrio',
  types: [types.NORMAL, types.FLYING],
  evolvesTo: [],
}
export const DODUO: Pokemon = {
  id: 'doduo',
  name: 'Doduo',
  types: [types.NORMAL, types.FLYING],
  evolvesTo: [DODRIO],
}
export const FARFETCHD: Pokemon = {
  id: 'farfetchd',
  name: "Farfetch'd",
  types: [types.NORMAL, types.FLYING],
  evolvesTo: [],
}
export const MAGNETON: Pokemon = {
  id: 'magneton',
  name: 'Magneton',
  types: [types.ELECTRIC, types.STEEL],
  evolvesTo: [],
}
export const MAGNEMITE: Pokemon = {
  id: 'magnemite',
  name: 'Magnemite',
  types: [types.ELECTRIC, types.STEEL],
  evolvesTo: [MAGNETON],
}
export const SLOWBRO: Pokemon = {
  id: 'slowbro',
  name: 'Slowbro',
  types: [types.WATER, types.PSYCHIC],
  evolvesTo: [],
}
export const SLOWPOKE: Pokemon = {
  id: 'slowpoke',
  name: 'Slowpoke',
  types: [types.WATER, types.PSYCHIC],
  evolvesTo: [SLOWBRO, SLOWKING],
}
export const RAPIDASH: Pokemon = {
  id: 'rapidash',
  name: 'Rapidash',
  types: [types.FIRE],
  evolvesTo: [],
}
export const PONYTA: Pokemon = {
  id: 'ponyta',
  name: 'Ponyta',
  types: [types.FIRE],
  evolvesTo: [RAPIDASH],
}
export const GOLEM: Pokemon = {
  id: 'golem',
  name: 'Golem',
  types: [types.ROCK, types.GROUND],
  evolvesTo: [],
}
export const GRAVELER: Pokemon = {
  id: 'graveler',
  name: 'Graveler',
  types: [types.ROCK, types.GROUND],
  evolvesTo: [GOLEM],
}
export const GEODUDE: Pokemon = {
  id: 'geodude',
  name: 'Geodude',
  types: [types.ROCK, types.GROUND],
  evolvesTo: [GRAVELER],
}
export const TENTACRUEL: Pokemon = {
  id: 'tentacruel',
  name: 'Tentacruel',
  types: [types.WATER, types.POISON],
  evolvesTo: [],
}
export const TENTACOOL: Pokemon = {
  id: 'tentacool',
  name: 'Tentacool',
  types: [types.WATER, types.POISON],
  evolvesTo: [TENTACRUEL],
}
export const VICTREEBEL: Pokemon = {
  id: 'victreebel',
  name: 'Victreebel',
  types: [types.GRASS, types.POISON],
  evolvesTo: [],
}
export const WEEPINBELL: Pokemon = {
  id: 'weepinbell',
  name: 'Weepinbell',
  types: [types.GRASS, types.POISON],
  evolvesTo: [VICTREEBEL],
}
export const BELLSPROUT: Pokemon = {
  id: 'bellsprout',
  name: 'Bellsprout',
  types: [types.GRASS, types.POISON],
  evolvesTo: [WEEPINBELL],
}
export const MACHAMP: Pokemon = {
  id: 'machamp',
  name: 'Machamp',
  types: [types.FIGHTING],
  evolvesTo: [],
}
export const MACHOKE: Pokemon = {
  id: 'machoke',
  name: 'Machoke',
  types: [types.FIGHTING],
  evolvesTo: [MACHAMP],
}
export const MACHOP: Pokemon = {
  id: 'machop',
  name: 'Machop',
  types: [types.FIGHTING],
  evolvesTo: [MACHOKE],
}
export const ALAKAZAM: Pokemon = {
  id: 'alakazam',
  name: 'Alakazam',
  types: [types.PSYCHIC],
  evolvesTo: [],
}
export const KADABRA: Pokemon = {
  id: 'kadabra',
  name: 'Kadabra',
  types: [types.PSYCHIC],
  evolvesTo: [ALAKAZAM],
}
export const ABRA: Pokemon = {
  id: 'abra',
  name: 'Abra',
  types: [types.PSYCHIC],
  evolvesTo: [KADABRA],
}
export const POLIWRATH: Pokemon = {
  id: 'poliwrath',
  name: 'Poliwrath',
  types: [types.WATER, types.FIGHTING],
  evolvesTo: [],
}
export const POLIWHIRL: Pokemon = {
  id: 'poliwhirl',
  name: 'Poliwhirl',
  types: [types.WATER],
  evolvesTo: [POLIWRATH, POLITOED],
}
export const POLIWAG: Pokemon = {
  id: 'poliwag',
  name: 'Poliwag',
  types: [types.WATER],
  evolvesTo: [POLIWHIRL],
}
export const ARCANINE: Pokemon = {
  id: 'arcanine',
  name: 'Arcanine',
  types: [types.FIRE],
  evolvesTo: [],
}
export const GROWLITHE: Pokemon = {
  id: 'growlithe',
  name: 'Growlithe',
  types: [types.FIRE],
  evolvesTo: [ARCANINE],
}
export const PRIMEAPE: Pokemon = {
  id: 'primeape',
  name: 'Primeape',
  types: [types.FIGHTING],
  evolvesTo: [],
}
export const MANKEY: Pokemon = {
  id: 'mankey',
  name: 'Mankey',
  types: [types.FIGHTING],
  evolvesTo: [PRIMEAPE],
}
export const GOLDUCK: Pokemon = {
  id: 'golduck',
  name: 'Golduck',
  types: [types.WATER],
  evolvesTo: [],
}
export const PSYDUCK: Pokemon = {
  id: 'psyduck',
  name: 'Psyduck',
  types: [types.WATER],
  evolvesTo: [GOLDUCK],
}
export const PERSIAN: Pokemon = {
  id: 'persian',
  name: 'Persian',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const MEOWTH: Pokemon = {
  id: 'meowth',
  name: 'Meowth',
  types: [types.NORMAL],
  evolvesTo: [PERSIAN],
}
export const DUGTRIO: Pokemon = {
  id: 'dugtrio',
  name: 'Dugtrio',
  types: [types.GROUND],
  evolvesTo: [],
}
export const DIGLETT: Pokemon = {
  id: 'diglett',
  name: 'Diglett',
  types: [types.GROUND],
  evolvesTo: [DUGTRIO],
}
export const VENOMOTH: Pokemon = {
  id: 'venomoth',
  name: 'Venomoth',
  types: [types.BUG, types.POISON],
  evolvesTo: [],
}
export const VENONAT: Pokemon = {
  id: 'venonat',
  name: 'Venonat',
  types: [types.BUG, types.POISON],
  evolvesTo: [VENOMOTH],
}
export const PARASECT: Pokemon = {
  id: 'parasect',
  name: 'Parasect',
  types: [types.BUG, types.GRASS],
  evolvesTo: [],
}
export const PARAS: Pokemon = {
  id: 'paras',
  name: 'Paras',
  types: [types.BUG, types.GRASS],
  evolvesTo: [PARASECT],
}
export const VILEPLUME: Pokemon = {
  id: 'vileplume',
  name: 'Vileplume',
  types: [types.GRASS, types.POISON],
  evolvesTo: [],
}
export const GLOOM: Pokemon = {
  id: 'gloom',
  name: 'Gloom',
  types: [types.GRASS, types.POISON],
  evolvesTo: [VILEPLUME, BELLOSSOM],
}
export const ODDISH: Pokemon = {
  id: 'oddish',
  name: 'Oddish',
  types: [types.GRASS, types.POISON],
  evolvesTo: [GLOOM],
}
export const GOLBAT: Pokemon = {
  id: 'golbat',
  name: 'Golbat',
  types: [types.POISON, types.FLYING],
  evolvesTo: [CROBAT],
}
export const ZUBAT: Pokemon = {
  id: 'zubat',
  name: 'Zubat',
  types: [types.POISON, types.FLYING],
  evolvesTo: [GOLBAT],
}
export const WIGGLYTUFF: Pokemon = {
  id: 'wigglytuff',
  name: 'Wigglytuff',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const JIGGLYPUFF: Pokemon = {
  id: 'jigglypuff',
  name: 'Jigglypuff',
  types: [types.NORMAL],
  evolvesTo: [WIGGLYTUFF],
}
export const NINETALES: Pokemon = {
  id: 'ninetales',
  name: 'Ninetales',
  types: [types.FIRE],
  evolvesTo: [],
}
export const VULPIX: Pokemon = {
  id: 'vulpix',
  name: 'Vulpix',
  types: [types.FIRE],
  evolvesTo: [NINETALES],
}
export const CLEFABLE: Pokemon = {
  id: 'clefable',
  name: 'Clefable',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const CLEFAIRY: Pokemon = {
  id: 'clefairy',
  name: 'Clefairy',
  types: [types.NORMAL],
  evolvesTo: [CLEFABLE],
}
export const IGGLYBUFF: Pokemon = {
  id: 'igglybuff',
  name: 'Igglybuff',
  types: [types.NORMAL],
  evolvesTo: [JIGGLYPUFF],
}
export const CLEFFA: Pokemon = {
  id: 'cleffa',
  name: 'Cleffa',
  types: [types.NORMAL],
  evolvesTo: [CLEFAIRY],
}
export const NIDOKING: Pokemon = {
  id: 'nidoking',
  name: 'Nidoking',
  types: [types.POISON, types.GROUND],
  evolvesTo: [],
}
export const NIDORINO: Pokemon = {
  id: 'nidorino',
  name: 'Nidorino',
  types: [types.POISON],
  evolvesTo: [NIDOKING],
}
export const NIDORAN_M: Pokemon = {
  id: 'nidoran-m',
  name: 'Nidoran ♂',
  types: [types.POISON],
  evolvesTo: [NIDORINO],
}
export const NIDOQUEEN: Pokemon = {
  id: 'nidoqueen',
  name: 'Nidoqueen',
  types: [types.POISON, types.GROUND],
  evolvesTo: [],
}
export const NIDORINA: Pokemon = {
  id: 'nidorina',
  name: 'Nidorina',
  types: [types.POISON],
  evolvesTo: [NIDOQUEEN],
}
export const NIDORAN_F: Pokemon = {
  id: 'nidoran-f',
  name: 'Nidoran ♀',
  types: [types.POISON],
  evolvesTo: [NIDORINA],
}
export const SANDSLASH: Pokemon = {
  id: 'sandslash',
  name: 'Sandslash',
  types: [types.GROUND],
  evolvesTo: [],
}
export const SANDSHREW: Pokemon = {
  id: 'sandshrew',
  name: 'Sandshrew',
  types: [types.GROUND],
  evolvesTo: [SANDSLASH],
}
export const RAICHU: Pokemon = {
  id: 'raichu',
  name: 'Raichu',
  types: [types.ELECTRIC],
  evolvesTo: [],
}
export const PIKACHU: Pokemon = {
  id: 'pikachu',
  name: 'Pikachu',
  types: [types.ELECTRIC],
  evolvesTo: [RAICHU],
}
export const PICHU: Pokemon = {
  id: 'pichu',
  name: 'Pichu',
  types: [types.ELECTRIC],
  evolvesTo: [PIKACHU],
}
export const ARBOK: Pokemon = {
  id: 'arbok',
  name: 'Arbok',
  types: [types.POISON],
  evolvesTo: [],
}
export const EKANS: Pokemon = {
  id: 'ekans',
  name: 'Ekans',
  types: [types.POISON],
  evolvesTo: [ARBOK],
}
export const FEAROW: Pokemon = {
  id: 'fearow',
  name: 'Fearow',
  types: [types.NORMAL, types.FLYING],
  evolvesTo: [],
}
export const SPEAROW: Pokemon = {
  id: 'spearow',
  name: 'Spearow',
  types: [types.NORMAL, types.FLYING],
  evolvesTo: [FEAROW],
}
export const RATICATE: Pokemon = {
  id: 'raticate',
  name: 'Raticate',
  types: [types.NORMAL],
  evolvesTo: [],
}
export const RATTATA: Pokemon = {
  id: 'rattata',
  name: 'Rattata',
  types: [types.NORMAL],
  evolvesTo: [RATICATE],
}
export const PIDGEOT: Pokemon = {
  id: 'pidgeot',
  name: 'Pidgeot',
  types: [types.NORMAL, types.FLYING],
  evolvesTo: [],
}
export const PIDGEOTTO: Pokemon = {
  id: 'pidgeotto',
  name: 'Pidgeotto',
  types: [types.NORMAL, types.FLYING],
  evolvesTo: [PIDGEOT],
}
export const PIDGEY: Pokemon = {
  id: 'pidgey',
  name: 'Pidgey',
  types: [types.NORMAL, types.FLYING],
  evolvesTo: [PIDGEOTTO],
}
export const BEEDRILL: Pokemon = {
  id: 'beedrill',
  name: 'Beedrill',
  types: [types.BUG, types.POISON],
  evolvesTo: [],
}
export const KAKUNA: Pokemon = {
  id: 'kakuna',
  name: 'Kakuna',
  types: [types.BUG, types.POISON],
  evolvesTo: [BEEDRILL],
}
export const WEEDLE: Pokemon = {
  id: 'weedle',
  name: 'Weedle',
  types: [types.BUG, types.POISON],
  evolvesTo: [KAKUNA],
}
export const BUTTERFREE: Pokemon = {
  id: 'butterfree',
  name: 'Butterfree',
  types: [types.BUG, types.FLYING],
  evolvesTo: [],
}
export const METAPOD: Pokemon = {
  id: 'metapod',
  name: 'Metapod',
  types: [types.BUG],
  evolvesTo: [BUTTERFREE],
}
export const CATERPIE: Pokemon = {
  id: 'caterpie',
  name: 'Caterpie',
  types: [types.BUG],
  evolvesTo: [METAPOD],
}
export const BLASTOISE: Pokemon = {
  id: 'blastoise',
  name: 'Blastoise',
  types: [types.WATER],
  evolvesTo: [],
}
export const WARTORTLE: Pokemon = {
  id: 'wartortle',
  name: 'Wartortle',
  types: [types.WATER],
  evolvesTo: [BLASTOISE],
}
export const SQUIRTLE: Pokemon = {
  id: 'squirtle',
  name: 'Squirtle',
  types: [types.WATER],
  evolvesTo: [WARTORTLE],
}
export const CHARIZARD: Pokemon = {
  id: 'charizard',
  name: 'Charizard',
  types: [types.FIRE, types.FLYING],
  evolvesTo: [],
}
export const CHARMELEON: Pokemon = {
  id: 'charmeleon',
  name: 'Charmeleon',
  types: [types.FIRE],
  evolvesTo: [CHARIZARD],
}
export const CHARMANDER: Pokemon = {
  id: 'charmander',
  name: 'Charmander',
  types: [types.FIRE],
  evolvesTo: [CHARMELEON],
}
export const VENUSAUR: Pokemon = {
  id: 'venusaur',
  name: 'Venusaur',
  types: [types.GRASS, types.POISON],
  evolvesTo: [],
}
export const IVYSAUR: Pokemon = {
  id: 'ivysaur',
  name: 'Ivysaur',
  types: [types.GRASS, types.POISON],
  evolvesTo: [VENUSAUR],
}
export const BULBASAUR: Pokemon = {
  id: 'bulbasaur',
  name: 'Bulbasaur',
  types: [types.GRASS, types.POISON],
  evolvesTo: [IVYSAUR],
}

const data: Pokemon[] = [
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
