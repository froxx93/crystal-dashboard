import Pokemon from '~/domains/Pokemon'
import * as types from '~/assets/data/types'

const data: Pokemon[] = [
  {
    id: 'bulbasaur',
    name: 'Bulbasaur',
    types: [types.GRASS, types.POISON],
  },
  {
    id: 'ivysaur',
    name: 'Ivysaur',
    types: [types.GRASS, types.POISON],
  },
  {
    id: 'venusaur',
    name: 'Venusaur',
    types: [types.GRASS, types.POISON],
  },
  {
    id: 'charmander',
    name: 'Charmander',
    types: [types.FIRE],
  },
  {
    id: 'charmeleon',
    name: 'Charmeleon',
    types: [types.FIRE],
  },
  {
    id: 'charizard',
    name: 'Charizard',
    types: [types.FIRE, types.FLYING],
  },
  {
    id: 'squirtle',
    name: 'Squirtle',
    types: [types.WATER],
  },
  {
    id: 'wartortle',
    name: 'Wartortle',
    types: [types.WATER],
  },
  {
    id: 'blastoise',
    name: 'Blastoise',
    types: [types.WATER],
  },
  {
    id: 'caterpie',
    name: 'Caterpie',
    types: [types.BUG],
  },
  {
    id: 'metapod',
    name: 'Metapod',
    types: [types.BUG],
  },
  {
    id: 'butterfree',
    name: 'Butterfree',
    types: [types.BUG, types.FLYING],
  },
  {
    id: 'weedle',
    name: 'Weedle',
    types: [types.BUG, types.POISON],
  },
  {
    id: 'kakuna',
    name: 'Kakuna',
    types: [types.BUG, types.POISON],
  },
  {
    id: 'beedrill',
    name: 'Beedrill',
    types: [types.BUG, types.POISON],
  },
  {
    id: 'pidgey',
    name: 'Pidgey',
    types: [types.NORMAL, types.FLYING],
  },
  {
    id: 'pidgeotto',
    name: 'Pidgeotto',
    types: [types.NORMAL, types.FLYING],
  },
  {
    id: 'pidgeot',
    name: 'Pidgeot',
    types: [types.NORMAL, types.FLYING],
  },
  {
    id: 'rattata',
    name: 'Rattata',
    types: [types.NORMAL],
  },
  {
    id: 'raticate',
    name: 'Raticate',
    types: [types.NORMAL],
  },
  {
    id: 'spearow',
    name: 'Spearow',
    types: [types.NORMAL, types.FLYING],
  },
  {
    id: 'fearow',
    name: 'Fearow',
    types: [types.NORMAL, types.FLYING],
  },
  {
    id: 'ekans',
    name: 'Ekans',
    types: [types.POISON],
  },
  {
    id: 'arbok',
    name: 'Arbok',
    types: [types.POISON],
  },
  {
    id: 'pikachu',
    name: 'Pikachu',
    types: [types.ELECTRIC],
  },
  {
    id: 'raichu',
    name: 'Raichu',
    types: [types.ELECTRIC],
  },
  {
    id: 'sandshrew',
    name: 'Sandshrew',
    types: [types.GROUND],
  },
  {
    id: 'sandslash',
    name: 'Sandslash',
    types: [types.GROUND],
  },
  {
    id: 'nidoran-f',
    name: 'Nidoran ♀',
    types: [types.POISON],
  },
  {
    id: 'nidorina',
    name: 'Nidorina',
    types: [types.POISON],
  },
  {
    id: 'nidoqueen',
    name: 'Nidoqueen',
    types: [types.POISON, types.GROUND],
  },
  {
    id: 'nidoran-m',
    name: 'Nidoran ♂',
    types: [types.POISON],
  },
  {
    id: 'nidorino',
    name: 'Nidorino',
    types: [types.POISON],
  },
  {
    id: 'nidoking',
    name: 'Nidoking',
    types: [types.POISON, types.GROUND],
  },
  {
    id: 'clefairy',
    name: 'Clefairy',
    types: [types.NORMAL],
  },
  {
    id: 'clefable',
    name: 'Clefable',
    types: [types.NORMAL],
  },
  {
    id: 'vulpix',
    name: 'Vulpix',
    types: [types.FIRE],
  },
  {
    id: 'ninetales',
    name: 'Ninetales',
    types: [types.FIRE],
  },
  {
    id: 'jigglypuff',
    name: 'Jigglypuff',
    types: [types.NORMAL],
  },
  {
    id: 'wigglytuff',
    name: 'Wigglytuff',
    types: [types.NORMAL],
  },
  {
    id: 'zubat',
    name: 'Zubat',
    types: [types.POISON, types.FLYING],
  },
  {
    id: 'golbat',
    name: 'Golbat',
    types: [types.POISON, types.FLYING],
  },
  {
    id: 'oddish',
    name: 'Oddish',
    types: [types.GRASS, types.POISON],
  },
  {
    id: 'gloom',
    name: 'Gloom',
    types: [types.GRASS, types.POISON],
  },
  {
    id: 'vileplume',
    name: 'Vileplume',
    types: [types.GRASS, types.POISON],
  },
  {
    id: 'paras',
    name: 'Paras',
    types: [types.BUG, types.GRASS],
  },
  {
    id: 'parasect',
    name: 'Parasect',
    types: [types.BUG, types.GRASS],
  },
  {
    id: 'venonat',
    name: 'Venonat',
    types: [types.BUG, types.POISON],
  },
  {
    id: 'venomoth',
    name: 'Venomoth',
    types: [types.BUG, types.POISON],
  },
  {
    id: 'diglett',
    name: 'Diglett',
    types: [types.GROUND],
  },
  {
    id: 'dugtrio',
    name: 'Dugtrio',
    types: [types.GROUND],
  },
  {
    id: 'meowth',
    name: 'Meowth',
    types: [types.NORMAL],
  },
  {
    id: 'persian',
    name: 'Persian',
    types: [types.NORMAL],
  },
  {
    id: 'psyduck',
    name: 'Psyduck',
    types: [types.WATER],
  },
  {
    id: 'golduck',
    name: 'Golduck',
    types: [types.WATER],
  },
  {
    id: 'mankey',
    name: 'Mankey',
    types: [types.FIGHTING],
  },
  {
    id: 'primeape',
    name: 'Primeape',
    types: [types.FIGHTING],
  },
  {
    id: 'growlithe',
    name: 'Growlithe',
    types: [types.FIRE],
  },
  {
    id: 'arcanine',
    name: 'Arcanine',
    types: [types.FIRE],
  },
  {
    id: 'poliwag',
    name: 'Poliwag',
    types: [types.WATER],
  },
  {
    id: 'poliwhirl',
    name: 'Poliwhirl',
    types: [types.WATER],
  },
  {
    id: 'poliwrath',
    name: 'Poliwrath',
    types: [types.WATER, types.FIGHTING],
  },
  {
    id: 'abra',
    name: 'Abra',
    types: [types.PSYCHIC],
  },
  {
    id: 'kadabra',
    name: 'Kadabra',
    types: [types.PSYCHIC],
  },
  {
    id: 'alakazam',
    name: 'Alakazam',
    types: [types.PSYCHIC],
  },
  {
    id: 'machop',
    name: 'Machop',
    types: [types.FIGHTING],
  },
  {
    id: 'machoke',
    name: 'Machoke',
    types: [types.FIGHTING],
  },
  {
    id: 'machamp',
    name: 'Machamp',
    types: [types.FIGHTING],
  },
  {
    id: 'bellsprout',
    name: 'Bellsprout',
    types: [types.GRASS, types.POISON],
  },
  {
    id: 'weepinbell',
    name: 'Weepinbell',
    types: [types.GRASS, types.POISON],
  },
  {
    id: 'victreebel',
    name: 'Victreebel',
    types: [types.GRASS, types.POISON],
  },
  {
    id: 'tentacool',
    name: 'Tentacool',
    types: [types.WATER, types.POISON],
  },
  {
    id: 'tentacruel',
    name: 'Tentacruel',
    types: [types.WATER, types.POISON],
  },
  {
    id: 'geodude',
    name: 'Geodude',
    types: [types.ROCK, types.GROUND],
  },
  {
    id: 'graveler',
    name: 'Graveler',
    types: [types.ROCK, types.GROUND],
  },
  {
    id: 'golem',
    name: 'Golem',
    types: [types.ROCK, types.GROUND],
  },
  {
    id: 'ponyta',
    name: 'Ponyta',
    types: [types.FIRE],
  },
  {
    id: 'rapidash',
    name: 'Rapidash',
    types: [types.FIRE],
  },
  {
    id: 'slowpoke',
    name: 'Slowpoke',
    types: [types.WATER, types.PSYCHIC],
  },
  {
    id: 'slowbro',
    name: 'Slowbro',
    types: [types.WATER, types.PSYCHIC],
  },
  {
    id: 'magnemite',
    name: 'Magnemite',
    types: [types.ELECTRIC, types.STEEL],
  },
  {
    id: 'magneton',
    name: 'Magneton',
    types: [types.ELECTRIC, types.STEEL],
  },
  {
    id: 'farfetchd',
    name: "Farfetch'd",
    types: [types.NORMAL, types.FLYING],
  },
  {
    id: 'doduo',
    name: 'Doduo',
    types: [types.NORMAL, types.FLYING],
  },
  {
    id: 'dodrio',
    name: 'Dodrio',
    types: [types.NORMAL, types.FLYING],
  },
  {
    id: 'seel',
    name: 'Seel',
    types: [types.WATER],
  },
  {
    id: 'dewgong',
    name: 'Dewgong',
    types: [types.WATER, types.ICE],
  },
  {
    id: 'grimer',
    name: 'Grimer',
    types: [types.POISON],
  },
  {
    id: 'muk',
    name: 'Muk',
    types: [types.POISON],
  },
  {
    id: 'shellder',
    name: 'Shellder',
    types: [types.WATER],
  },
  {
    id: 'cloyster',
    name: 'Cloyster',
    types: [types.WATER, types.ICE],
  },
  {
    id: 'gastly',
    name: 'Gastly',
    types: [types.GHOST, types.POISON],
  },
  {
    id: 'haunter',
    name: 'Haunter',
    types: [types.GHOST, types.POISON],
  },
  {
    id: 'gengar',
    name: 'Gengar',
    types: [types.GHOST, types.POISON],
  },
  {
    id: 'onix',
    name: 'Onix',
    types: [types.ROCK, types.GROUND],
  },
  {
    id: 'drowzee',
    name: 'Drowzee',
    types: [types.PSYCHIC],
  },
  {
    id: 'hypno',
    name: 'Hypno',
    types: [types.PSYCHIC],
  },
  {
    id: 'krabby',
    name: 'Krabby',
    types: [types.WATER],
  },
  {
    id: 'kingler',
    name: 'Kingler',
    types: [types.WATER],
  },
  {
    id: 'voltorb',
    name: 'Voltorb',
    types: [types.ELECTRIC],
  },
  {
    id: 'electrode',
    name: 'Electrode',
    types: [types.ELECTRIC],
  },
  {
    id: 'exeggcute',
    name: 'Exeggcute',
    types: [types.GRASS, types.PSYCHIC],
  },
  {
    id: 'exeggutor',
    name: 'Exeggutor',
    types: [types.GRASS, types.PSYCHIC],
  },
  {
    id: 'cubone',
    name: 'Cubone',
    types: [types.GROUND],
  },
  {
    id: 'marowak',
    name: 'Marowak',
    types: [types.GROUND],
  },
  {
    id: 'hitmonlee',
    name: 'Hitmonlee',
    types: [types.FIGHTING],
  },
  {
    id: 'hitmonchan',
    name: 'Hitmonchan',
    types: [types.FIGHTING],
  },
  {
    id: 'lickitung',
    name: 'Lickitung',
    types: [types.NORMAL],
  },
  {
    id: 'koffing',
    name: 'Koffing',
    types: [types.POISON],
  },
  {
    id: 'weezing',
    name: 'Weezing',
    types: [types.POISON],
  },
  {
    id: 'rhyhorn',
    name: 'Rhyhorn',
    types: [types.GROUND, types.ROCK],
  },
  {
    id: 'rhydon',
    name: 'Rhydon',
    types: [types.GROUND, types.ROCK],
  },
  {
    id: 'chansey',
    name: 'Chansey',
    types: [types.NORMAL],
  },
  {
    id: 'tangela',
    name: 'Tangela',
    types: [types.GRASS],
  },
  {
    id: 'kangaskhan',
    name: 'Kangaskhan',
    types: [types.NORMAL],
  },
  {
    id: 'horsea',
    name: 'Horsea',
    types: [types.WATER],
  },
  {
    id: 'seadra',
    name: 'Seadra',
    types: [types.WATER],
  },
  {
    id: 'goldeen',
    name: 'Goldeen',
    types: [types.WATER],
  },
  {
    id: 'seaking',
    name: 'Seaking',
    types: [types.WATER],
  },
  {
    id: 'staryu',
    name: 'Staryu',
    types: [types.WATER],
  },
  {
    id: 'starmie',
    name: 'Starmie',
    types: [types.WATER, types.PSYCHIC],
  },
  {
    id: 'mr-mime',
    name: 'Mr. Mime',
    types: [types.PSYCHIC],
  },
  {
    id: 'scyther',
    name: 'Scyther',
    types: [types.BUG, types.FLYING],
  },
  {
    id: 'jynx',
    name: 'Jynx',
    types: [types.ICE, types.PSYCHIC],
  },
  {
    id: 'electabuzz',
    name: 'Electabuzz',
    types: [types.ELECTRIC],
  },
  {
    id: 'magmar',
    name: 'Magmar',
    types: [types.FIRE],
  },
  {
    id: 'pinsir',
    name: 'Pinsir',
    types: [types.BUG],
  },
  {
    id: 'tauros',
    name: 'Tauros',
    types: [types.NORMAL],
  },
  {
    id: 'magikarp',
    name: 'Magikarp',
    types: [types.WATER],
  },
  {
    id: 'gyarados',
    name: 'Gyarados',
    types: [types.WATER, types.FLYING],
  },
  {
    id: 'lapras',
    name: 'Lapras',
    types: [types.WATER, types.ICE],
  },
  {
    id: 'ditto',
    name: 'Ditto',
    types: [types.NORMAL],
  },
  {
    id: 'eevee',
    name: 'Eevee',
    types: [types.NORMAL],
  },
  {
    id: 'vaporeon',
    name: 'Vaporeon',
    types: [types.WATER],
  },
  {
    id: 'jolteon',
    name: 'Jolteon',
    types: [types.ELECTRIC],
  },
  {
    id: 'flareon',
    name: 'Flareon',
    types: [types.FIRE],
  },
  {
    id: 'porygon',
    name: 'Porygon',
    types: [types.NORMAL],
  },
  {
    id: 'omanyte',
    name: 'Omanyte',
    types: [types.ROCK, types.WATER],
  },
  {
    id: 'omastar',
    name: 'Omastar',
    types: [types.ROCK, types.WATER],
  },
  {
    id: 'kabuto',
    name: 'Kabuto',
    types: [types.ROCK, types.WATER],
  },
  {
    id: 'kabutops',
    name: 'Kabutops',
    types: [types.ROCK, types.WATER],
  },
  {
    id: 'aerodactyl',
    name: 'Aerodactyl',
    types: [types.ROCK, types.FLYING],
  },
  {
    id: 'snorlax',
    name: 'Snorlax',
    types: [types.NORMAL],
  },
  {
    id: 'articuno',
    name: 'Articuno',
    types: [types.ICE, types.FLYING],
  },
  {
    id: 'zapdos',
    name: 'Zapdos',
    types: [types.ELECTRIC, types.FLYING],
  },
  {
    id: 'moltres',
    name: 'Moltres',
    types: [types.FIRE, types.FLYING],
  },
  {
    id: 'dratini',
    name: 'Dratini',
    types: [types.DRAGON],
  },
  {
    id: 'dragonair',
    name: 'Dragonair',
    types: [types.DRAGON],
  },
  {
    id: 'dragonite',
    name: 'Dragonite',
    types: [types.DRAGON, types.FLYING],
  },
  {
    id: 'mewtwo',
    name: 'Mewtwo',
    types: [types.PSYCHIC],
  },
  {
    id: 'mew',
    name: 'Mew',
    types: [types.PSYCHIC],
  },
  {
    id: 'chikorita',
    name: 'Chikorita',
    types: [types.GRASS],
  },
  {
    id: 'bayleef',
    name: 'Bayleef',
    types: [types.GRASS],
  },
  {
    id: 'meganium',
    name: 'Meganium',
    types: [types.GRASS],
  },
  {
    id: 'cyndaquil',
    name: 'Cyndaquil',
    types: [types.FIRE],
  },
  {
    id: 'quilava',
    name: 'Quilava',
    types: [types.FIRE],
  },
  {
    id: 'typhlosion',
    name: 'Typhlosion',
    types: [types.FIRE],
  },
  {
    id: 'totodile',
    name: 'Totodile',
    types: [types.WATER],
  },
  {
    id: 'croconaw',
    name: 'Croconaw',
    types: [types.WATER],
  },
  {
    id: 'feraligatr',
    name: 'Feraligatr',
    types: [types.WATER],
  },
  {
    id: 'sentret',
    name: 'Sentret',
    types: [types.NORMAL],
  },
  {
    id: 'furret',
    name: 'Furret',
    types: [types.NORMAL],
  },
  {
    id: 'hoothoot',
    name: 'Hoothoot',
    types: [types.NORMAL, types.FLYING],
  },
  {
    id: 'noctowl',
    name: 'Noctowl',
    types: [types.NORMAL, types.FLYING],
  },
  {
    id: 'ledyba',
    name: 'Ledyba',
    types: [types.BUG, types.FLYING],
  },
  {
    id: 'ledian',
    name: 'Ledian',
    types: [types.BUG, types.FLYING],
  },
  {
    id: 'spinarak',
    name: 'Spinarak',
    types: [types.BUG, types.POISON],
  },
  {
    id: 'ariados',
    name: 'Ariados',
    types: [types.BUG, types.POISON],
  },
  {
    id: 'crobat',
    name: 'Crobat',
    types: [types.POISON, types.FLYING],
  },
  {
    id: 'chinchou',
    name: 'Chinchou',
    types: [types.WATER, types.ELECTRIC],
  },
  {
    id: 'lanturn',
    name: 'Lanturn',
    types: [types.WATER, types.ELECTRIC],
  },
  {
    id: 'pichu',
    name: 'Pichu',
    types: [types.ELECTRIC],
  },
  {
    id: 'cleffa',
    name: 'Cleffa',
    types: [types.NORMAL],
  },
  {
    id: 'igglybuff',
    name: 'Igglybuff',
    types: [types.NORMAL],
  },
  {
    id: 'togepi',
    name: 'Togepi',
    types: [types.NORMAL],
  },
  {
    id: 'togetic',
    name: 'Togetic',
    types: [types.NORMAL, types.FLYING],
  },
  {
    id: 'natu',
    name: 'Natu',
    types: [types.PSYCHIC, types.FLYING],
  },
  {
    id: 'xatu',
    name: 'Xatu',
    types: [types.PSYCHIC, types.FLYING],
  },
  {
    id: 'mareep',
    name: 'Mareep',
    types: [types.ELECTRIC],
  },
  {
    id: 'flaaffy',
    name: 'Flaaffy',
    types: [types.ELECTRIC],
  },
  {
    id: 'ampharos',
    name: 'Ampharos',
    types: [types.ELECTRIC],
  },
  {
    id: 'bellossom',
    name: 'Bellossom',
    types: [types.GRASS],
  },
  {
    id: 'marill',
    name: 'Marill',
    types: [types.WATER],
  },
  {
    id: 'azumarill',
    name: 'Azumarill',
    types: [types.WATER],
  },
  {
    id: 'sudowoodo',
    name: 'Sudowoodo',
    types: [types.ROCK],
  },
  {
    id: 'politoed',
    name: 'Politoed',
    types: [types.WATER],
  },
  {
    id: 'hoppip',
    name: 'Hoppip',
    types: [types.GRASS, types.FLYING],
  },
  {
    id: 'skiploom',
    name: 'Skiploom',
    types: [types.GRASS, types.FLYING],
  },
  {
    id: 'jumpluff',
    name: 'Jumpluff',
    types: [types.GRASS, types.FLYING],
  },
  {
    id: 'aipom',
    name: 'Aipom',
    types: [types.NORMAL],
  },
  {
    id: 'sunkern',
    name: 'Sunkern',
    types: [types.GRASS],
  },
  {
    id: 'sunflora',
    name: 'Sunflora',
    types: [types.GRASS],
  },
  {
    id: 'yanma',
    name: 'Yanma',
    types: [types.BUG, types.FLYING],
  },
  {
    id: 'wooper',
    name: 'Wooper',
    types: [types.WATER, types.GROUND],
  },
  {
    id: 'quagsire',
    name: 'Quagsire',
    types: [types.WATER, types.GROUND],
  },
  {
    id: 'espeon',
    name: 'Espeon',
    types: [types.PSYCHIC],
  },
  {
    id: 'umbreon',
    name: 'Umbreon',
    types: [types.DARK],
  },
  {
    id: 'murkrow',
    name: 'Murkrow',
    types: [types.DARK, types.FLYING],
  },
  {
    id: 'slowking',
    name: 'Slowking',
    types: [types.WATER, types.PSYCHIC],
  },
  {
    id: 'misdreavus',
    name: 'Misdreavus',
    types: [types.GHOST],
  },
  {
    id: 'unown',
    name: 'Unown',
    types: [types.PSYCHIC],
  },
  {
    id: 'wobbuffet',
    name: 'Wobbuffet',
    types: [types.PSYCHIC],
  },
  {
    id: 'girafarig',
    name: 'Girafarig',
    types: [types.NORMAL, types.PSYCHIC],
  },
  {
    id: 'pineco',
    name: 'Pineco',
    types: [types.BUG],
  },
  {
    id: 'forretress',
    name: 'Forretress',
    types: [types.BUG, types.STEEL],
  },
  {
    id: 'dunsparce',
    name: 'Dunsparce',
    types: [types.NORMAL],
  },
  {
    id: 'gligar',
    name: 'Gligar',
    types: [types.GROUND, types.FLYING],
  },
  {
    id: 'steelix',
    name: 'Steelix',
    types: [types.STEEL, types.GROUND],
  },
  {
    id: 'snubbull',
    name: 'Snubbull',
    types: [types.NORMAL],
  },
  {
    id: 'granbull',
    name: 'Granbull',
    types: [types.NORMAL],
  },
  {
    id: 'qwilfish',
    name: 'Qwilfish',
    types: [types.WATER, types.POISON],
  },
  {
    id: 'scizor',
    name: 'Scizor',
    types: [types.BUG, types.STEEL],
  },
  {
    id: 'shuckle',
    name: 'Shuckle',
    types: [types.BUG, types.ROCK],
  },
  {
    id: 'heracross',
    name: 'Heracross',
    types: [types.BUG, types.FIGHTING],
  },
  {
    id: 'sneasel',
    name: 'Sneasel',
    types: [types.DARK, types.ICE],
  },
  {
    id: 'teddiursa',
    name: 'Teddiursa',
    types: [types.NORMAL],
  },
  {
    id: 'ursaring',
    name: 'Ursaring',
    types: [types.NORMAL],
  },
  {
    id: 'slugma',
    name: 'Slugma',
    types: [types.FIRE],
  },
  {
    id: 'magcargo',
    name: 'Magcargo',
    types: [types.FIRE, types.ROCK],
  },
  {
    id: 'swinub',
    name: 'Swinub',
    types: [types.ICE, types.GROUND],
  },
  {
    id: 'piloswine',
    name: 'Piloswine',
    types: [types.ICE, types.GROUND],
  },
  {
    id: 'corsola',
    name: 'Corsola',
    types: [types.WATER, types.ROCK],
  },
  {
    id: 'remoraid',
    name: 'Remoraid',
    types: [types.WATER],
  },
  {
    id: 'octillery',
    name: 'Octillery',
    types: [types.WATER],
  },
  {
    id: 'delibird',
    name: 'Delibird',
    types: [types.ICE, types.FLYING],
  },
  {
    id: 'mantine',
    name: 'Mantine',
    types: [types.WATER, types.FLYING],
  },
  {
    id: 'skarmory',
    name: 'Skarmory',
    types: [types.STEEL, types.FLYING],
  },
  {
    id: 'houndour',
    name: 'Houndour',
    types: [types.DARK, types.FIRE],
  },
  {
    id: 'houndoom',
    name: 'Houndoom',
    types: [types.DARK, types.FIRE],
  },
  {
    id: 'kingdra',
    name: 'Kingdra',
    types: [types.WATER, types.DRAGON],
  },
  {
    id: 'phanpy',
    name: 'Phanpy',
    types: [types.GROUND],
  },
  {
    id: 'donphan',
    name: 'Donphan',
    types: [types.GROUND],
  },
  {
    id: 'porygon2',
    name: 'Porygon2',
    types: [types.NORMAL],
  },
  {
    id: 'stantler',
    name: 'Stantler',
    types: [types.NORMAL],
  },
  {
    id: 'smeargle',
    name: 'Smeargle',
    types: [types.NORMAL],
  },
  {
    id: 'tyrogue',
    name: 'Tyrogue',
    types: [types.FIGHTING],
  },
  {
    id: 'hitmontop',
    name: 'Hitmontop',
    types: [types.FIGHTING],
  },
  {
    id: 'smoochum',
    name: 'Smoochum',
    types: [types.ICE, types.PSYCHIC],
  },
  {
    id: 'elekid',
    name: 'Elekid',
    types: [types.ELECTRIC],
  },
  {
    id: 'magby',
    name: 'Magby',
    types: [types.FIRE],
  },
  {
    id: 'miltank',
    name: 'Miltank',
    types: [types.NORMAL],
  },
  {
    id: 'blissey',
    name: 'Blissey',
    types: [types.NORMAL],
  },
  {
    id: 'raikou',
    name: 'Raikou',
    types: [types.ELECTRIC],
  },
  {
    id: 'entei',
    name: 'Entei',
    types: [types.FIRE],
  },
  {
    id: 'suicune',
    name: 'Suicune',
    types: [types.WATER],
  },
  {
    id: 'larvitar',
    name: 'Larvitar',
    types: [types.ROCK, types.GROUND],
  },
  {
    id: 'pupitar',
    name: 'Pupitar',
    types: [types.ROCK, types.GROUND],
  },
  {
    id: 'tyranitar',
    name: 'Tyranitar',
    types: [types.ROCK, types.DARK],
  },
  {
    id: 'lugia',
    name: 'Lugia',
    types: [types.PSYCHIC, types.FLYING],
  },
  {
    id: 'ho-oh',
    name: 'Ho-Oh',
    types: [types.FIRE, types.FLYING],
  },
  {
    id: 'celebi',
    name: 'Celebi',
    types: [types.PSYCHIC, types.GRASS],
  },
]

export default data
