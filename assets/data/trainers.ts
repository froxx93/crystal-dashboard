import * as TRAINER_TYPES from './trainerTypes'
import * as POKEMON_SPECIES from './pokemonSpecies'
import Trainer from '~/domains/Trainer'

// beauty
const BEAUTY_CASSIE: Trainer = {
  id: 'beauty-cassie',
  type: TRAINER_TYPES.BEAUTY,
  name: 'Cassie',
  pokemon: [
    {
      species: POKEMON_SPECIES.VILEPLUME,
      level: 28,
    },
    {
      species: POKEMON_SPECIES.BUTTERFREE,
      level: 34,
    },
  ],
}
const BEAUTY_JULIA: Trainer = {
  id: 'beauty-julia',
  type: TRAINER_TYPES.BEAUTY,
  name: 'Julia',
  pokemon: [
    {
      species: POKEMON_SPECIES.PARAS,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.PARASECT,
      level: 35,
    },
    {
      species: POKEMON_SPECIES.EXEGGCUTE,
      level: 32,
    },
  ],
}
const BEAUTY_OLIVIA: Trainer = {
  id: 'beauty-olivia',
  type: TRAINER_TYPES.BEAUTY,
  name: 'Olivia',
  pokemon: [
    {
      species: POKEMON_SPECIES.CORSOLA,
      level: 19,
    },
  ],
}
const BEAUTY_SAMANTHA: Trainer = {
  id: 'beauty-samantha',
  type: TRAINER_TYPES.BEAUTY,
  name: 'Samantha',
  pokemon: [
    {
      species: POKEMON_SPECIES.MEOWTH,
      level: 16,
    },
    {
      species: POKEMON_SPECIES.MEOWTH,
      level: 16,
    },
  ],
}
const BEAUTY_VALERIE: Trainer = {
  id: 'beauty-valerie',
  type: TRAINER_TYPES.BEAUTY,
  name: 'Valerie',
  pokemon: [
    {
      species: POKEMON_SPECIES.HOPPIP,
      level: 16,
    },
    {
      species: POKEMON_SPECIES.SKIPLOOM,
      level: 16,
    },
  ],
}
const BEAUTY_VICTORIA: Trainer = {
  id: 'beauty-victoria',
  type: TRAINER_TYPES.BEAUTY,
  name: 'Victoria',
  pokemon: [
    {
      species: POKEMON_SPECIES.SENTRET,
      level: 9,
    },
    {
      species: POKEMON_SPECIES.SENTRET,
      level: 13,
    },
    {
      species: POKEMON_SPECIES.SENTRET,
      level: 17,
    },
  ],
}

// biker
const BIKER_CHARLES: Trainer = {
  id: 'biker-charles',
  type: TRAINER_TYPES.BIKER,
  name: 'Charles',
  pokemon: [
    {
      species: POKEMON_SPECIES.KOFFING,
      level: 30,
    },
    {
      species: POKEMON_SPECIES.WEEZING,
      level: 30,
    },
    {
      species: POKEMON_SPECIES.CHARMELEON,
      level: 30,
    },
  ],
}
const BIKER_DWAYNE: Trainer = {
  id: 'biker-dwayne',
  type: TRAINER_TYPES.BIKER,
  name: 'Dwayne',
  pokemon: [
    {
      species: POKEMON_SPECIES.KOFFING,
      level: 27,
    },
    {
      species: POKEMON_SPECIES.KOFFING,
      level: 28,
    },
    {
      species: POKEMON_SPECIES.KOFFING,
      level: 29,
    },
    {
      species: POKEMON_SPECIES.KOFFING,
      level: 30,
    },
  ],
}
const BIKER_GLENN: Trainer = {
  id: 'biker-glenn',
  type: TRAINER_TYPES.BIKER,
  name: 'Glenn',
  pokemon: [
    {
      species: POKEMON_SPECIES.KOFFING,
      level: 28,
    },
    {
      species: POKEMON_SPECIES.WEEZING,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.MAGMAR,
      level: 30,
    },
  ],
}
const BIKER_HARRIS: Trainer = {
  id: 'biker-harris',
  type: TRAINER_TYPES.BIKER,
  name: 'Harris',
  pokemon: [
    {
      species: POKEMON_SPECIES.FLAREON,
      level: 34,
    },
  ],
}
const BIKER_JOEL: Trainer = {
  id: 'biker-joel',
  type: TRAINER_TYPES.BIKER,
  name: 'Joel',
  pokemon: [
    {
      species: POKEMON_SPECIES.MAGMAR,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.MAGMAR,
      level: 32,
    },
  ],
}
const BIKER_RILEY: Trainer = {
  id: 'biker-riley',
  type: TRAINER_TYPES.BIKER,
  name: 'Riley',
  pokemon: [
    {
      species: POKEMON_SPECIES.WEEZING,
      level: 34,
    },
  ],
}
const BIKER_ZEKE: Trainer = {
  id: 'biker-zeke',
  type: TRAINER_TYPES.BIKER,
  name: 'Zeke',
  pokemon: [
    {
      species: POKEMON_SPECIES.KOFFING,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.KOFFING,
      level: 32,
    },
  ],
}

// bird keepers
const BIRD_KEEPER_ABE: Trainer = {
  id: 'bird-keeper-abe',
  type: TRAINER_TYPES.BIRD_KEEPER,
  name: 'Abe',
  pokemon: [
    {
      species: POKEMON_SPECIES.SPEAROW,
      level: 9,
    },
  ],
}
const BIRD_KEEPER_BOB: Trainer = {
  id: 'bird-keeper-bob',
  type: TRAINER_TYPES.BIRD_KEEPER,
  name: 'Bob',
  pokemon: [
    {
      species: POKEMON_SPECIES.NOCTOWL,
      level: 34,
    },
  ],
}
const BIRD_KEEPER_BORIS: Trainer = {
  id: 'bird-keeper-boris',
  type: TRAINER_TYPES.BIRD_KEEPER,
  name: 'Boris',
  pokemon: [
    {
      species: POKEMON_SPECIES.DODUO,
      level: 30,
    },
    {
      species: POKEMON_SPECIES.DODRIO,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.DODUO,
      level: 28,
    },
  ],
}
const BIRD_KEEPER_BRET: Trainer = {
  id: 'bird-keeper-bret',
  type: TRAINER_TYPES.BIRD_KEEPER,
  name: 'Bret',
  pokemon: [
    {
      species: POKEMON_SPECIES.PIDGEOTTO,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.FEAROW,
      level: 32,
    },
  ],
}
const BIRD_KEEPER_BRYAN: Trainer = {
  id: 'bird-keeper-bryan',
  type: TRAINER_TYPES.BIRD_KEEPER,
  name: 'Bryan',
  pokemon: [
    {
      species: POKEMON_SPECIES.PIDGEY,
      level: 12,
    },
    {
      species: POKEMON_SPECIES.PIDGEOTTO,
      level: 14,
    },
  ],
}
const BIRD_KEEPER_DENIS: Trainer = {
  id: 'bird-keeper-denis',
  type: TRAINER_TYPES.BIRD_KEEPER,
  name: 'Denis',
  pokemon: [
    {
      species: POKEMON_SPECIES.FEAROW,
      level: 18,
    },
    {
      species: POKEMON_SPECIES.FEAROW,
      level: 18,
    },
    {
      species: POKEMON_SPECIES.SPEAROW,
      level: 20,
    },
  ],
}
const BIRD_KEEPER_JOSE: Trainer = {
  id: 'bird-keeper-jose',
  type: TRAINER_TYPES.BIRD_KEEPER,
  name: 'Jose',
  pokemon: [
    {
      species: POKEMON_SPECIES.FARFETCHD,
      level: 34,
    },
  ],
}
const BIRD_KEEPER_HANK: Trainer = {
  id: 'bird-keeper-hank',
  type: TRAINER_TYPES.BIRD_KEEPER,
  name: 'Hank',
  pokemon: [
    {
      species: POKEMON_SPECIES.PIDGEY,
      level: 12,
    },
    {
      species: POKEMON_SPECIES.PIDGEOT,
      level: 34,
    },
  ],
}
const BIRD_KEEPER_PERRY: Trainer = {
  id: 'bird-keeper-perry',
  type: TRAINER_TYPES.BIRD_KEEPER,
  name: 'Perry',
  pokemon: [
    {
      species: POKEMON_SPECIES.FARFETCHD,
      level: 34,
    },
  ],
}
const BIRD_KEEPER_PETER: Trainer = {
  id: 'bird-keeper-peter',
  type: TRAINER_TYPES.BIRD_KEEPER,
  name: 'Peter',
  pokemon: [
    {
      species: POKEMON_SPECIES.PIDGEY,
      level: 6,
    },
    {
      species: POKEMON_SPECIES.PIDGEY,
      level: 6,
    },
    {
      species: POKEMON_SPECIES.SPEAROW,
      level: 8,
    },
  ],
}
const BIRD_KEEPER_ROD: Trainer = {
  id: 'bird-keeper-rod',
  type: TRAINER_TYPES.BIRD_KEEPER,
  name: 'Rod',
  pokemon: [
    {
      species: POKEMON_SPECIES.PIDGEY,
      level: 7,
    },
    {
      species: POKEMON_SPECIES.PIDGEY,
      level: 7,
    },
  ],
}
const BIRD_KEEPER_ROY: Trainer = {
  id: 'bird-keeper-roy',
  type: TRAINER_TYPES.BIRD_KEEPER,
  name: 'Roy',
  pokemon: [
    {
      species: POKEMON_SPECIES.FEAROW,
      level: 29,
    },
    {
      species: POKEMON_SPECIES.FEAROW,
      level: 35,
    },
  ],
}
const BIRD_KEEPER_THEO: Trainer = {
  id: 'bird-keeper-theo',
  type: TRAINER_TYPES.BIRD_KEEPER,
  name: 'Theo',
  pokemon: [
    {
      species: POKEMON_SPECIES.PIDGEY,
      level: 17,
    },
    {
      species: POKEMON_SPECIES.PIDGEY,
      level: 19,
    },
    {
      species: POKEMON_SPECIES.PIDGEY,
      level: 15,
    },
    {
      species: POKEMON_SPECIES.PIDGEY,
      level: 15,
    },
    {
      species: POKEMON_SPECIES.PIDGEY,
      level: 15,
    },
  ],
}
const BIRD_KEEPER_TOBY: Trainer = {
  id: 'bird-keeper-toby',
  type: TRAINER_TYPES.BIRD_KEEPER,
  name: 'Toby',
  pokemon: [
    {
      species: POKEMON_SPECIES.DODUO,
      level: 15,
    },
    {
      species: POKEMON_SPECIES.DODUO,
      level: 16,
    },
    {
      species: POKEMON_SPECIES.DODUO,
      level: 17,
    },
  ],
}
const BIRD_KEEPER_VANCE: Trainer = {
  id: 'bird-keeper-vance',
  type: TRAINER_TYPES.BIRD_KEEPER,
  name: 'Vance',
  pokemon: [
    {
      species: POKEMON_SPECIES.PIDGEOTTO,
      level: 25,
    },
    {
      species: POKEMON_SPECIES.PIDGEOTTO,
      level: 25,
    },
  ],
}

// black belt
const BLACK_BELT_KENJI: Trainer = {
  id: 'black-belt-kenji',
  type: TRAINER_TYPES.BLACK_BELT,
  name: 'Kenji',
  pokemon: [
    {
      species: POKEMON_SPECIES.MACHOKE,
      level: 28,
    },
  ],
}
const BLACK_BELT_KIYO: Trainer = {
  id: 'black-belt-kiyo',
  type: TRAINER_TYPES.BLACK_BELT,
  name: 'Kiyo',
  pokemon: [
    {
      species: POKEMON_SPECIES.HITMONLEE,
      level: 34,
    },
    {
      species: POKEMON_SPECIES.HITMONCHAN,
      level: 34,
    },
  ],
}
const BLACK_BELT_LAO: Trainer = {
  id: 'black-belt-lao',
  type: TRAINER_TYPES.BLACK_BELT,
  name: 'Lao',
  pokemon: [
    {
      species: POKEMON_SPECIES.HITMONCHAN,
      level: 27,
    },
  ],
}
const BLACK_BELT_LUNG: Trainer = {
  id: 'black-belt-lung',
  type: TRAINER_TYPES.BLACK_BELT,
  name: 'Lung',
  pokemon: [
    {
      species: POKEMON_SPECIES.MANKEY,
      level: 23,
    },
    {
      species: POKEMON_SPECIES.MANKEY,
      level: 23,
    },
    {
      species: POKEMON_SPECIES.PRIMEAPE,
      level: 25,
    },
  ],
}
const BLACK_BELT_NOB: Trainer = {
  id: 'black-belt-nob',
  type: TRAINER_TYPES.BLACK_BELT,
  name: 'Nob',
  pokemon: [
    {
      species: POKEMON_SPECIES.MACHOP,
      level: 25,
    },
    {
      species: POKEMON_SPECIES.MACHOKE,
      level: 25,
    },
  ],
}
const BLACK_BELT_WAI: Trainer = {
  id: 'black-belt-wai',
  type: TRAINER_TYPES.BLACK_BELT,
  name: 'Wai',
  pokemon: [
    {
      species: POKEMON_SPECIES.MACHOKE,
      level: 30,
    },
    {
      species: POKEMON_SPECIES.MACHOKE,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.MACHOKE,
      level: 34,
    },
  ],
}
const BLACK_BELT_YOSHI: Trainer = {
  id: 'black-belt-yoshi',
  type: TRAINER_TYPES.BLACK_BELT,
  name: 'Yoshi',
  pokemon: [
    {
      species: POKEMON_SPECIES.HITMONLEE,
      level: 27,
    },
  ],
}

// boarder
const BOARDER_BRAD: Trainer = {
  id: 'boarder-brad',
  type: TRAINER_TYPES.BOARDER,
  name: 'Brad',
  pokemon: [
    {
      species: POKEMON_SPECIES.SWINUB,
      level: 26,
    },
    {
      species: POKEMON_SPECIES.SWINUB,
      level: 26,
    },
  ],
}
const BOARDER_DOUGLAS: Trainer = {
  id: 'boarder-douglas',
  type: TRAINER_TYPES.BOARDER,
  name: 'Douglas',
  pokemon: [
    {
      species: POKEMON_SPECIES.SHELLDER,
      level: 24,
    },
    {
      species: POKEMON_SPECIES.SHELLDER,
      level: 24,
    },
    {
      species: POKEMON_SPECIES.CLOYSTER,
      level: 25,
    },
  ],
}
const BOARDER_RONALD: Trainer = {
  id: 'boarder-ronald',
  type: TRAINER_TYPES.BOARDER,
  name: 'Ronald',
  pokemon: [
    {
      species: POKEMON_SPECIES.SEEL,
      level: 24,
    },
    {
      species: POKEMON_SPECIES.SEEL,
      level: 24,
    },
    {
      species: POKEMON_SPECIES.DEWGONG,
      level: 25,
    },
  ],
}

// bug catcher
const BUG_CATCHER_AL: Trainer = {
  id: 'bug-catcher-al',
  type: TRAINER_TYPES.BUG_CATCHER,
  name: 'Al',
  pokemon: [
    {
      species: POKEMON_SPECIES.WEEDLE,
      level: 12,
    },
    {
      species: POKEMON_SPECIES.CATERPIE,
      level: 12,
    },
  ],
}
const BUG_CATCHER_ARNIE: Trainer = {
  id: 'bug-catcher-arnie',
  type: TRAINER_TYPES.BUG_CATCHER,
  name: 'Arnie',
  pokemon: [
    {
      species: POKEMON_SPECIES.VENONAT,
      level: 15,
    },
  ],
}
const BUG_CATCHER_BENNY: Trainer = {
  id: 'bug-catcher-benny',
  type: TRAINER_TYPES.BUG_CATCHER,
  name: 'Benny',
  pokemon: [
    {
      species: POKEMON_SPECIES.WEEDLE,
      level: 7,
    },
    {
      species: POKEMON_SPECIES.KAKUNA,
      level: 9,
    },
    {
      species: POKEMON_SPECIES.BEEDRILL,
      level: 12,
    },
  ],
}
const BUG_CATCHER_DON: Trainer = {
  id: 'bug-catcher-don',
  type: TRAINER_TYPES.BUG_CATCHER,
  name: 'Don',
  pokemon: [
    {
      species: POKEMON_SPECIES.CATERPIE,
      level: 3,
    },
    {
      species: POKEMON_SPECIES.CATERPIE,
      level: 3,
    },
  ],
}
const BUG_CATCHER_DOUG: Trainer = {
  id: 'bug-catcher-doug',
  type: TRAINER_TYPES.BUG_CATCHER,
  name: 'Doug',
  pokemon: [
    {
      species: POKEMON_SPECIES.ARIADOS,
      level: 32,
    },
  ],
}
const BUG_CATCHER_ED: Trainer = {
  id: 'bug-catcher-ed',
  type: TRAINER_TYPES.BUG_CATCHER,
  name: 'Ed',
  pokemon: [
    {
      species: POKEMON_SPECIES.BEEDRILL,
      level: 30,
    },
    {
      species: POKEMON_SPECIES.BEEDRILL,
      level: 30,
    },
    {
      species: POKEMON_SPECIES.BEEDRILL,
      level: 30,
    },
  ],
}
const BUG_CATCHER_JOSH: Trainer = {
  id: 'bug-catcher-josh',
  type: TRAINER_TYPES.BUG_CATCHER,
  name: 'Josh',
  pokemon: [
    {
      species: POKEMON_SPECIES.PARAS,
      level: 13,
    },
  ],
}
const BUG_CATCHER_KEN: Trainer = {
  id: 'bug-catcher-ken',
  type: TRAINER_TYPES.BUG_CATCHER,
  name: 'Ken',
  pokemon: [
    {
      species: POKEMON_SPECIES.ARIADOS,
      level: 30,
    },
    {
      species: POKEMON_SPECIES.PINSIR,
      level: 32,
    },
  ],
}
const BUG_CATCHER_ROB: Trainer = {
  id: 'bug-catcher-rob',
  type: TRAINER_TYPES.BUG_CATCHER,
  name: 'Rob',
  pokemon: [
    {
      species: POKEMON_SPECIES.BEEDRILL,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.BUTTERFREE,
      level: 32,
    },
  ],
}
const BUG_CATCHER_WADE: Trainer = {
  id: 'bug-catcher-wade',
  type: TRAINER_TYPES.BUG_CATCHER,
  name: 'Wade',
  pokemon: [
    {
      species: POKEMON_SPECIES.CATERPIE,
      level: 2,
    },
    {
      species: POKEMON_SPECIES.CATERPIE,
      level: 2,
    },
    {
      species: POKEMON_SPECIES.WEEDLE,
      level: 3,
    },
    {
      species: POKEMON_SPECIES.CATERPIE,
      level: 2,
    },
  ],
}
const BUG_CATCHER_WAYNE: Trainer = {
  id: 'bug-catcher-wayne',
  type: TRAINER_TYPES.BUG_CATCHER,
  name: 'Wayne',
  pokemon: [
    {
      species: POKEMON_SPECIES.LEDYBA,
      level: 8,
    },
    {
      species: POKEMON_SPECIES.PARAS,
      level: 10,
    },
  ],
}

// burglar
const BURGLAR_CORAY: Trainer = {
  id: 'burglar-coray',
  type: TRAINER_TYPES.BURGLAR,
  name: 'Coray',
  pokemon: [
    {
      species: POKEMON_SPECIES.KOFFING,
      level: 25,
    },
    {
      species: POKEMON_SPECIES.MAGMAR,
      level: 28,
    },
    {
      species: POKEMON_SPECIES.KOFFING,
      level: 25,
    },
    {
      species: POKEMON_SPECIES.KOFFING,
      level: 30,
    },
  ],
}
const BURGLAR_DUNCAN: Trainer = {
  id: 'burglar-duncan',
  type: TRAINER_TYPES.BURGLAR,
  name: 'Duncan',
  pokemon: [
    {
      species: POKEMON_SPECIES.KOFFING,
      level: 23,
    },
    {
      species: POKEMON_SPECIES.MAGMAR,
      level: 25,
    },
    {
      species: POKEMON_SPECIES.KOFFING,
      level: 23,
    },
  ],
}
const BURGLAR_EDDIE: Trainer = {
  id: 'burglar-eddie',
  type: TRAINER_TYPES.BURGLAR,
  name: 'Eddie',
  pokemon: [
    {
      species: POKEMON_SPECIES.GROWLITHE,
      level: 26,
    },
    {
      species: POKEMON_SPECIES.KOFFING,
      level: 24,
    },
  ],
}

// ace trainer
const ACE_TRAINER_AARON: Trainer = {
  id: 'ace-trainer-aaron',
  type: TRAINER_TYPES.ACE_TRAINER,
  name: 'Aaron',
  pokemon: [
    {
      species: POKEMON_SPECIES.IVYSAUR,
      level: 24,
    },
    {
      species: POKEMON_SPECIES.CHARMELEON,
      level: 24,
    },
    {
      species: POKEMON_SPECIES.WARTORTLE,
      level: 24,
    },
  ],
}
const ACE_TRAINER_ALLEN: Trainer = {
  id: 'ace-trainer-allen',
  type: TRAINER_TYPES.ACE_TRAINER,
  name: 'Allen',
  pokemon: [
    {
      species: POKEMON_SPECIES.CHARMELEON,
      level: 27,
    },
  ],
}
const ACE_TRAINER_BETH: Trainer = {
  id: 'ace-trainer-beth',
  type: TRAINER_TYPES.ACE_TRAINER,
  name: 'Beth',
  pokemon: [
    {
      species: POKEMON_SPECIES.RAPIDASH,
      level: 37,
    },
  ],
}
const ACE_TRAINER_BLAKE: Trainer = {
  id: 'ace-trainer-blake',
  type: TRAINER_TYPES.ACE_TRAINER,
  name: 'Blake',
  pokemon: [
    {
      species: POKEMON_SPECIES.MAGNETON,
      level: 33,
    },
    {
      species: POKEMON_SPECIES.QUAGSIRE,
      level: 31,
    },
    {
      species: POKEMON_SPECIES.EXEGGCUTE,
      level: 31,
    },
  ],
}
const ACE_TRAINER_BRIAN: Trainer = {
  id: 'ace-trainer-brian',
  type: TRAINER_TYPES.ACE_TRAINER,
  name: 'Brian',
  pokemon: [
    {
      species: POKEMON_SPECIES.SANDSLASH,
      level: 35,
    },
  ],
}
const ACE_TRAINER_CARA: Trainer = {
  id: 'ace-trainer-cara',
  type: TRAINER_TYPES.ACE_TRAINER,
  name: 'Cara',
  pokemon: [
    {
      species: POKEMON_SPECIES.HORSEA,
      level: 33,
    },
    {
      species: POKEMON_SPECIES.HORSEA,
      level: 33,
    },
    {
      species: POKEMON_SPECIES.HORSEA,
      level: 33,
    },
  ],
}
const ACE_TRAINER_CAROL: Trainer = {
  id: 'ace-trainer-carol',
  type: TRAINER_TYPES.ACE_TRAINER,
  name: 'Carol',
  pokemon: [
    {
      species: POKEMON_SPECIES.ELECTRODE,
      level: 35,
    },
    {
      species: POKEMON_SPECIES.STARMIE,
      level: 35,
    },
    {
      species: POKEMON_SPECIES.NINETALES,
      level: 35,
    },
  ],
}
const ACE_TRAINER_CODY: Trainer = {
  id: 'ace-trainer-cody',
  type: TRAINER_TYPES.ACE_TRAINER,
  name: 'Cody',
  pokemon: [
    {
      species: POKEMON_SPECIES.HORSEA,
      level: 34,
    },
    {
      species: POKEMON_SPECIES.SEADRA,
      level: 36,
    },
  ],
}
const ACE_TRAINER_CYBIL: Trainer = {
  id: 'ace-trainer-cybil',
  type: TRAINER_TYPES.ACE_TRAINER,
  name: 'Cybil',
  pokemon: [
    {
      species: POKEMON_SPECIES.BUTTERFREE,
      level: 25,
    },
    {
      species: POKEMON_SPECIES.BELLOSSOM,
      level: 25,
    },
  ],
}
const ACE_TRAINER_DARIN: Trainer = {
  id: 'ace-trainer-darin',
  type: TRAINER_TYPES.ACE_TRAINER,
  name: 'Darin',
  pokemon: [
    {
      species: POKEMON_SPECIES.DRAGONAIR,
      level: 37,
    },
  ],
}
const ACE_TRAINER_EMMA: Trainer = {
  id: 'ace-trainer-emma',
  type: TRAINER_TYPES.ACE_TRAINER,
  name: 'Emma',
  pokemon: [
    {
      species: POKEMON_SPECIES.POLIWHIRL,
      level: 28,
    },
  ],
}
const ACE_TRAINER_FRAN: Trainer = {
  id: 'ace-trainer-fran',
  type: TRAINER_TYPES.ACE_TRAINER,
  name: 'Fran',
  pokemon: [
    {
      species: POKEMON_SPECIES.SEADRA,
      level: 37,
    },
  ],
}
const ACE_TRAINER_GAVEN: Trainer = {
  id: 'ace-trainer-gaven',
  type: TRAINER_TYPES.ACE_TRAINER,
  name: 'Gaven',
  pokemon: [
    {
      species: POKEMON_SPECIES.VICTREEBEL,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.KINGLER,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.FLAREON,
      level: 32,
    },
  ],
}
const ACE_TRAINER_GWEN: Trainer = {
  id: 'ace-trainer-gwen',
  type: TRAINER_TYPES.ACE_TRAINER,
  name: 'Gwen',
  pokemon: [
    {
      species: POKEMON_SPECIES.EEVEE,
      level: 26,
    },
    {
      species: POKEMON_SPECIES.VAPOREON,
      level: 22,
    },
    {
      species: POKEMON_SPECIES.JOLTEON,
      level: 22,
    },
    {
      species: POKEMON_SPECIES.FLAREON,
      level: 22,
    },
  ],
}
const ACE_TRAINER_IRENE: Trainer = {
  id: 'ace-trainer-irene',
  type: TRAINER_TYPES.ACE_TRAINER,
  name: 'Irene',
  pokemon: [
    {
      species: POKEMON_SPECIES.GOLDEEN,
      level: 22,
    },
    {
      species: POKEMON_SPECIES.SEAKING,
      level: 24,
    },
  ],
}
const ACE_TRAINER_JAKE: Trainer = {
  id: 'ace-trainer-jake',
  type: TRAINER_TYPES.ACE_TRAINER,
  name: 'Jake',
  pokemon: [
    {
      species: POKEMON_SPECIES.PARASECT,
      level: 33,
    },
    {
      species: POKEMON_SPECIES.GOLDUCK,
      level: 35,
    },
  ],
}
const ACE_TRAINER_JENN: Trainer = {
  id: 'ace-trainer-jenn',
  type: TRAINER_TYPES.ACE_TRAINER,
  name: 'Jenn',
  pokemon: [
    {
      species: POKEMON_SPECIES.STARYU,
      level: 24,
    },
    {
      species: POKEMON_SPECIES.STARMIE,
      level: 26,
    },
  ],
}
const ACE_TRAINER_JOYCE: Trainer = {
  id: 'ace-trainer-joyce',
  type: TRAINER_TYPES.ACE_TRAINER,
  name: 'Joyce',
  pokemon: [
    {
      species: POKEMON_SPECIES.PIKACHU,
      level: 36,
    },
    {
      species: POKEMON_SPECIES.BLASTOISE,
      level: 32,
    },
  ],
}
const ACE_TRAINER_KATE: Trainer = {
  id: 'ace-trainer-kate',
  type: TRAINER_TYPES.ACE_TRAINER,
  name: 'Kate',
  pokemon: [
    {
      species: POKEMON_SPECIES.SHELLDER,
      level: 26,
    },
    {
      species: POKEMON_SPECIES.CLOYSTER,
      level: 28,
    },
  ],
}
const ACE_TRAINER_KELLY: Trainer = {
  id: 'ace-trainer-kelly',
  type: TRAINER_TYPES.ACE_TRAINER,
  name: 'Kelly',
  pokemon: [
    {
      species: POKEMON_SPECIES.MARILL,
      level: 27,
    },
    {
      species: POKEMON_SPECIES.WARTORTLE,
      level: 24,
    },
    {
      species: POKEMON_SPECIES.WARTORTLE,
      level: 24,
    },
  ],
}
const ACE_TRAINER_KEVIN: Trainer = {
  id: 'ace-trainer-kevin',
  type: TRAINER_TYPES.ACE_TRAINER,
  name: 'Kevin',
  pokemon: [
    {
      species: POKEMON_SPECIES.RHYHORN,
      level: 38,
    },
    {
      species: POKEMON_SPECIES.CHARMELEON,
      level: 35,
    },
    {
      species: POKEMON_SPECIES.WARTORTLE,
      level: 35,
    },
  ],
}
const ACE_TRAINER_LOIS: Trainer = {
  id: 'ace-trainer-lois',
  type: TRAINER_TYPES.ACE_TRAINER,
  name: 'Lois',
  pokemon: [
    {
      species: POKEMON_SPECIES.SKIPLOOM,
      level: 25,
    },
    {
      species: POKEMON_SPECIES.NINETALES,
      level: 25,
    },
  ],
}
const ACE_TRAINER_LOLA: Trainer = {
  id: 'ace-trainer-lola',
  type: TRAINER_TYPES.ACE_TRAINER,
  name: 'Lola',
  pokemon: [
    {
      species: POKEMON_SPECIES.DRATINI,
      level: 34,
    },
    {
      species: POKEMON_SPECIES.DRAGONAIR,
      level: 36,
    },
  ],
}
const ACE_TRAINER_MEGAN: Trainer = {
  id: 'ace-trainer-megan',
  type: TRAINER_TYPES.ACE_TRAINER,
  name: 'Megan',
  pokemon: [
    {
      species: POKEMON_SPECIES.BULBASAUR,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.IVYSAUR,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.VENUSAUR,
      level: 32,
    },
  ],
}
const ACE_TRAINER_MIKE: Trainer = {
  id: 'ace-trainer-mike',
  type: TRAINER_TYPES.ACE_TRAINER,
  name: 'Mike',
  pokemon: [
    {
      species: POKEMON_SPECIES.DRAGONAIR,
      level: 37,
    },
  ],
}
const ACE_TRAINER_NICK: Trainer = {
  id: 'ace-trainer-nick',
  type: TRAINER_TYPES.ACE_TRAINER,
  name: 'Nick',
  pokemon: [
    {
      species: POKEMON_SPECIES.CHARMANDER,
      level: 26,
    },
    {
      species: POKEMON_SPECIES.BULBASAUR,
      level: 26,
    },
    {
      species: POKEMON_SPECIES.SQUIRTLE,
      level: 26,
    },
  ],
}
const ACE_TRAINER_PAUL: Trainer = {
  id: 'ace-trainer-paul',
  type: TRAINER_TYPES.ACE_TRAINER,
  name: 'Paul',
  pokemon: [
    {
      species: POKEMON_SPECIES.DRATINI,
      level: 34,
    },
    {
      species: POKEMON_SPECIES.DRATINI,
      level: 34,
    },
    {
      species: POKEMON_SPECIES.DRATINI,
      level: 34,
    },
  ],
}
const ACE_TRAINER_QUINN: Trainer = {
  id: 'ace-trainer-quinn',
  type: TRAINER_TYPES.ACE_TRAINER,
  name: 'Quinn',
  pokemon: [
    {
      species: POKEMON_SPECIES.IVYSAUR,
      level: 38,
    },
    {
      species: POKEMON_SPECIES.STARMIE,
      level: 38,
    },
  ],
}
const ACE_TRAINER_REENA: Trainer = {
  id: 'ace-trainer-reena',
  type: TRAINER_TYPES.ACE_TRAINER,
  name: 'Reena',
  pokemon: [
    {
      species: POKEMON_SPECIES.STARMIE,
      level: 31,
    },
    {
      species: POKEMON_SPECIES.NIDOQUEEN,
      level: 33,
    },
    {
      species: POKEMON_SPECIES.STARMIE,
      level: 31,
    },
  ],
}
const ACE_TRAINER_RYAN: Trainer = {
  id: 'ace-trainer-ryan',
  type: TRAINER_TYPES.ACE_TRAINER,
  name: 'Ryan',
  pokemon: [
    {
      species: POKEMON_SPECIES.PIDGEOTTO,
      level: 25,
    },
    {
      species: POKEMON_SPECIES.ELECTABUZZ,
      level: 27,
    },
  ],
}
const ACE_TRAINER_SEAN: Trainer = {
  id: 'ace-trainer-sean',
  type: TRAINER_TYPES.ACE_TRAINER,
  name: 'Sean',
  pokemon: [
    {
      species: POKEMON_SPECIES.FLAREON,
      level: 35,
    },
    {
      species: POKEMON_SPECIES.TANGELA,
      level: 35,
    },
    {
      species: POKEMON_SPECIES.TAUROS,
      level: 35,
    },
  ],
}

// firebreather
const FIREBREATHER_BILL: Trainer = {
  id: 'firebreather-bill',
  type: TRAINER_TYPES.FIREBREATHER,
  name: 'Bill',
  pokemon: [
    {
      species: POKEMON_SPECIES.KOFFING,
      level: 6,
    },
    {
      species: POKEMON_SPECIES.KOFFING,
      level: 6,
    },
  ],
}
const FIREBREATHER_BURT: Trainer = {
  id: 'firebreather-burt',
  type: TRAINER_TYPES.FIREBREATHER,
  name: 'Burt',
  pokemon: [
    {
      species: POKEMON_SPECIES.KOFFING,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.SLUGMA,
      level: 32,
    },
  ],
}
const FIREBREATHER_LYLE: Trainer = {
  id: 'firebreather-lyle',
  type: TRAINER_TYPES.FIREBREATHER,
  name: 'Lyle',
  pokemon: [
    {
      species: POKEMON_SPECIES.KOFFING,
      level: 28,
    },
    {
      species: POKEMON_SPECIES.FLAREON,
      level: 28,
    },
    {
      species: POKEMON_SPECIES.KOFFING,
      level: 28,
    },
  ],
}
const FIREBREATHER_OTIS: Trainer = {
  id: 'firebreather-otis',
  type: TRAINER_TYPES.FIREBREATHER,
  name: 'Otis',
  pokemon: [
    {
      species: POKEMON_SPECIES.MAGMAR,
      level: 29,
    },
    {
      species: POKEMON_SPECIES.WEEZING,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.MAGMAR,
      level: 29,
    },
  ],
}
const FIREBREATHER_RAY: Trainer = {
  id: 'firebreather-ray',
  type: TRAINER_TYPES.FIREBREATHER,
  name: 'Ray',
  pokemon: [
    {
      species: POKEMON_SPECIES.VULPIX,
      level: 9,
    },
  ],
}
const FIREBREATHER_WALT: Trainer = {
  id: 'firebreather-walt',
  type: TRAINER_TYPES.FIREBREATHER,
  name: 'Walt',
  pokemon: [
    {
      species: POKEMON_SPECIES.MAGMAR,
      level: 11,
    },
    {
      species: POKEMON_SPECIES.MAGMAR,
      level: 13,
    },
  ],
}

// fisher
const FISHER_ANDRE: Trainer = {
  id: 'fisher-andre',
  type: TRAINER_TYPES.FISHER,
  name: 'Andre',
  pokemon: [
    {
      species: POKEMON_SPECIES.GYARADOS,
      level: 27,
    },
  ],
}
const FISHER_ARNOLD: Trainer = {
  id: 'fisher-arnold',
  type: TRAINER_TYPES.FISHER,
  name: 'Arnold',
  pokemon: [
    {
      species: POKEMON_SPECIES.TENTACRUEL,
      level: 34,
    },
  ],
}
const FISHER_BARNEY: Trainer = {
  id: 'fisher-barney',
  type: TRAINER_TYPES.FISHER,
  name: 'Barney',
  pokemon: [
    {
      species: POKEMON_SPECIES.GYARADOS,
      level: 30,
    },
    {
      species: POKEMON_SPECIES.GYARADOS,
      level: 30,
    },
    {
      species: POKEMON_SPECIES.GYARADOS,
      level: 30,
    },
  ],
}
const FISHER_EDGAR: Trainer = {
  id: 'fisher-edgar',
  type: TRAINER_TYPES.FISHER,
  name: 'Edgar',
  pokemon: [
    {
      species: POKEMON_SPECIES.REMORAID,
      level: 25,
    },
    {
      species: POKEMON_SPECIES.REMORAID,
      level: 25,
    },
  ],
}
const FISHER_HENRY: Trainer = {
  id: 'fisher-henry',
  type: TRAINER_TYPES.FISHER,
  name: 'Henry',
  pokemon: [
    {
      species: POKEMON_SPECIES.POLIWAG,
      level: 8,
    },
    {
      species: POKEMON_SPECIES.POLIWAG,
      level: 8,
    },
  ],
}
const FISHER_JONAH: Trainer = {
  id: 'fisher-jonah',
  type: TRAINER_TYPES.FISHER,
  name: 'Jonah',
  pokemon: [
    {
      species: POKEMON_SPECIES.SHELLDER,
      level: 25,
    },
    {
      species: POKEMON_SPECIES.OCTILLERY,
      level: 29,
    },
    {
      species: POKEMON_SPECIES.CLOYSTER,
      level: 29,
    },
    {
      species: POKEMON_SPECIES.REMORAID,
      level: 25,
    },
  ],
}
const FISHER_JUSTIN: Trainer = {
  id: 'fisher-justin',
  type: TRAINER_TYPES.FISHER,
  name: 'Justin',
  pokemon: [
    {
      species: POKEMON_SPECIES.MAGIKARP,
      level: 5,
    },
    {
      species: POKEMON_SPECIES.MAGIKARP,
      level: 5,
    },
    {
      species: POKEMON_SPECIES.MAGIKARP,
      level: 15,
    },
    {
      species: POKEMON_SPECIES.MAGIKARP,
      level: 5,
    },
  ],
}
const FISHER_KYLE: Trainer = {
  id: 'fisher-kyle',
  type: TRAINER_TYPES.FISHER,
  name: 'Kyle',
  pokemon: [
    {
      species: POKEMON_SPECIES.SEAKING,
      level: 28,
    },
    {
      species: POKEMON_SPECIES.POLIWHIRL,
      level: 31,
    },
    {
      species: POKEMON_SPECIES.SEAKING,
      level: 31,
    },
  ],
}
const FISHER_MARTIN: Trainer = {
  id: 'fisher-martin',
  type: TRAINER_TYPES.FISHER,
  name: 'Martin',
  pokemon: [
    {
      species: POKEMON_SPECIES.REMORAID,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.REMORAID,
      level: 32,
    },
  ],
}
const FISHER_MARVIN: Trainer = {
  id: 'fisher-marvin',
  type: TRAINER_TYPES.FISHER,
  name: 'Marvin',
  pokemon: [
    {
      species: POKEMON_SPECIES.MAGIKARP,
      level: 10,
    },
    {
      species: POKEMON_SPECIES.GYARADOS,
      level: 10,
    },
    {
      species: POKEMON_SPECIES.MAGIKARP,
      level: 15,
    },
    {
      species: POKEMON_SPECIES.GYARADOS,
      level: 15,
    },
  ],
}
const FISHER_RALPH: Trainer = {
  id: 'fisher-ralph',
  type: TRAINER_TYPES.FISHER,
  name: 'Ralph',
  pokemon: [
    {
      species: POKEMON_SPECIES.GOLDEEN,
      level: 10,
    },
  ],
}
const FISHER_RAYMOND: Trainer = {
  id: 'fisher-raymond',
  type: TRAINER_TYPES.FISHER,
  name: 'Raymond',
  pokemon: [
    {
      species: POKEMON_SPECIES.MAGIKARP,
      level: 22,
    },
    {
      species: POKEMON_SPECIES.MAGIKARP,
      level: 22,
    },
    {
      species: POKEMON_SPECIES.MAGIKARP,
      level: 22,
    },
    {
      species: POKEMON_SPECIES.MAGIKARP,
      level: 22,
    },
  ],
}
const FISHER_SCOTT: Trainer = {
  id: 'fisher-scott',
  type: TRAINER_TYPES.FISHER,
  name: 'Scott',
  pokemon: [
    {
      species: POKEMON_SPECIES.QWILFISH,
      level: 30,
    },
    {
      species: POKEMON_SPECIES.QWILFISH,
      level: 30,
    },
    {
      species: POKEMON_SPECIES.SEAKING,
      level: 34,
    },
  ],
}
const FISHER_STEPHEN: Trainer = {
  id: 'fisher-stephen',
  type: TRAINER_TYPES.FISHER,
  name: 'Stephen',
  pokemon: [
    {
      species: POKEMON_SPECIES.MAGIKARP,
      level: 25,
    },
    {
      species: POKEMON_SPECIES.MAGIKARP,
      level: 25,
    },
    {
      species: POKEMON_SPECIES.QWILFISH,
      level: 31,
    },
    {
      species: POKEMON_SPECIES.TENTACRUEL,
      level: 31,
    },
  ],
}
const FISHER_TULLY: Trainer = {
  id: 'fisher-tully',
  type: TRAINER_TYPES.FISHER,
  name: 'Tully',
  pokemon: [
    {
      species: POKEMON_SPECIES.QWILFISH,
      level: 18,
    },
  ],
}
const FISHER_WILTON: Trainer = {
  id: 'fisher-wilton',
  type: TRAINER_TYPES.FISHER,
  name: 'Wilton',
  pokemon: [
    {
      species: POKEMON_SPECIES.GOLDEEN,
      level: 23,
    },
    {
      species: POKEMON_SPECIES.GOLDEEN,
      level: 23,
    },
    {
      species: POKEMON_SPECIES.SEAKING,
      level: 25,
    },
  ],
}

// gentleman
const GENTLEMAN_ALFRED: Trainer = {
  id: 'gentleman-alfred',
  type: TRAINER_TYPES.GENTLEMAN,
  name: 'Alfred',
  pokemon: [
    {
      species: POKEMON_SPECIES.NOCTOWL,
      level: 20,
    },
  ],
}
const GENTLEMAN_EDWARD: Trainer = {
  id: 'gentleman-edward',
  type: TRAINER_TYPES.GENTLEMAN,
  name: 'Edward',
  pokemon: [
    {
      species: POKEMON_SPECIES.PERSIAN,
      level: 33,
    },
  ],
}
const GENTLEMAN_GREGORY: Trainer = {
  id: 'gentleman-gregory',
  type: TRAINER_TYPES.GENTLEMAN,
  name: 'Gregory',
  pokemon: [
    {
      species: POKEMON_SPECIES.PIKACHU,
      level: 37,
    },
    {
      species: POKEMON_SPECIES.FLAAFFY,
      level: 33,
    },
  ],
}
const GENTLEMAN_PRESTON: Trainer = {
  id: 'gentleman-preston',
  type: TRAINER_TYPES.GENTLEMAN,
  name: 'Preston',
  pokemon: [
    {
      species: POKEMON_SPECIES.GROWLITHE,
      level: 18,
    },
    {
      species: POKEMON_SPECIES.GROWLITHE,
      level: 18,
    },
  ],
}

// guitarist
const GUITARIST_CLYDE: Trainer = {
  id: 'guitarist-clyde',
  type: TRAINER_TYPES.GUITARIST,
  name: 'Clyde',
  pokemon: [
    {
      species: POKEMON_SPECIES.ELECTABUZZ,
      level: 34,
    },
  ],
}
const GUITARIST_VINCENT: Trainer = {
  id: 'guitarist-vincent',
  type: TRAINER_TYPES.GUITARIST,
  name: 'Vincent',
  pokemon: [
    {
      species: POKEMON_SPECIES.MAGNEMITE,
      level: 27,
    },
    {
      species: POKEMON_SPECIES.MAGNEMITE,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.MAGNEMITE,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.VOLTORB,
      level: 33,
    },
  ],
}

// hiker
const HIKER_ANTHONY: Trainer = {
  id: 'hiker-anthony',
  type: TRAINER_TYPES.HIKER,
  name: 'Anthony',
  pokemon: [
    {
      species: POKEMON_SPECIES.GEODUDE,
      level: 11,
    },
    {
      species: POKEMON_SPECIES.MACHOP,
      level: 11,
    },
  ],
}
const HIKER_BAILEY: Trainer = {
  id: 'hiker-bailey',
  type: TRAINER_TYPES.HIKER,
  name: 'Bailey',
  pokemon: [
    {
      species: POKEMON_SPECIES.GEODUDE,
      level: 13,
    },
    {
      species: POKEMON_SPECIES.GEODUDE,
      level: 13,
    },
    {
      species: POKEMON_SPECIES.GEODUDE,
      level: 13,
    },
    {
      species: POKEMON_SPECIES.GEODUDE,
      level: 13,
    },
    {
      species: POKEMON_SPECIES.GEODUDE,
      level: 13,
    },
  ],
}
const HIKER_BENJAMIN: Trainer = {
  id: 'hiker-benjamin',
  type: TRAINER_TYPES.HIKER,
  name: 'Benjamin',
  pokemon: [
    {
      species: POKEMON_SPECIES.DIGLETT,
      level: 14,
    },
    {
      species: POKEMON_SPECIES.GEODUDE,
      level: 14,
    },
    {
      species: POKEMON_SPECIES.DUGTRIO,
      level: 16,
    },
  ],
}
const HIKER_DANIEL: Trainer = {
  id: 'hiker-daniel',
  type: TRAINER_TYPES.HIKER,
  name: 'Daniel',
  pokemon: [
    {
      species: POKEMON_SPECIES.ONIX,
      level: 11,
    },
  ],
}
const HIKER_ERIK: Trainer = {
  id: 'hiker-erik',
  type: TRAINER_TYPES.HIKER,
  name: 'Erik',
  pokemon: [
    {
      species: POKEMON_SPECIES.MACHOP,
      level: 24,
    },
    {
      species: POKEMON_SPECIES.GEODUDE,
      level: 27,
    },
    {
      species: POKEMON_SPECIES.MACHOP,
      level: 27,
    },
  ],
}
const HIKER_JIM: Trainer = {
  id: 'hiker-jim',
  type: TRAINER_TYPES.HIKER,
  name: 'Jim',
  pokemon: [
    {
      species: POKEMON_SPECIES.MACHAMP,
      level: 35,
    },
  ],
}
const HIKER_KENNY: Trainer = {
  id: 'hiker-kenny',
  type: TRAINER_TYPES.HIKER,
  name: 'Kenny',
  pokemon: [
    {
      species: POKEMON_SPECIES.SANDSLASH,
      level: 27,
    },
    {
      species: POKEMON_SPECIES.GRAVELER,
      level: 29,
    },
    {
      species: POKEMON_SPECIES.GOLEM,
      level: 31,
    },
    {
      species: POKEMON_SPECIES.GRAVELER,
      level: 29,
    },
  ],
}
const HIKER_LEONARD: Trainer = {
  id: 'hiker-leonard',
  type: TRAINER_TYPES.HIKER,
  name: 'Leonard',
  pokemon: [
    {
      species: POKEMON_SPECIES.GEODUDE,
      level: 23,
    },
    {
      species: POKEMON_SPECIES.MACHOP,
      level: 25,
    },
  ],
}
const HIKER_MICHAEL: Trainer = {
  id: 'hiker-michael',
  type: TRAINER_TYPES.HIKER,
  name: 'Michael',
  pokemon: [
    {
      species: POKEMON_SPECIES.GEODUDE,
      level: 25,
    },
    {
      species: POKEMON_SPECIES.GRAVELER,
      level: 25,
    },
    {
      species: POKEMON_SPECIES.GOLEM,
      level: 25,
    },
  ],
}
const HIKER_PARRY: Trainer = {
  id: 'hiker-parry',
  type: TRAINER_TYPES.HIKER,
  name: 'Parry',
  pokemon: [
    {
      species: POKEMON_SPECIES.ONIX,
      level: 29,
    },
  ],
}
const HIKER_PHILLIP: Trainer = {
  id: 'hiker-phillip',
  type: TRAINER_TYPES.HIKER,
  name: 'Phillip',
  pokemon: [
    {
      species: POKEMON_SPECIES.GEODUDE,
      level: 23,
    },
    {
      species: POKEMON_SPECIES.GEODUDE,
      level: 23,
    },
    {
      species: POKEMON_SPECIES.GRAVELER,
      level: 23,
    },
  ],
}
const HIKER_RUSSELL: Trainer = {
  id: 'hiker-russell',
  type: TRAINER_TYPES.HIKER,
  name: 'Russell',
  pokemon: [
    {
      species: POKEMON_SPECIES.GEODUDE,
      level: 4,
    },
    {
      species: POKEMON_SPECIES.GEODUDE,
      level: 6,
    },
    {
      species: POKEMON_SPECIES.GEODUDE,
      level: 8,
    },
  ],
}
const HIKER_SIDNEY: Trainer = {
  id: 'hiker-sidney',
  type: TRAINER_TYPES.HIKER,
  name: 'Sidney',
  pokemon: [
    {
      species: POKEMON_SPECIES.ONIX,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.DUGTRIO,
      level: 34,
    },
  ],
}
const HIKER_TIM: Trainer = {
  id: 'hiker-tim',
  type: TRAINER_TYPES.HIKER,
  name: 'Tim',
  pokemon: [
    {
      species: POKEMON_SPECIES.GRAVELER,
      level: 31,
    },
    {
      species: POKEMON_SPECIES.GRAVELER,
      level: 31,
    },
    {
      species: POKEMON_SPECIES.GRAVELER,
      level: 31,
    },
  ],
}
const HIKER_TIMOTHY: Trainer = {
  id: 'hiker-timothy',
  type: TRAINER_TYPES.HIKER,
  name: 'Timothy',
  pokemon: [
    {
      species: POKEMON_SPECIES.DIGLETT,
      level: 27,
    },
    {
      species: POKEMON_SPECIES.DUGTRIO,
      level: 27,
    },
  ],
}

// camper
const CAMPER_BARRY: Trainer = {
  id: 'camper-barry',
  type: TRAINER_TYPES.CAMPER,
  name: 'Barry',
  pokemon: [
    {
      species: POKEMON_SPECIES.NIDOKING,
      level: 36,
    },
  ],
}
const CAMPER_DEAN: Trainer = {
  id: 'camper-dean',
  type: TRAINER_TYPES.CAMPER,
  name: 'Dean',
  pokemon: [
    {
      species: POKEMON_SPECIES.GOLDUCK,
      level: 33,
    },
    {
      species: POKEMON_SPECIES.SANDSLASH,
      level: 31,
    },
  ],
}
const CAMPER_ELLIOT: Trainer = {
  id: 'camper-elliot',
  type: TRAINER_TYPES.CAMPER,
  name: 'Elliot',
  pokemon: [
    {
      species: POKEMON_SPECIES.SANDSHREW,
      level: 13,
    },
    {
      species: POKEMON_SPECIES.MARILL,
      level: 15,
    },
  ],
}
const CAMPER_IVAN: Trainer = {
  id: 'camper-ivan',
  type: TRAINER_TYPES.CAMPER,
  name: 'Ivan',
  pokemon: [
    {
      species: POKEMON_SPECIES.DIGLETT,
      level: 10,
    },
    {
      species: POKEMON_SPECIES.ZUBAT,
      level: 10,
    },
    {
      species: POKEMON_SPECIES.DIGLETT,
      level: 14,
    },
  ],
}
const CAMPER_JERRY: Trainer = {
  id: 'camper-jerry',
  type: TRAINER_TYPES.CAMPER,
  name: 'Jerry',
  pokemon: [
    {
      species: POKEMON_SPECIES.SANDSLASH,
      level: 37,
    },
  ],
}
const CAMPER_LLOYD: Trainer = {
  id: 'camper-lloyd',
  type: TRAINER_TYPES.CAMPER,
  name: 'Lloyd',
  pokemon: [
    {
      species: POKEMON_SPECIES.NIDOKING,
      level: 34,
    },
  ],
}
const CAMPER_QUENTIN: Trainer = {
  id: 'camper-quentin',
  type: TRAINER_TYPES.CAMPER,
  name: 'Quentin',
  pokemon: [
    {
      species: POKEMON_SPECIES.FEAROW,
      level: 30,
    },
    {
      species: POKEMON_SPECIES.PRIMEAPE,
      level: 30,
    },
    {
      species: POKEMON_SPECIES.TAUROS,
      level: 30,
    },
  ],
}
const CAMPER_ROLAND: Trainer = {
  id: 'camper-roland',
  type: TRAINER_TYPES.CAMPER,
  name: 'Roland',
  pokemon: [
    {
      species: POKEMON_SPECIES.NIDORAN_M,
      level: 9,
    },
  ],
}
const CAMPER_SID: Trainer = {
  id: 'camper-sid',
  type: TRAINER_TYPES.CAMPER,
  name: 'Sid',
  pokemon: [
    {
      species: POKEMON_SPECIES.DUGTRIO,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.POLIWRATH,
      level: 29,
    },
    {
      species: POKEMON_SPECIES.PRIMEAPE,
      level: 29,
    },
  ],
}
const CAMPER_SPENCER: Trainer = {
  id: 'camper-spencer',
  type: TRAINER_TYPES.CAMPER,
  name: 'Spencer',
  pokemon: [
    {
      species: POKEMON_SPECIES.SANDSHREW,
      level: 17,
    },
    {
      species: POKEMON_SPECIES.SANDSLASH,
      level: 17,
    },
    {
      species: POKEMON_SPECIES.ZUBAT,
      level: 19,
    },
  ],
}
const CAMPER_TED: Trainer = {
  id: 'camper-ted',
  type: TRAINER_TYPES.CAMPER,
  name: 'Ted',
  pokemon: [
    {
      species: POKEMON_SPECIES.MANKEY,
      level: 17,
    },
  ],
}
const CAMPER_TODD: Trainer = {
  id: 'camper-todd',
  type: TRAINER_TYPES.CAMPER,
  name: 'Todd',
  pokemon: [
    {
      species: POKEMON_SPECIES.PSYDUCK,
      level: 14,
    },
  ],
}

// picnicker
const PICNICKER_BROOKE: Trainer = {
  id: 'picnicker-brooke',
  type: TRAINER_TYPES.PICNICKER,
  name: 'Brooke',
  pokemon: [
    {
      species: POKEMON_SPECIES.PIKACHU,
      level: 16,
    },
  ],
}
const PICNICKER_CINDY: Trainer = {
  id: 'picnicker-cindy',
  type: TRAINER_TYPES.PICNICKER,
  name: 'Cindy',
  pokemon: [
    {
      species: POKEMON_SPECIES.NIDOQUEEN,
      level: 36,
    },
  ],
}
const PICNICKER_DEBRA: Trainer = {
  id: 'picnicker-debra',
  type: TRAINER_TYPES.PICNICKER,
  name: 'Debra',
  pokemon: [
    {
      species: POKEMON_SPECIES.SEAKING,
      level: 33,
    },
  ],
}
const PICNICKER_EDNA: Trainer = {
  id: 'picnicker-edna',
  type: TRAINER_TYPES.PICNICKER,
  name: 'Edna',
  pokemon: [
    {
      species: POKEMON_SPECIES.NIDORINA,
      level: 30,
    },
    {
      species: POKEMON_SPECIES.RAICHU,
      level: 34,
    },
  ],
}
const PICNICKER_ERIN: Trainer = {
  id: 'picnicker-erin',
  type: TRAINER_TYPES.PICNICKER,
  name: 'Erin',
  pokemon: [
    {
      species: POKEMON_SPECIES.PONYTA,
      level: 16,
    },
    {
      species: POKEMON_SPECIES.PONYTA,
      level: 16,
    },
  ],
}
const PICNICKER_GINA: Trainer = {
  id: 'picnicker-gina',
  type: TRAINER_TYPES.PICNICKER,
  name: 'Gina',
  pokemon: [
    {
      species: POKEMON_SPECIES.HOPPIP,
      level: 9,
    },
    {
      species: POKEMON_SPECIES.HOPPIP,
      level: 9,
    },
    {
      species: POKEMON_SPECIES.BULBASAUR,
      level: 12,
    },
  ],
}
const PICNICKER_HEIDI: Trainer = {
  id: 'picnicker-heidi',
  type: TRAINER_TYPES.PICNICKER,
  name: 'Heidi',
  pokemon: [
    {
      species: POKEMON_SPECIES.SKIPLOOM,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.SKIPLOOM,
      level: 32,
    },
  ],
}
const PICNICKER_HOPE: Trainer = {
  id: 'picnicker-hope',
  type: TRAINER_TYPES.PICNICKER,
  name: 'Hope',
  pokemon: [
    {
      species: POKEMON_SPECIES.FLAAFFY,
      level: 34,
    },
  ],
}
const PICNICKER_KIM: Trainer = {
  id: 'picnicker-kim',
  type: TRAINER_TYPES.PICNICKER,
  name: 'Kim',
  pokemon: [
    {
      species: POKEMON_SPECIES.VULPIX,
      level: 15,
    },
  ],
}
const PICNICKER_LIZ: Trainer = {
  id: 'picnicker-liz',
  type: TRAINER_TYPES.PICNICKER,
  name: 'Liz',
  pokemon: [
    {
      species: POKEMON_SPECIES.NIDORAN_F,
      level: 9,
    },
  ],
}
const PICNICKER_SHARON: Trainer = {
  id: 'picnicker-sharon',
  type: TRAINER_TYPES.PICNICKER,
  name: 'Sharon',
  pokemon: [
    {
      species: POKEMON_SPECIES.FURRET,
      level: 31,
    },
    {
      species: POKEMON_SPECIES.RAPIDASH,
      level: 33,
    },
  ],
}
const PICNICKER_TANYA: Trainer = {
  id: 'picnicker-tanya',
  type: TRAINER_TYPES.PICNICKER,
  name: 'Tanya',
  pokemon: [
    {
      species: POKEMON_SPECIES.EXEGGUTOR,
      level: 37,
    },
  ],
}
const PICNICKER_TIFFANY: Trainer = {
  id: 'picnicker-tiffany',
  type: TRAINER_TYPES.PICNICKER,
  name: 'Tiffany',
  pokemon: [
    {
      species: POKEMON_SPECIES.CLEFAIRY,
      level: 20,
    },
  ],
}

// juggler
const JUGGLER_FRITZ: Trainer = {
  id: 'juggler-fritz',
  type: TRAINER_TYPES.JUGGLER,
  name: 'Fritz',
  pokemon: [
    {
      species: POKEMON_SPECIES.MR_MIME,
      level: 29,
    },
    {
      species: POKEMON_SPECIES.MACHOKE,
      level: 29,
    },
    {
      species: POKEMON_SPECIES.MAGMAR,
      level: 29,
    },
  ],
}
const JUGGLER_HORTON: Trainer = {
  id: 'juggler-horton',
  type: TRAINER_TYPES.JUGGLER,
  name: 'Horton',
  pokemon: [
    {
      species: POKEMON_SPECIES.ELECTRODE,
      level: 33,
    },
    {
      species: POKEMON_SPECIES.ELECTRODE,
      level: 33,
    },
    {
      species: POKEMON_SPECIES.ELECTRODE,
      level: 33,
    },
    {
      species: POKEMON_SPECIES.ELECTRODE,
      level: 33,
    },
  ],
}
const JUGGLER_IRWIN: Trainer = {
  id: 'juggler-irwin',
  type: TRAINER_TYPES.JUGGLER,
  name: 'Irwin',
  pokemon: [
    {
      species: POKEMON_SPECIES.VOLTORB,
      level: 2,
    },
    {
      species: POKEMON_SPECIES.VOLTORB,
      level: 6,
    },
    {
      species: POKEMON_SPECIES.VOLTORB,
      level: 10,
    },
    {
      species: POKEMON_SPECIES.VOLTORB,
      level: 14,
    },
  ],
}

// kimono girl
const KIMONO_GIRL_KUNI: Trainer = {
  id: 'kimono-girl-kuni',
  type: TRAINER_TYPES.KIMONO_GIRL,
  name: 'Kuni',
  pokemon: [
    {
      species: POKEMON_SPECIES.VAPOREON,
      level: 17,
    },
  ],
}
const KIMONO_GIRL_MIKI: Trainer = {
  id: 'kimono-girl-miki',
  type: TRAINER_TYPES.KIMONO_GIRL,
  name: 'Miki',
  pokemon: [
    {
      species: POKEMON_SPECIES.JOLTEON,
      level: 17,
    },
  ],
}
const KIMONO_GIRL_NAOKO: Trainer = {
  id: 'kimono-girl-naoko',
  type: TRAINER_TYPES.KIMONO_GIRL,
  name: 'Naoko',
  pokemon: [
    {
      species: POKEMON_SPECIES.FLAREON,
      level: 17,
    },
  ],
}
const KIMONO_GIRL_SAYO: Trainer = {
  id: 'kimono-girl-sayo',
  type: TRAINER_TYPES.KIMONO_GIRL,
  name: 'Sayo',
  pokemon: [
    {
      species: POKEMON_SPECIES.ESPEON,
      level: 17,
    },
  ],
}
const KIMONO_GIRL_ZUKI: Trainer = {
  id: 'kimono-girl-zuki',
  type: TRAINER_TYPES.KIMONO_GIRL,
  name: 'Zuki',
  pokemon: [
    {
      species: POKEMON_SPECIES.UMBREON,
      level: 17,
    },
  ],
}

// lass
const LASS_ALICE: Trainer = {
  id: 'lass-alice',
  type: TRAINER_TYPES.LASS,
  name: 'Alice',
  pokemon: [
    {
      species: POKEMON_SPECIES.GLOOM,
      level: 30,
    },
    {
      species: POKEMON_SPECIES.ARBOK,
      level: 34,
    },
    {
      species: POKEMON_SPECIES.GLOOM,
      level: 30,
    },
  ],
}
const LASS_BRIDGET: Trainer = {
  id: 'lass-bridget',
  type: TRAINER_TYPES.LASS,
  name: 'Bridget',
  pokemon: [
    {
      species: POKEMON_SPECIES.JIGGLYPUFF,
      level: 15,
    },
    {
      species: POKEMON_SPECIES.JIGGLYPUFF,
      level: 15,
    },
    {
      species: POKEMON_SPECIES.JIGGLYPUFF,
      level: 15,
    },
  ],
}
const LASS_CARRIE: Trainer = {
  id: 'lass-carrie',
  type: TRAINER_TYPES.LASS,
  name: 'Carrie',
  pokemon: [
    {
      species: POKEMON_SPECIES.SNUBBULL,
      level: 18,
    },
  ],
}
const LASS_CONNIE: Trainer = {
  id: 'lass-connie',
  type: TRAINER_TYPES.LASS,
  name: 'Connie',
  pokemon: [
    {
      species: POKEMON_SPECIES.MARILL,
      level: 21,
    },
  ],
}
const LASS_DANA: Trainer = {
  id: 'lass-dana',
  type: TRAINER_TYPES.LASS,
  name: 'Dana',
  pokemon: [
    {
      species: POKEMON_SPECIES.FLAAFFY,
      level: 18,
    },
    {
      species: POKEMON_SPECIES.PSYDUCK,
      level: 18,
    },
  ],
}
const LASS_ELLEN: Trainer = {
  id: 'lass-ellen',
  type: TRAINER_TYPES.LASS,
  name: 'Ellen',
  pokemon: [
    {
      species: POKEMON_SPECIES.WIGGLYTUFF,
      level: 30,
    },
    {
      species: POKEMON_SPECIES.GRANBULL,
      level: 34,
    },
  ],
}
const LASS_KRISE: Trainer = {
  id: 'lass-krise',
  type: TRAINER_TYPES.LASS,
  name: 'Krise',
  pokemon: [
    {
      species: POKEMON_SPECIES.ODDISH,
      level: 12,
    },
    {
      species: POKEMON_SPECIES.CUBONE,
      level: 15,
    },
  ],
}
const LASS_LAURA: Trainer = {
  id: 'lass-laura',
  type: TRAINER_TYPES.LASS,
  name: 'Laura',
  pokemon: [
    {
      species: POKEMON_SPECIES.GLOOM,
      level: 28,
    },
    {
      species: POKEMON_SPECIES.PIDGEOTTO,
      level: 31,
    },
    {
      species: POKEMON_SPECIES.BELLOSSOM,
      level: 31,
    },
  ],
}
const LASS_LINDA: Trainer = {
  id: 'lass-linda',
  type: TRAINER_TYPES.LASS,
  name: 'Linda',
  pokemon: [
    {
      species: POKEMON_SPECIES.BULBASAUR,
      level: 30,
    },
    {
      species: POKEMON_SPECIES.IVYSAUR,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.VENUSAUR,
      level: 34,
    },
  ],
}
const LASS_MICHELLE: Trainer = {
  id: 'lass-michelle',
  type: TRAINER_TYPES.LASS,
  name: 'Michelle',
  pokemon: [
    {
      species: POKEMON_SPECIES.HOPPIP,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.SKIPLOOM,
      level: 33,
    },
    {
      species: POKEMON_SPECIES.JUMPLUFF,
      level: 34,
    },
  ],
}
const LASS_SHANNON: Trainer = {
  id: 'lass-shannon',
  type: TRAINER_TYPES.LASS,
  name: 'Shannon',
  pokemon: [
    {
      species: POKEMON_SPECIES.PARAS,
      level: 29,
    },
    {
      species: POKEMON_SPECIES.PARAS,
      level: 29,
    },
    {
      species: POKEMON_SPECIES.PARASECT,
      level: 32,
    },
  ],
}

// medium
const MEDIUM_DORIS: Trainer = {
  id: 'medium-doris',
  type: TRAINER_TYPES.MEDIUM,
  name: 'Doris',
  pokemon: [
    {
      species: POKEMON_SPECIES.SLOWPOKE,
      level: 34,
    },
    {
      species: POKEMON_SPECIES.SLOWBRO,
      level: 36,
    },
  ],
}
const MEDIUM_GRACE: Trainer = {
  id: 'medium-grace',
  type: TRAINER_TYPES.MEDIUM,
  name: 'Grace',
  pokemon: [
    {
      species: POKEMON_SPECIES.HAUNTER,
      level: 20,
    },
    {
      species: POKEMON_SPECIES.HAUNTER,
      level: 20,
    },
  ],
}
const MEDIUM_MARTHA: Trainer = {
  id: 'medium-martha',
  type: TRAINER_TYPES.MEDIUM,
  name: 'Martha',
  pokemon: [
    {
      species: POKEMON_SPECIES.GASTLY,
      level: 18,
    },
    {
      species: POKEMON_SPECIES.HAUNTER,
      level: 20,
    },
    {
      species: POKEMON_SPECIES.GASTLY,
      level: 20,
    },
  ],
}
const MEDIUM_REBECCA: Trainer = {
  id: 'medium-rebecca',
  type: TRAINER_TYPES.MEDIUM,
  name: 'Rebecca',
  pokemon: [
    {
      species: POKEMON_SPECIES.DROWZEE,
      level: 35,
    },
    {
      species: POKEMON_SPECIES.HYPNO,
      level: 35,
    },
  ],
}

// mysticalman
const MYSTICALMAN_EUSIN: Trainer = {
  id: 'mysticalman-eusin',
  type: TRAINER_TYPES.MEDIUM,
  name: 'Eusin',
  pokemon: [
    {
      species: POKEMON_SPECIES.DROWZEE,
      level: 23,
    },
    {
      species: POKEMON_SPECIES.HAUNTER,
      level: 23,
    },
    {
      species: POKEMON_SPECIES.ELECTRODE,
      level: 25,
    },
  ],
}

// officer
const OFFICER_DIRK: Trainer = {
  id: 'officer-dirk',
  type: TRAINER_TYPES.OFFICER,
  name: 'Dirk',
  pokemon: [
    {
      species: POKEMON_SPECIES.GROWLITHE,
      level: 14,
    },
    {
      species: POKEMON_SPECIES.GROWLITHE,
      level: 14,
    },
  ],
}
const OFFICER_KEITH: Trainer = {
  id: 'officer-keith',
  type: TRAINER_TYPES.OFFICER,
  name: 'Keith',
  pokemon: [
    {
      species: POKEMON_SPECIES.GROWLITHE,
      level: 17,
    },
  ],
}

// poke fan
const POKE_FAN_ALEX: Trainer = {
  id: 'poke-fan-alex',
  type: TRAINER_TYPES.POKE_FAN,
  name: 'Alex',
  pokemon: [
    {
      species: POKEMON_SPECIES.NIDOKING,
      level: 29,
    },
    {
      species: POKEMON_SPECIES.SLOWKING,
      level: 29,
    },
    {
      species: POKEMON_SPECIES.SEAKING,
      level: 29,
    },
  ],
}
const POKE_FAN_ALLAN: Trainer = {
  id: 'poke-fan-allan',
  type: TRAINER_TYPES.POKE_FAN,
  name: 'Allan',
  pokemon: [
    {
      species: POKEMON_SPECIES.TEDDIURSA,
      level: 35,
    },
  ],
}
const POKE_FAN_BEVERLY: Trainer = {
  id: 'poke-fan-beverly',
  type: TRAINER_TYPES.POKE_FAN,
  name: 'Beverly',
  pokemon: [
    {
      species: POKEMON_SPECIES.SNUBBULL,
      level: 14,
    },
  ],
}
const POKE_FAN_BRANDON: Trainer = {
  id: 'poke-fan-brandon',
  type: TRAINER_TYPES.POKE_FAN,
  name: 'Brandon',
  pokemon: [
    {
      species: POKEMON_SPECIES.SNUBBULL,
      level: 13,
    },
  ],
}
const POKE_FAN_CARTER: Trainer = {
  id: 'poke-fan-carter',
  type: TRAINER_TYPES.POKE_FAN,
  name: 'Carter',
  pokemon: [
    {
      species: POKEMON_SPECIES.BULBASAUR,
      level: 29,
    },
    {
      species: POKEMON_SPECIES.CHARMANDER,
      level: 29,
    },
    {
      species: POKEMON_SPECIES.SQUIRTLE,
      level: 29,
    },
  ],
}
const POKE_FAN_COLIN: Trainer = {
  id: 'poke-fan-colin',
  type: TRAINER_TYPES.POKE_FAN,
  name: 'Colin',
  pokemon: [
    {
      species: POKEMON_SPECIES.DELIBIRD,
      level: 32,
    },
  ],
}
const POKE_FAN_DEREK: Trainer = {
  id: 'poke-fan-derek',
  type: TRAINER_TYPES.POKE_FAN,
  name: 'Derek',
  pokemon: [
    {
      species: POKEMON_SPECIES.PIKACHU,
      level: 17,
    },
  ],
}
const POKE_FAN_GEORGIA: Trainer = {
  id: 'poke-fan-georgia',
  type: TRAINER_TYPES.POKE_FAN,
  name: 'Georgia',
  pokemon: [
    {
      species: POKEMON_SPECIES.SENTRET,
      level: 23,
    },
    {
      species: POKEMON_SPECIES.SENTRET,
      level: 23,
    },
    {
      species: POKEMON_SPECIES.SENTRET,
      level: 23,
    },
    {
      species: POKEMON_SPECIES.FURRET,
      level: 28,
    },
    {
      species: POKEMON_SPECIES.SENTRET,
      level: 23,
    },
  ],
}
const POKE_FAN_JAIME: Trainer = {
  id: 'poke-fan-jaime',
  type: TRAINER_TYPES.POKE_FAN,
  name: 'Jaime',
  pokemon: [
    {
      species: POKEMON_SPECIES.MEOWTH,
      level: 16,
    },
  ],
}
const POKE_FAN_JEREMY: Trainer = {
  id: 'poke-fan-jeremy',
  type: TRAINER_TYPES.POKE_FAN,
  name: 'Jeremy',
  pokemon: [
    {
      species: POKEMON_SPECIES.MEOWTH,
      level: 28,
    },
    {
      species: POKEMON_SPECIES.MEOWTH,
      level: 28,
    },
    {
      species: POKEMON_SPECIES.MEOWTH,
      level: 28,
    },
  ],
}
const POKE_FAN_JOSHUA: Trainer = {
  id: 'poke-fan-joshua',
  type: TRAINER_TYPES.POKE_FAN,
  name: 'Joshua',
  pokemon: [
    {
      species: POKEMON_SPECIES.PIKACHU,
      level: 23,
    },
    {
      species: POKEMON_SPECIES.PIKACHU,
      level: 23,
    },
    {
      species: POKEMON_SPECIES.PIKACHU,
      level: 23,
    },
    {
      species: POKEMON_SPECIES.PIKACHU,
      level: 23,
    },
    {
      species: POKEMON_SPECIES.PIKACHU,
      level: 23,
    },
  ],
}
const POKE_FAN_REX: Trainer = {
  id: 'poke-fan-rex',
  type: TRAINER_TYPES.POKE_FAN,
  name: 'Rex',
  pokemon: [
    {
      species: POKEMON_SPECIES.PHANPY,
      level: 35,
    },
  ],
}
const POKE_FAN_ROBERT: Trainer = {
  id: 'poke-fan-robert',
  type: TRAINER_TYPES.POKE_FAN,
  name: 'Robert',
  pokemon: [
    {
      species: POKEMON_SPECIES.QUAGSIRE,
      level: 33,
    },
  ],
}
const POKE_FAN_RUTH: Trainer = {
  id: 'poke-fan-ruth',
  type: TRAINER_TYPES.POKE_FAN,
  name: 'Ruth',
  pokemon: [
    {
      species: POKEMON_SPECIES.PIKACHU,
      level: 17,
    },
  ],
}
const POKE_FAN_TREVOR: Trainer = {
  id: 'poke-fan-trevor',
  type: TRAINER_TYPES.POKE_FAN,
  name: 'Trevor',
  pokemon: [
    {
      species: POKEMON_SPECIES.PSYDUCK,
      level: 33,
    },
  ],
}
const POKE_FAN_WILLIAM: Trainer = {
  id: 'poke-fan-william',
  type: TRAINER_TYPES.POKE_FAN,
  name: 'William',
  pokemon: [
    {
      species: POKEMON_SPECIES.RAICHU,
      level: 14,
    },
  ],
}

// poke maniac
const POKE_MANIAC_ANDREW: Trainer = {
  id: 'poke-maniac-andrew',
  type: TRAINER_TYPES.POKE_MANIAC,
  name: 'Andrew',
  pokemon: [
    {
      species: POKEMON_SPECIES.MAROWAK,
      level: 24,
    },
    {
      species: POKEMON_SPECIES.MAROWAK,
      level: 24,
    },
  ],
}
const POKE_MANIAC_BEN: Trainer = {
  id: 'poke-maniac-ben',
  type: TRAINER_TYPES.POKE_MANIAC,
  name: 'Ben',
  pokemon: [
    {
      species: POKEMON_SPECIES.SLOWBRO,
      level: 19,
    },
  ],
}
const POKE_MANIAC_BRENT: Trainer = {
  id: 'poke-maniac-brent',
  type: TRAINER_TYPES.POKE_MANIAC,
  name: 'Brent',
  pokemon: [
    {
      species: POKEMON_SPECIES.LICKITUNG,
      level: 19,
    },
  ],
}
const POKE_MANIAC_CALVIN: Trainer = {
  id: 'poke-maniac-calvin',
  type: TRAINER_TYPES.POKE_MANIAC,
  name: 'Calvin',
  pokemon: [
    {
      species: POKEMON_SPECIES.KANGASKHAN,
      level: 26,
    },
  ],
}
const POKE_MANIAC_DONALD: Trainer = {
  id: 'poke-maniac-donald',
  type: TRAINER_TYPES.POKE_MANIAC,
  name: 'Donald',
  pokemon: [
    {
      species: POKEMON_SPECIES.SLOWPOKE,
      level: 10,
    },
    {
      species: POKEMON_SPECIES.SLOWPOKE,
      level: 10,
    },
  ],
}
const POKE_MANIAC_ISAAC: Trainer = {
  id: 'poke-maniac-isaac',
  type: TRAINER_TYPES.POKE_MANIAC,
  name: 'Isaac',
  pokemon: [
    {
      species: POKEMON_SPECIES.LICKITUNG,
      level: 12,
    },
  ],
}
const POKE_MANIAC_LARRY: Trainer = {
  id: 'poke-maniac-larry',
  type: TRAINER_TYPES.POKE_MANIAC,
  name: 'Larry',
  pokemon: [
    {
      species: POKEMON_SPECIES.SLOWPOKE,
      level: 10,
    },
  ],
}
const POKE_MANIAC_MILLER: Trainer = {
  id: 'poke-maniac-miller',
  type: TRAINER_TYPES.POKE_MANIAC,
  name: 'Miller',
  pokemon: [
    {
      species: POKEMON_SPECIES.NIDOKING,
      level: 17,
    },
    {
      species: POKEMON_SPECIES.NIDOQUEEN,
      level: 17,
    },
  ],
}
const POKE_MANIAC_RON: Trainer = {
  id: 'poke-maniac-ron',
  type: TRAINER_TYPES.POKE_MANIAC,
  name: 'Ron',
  pokemon: [
    {
      species: POKEMON_SPECIES.NIDOKING,
      level: 19,
    },
  ],
}
const POKE_MANIAC_SHANE: Trainer = {
  id: 'poke-maniac-shane',
  type: TRAINER_TYPES.POKE_MANIAC,
  name: 'Shane',
  pokemon: [
    {
      species: POKEMON_SPECIES.NIDORINA,
      level: 14,
    },
    {
      species: POKEMON_SPECIES.NIDORINO,
      level: 16,
    },
  ],
}
const POKE_MANIAC_ZACH: Trainer = {
  id: 'poke-maniac-zach',
  type: TRAINER_TYPES.POKE_MANIAC,
  name: 'Zach',
  pokemon: [
    {
      species: POKEMON_SPECIES.RHYHORN,
      level: 27,
    },
  ],
}

// psychic
const PSYCHIC_FIDEL: Trainer = {
  id: 'psychic-fidel',
  type: TRAINER_TYPES.PSYCHIC,
  name: 'Fidel',
  pokemon: [
    {
      species: POKEMON_SPECIES.XATU,
      level: 34,
    },
  ],
}
const PSYCHIC_FRANKLIN: Trainer = {
  id: 'psychic-franklin',
  type: TRAINER_TYPES.PSYCHIC,
  name: 'Franklin',
  pokemon: [
    {
      species: POKEMON_SPECIES.KADABRA,
      level: 37,
    },
  ],
}
const PSYCHIC_GILBERT: Trainer = {
  id: 'psychic-gilbert',
  type: TRAINER_TYPES.PSYCHIC,
  name: 'Gilbert',
  pokemon: [
    {
      species: POKEMON_SPECIES.STARMIE,
      level: 30,
    },
    {
      species: POKEMON_SPECIES.EXEGGCUTE,
      level: 30,
    },
    {
      species: POKEMON_SPECIES.GIRAFARIG,
      level: 34,
    },
  ],
}
const PSYCHIC_GREG: Trainer = {
  id: 'psychic-greg',
  type: TRAINER_TYPES.PSYCHIC,
  name: 'Greg',
  pokemon: [
    {
      species: POKEMON_SPECIES.DROWZEE,
      level: 17,
    },
  ],
}
const PSYCHIC_HERMAN: Trainer = {
  id: 'psychic-herman',
  type: TRAINER_TYPES.PSYCHIC,
  name: 'Herman',
  pokemon: [
    {
      species: POKEMON_SPECIES.EXEGGCUTE,
      level: 30,
    },
    {
      species: POKEMON_SPECIES.EXEGGCUTE,
      level: 30,
    },
    {
      species: POKEMON_SPECIES.EXEGGUTOR,
      level: 30,
    },
  ],
}
const PSYCHIC_JARED: Trainer = {
  id: 'psychic-jared',
  type: TRAINER_TYPES.PSYCHIC,
  name: 'Jared',
  pokemon: [
    {
      species: POKEMON_SPECIES.MR_MIME,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.EXEGGCUTE,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.EXEGGCUTE,
      level: 35,
    },
  ],
}
const PSYCHIC_MARK: Trainer = {
  id: 'psychic-mark',
  type: TRAINER_TYPES.PSYCHIC,
  name: 'Mark',
  pokemon: [
    {
      species: POKEMON_SPECIES.ABRA,
      level: 13,
    },
    {
      species: POKEMON_SPECIES.ABRA,
      level: 13,
    },
    {
      species: POKEMON_SPECIES.KADABRA,
      level: 15,
    },
  ],
}
const PSYCHIC_NATHAN: Trainer = {
  id: 'psychic-nathan',
  type: TRAINER_TYPES.PSYCHIC,
  name: 'Nathan',
  pokemon: [
    {
      species: POKEMON_SPECIES.GIRAFARIG,
      level: 26,
    },
  ],
}
const PSYCHIC_NORMAN: Trainer = {
  id: 'psychic-norman',
  type: TRAINER_TYPES.PSYCHIC,
  name: 'Norman',
  pokemon: [
    {
      species: POKEMON_SPECIES.SLOWPOKE,
      level: 17,
    },
    {
      species: POKEMON_SPECIES.SLOWPOKE,
      level: 20,
    },
  ],
}
const PSYCHIC_PHIL: Trainer = {
  id: 'psychic-phil',
  type: TRAINER_TYPES.PSYCHIC,
  name: 'Phil',
  pokemon: [
    {
      species: POKEMON_SPECIES.NATU,
      level: 24,
    },
    {
      species: POKEMON_SPECIES.KADABRA,
      level: 24,
    },
  ],
}
const PSYCHIC_RICHARD: Trainer = {
  id: 'psychic-richard',
  type: TRAINER_TYPES.PSYCHIC,
  name: 'Richard',
  pokemon: [
    {
      species: POKEMON_SPECIES.ESPEON,
      level: 36,
    },
  ],
}
const PSYCHIC_RODNEY: Trainer = {
  id: 'psychic-rodney',
  type: TRAINER_TYPES.PSYCHIC,
  name: 'Rodney',
  pokemon: [
    {
      species: POKEMON_SPECIES.DROWZEE,
      level: 29,
    },
    {
      species: POKEMON_SPECIES.HYPNO,
      level: 33,
    },
  ],
}

// rocket executive
const ROCKET_EXECUTIVE_1: Trainer = {
  id: 'rocket-executive-1',
  type: TRAINER_TYPES.ROCKET_EXECUTIVE,
  name: '♂',
  pokemon: [
    {
      species: POKEMON_SPECIES.ZUBAT,
      level: 22,
    },
    {
      species: POKEMON_SPECIES.KOFFING,
      level: 22,
    },
    {
      species: POKEMON_SPECIES.RATICATE,
      level: 24,
    },
  ],
}
const ROCKET_EXECUTIVE_2: Trainer = {
  id: 'rocket-executive-2',
  type: TRAINER_TYPES.ROCKET_EXECUTIVE,
  name: '♀',
  pokemon: [
    {
      species: POKEMON_SPECIES.ARBOK,
      level: 23,
    },
    {
      species: POKEMON_SPECIES.GLOOM,
      level: 23,
    },
    {
      species: POKEMON_SPECIES.MURKROW,
      level: 25,
    },
  ],
}
const ROCKET_EXECUTIVE_3: Trainer = {
  id: 'rocket-executive-3',
  type: TRAINER_TYPES.ROCKET_EXECUTIVE,
  name: '♂',
  pokemon: [
    {
      species: POKEMON_SPECIES.GOLBAT,
      level: 36,
    },
  ],
}
const ROCKET_EXECUTIVE_4: Trainer = {
  id: 'rocket-executive-4',
  type: TRAINER_TYPES.ROCKET_EXECUTIVE,
  name: '♂',
  pokemon: [
    {
      species: POKEMON_SPECIES.HOUNDOUR,
      level: 33,
    },
    {
      species: POKEMON_SPECIES.KOFFING,
      level: 33,
    },
    {
      species: POKEMON_SPECIES.HOUNDOOM,
      level: 35,
    },
  ],
}

// sage
const SAGE_CHOW: Trainer = {
  id: 'sage-chow',
  type: TRAINER_TYPES.SAGE,
  name: 'Chow',
  pokemon: [
    {
      species: POKEMON_SPECIES.BELLSPROUT,
      level: 3,
    },
    {
      species: POKEMON_SPECIES.BELLSPROUT,
      level: 3,
    },
    {
      species: POKEMON_SPECIES.BELLSPROUT,
      level: 3,
    },
  ],
}
const SAGE_EDMOND: Trainer = {
  id: 'sage-edmond',
  type: TRAINER_TYPES.SAGE,
  name: 'Edmond',
  pokemon: [
    {
      species: POKEMON_SPECIES.BELLSPROUT,
      level: 3,
    },
    {
      species: POKEMON_SPECIES.BELLSPROUT,
      level: 3,
    },
    {
      species: POKEMON_SPECIES.BELLSPROUT,
      level: 3,
    },
  ],
}
const SAGE_GAKU: Trainer = {
  id: 'sage-gaku',
  type: TRAINER_TYPES.SAGE,
  name: 'Gaku',
  pokemon: [
    {
      species: POKEMON_SPECIES.NOCTOWL,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.FLAREON,
      level: 32,
    },
  ],
}
const SAGE_JEFFREY: Trainer = {
  id: 'sage-jeffrey',
  type: TRAINER_TYPES.SAGE,
  name: 'Jeffrey',
  pokemon: [
    {
      species: POKEMON_SPECIES.HAUNTER,
      level: 22,
    },
  ],
}
const SAGE_JIN: Trainer = {
  id: 'sage-jin',
  type: TRAINER_TYPES.SAGE,
  name: 'Jin',
  pokemon: [
    {
      species: POKEMON_SPECIES.BELLSPROUT,
      level: 6,
    },
  ],
}
const SAGE_KOJI: Trainer = {
  id: 'sage-koji',
  type: TRAINER_TYPES.SAGE,
  name: 'Koji',
  pokemon: [
    {
      species: POKEMON_SPECIES.NOCTOWL,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.VAPOREON,
      level: 32,
    },
  ],
}
const SAGE_LI: Trainer = {
  id: 'sage-li',
  type: TRAINER_TYPES.SAGE,
  name: 'Li',
  pokemon: [
    {
      species: POKEMON_SPECIES.BELLSPROUT,
      level: 7,
    },
    {
      species: POKEMON_SPECIES.HOOTHOOT,
      level: 10,
    },
    {
      species: POKEMON_SPECIES.BELLSPROUT,
      level: 7,
    },
  ],
}
const SAGE_MASA: Trainer = {
  id: 'sage-masa',
  type: TRAINER_TYPES.SAGE,
  name: 'Masa',
  pokemon: [
    {
      species: POKEMON_SPECIES.NOCTOWL,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.JOLTEON,
      level: 32,
    },
  ],
}
const SAGE_NEAL: Trainer = {
  id: 'sage-neal',
  type: TRAINER_TYPES.SAGE,
  name: 'Neal',
  pokemon: [
    {
      species: POKEMON_SPECIES.BELLSPROUT,
      level: 6,
    },
  ],
}
const SAGE_NICO: Trainer = {
  id: 'sage-nico',
  type: TRAINER_TYPES.SAGE,
  name: 'Nico',
  pokemon: [
    {
      species: POKEMON_SPECIES.BELLSPROUT,
      level: 3,
    },
    {
      species: POKEMON_SPECIES.BELLSPROUT,
      level: 3,
    },
    {
      species: POKEMON_SPECIES.BELLSPROUT,
      level: 3,
    },
  ],
}
const SAGE_PING: Trainer = {
  id: 'sage-ping',
  type: TRAINER_TYPES.SAGE,
  name: 'Ping',
  pokemon: [
    {
      species: POKEMON_SPECIES.GASTLY,
      level: 16,
    },
    {
      species: POKEMON_SPECIES.GASTLY,
      level: 16,
    },
    {
      species: POKEMON_SPECIES.GASTLY,
      level: 16,
    },
    {
      species: POKEMON_SPECIES.GASTLY,
      level: 16,
    },
    {
      species: POKEMON_SPECIES.GASTLY,
      level: 16,
    },
  ],
}
const SAGE_TROY: Trainer = {
  id: 'sage-troy',
  type: TRAINER_TYPES.SAGE,
  name: 'Troy',
  pokemon: [
    {
      species: POKEMON_SPECIES.BELLSPROUT,
      level: 7,
    },
    {
      species: POKEMON_SPECIES.HOOTHOOT,
      level: 7,
    },
  ],
}

// schoolboy
const SCHOOLBOY_ALAN: Trainer = {
  id: 'schoolboy-alan',
  type: TRAINER_TYPES.SCHOOLBOY,
  name: 'Alan',
  pokemon: [
    {
      species: POKEMON_SPECIES.TANGELA,
      level: 16,
    },
  ],
}
const SCHOOLBOY_BILLY: Trainer = {
  id: 'schoolboy-billy',
  type: TRAINER_TYPES.SCHOOLBOY,
  name: 'Billy',
  pokemon: [
    {
      species: POKEMON_SPECIES.PARAS,
      level: 27,
    },
    {
      species: POKEMON_SPECIES.PARAS,
      level: 27,
    },
    {
      species: POKEMON_SPECIES.POLIWHIRL,
      level: 27,
    },
    {
      species: POKEMON_SPECIES.DITTO,
      level: 35,
    },
  ],
}
const SCHOOLBOY_CHAD: Trainer = {
  id: 'schoolboy-chad',
  type: TRAINER_TYPES.SCHOOLBOY,
  name: 'Chad',
  pokemon: [
    {
      species: POKEMON_SPECIES.MR_MIME,
      level: 19,
    },
  ],
}
const SCHOOLBOY_DANNY: Trainer = {
  id: 'schoolboy-danny',
  type: TRAINER_TYPES.SCHOOLBOY,
  name: 'Danny',
  pokemon: [
    {
      species: POKEMON_SPECIES.JYNX,
      level: 31,
    },
    {
      species: POKEMON_SPECIES.ELECTABUZZ,
      level: 31,
    },
    {
      species: POKEMON_SPECIES.MAGMAR,
      level: 31,
    },
  ],
}
const SCHOOLBOY_DUDLEY: Trainer = {
  id: 'schoolboy-dudley',
  type: TRAINER_TYPES.SCHOOLBOY,
  name: 'Dudley',
  pokemon: [
    {
      species: POKEMON_SPECIES.ODDISH,
      level: 35,
    },
  ],
}
const SCHOOLBOY_JACK: Trainer = {
  id: 'schoolboy-jack',
  type: TRAINER_TYPES.SCHOOLBOY,
  name: 'Jack',
  pokemon: [
    {
      species: POKEMON_SPECIES.ODDISH,
      level: 12,
    },
    {
      species: POKEMON_SPECIES.VOLTORB,
      level: 15,
    },
  ],
}
const SCHOOLBOY_JOE: Trainer = {
  id: 'schoolboy-joe',
  type: TRAINER_TYPES.SCHOOLBOY,
  name: 'Joe',
  pokemon: [
    {
      species: POKEMON_SPECIES.TANGELA,
      level: 33,
    },
    {
      species: POKEMON_SPECIES.VAPOREON,
      level: 33,
    },
  ],
}
const SCHOOLBOY_JOHNNY: Trainer = {
  id: 'schoolboy-johnny',
  type: TRAINER_TYPES.SCHOOLBOY,
  name: 'Johnny',
  pokemon: [
    {
      species: POKEMON_SPECIES.BELLSPROUT,
      level: 29,
    },
    {
      species: POKEMON_SPECIES.WEEPINBELL,
      level: 31,
    },
    {
      species: POKEMON_SPECIES.VICTREEBEL,
      level: 33,
    },
  ],
}
const SCHOOLBOY_KIPP: Trainer = {
  id: 'schoolboy-kipp',
  type: TRAINER_TYPES.SCHOOLBOY,
  name: 'Kipp',
  pokemon: [
    {
      species: POKEMON_SPECIES.VOLTORB,
      level: 27,
    },
    {
      species: POKEMON_SPECIES.VOLTORB,
      level: 31,
    },
    {
      species: POKEMON_SPECIES.MAGNETON,
      level: 31,
    },
    {
      species: POKEMON_SPECIES.MAGNEMITE,
      level: 27,
    },
  ],
}
const SCHOOLBOY_NATE: Trainer = {
  id: 'schoolboy-nate',
  type: TRAINER_TYPES.SCHOOLBOY,
  name: 'Nate',
  pokemon: [
    {
      species: POKEMON_SPECIES.LEDIAN,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.EXEGGUTOR,
      level: 32,
    },
  ],
}
const SCHOOLBOY_RICKY: Trainer = {
  id: 'schoolboy-ricky',
  type: TRAINER_TYPES.SCHOOLBOY,
  name: 'Ricky',
  pokemon: [
    {
      species: POKEMON_SPECIES.AIPOM,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.DITTO,
      level: 32,
    },
  ],
}
const SCHOOLBOY_TOMMY: Trainer = {
  id: 'schoolboy-tommy',
  type: TRAINER_TYPES.SCHOOLBOY,
  name: 'Tommy',
  pokemon: [
    {
      species: POKEMON_SPECIES.XATU,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.ALAKAZAM,
      level: 34,
    },
  ],
}

// skier
const SKIER_CLARISSA: Trainer = {
  id: 'skier-clarissa',
  type: TRAINER_TYPES.SKIER,
  name: 'Clarissa',
  pokemon: [
    {
      species: POKEMON_SPECIES.DEWGONG,
      level: 28,
    },
  ],
}
const SKIER_ROXANNE: Trainer = {
  id: 'skier-roxanne',
  type: TRAINER_TYPES.SKIER,
  name: 'Roxanne',
  pokemon: [
    {
      species: POKEMON_SPECIES.JYNX,
      level: 28,
    },
  ],
}

// teacher
const TEACHER_COLETTE: Trainer = {
  id: 'teacher-colette',
  type: TRAINER_TYPES.TEACHER,
  name: 'Colette',
  pokemon: [
    {
      species: POKEMON_SPECIES.CLEFAIRY,
      level: 36,
    },
  ],
}
const TEACHER_HILLARY: Trainer = {
  id: 'teacher-hillary',
  type: TRAINER_TYPES.TEACHER,
  name: 'Hillary',
  pokemon: [
    {
      species: POKEMON_SPECIES.AIPOM,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.CUBONE,
      level: 36,
    },
  ],
}
const TEACHER_SHIRLEY: Trainer = {
  id: 'teacher-shirley',
  type: TRAINER_TYPES.TEACHER,
  name: 'Shirley',
  pokemon: [
    {
      species: POKEMON_SPECIES.JIGGLYPUFF,
      level: 35,
    },
  ],
}

// team rocket grunt
const TEAM_ROCKET_GRUNT_1: Trainer = {
  id: 'team-rocket-grunt-1',
  type: TRAINER_TYPES.TEAM_ROCKET_GRUNT,
  name: '♂',
  pokemon: [
    {
      species: POKEMON_SPECIES.RATTATA,
      level: 9,
    },
    {
      species: POKEMON_SPECIES.RATTATA,
      level: 9,
    },
  ],
}
const TEAM_ROCKET_GRUNT_2: Trainer = {
  id: 'team-rocket-grunt-2',
  type: TRAINER_TYPES.TEAM_ROCKET_GRUNT,
  name: '♀',
  pokemon: [
    {
      species: POKEMON_SPECIES.ZUBAT,
      level: 9,
    },
    {
      species: POKEMON_SPECIES.EKANS,
      level: 11,
    },
  ],
}
const TEAM_ROCKET_GRUNT_3: Trainer = {
  id: 'team-rocket-grunt-3',
  type: TRAINER_TYPES.TEAM_ROCKET_GRUNT,
  name: '♂',
  pokemon: [
    {
      species: POKEMON_SPECIES.RATTATA,
      level: 7,
    },
    {
      species: POKEMON_SPECIES.ZUBAT,
      level: 9,
    },
    {
      species: POKEMON_SPECIES.ZUBAT,
      level: 9,
    },
  ],
}
const TEAM_ROCKET_GRUNT_4: Trainer = {
  id: 'team-rocket-grunt-4',
  type: TRAINER_TYPES.TEAM_ROCKET_GRUNT,
  name: '♂',
  pokemon: [
    {
      species: POKEMON_SPECIES.KOFFING,
      level: 14,
    },
  ],
}
const TEAM_ROCKET_GRUNT_5: Trainer = {
  id: 'team-rocket-grunt-5',
  type: TRAINER_TYPES.TEAM_ROCKET_GRUNT,
  name: '♂',
  pokemon: [
    {
      species: POKEMON_SPECIES.RATTATA,
      level: 16,
    },
    {
      species: POKEMON_SPECIES.RATTATA,
      level: 16,
    },
    {
      species: POKEMON_SPECIES.RATTATA,
      level: 16,
    },
    {
      species: POKEMON_SPECIES.RATTATA,
      level: 16,
    },
  ],
}
const TEAM_ROCKET_GRUNT_6: Trainer = {
  id: 'team-rocket-grunt-6',
  type: TRAINER_TYPES.TEAM_ROCKET_GRUNT,
  name: '♂',
  pokemon: [
    {
      species: POKEMON_SPECIES.DROWZEE,
      level: 17,
    },
    {
      species: POKEMON_SPECIES.ZUBAT,
      level: 19,
    },
  ],
}
const TEAM_ROCKET_GRUNT_7: Trainer = {
  id: 'team-rocket-grunt-7',
  type: TRAINER_TYPES.TEAM_ROCKET_GRUNT,
  name: '♂',
  pokemon: [
    {
      species: POKEMON_SPECIES.ZUBAT,
      level: 16,
    },
    {
      species: POKEMON_SPECIES.GRIMER,
      level: 17,
    },
    {
      species: POKEMON_SPECIES.RATTATA,
      level: 18,
    },
  ],
}
const TEAM_ROCKET_GRUNT_8: Trainer = {
  id: 'team-rocket-grunt-8',
  type: TRAINER_TYPES.TEAM_ROCKET_GRUNT,
  name: '♂',
  pokemon: [
    {
      species: POKEMON_SPECIES.VENONAT,
      level: 18,
    },
    {
      species: POKEMON_SPECIES.VENONAT,
      level: 18,
    },
  ],
}
const TEAM_ROCKET_GRUNT_9: Trainer = {
  id: 'team-rocket-grunt-9',
  type: TRAINER_TYPES.TEAM_ROCKET_GRUNT,
  name: '♂',
  pokemon: [
    {
      species: POKEMON_SPECIES.GOLBAT,
      level: 18,
    },
  ],
}
const TEAM_ROCKET_GRUNT_10: Trainer = {
  id: 'team-rocket-grunt-10',
  type: TRAINER_TYPES.TEAM_ROCKET_GRUNT,
  name: '♂',
  pokemon: [
    {
      species: POKEMON_SPECIES.RATTATA,
      level: 17,
    },
    {
      species: POKEMON_SPECIES.ZUBAT,
      level: 17,
    },
    {
      species: POKEMON_SPECIES.RATTATA,
      level: 17,
    },
  ],
}
const TEAM_ROCKET_GRUNT_11: Trainer = {
  id: 'team-rocket-grunt-11',
  type: TRAINER_TYPES.TEAM_ROCKET_GRUNT,
  name: '♀',
  pokemon: [
    {
      species: POKEMON_SPECIES.EKANS,
      level: 18,
    },
    {
      species: POKEMON_SPECIES.GLOOM,
      level: 18,
    },
  ],
}
const TEAM_ROCKET_GRUNT_12: Trainer = {
  id: 'team-rocket-grunt-12',
  type: TRAINER_TYPES.TEAM_ROCKET_GRUNT,
  name: '♂',
  pokemon: [
    {
      species: POKEMON_SPECIES.RATICATE,
      level: 19,
    },
  ],
}
const TEAM_ROCKET_GRUNT_13: Trainer = {
  id: 'team-rocket-grunt-13',
  type: TRAINER_TYPES.TEAM_ROCKET_GRUNT,
  name: '♂',
  pokemon: [
    {
      species: POKEMON_SPECIES.RATICATE,
      level: 24,
    },
    {
      species: POKEMON_SPECIES.RATICATE,
      level: 24,
    },
  ],
}
const TEAM_ROCKET_GRUNT_14: Trainer = {
  id: 'team-rocket-grunt-14',
  type: TRAINER_TYPES.TEAM_ROCKET_GRUNT,
  name: '♀',
  pokemon: [
    {
      species: POKEMON_SPECIES.ARBOK,
      level: 26,
    },
  ],
}
const TEAM_ROCKET_GRUNT_15: Trainer = {
  id: 'team-rocket-grunt-15',
  type: TRAINER_TYPES.TEAM_ROCKET_GRUNT,
  name: '♂',
  pokemon: [
    {
      species: POKEMON_SPECIES.RATTATA,
      level: 21,
    },
    {
      species: POKEMON_SPECIES.RATTATA,
      level: 21,
    },
    {
      species: POKEMON_SPECIES.RATTATA,
      level: 23,
    },
    {
      species: POKEMON_SPECIES.RATTATA,
      level: 23,
    },
    {
      species: POKEMON_SPECIES.RATTATA,
      level: 23,
    },
  ],
}
const TEAM_ROCKET_GRUNT_16: Trainer = {
  id: 'team-rocket-grunt-16',
  type: TRAINER_TYPES.TEAM_ROCKET_GRUNT,
  name: '♂',
  pokemon: [
    {
      species: POKEMON_SPECIES.GRIMER,
      level: 23,
    },
    {
      species: POKEMON_SPECIES.GRIMER,
      level: 23,
    },
    {
      species: POKEMON_SPECIES.MUK,
      level: 25,
    },
  ],
}
const TEAM_ROCKET_GRUNT_17: Trainer = {
  id: 'team-rocket-grunt-17',
  type: TRAINER_TYPES.TEAM_ROCKET_GRUNT,
  name: '♂',
  pokemon: [
    {
      species: POKEMON_SPECIES.ZUBAT,
      level: 26,
    },
    {
      species: POKEMON_SPECIES.ZUBAT,
      level: 26,
    },
  ],
}
const TEAM_ROCKET_GRUNT_18: Trainer = {
  id: 'team-rocket-grunt-18',
  type: TRAINER_TYPES.TEAM_ROCKET_GRUNT,
  name: '♂',
  pokemon: [
    {
      species: POKEMON_SPECIES.KOFFING,
      level: 23,
    },
    {
      species: POKEMON_SPECIES.ZUBAT,
      level: 23,
    },
    {
      species: POKEMON_SPECIES.RATTATA,
      level: 23,
    },
    {
      species: POKEMON_SPECIES.GRIMER,
      level: 23,
    },
  ],
}
const TEAM_ROCKET_GRUNT_19: Trainer = {
  id: 'team-rocket-grunt-19',
  type: TRAINER_TYPES.TEAM_ROCKET_GRUNT,
  name: '♂',
  pokemon: [
    {
      species: POKEMON_SPECIES.WEEZING,
      level: 26,
    },
  ],
}
const TEAM_ROCKET_GRUNT_20: Trainer = {
  id: 'team-rocket-grunt-20',
  type: TRAINER_TYPES.TEAM_ROCKET_GRUNT,
  name: '♂',
  pokemon: [
    {
      species: POKEMON_SPECIES.RATICATE,
      level: 24,
    },
    {
      species: POKEMON_SPECIES.KOFFING,
      level: 26,
    },
  ],
}
const TEAM_ROCKET_GRUNT_21: Trainer = {
  id: 'team-rocket-grunt-21',
  type: TRAINER_TYPES.TEAM_ROCKET_GRUNT,
  name: '♂',
  pokemon: [
    {
      species: POKEMON_SPECIES.ZUBAT,
      level: 22,
    },
    {
      species: POKEMON_SPECIES.GOLBAT,
      level: 24,
    },
    {
      species: POKEMON_SPECIES.GRIMER,
      level: 22,
    },
  ],
}
const TEAM_ROCKET_GRUNT_22: Trainer = {
  id: 'team-rocket-grunt-22',
  type: TRAINER_TYPES.TEAM_ROCKET_GRUNT,
  name: '♀',
  pokemon: [
    {
      species: POKEMON_SPECIES.EKANS,
      level: 21,
    },
    {
      species: POKEMON_SPECIES.EKANS,
      level: 21,
    },
    {
      species: POKEMON_SPECIES.ODDISH,
      level: 23,
    },
    {
      species: POKEMON_SPECIES.GLOOM,
      level: 24,
    },
  ],
}
const TEAM_ROCKET_GRUNT_23: Trainer = {
  id: 'team-rocket-grunt-23',
  type: TRAINER_TYPES.TEAM_ROCKET_GRUNT,
  name: '♂',
  pokemon: [
    {
      species: POKEMON_SPECIES.RATTATA,
      level: 27,
    },
  ],
}
const TEAM_ROCKET_GRUNT_24: Trainer = {
  id: 'team-rocket-grunt-24',
  type: TRAINER_TYPES.TEAM_ROCKET_GRUNT,
  name: '♂',
  pokemon: [
    {
      species: POKEMON_SPECIES.MUK,
      level: 23,
    },
    {
      species: POKEMON_SPECIES.KOFFING,
      level: 23,
    },
    {
      species: POKEMON_SPECIES.RATTATA,
      level: 25,
    },
  ],
}
const TEAM_ROCKET_GRUNT_25: Trainer = {
  id: 'team-rocket-grunt-25',
  type: TRAINER_TYPES.TEAM_ROCKET_GRUNT,
  name: '♂',
  pokemon: [
    {
      species: POKEMON_SPECIES.KOFFING,
      level: 24,
    },
    {
      species: POKEMON_SPECIES.MUK,
      level: 24,
    },
  ],
}
const TEAM_ROCKET_GRUNT_26: Trainer = {
  id: 'team-rocket-grunt-26',
  type: TRAINER_TYPES.TEAM_ROCKET_GRUNT,
  name: '♀',
  pokemon: [
    {
      species: POKEMON_SPECIES.GLOOM,
      level: 25,
    },
    {
      species: POKEMON_SPECIES.GLOOM,
      level: 25,
    },
  ],
}
const TEAM_ROCKET_GRUNT_27: Trainer = {
  id: 'team-rocket-grunt-27',
  type: TRAINER_TYPES.TEAM_ROCKET_GRUNT,
  name: '♂',
  pokemon: [
    {
      species: POKEMON_SPECIES.RATICATE,
      level: 24,
    },
    {
      species: POKEMON_SPECIES.GOLBAT,
      level: 24,
    },
  ],
}
const TEAM_ROCKET_GRUNT_28: Trainer = {
  id: 'team-rocket-grunt-28',
  type: TRAINER_TYPES.TEAM_ROCKET_GRUNT,
  name: '♂',
  pokemon: [
    {
      species: POKEMON_SPECIES.GRIMER,
      level: 26,
    },
    {
      species: POKEMON_SPECIES.WEEZING,
      level: 23,
    },
  ],
}
const TEAM_ROCKET_GRUNT_29: Trainer = {
  id: 'team-rocket-grunt-29',
  type: TRAINER_TYPES.TEAM_ROCKET_GRUNT,
  name: '♂',
  pokemon: [
    {
      species: POKEMON_SPECIES.KOFFING,
      level: 25,
    },
    {
      species: POKEMON_SPECIES.KOFFING,
      level: 25,
    },
  ],
}
const TEAM_ROCKET_GRUNT_30: Trainer = {
  id: 'team-rocket-grunt-30',
  type: TRAINER_TYPES.TEAM_ROCKET_GRUNT,
  name: '♂',
  pokemon: [
    {
      species: POKEMON_SPECIES.GOLBAT,
      level: 30,
    },
  ],
}

// twins
const TWINS_AMY_AND_MAY: Trainer = {
  id: 'twins-amy-and-may',
  type: TRAINER_TYPES.TWINS,
  name: 'Amy & May',
  pokemon: [
    {
      species: POKEMON_SPECIES.SPINARAK,
      level: 10,
    },
    {
      species: POKEMON_SPECIES.LEDYBA,
      level: 10,
    },
  ],
}
const TWINS_JO_AND_ZOE: Trainer = {
  id: 'twins-jo-and-zoe',
  type: TRAINER_TYPES.TWINS,
  name: 'Jo & Zoe',
  pokemon: [
    {
      species: POKEMON_SPECIES.VICTREEBEL,
      level: 35,
    },
    {
      species: POKEMON_SPECIES.VILEPLUME,
      level: 35,
    },
  ],
}
const TWINS_MEG_AND_PEG: Trainer = {
  id: 'twins-meg-and-peg',
  type: TRAINER_TYPES.TWINS,
  name: 'Meg & Peg',
  pokemon: [
    {
      species: POKEMON_SPECIES.TEDDIURSA,
      level: 31,
    },
    {
      species: POKEMON_SPECIES.PHANPY,
      level: 31,
    },
  ],
}
const TWINS_ANN_AND_ANNE: Trainer = {
  id: 'twins-ann-and-anne',
  type: TRAINER_TYPES.TWINS,
  name: 'Ann & Anne',
  pokemon: [
    {
      species: POKEMON_SPECIES.CLEFAIRY,
      level: 16,
    },
    {
      species: POKEMON_SPECIES.JIGGLYPUFF,
      level: 16,
    },
  ],
}
const TWINS_LEA_AND_PIA: Trainer = {
  id: 'twins-lea-and-pia',
  type: TRAINER_TYPES.TWINS,
  name: 'Lea & Pia',
  pokemon: [
    {
      species: POKEMON_SPECIES.DRATINI,
      level: 35,
    },
    {
      species: POKEMON_SPECIES.DRATINI,
      level: 35,
    },
  ],
}

// sailor
const SAILOR_ERNEST: Trainer = {
  id: 'sailor-ernest',
  type: TRAINER_TYPES.SAILOR,
  name: 'Ernest',
  pokemon: [
    {
      species: POKEMON_SPECIES.POLIWHIRL,
      level: 18,
    },
    {
      species: POKEMON_SPECIES.MACHOP,
      level: 18,
    },
    {
      species: POKEMON_SPECIES.MACHOP,
      level: 18,
    },
  ],
}
const SAILOR_EUGENE: Trainer = {
  id: 'sailor-eugene',
  type: TRAINER_TYPES.SAILOR,
  name: 'Eugene',
  pokemon: [
    {
      species: POKEMON_SPECIES.POLIWHIRL,
      level: 17,
    },
    {
      species: POKEMON_SPECIES.KRABBY,
      level: 19,
    },
    {
      species: POKEMON_SPECIES.RATICATE,
      level: 17,
    },
  ],
}
const SAILOR_GARRETT: Trainer = {
  id: 'sailor-garrett',
  type: TRAINER_TYPES.SAILOR,
  name: 'Garrett',
  pokemon: [
    {
      species: POKEMON_SPECIES.KINGLER,
      level: 34,
    },
  ],
}
const SAILOR_HARRY: Trainer = {
  id: 'sailor-harry',
  type: TRAINER_TYPES.SAILOR,
  name: 'Harry',
  pokemon: [
    {
      species: POKEMON_SPECIES.WOOPER,
      level: 19,
    },
  ],
}
const SAILOR_HUEY: Trainer = {
  id: 'sailor-huey',
  type: TRAINER_TYPES.SAILOR,
  name: 'Huey',
  pokemon: [
    {
      species: POKEMON_SPECIES.POLIWAG,
      level: 18,
    },
    {
      species: POKEMON_SPECIES.POLIWHIRL,
      level: 18,
    },
  ],
}
const SAILOR_JEFF: Trainer = {
  id: 'sailor-jeff',
  type: TRAINER_TYPES.SAILOR,
  name: 'Jeff',
  pokemon: [
    {
      species: POKEMON_SPECIES.RATICATE,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.RATICATE,
      level: 32,
    },
  ],
}
const SAILOR_KENNETH: Trainer = {
  id: 'sailor-kenneth',
  type: TRAINER_TYPES.SAILOR,
  name: 'Kenneth',
  pokemon: [
    {
      species: POKEMON_SPECIES.MACHOP,
      level: 28,
    },
    {
      species: POKEMON_SPECIES.MACHOP,
      level: 28,
    },
    {
      species: POKEMON_SPECIES.POLIWRATH,
      level: 28,
    },
    {
      species: POKEMON_SPECIES.MACHOP,
      level: 28,
    },
  ],
}
const SAILOR_KENT: Trainer = {
  id: 'sailor-kent',
  type: TRAINER_TYPES.SAILOR,
  name: 'Kent',
  pokemon: [
    {
      species: POKEMON_SPECIES.KRABBY,
      level: 18,
    },
    {
      species: POKEMON_SPECIES.KRABBY,
      level: 20,
    },
  ],
}
const SAILOR_STANLY: Trainer = {
  id: 'sailor-stanly',
  type: TRAINER_TYPES.SAILOR,
  name: 'Stanly',
  pokemon: [
    {
      species: POKEMON_SPECIES.MACHOP,
      level: 31,
    },
    {
      species: POKEMON_SPECIES.MACHOKE,
      level: 33,
    },
    {
      species: POKEMON_SPECIES.PSYDUCK,
      level: 26,
    },
  ],
}
const SAILOR_TERRELL: Trainer = {
  id: 'sailor-terrell',
  type: TRAINER_TYPES.SAILOR,
  name: 'Terrell',
  pokemon: [
    {
      species: POKEMON_SPECIES.POLIWHIRL,
      level: 20,
    },
  ],
}

// scientist
const SCIENTIST_JED: Trainer = {
  id: 'scientist-jed',
  type: TRAINER_TYPES.SCIENTIST,
  name: 'Jed',
  pokemon: [
    {
      species: POKEMON_SPECIES.MAGNEMITE,
      level: 20,
    },
    {
      species: POKEMON_SPECIES.MAGNEMITE,
      level: 20,
    },
    {
      species: POKEMON_SPECIES.MAGNEMITE,
      level: 20,
    },
  ],
}
const SCIENTIST_MARC: Trainer = {
  id: 'scientist-marc',
  type: TRAINER_TYPES.SCIENTIST,
  name: 'Marc',
  pokemon: [
    {
      species: POKEMON_SPECIES.MAGNEMITE,
      level: 27,
    },
    {
      species: POKEMON_SPECIES.MAGNEMITE,
      level: 27,
    },
    {
      species: POKEMON_SPECIES.MAGNEMITE,
      level: 27,
    },
  ],
}
const SCIENTIST_MITCH: Trainer = {
  id: 'scientist-mitch',
  type: TRAINER_TYPES.SCIENTIST,
  name: 'Mitch',
  pokemon: [
    {
      species: POKEMON_SPECIES.DITTO,
      level: 24,
    },
  ],
}
const SCIENTIST_RICH: Trainer = {
  id: 'scientist-rich',
  type: TRAINER_TYPES.SCIENTIST,
  name: 'Rich',
  pokemon: [
    {
      species: POKEMON_SPECIES.PORYGON,
      level: 30,
    },
  ],
}
const SCIENTIST_ROSS: Trainer = {
  id: 'scientist-ross',
  type: TRAINER_TYPES.SCIENTIST,
  name: 'Ross',
  pokemon: [
    {
      species: POKEMON_SPECIES.KOFFING,
      level: 22,
    },
    {
      species: POKEMON_SPECIES.KOFFING,
      level: 22,
    },
  ],
}

// super nerd
const SUPER_NERD_ERIC: Trainer = {
  id: 'super-nerd-eric',
  type: TRAINER_TYPES.SUPER_NERD,
  name: 'Eric',
  pokemon: [
    {
      species: POKEMON_SPECIES.GRIMER,
      level: 11,
    },
    {
      species: POKEMON_SPECIES.GRIMER,
      level: 11,
    },
  ],
}
const SUPER_NERD_HUGH: Trainer = {
  id: 'super-nerd-hugh',
  type: TRAINER_TYPES.SUPER_NERD,
  name: 'Hugh',
  pokemon: [
    {
      species: POKEMON_SPECIES.SEADRA,
      level: 39,
    },
  ],
}
const SUPER_NERD_MARKUS: Trainer = {
  id: 'super-nerd-markus',
  type: TRAINER_TYPES.SUPER_NERD,
  name: 'Markus',
  pokemon: [
    {
      species: POKEMON_SPECIES.SLOWPOKE,
      level: 19,
    },
  ],
}
const SUPER_NERD_PAT: Trainer = {
  id: 'super-nerd-pat',
  type: TRAINER_TYPES.SUPER_NERD,
  name: 'Pat',
  pokemon: [
    {
      species: POKEMON_SPECIES.PORYGON,
      level: 36,
    },
  ],
}
const SUPER_NERD_SAM: Trainer = {
  id: 'super-nerd-sam',
  type: TRAINER_TYPES.SUPER_NERD,
  name: 'Sam',
  pokemon: [
    {
      species: POKEMON_SPECIES.GRIMER,
      level: 34,
    },
    {
      species: POKEMON_SPECIES.MUK,
      level: 34,
    },
  ],
}
const SUPER_NERD_SHAWN: Trainer = {
  id: 'super-nerd-shawn',
  type: TRAINER_TYPES.SUPER_NERD,
  name: 'Shawn',
  pokemon: [
    {
      species: POKEMON_SPECIES.MAGNEMITE,
      level: 31,
    },
    {
      species: POKEMON_SPECIES.MUK,
      level: 33,
    },
    {
      species: POKEMON_SPECIES.MAGNEMITE,
      level: 31,
    },
  ],
}
const SUPER_NERD_TERU: Trainer = {
  id: 'super-nerd-teru',
  type: TRAINER_TYPES.SUPER_NERD,
  name: 'Teru',
  pokemon: [
    {
      species: POKEMON_SPECIES.MAGNEMITE,
      level: 7,
    },
    {
      species: POKEMON_SPECIES.VOLTORB,
      level: 11,
    },
    {
      species: POKEMON_SPECIES.MAGNEMITE,
      level: 7,
    },
    {
      species: POKEMON_SPECIES.MAGNEMITE,
      level: 9,
    },
  ],
}
const SUPER_NERD_TOM: Trainer = {
  id: 'super-nerd-tom',
  type: TRAINER_TYPES.SUPER_NERD,
  name: 'Tom',
  pokemon: [
    {
      species: POKEMON_SPECIES.MAGNEMITE,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.MAGNEMITE,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.MAGNEMITE,
      level: 32,
    },
  ],
}

// swimmer
const SWIMMER_BERKE: Trainer = {
  id: 'swimmer-berke',
  type: TRAINER_TYPES.SWIMMER,
  name: 'Berke',
  pokemon: [
    {
      species: POKEMON_SPECIES.QWILFISH,
      level: 23,
    },
  ],
}
const SWIMMER_BRIANA: Trainer = {
  id: 'swimmer-briana',
  type: TRAINER_TYPES.SWIMMER,
  name: 'Briana',
  pokemon: [
    {
      species: POKEMON_SPECIES.SEAKING,
      level: 35,
    },
    {
      species: POKEMON_SPECIES.SEAKING,
      level: 35,
    },
  ],
}
const SWIMMER_CAMERON: Trainer = {
  id: 'swimmer-cameron',
  type: TRAINER_TYPES.SWIMMER,
  name: 'Cameron',
  pokemon: [
    {
      species: POKEMON_SPECIES.AZUMARILL,
      level: 34,
    },
  ],
}
const SWIMMER_CHARLIE: Trainer = {
  id: 'swimmer-charlie',
  type: TRAINER_TYPES.SWIMMER,
  name: 'Charlie',
  pokemon: [
    {
      species: POKEMON_SPECIES.SHELLDER,
      level: 21,
    },
    {
      species: POKEMON_SPECIES.TENTACOOL,
      level: 19,
    },
    {
      species: POKEMON_SPECIES.TENTACRUEL,
      level: 19,
    },
  ],
}
const SWIMMER_DAWN: Trainer = {
  id: 'swimmer-dawn',
  type: TRAINER_TYPES.SWIMMER,
  name: 'Dawn',
  pokemon: [
    {
      species: POKEMON_SPECIES.SEAKING,
      level: 34,
    },
  ],
}
const SWIMMER_DENISE: Trainer = {
  id: 'swimmer-denise',
  type: TRAINER_TYPES.SWIMMER,
  name: 'Denise',
  pokemon: [
    {
      species: POKEMON_SPECIES.SEEL,
      level: 22,
    },
  ],
}
const SWIMMER_DIANA: Trainer = {
  id: 'swimmer-diana',
  type: TRAINER_TYPES.SWIMMER,
  name: 'Diana',
  pokemon: [
    {
      species: POKEMON_SPECIES.GOLDUCK,
      level: 37,
    },
  ],
}
const SWIMMER_ELAINE: Trainer = {
  id: 'swimmer-elaine',
  type: TRAINER_TYPES.SWIMMER,
  name: 'Elaine',
  pokemon: [
    {
      species: POKEMON_SPECIES.STARYU,
      level: 21,
    },
  ],
}
const SWIMMER_GEORGE: Trainer = {
  id: 'swimmer-george',
  type: TRAINER_TYPES.SWIMMER,
  name: 'George',
  pokemon: [
    {
      species: POKEMON_SPECIES.TENTACOOL,
      level: 16,
    },
    {
      species: POKEMON_SPECIES.TENTACOOL,
      level: 16,
    },
    {
      species: POKEMON_SPECIES.TENTACOOL,
      level: 17,
    },
    {
      species: POKEMON_SPECIES.TENTACOOL,
      level: 17,
    },
    {
      species: POKEMON_SPECIES.REMORAID,
      level: 19,
    },
    {
      species: POKEMON_SPECIES.STARYU,
      level: 19,
    },
  ],
}
const SWIMMER_HAROLD: Trainer = {
  id: 'swimmer-harold',
  type: TRAINER_TYPES.SWIMMER,
  name: 'Harold',
  pokemon: [
    {
      species: POKEMON_SPECIES.REMORAID,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.SEADRA,
      level: 30,
    },
  ],
}
const SWIMMER_JEROME: Trainer = {
  id: 'swimmer-jerome',
  type: TRAINER_TYPES.SWIMMER,
  name: 'Jerome',
  pokemon: [
    {
      species: POKEMON_SPECIES.SEADRA,
      level: 26,
    },
    {
      species: POKEMON_SPECIES.TENTACOOL,
      level: 28,
    },
    {
      species: POKEMON_SPECIES.TENTACRUEL,
      level: 30,
    },
    {
      species: POKEMON_SPECIES.GOLDEEN,
      level: 28,
    },
  ],
}
const SWIMMER_KARA: Trainer = {
  id: 'swimmer-kara',
  type: TRAINER_TYPES.SWIMMER,
  name: 'Kara',
  pokemon: [
    {
      species: POKEMON_SPECIES.STARYU,
      level: 20,
    },
    {
      species: POKEMON_SPECIES.STARMIE,
      level: 20,
    },
  ],
}
const SWIMMER_KAYLEE: Trainer = {
  id: 'swimmer-kaylee',
  type: TRAINER_TYPES.SWIMMER,
  name: 'Kaylee',
  pokemon: [
    {
      species: POKEMON_SPECIES.GOLDEEN,
      level: 18,
    },
    {
      species: POKEMON_SPECIES.GOLDEEN,
      level: 20,
    },
    {
      species: POKEMON_SPECIES.SEAKING,
      level: 20,
    },
  ],
}
const SWIMMER_KIRK: Trainer = {
  id: 'swimmer-kirk',
  type: TRAINER_TYPES.SWIMMER,
  name: 'Kirk',
  pokemon: [
    {
      species: POKEMON_SPECIES.GYARADOS,
      level: 20,
    },
    {
      species: POKEMON_SPECIES.GYARADOS,
      level: 20,
    },
  ],
}
const SWIMMER_LORI: Trainer = {
  id: 'swimmer-lori',
  type: TRAINER_TYPES.SWIMMER,
  name: 'Lori',
  pokemon: [
    {
      species: POKEMON_SPECIES.STARMIE,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.STARMIE,
      level: 32,
    },
  ],
}
const SWIMMER_MATHEW: Trainer = {
  id: 'swimmer-mathew',
  type: TRAINER_TYPES.SWIMMER,
  name: 'Mathew',
  pokemon: [
    {
      species: POKEMON_SPECIES.KRABBY,
      level: 23,
    },
  ],
}
const SWIMMER_NICOLE: Trainer = {
  id: 'swimmer-nicole',
  type: TRAINER_TYPES.SWIMMER,
  name: 'Nicole',
  pokemon: [
    {
      species: POKEMON_SPECIES.MARILL,
      level: 29,
    },
    {
      species: POKEMON_SPECIES.MARILL,
      level: 29,
    },
    {
      species: POKEMON_SPECIES.LAPRAS,
      level: 32,
    },
  ],
}
const SWIMMER_NIKKI: Trainer = {
  id: 'swimmer-nikki',
  type: TRAINER_TYPES.SWIMMER,
  name: 'Nikki',
  pokemon: [
    {
      species: POKEMON_SPECIES.SEEL,
      level: 28,
    },
    {
      species: POKEMON_SPECIES.SEEL,
      level: 28,
    },
    {
      species: POKEMON_SPECIES.SEEL,
      level: 28,
    },
    {
      species: POKEMON_SPECIES.DEWGONG,
      level: 28,
    },
  ],
}
const SWIMMER_PARKER: Trainer = {
  id: 'swimmer-parker',
  type: TRAINER_TYPES.SWIMMER,
  name: 'Parker',
  pokemon: [
    {
      species: POKEMON_SPECIES.HORSEA,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.HORSEA,
      level: 32,
    },
    {
      species: POKEMON_SPECIES.SEADRA,
      level: 35,
    },
  ],
}
const SWIMMER_PAULA: Trainer = {
  id: 'swimmer-paula',
  type: TRAINER_TYPES.SWIMMER,
  name: 'Paula',
  pokemon: [
    {
      species: POKEMON_SPECIES.STARYU,
      level: 19,
    },
    {
      species: POKEMON_SPECIES.SHELLDER,
      level: 19,
    },
  ],
}
const SWIMMER_RANDALL: Trainer = {
  id: 'swimmer-randall',
  type: TRAINER_TYPES.SWIMMER,
  name: 'Randall',
  pokemon: [
    {
      species: POKEMON_SPECIES.SHELLDER,
      level: 18,
    },
    {
      species: POKEMON_SPECIES.SHELLDER,
      level: 18,
    },
    {
      species: POKEMON_SPECIES.WARTORTLE,
      level: 20,
    },
  ],
}
const SWIMMER_SETH: Trainer = {
  id: 'swimmer-seth',
  type: TRAINER_TYPES.SWIMMER,
  name: 'Seth',
  pokemon: [
    {
      species: POKEMON_SPECIES.QUAGSIRE,
      level: 29,
    },
    {
      species: POKEMON_SPECIES.OCTILLERY,
      level: 29,
    },
    {
      species: POKEMON_SPECIES.QUAGSIRE,
      level: 32,
    },
  ],
}
const SWIMMER_SIMON: Trainer = {
  id: 'swimmer-simon',
  type: TRAINER_TYPES.SWIMMER,
  name: 'Simon',
  pokemon: [
    {
      species: POKEMON_SPECIES.TENTACOOL,
      level: 20,
    },
    {
      species: POKEMON_SPECIES.TENTACOOL,
      level: 20,
    },
  ],
}
const SWIMMER_SUSIE: Trainer = {
  id: 'swimmer-susie',
  type: TRAINER_TYPES.SWIMMER,
  name: 'Susie',
  pokemon: [
    {
      species: POKEMON_SPECIES.PSYDUCK,
      level: 20,
    },
    {
      species: POKEMON_SPECIES.GOLDEEN,
      level: 22,
    },
  ],
}
const SWIMMER_TUCKER: Trainer = {
  id: 'swimmer-tucker',
  type: TRAINER_TYPES.SWIMMER,
  name: 'Tucker',
  pokemon: [
    {
      species: POKEMON_SPECIES.SHELLDER,
      level: 30,
    },
    {
      species: POKEMON_SPECIES.CLOYSTER,
      level: 34,
    },
  ],
}
const SWIMMER_WENDY: Trainer = {
  id: 'swimmer-wendy',
  type: TRAINER_TYPES.SWIMMER,
  name: 'Wendy',
  pokemon: [
    {
      species: POKEMON_SPECIES.HORSEA,
      level: 21,
    },
    {
      species: POKEMON_SPECIES.HORSEA,
      level: 21,
    },
  ],
}

// youngster
const YOUNGSTER_ALBERT: Trainer = {
  id: 'youngster-albert',
  type: TRAINER_TYPES.YOUNGSTER,
  name: 'Albert',
  pokemon: [
    {
      species: POKEMON_SPECIES.RATTATA,
      level: 6,
    },
    {
      species: POKEMON_SPECIES.ZUBAT,
      level: 8,
    },
  ],
}
const YOUNGSTER_GORDON: Trainer = {
  id: 'youngster-gordon',
  type: TRAINER_TYPES.YOUNGSTER,
  name: 'Gordon',
  pokemon: [
    {
      species: POKEMON_SPECIES.WOOPER,
      level: 10,
    },
  ],
}
const YOUNGSTER_IAN: Trainer = {
  id: 'youngster-ian',
  type: TRAINER_TYPES.YOUNGSTER,
  name: 'Ian',
  pokemon: [
    {
      species: POKEMON_SPECIES.MANKEY,
      level: 10,
    },
    {
      species: POKEMON_SPECIES.DIGLETT,
      level: 12,
    },
  ],
}
const YOUNGSTER_JASON: Trainer = {
  id: 'youngster-jason',
  type: TRAINER_TYPES.YOUNGSTER,
  name: 'Jason',
  pokemon: [
    {
      species: POKEMON_SPECIES.SANDSLASH,
      level: 33,
    },
    {
      species: POKEMON_SPECIES.CROBAT,
      level: 33,
    },
  ],
}
const YOUNGSTER_JIMMY: Trainer = {
  id: 'youngster-jimmy',
  type: TRAINER_TYPES.YOUNGSTER,
  name: 'Jimmy',
  pokemon: [
    {
      species: POKEMON_SPECIES.RATICATE,
      level: 33,
    },
    {
      species: POKEMON_SPECIES.ARBOK,
      level: 33,
    },
  ],
}
const YOUNGSTER_JOEY: Trainer = {
  id: 'youngster-joey',
  type: TRAINER_TYPES.YOUNGSTER,
  name: 'Joey',
  pokemon: [
    {
      species: POKEMON_SPECIES.RATTATA,
      level: 4,
    },
  ],
}
const YOUNGSTER_MIKEY: Trainer = {
  id: 'youngster-mikey',
  type: TRAINER_TYPES.YOUNGSTER,
  name: 'Mikey',
  pokemon: [
    {
      species: POKEMON_SPECIES.PIDGEY,
      level: 2,
    },
    {
      species: POKEMON_SPECIES.RATTATA,
      level: 4,
    },
  ],
}
const YOUNGSTER_OWEN: Trainer = {
  id: 'youngster-owen',
  type: TRAINER_TYPES.YOUNGSTER,
  name: 'Owen',
  pokemon: [
    {
      species: POKEMON_SPECIES.GROWLITHE,
      level: 35,
    },
  ],
}
const YOUNGSTER_SAMUEL: Trainer = {
  id: 'youngster-samuel',
  type: TRAINER_TYPES.YOUNGSTER,
  name: 'Samuel',
  pokemon: [
    {
      species: POKEMON_SPECIES.RATTATA,
      level: 7,
    },
    {
      species: POKEMON_SPECIES.SANDSHREW,
      level: 10,
    },
    {
      species: POKEMON_SPECIES.SPEAROW,
      level: 8,
    },
    {
      species: POKEMON_SPECIES.SPEAROW,
      level: 8,
    },
  ],
}
const YOUNGSTER_WARREN: Trainer = {
  id: 'youngster-warren',
  type: TRAINER_TYPES.YOUNGSTER,
  name: 'Warren',
  pokemon: [
    {
      species: POKEMON_SPECIES.FEAROW,
      level: 35,
    },
  ],
}

const data: Trainer[] = [
  BEAUTY_CASSIE,
  BEAUTY_JULIA,
  BEAUTY_OLIVIA,
  BEAUTY_SAMANTHA,
  BEAUTY_VALERIE,
  BEAUTY_VICTORIA,
  BIKER_CHARLES,
  BIKER_DWAYNE,
  BIKER_GLENN,
  BIKER_HARRIS,
  BIKER_JOEL,
  BIKER_RILEY,
  BIKER_ZEKE,
  BIRD_KEEPER_ABE,
  BIRD_KEEPER_BOB,
  BIRD_KEEPER_BORIS,
  BIRD_KEEPER_BRET,
  BIRD_KEEPER_BRYAN,
  BIRD_KEEPER_DENIS,
  BIRD_KEEPER_JOSE,
  BIRD_KEEPER_HANK,
  BIRD_KEEPER_PERRY,
  BIRD_KEEPER_PETER,
  BIRD_KEEPER_ROD,
  BIRD_KEEPER_ROY,
  BIRD_KEEPER_THEO,
  BIRD_KEEPER_TOBY,
  BIRD_KEEPER_VANCE,
  BLACK_BELT_KENJI,
  BLACK_BELT_KIYO,
  BLACK_BELT_LAO,
  BLACK_BELT_LUNG,
  BLACK_BELT_NOB,
  BLACK_BELT_WAI,
  BLACK_BELT_YOSHI,
  BOARDER_BRAD,
  BOARDER_DOUGLAS,
  BOARDER_RONALD,
  BUG_CATCHER_AL,
  BUG_CATCHER_ARNIE,
  BUG_CATCHER_BENNY,
  BUG_CATCHER_DON,
  BUG_CATCHER_DOUG,
  BUG_CATCHER_ED,
  BUG_CATCHER_JOSH,
  BUG_CATCHER_KEN,
  BUG_CATCHER_ROB,
  BUG_CATCHER_WADE,
  BUG_CATCHER_WAYNE,
  BURGLAR_CORAY,
  BURGLAR_DUNCAN,
  BURGLAR_EDDIE,
  ACE_TRAINER_AARON,
  ACE_TRAINER_ALLEN,
  ACE_TRAINER_BETH,
  ACE_TRAINER_BLAKE,
  ACE_TRAINER_BRIAN,
  ACE_TRAINER_CARA,
  ACE_TRAINER_CAROL,
  ACE_TRAINER_CODY,
  ACE_TRAINER_CYBIL,
  ACE_TRAINER_DARIN,
  ACE_TRAINER_EMMA,
  ACE_TRAINER_FRAN,
  ACE_TRAINER_GAVEN,
  ACE_TRAINER_GWEN,
  ACE_TRAINER_IRENE,
  ACE_TRAINER_JAKE,
  ACE_TRAINER_JENN,
  ACE_TRAINER_JOYCE,
  ACE_TRAINER_KATE,
  ACE_TRAINER_KELLY,
  ACE_TRAINER_KEVIN,
  ACE_TRAINER_LOIS,
  ACE_TRAINER_LOLA,
  ACE_TRAINER_MEGAN,
  ACE_TRAINER_MIKE,
  ACE_TRAINER_NICK,
  ACE_TRAINER_PAUL,
  ACE_TRAINER_QUINN,
  ACE_TRAINER_REENA,
  ACE_TRAINER_RYAN,
  ACE_TRAINER_SEAN,
  FIREBREATHER_BILL,
  FIREBREATHER_BURT,
  FIREBREATHER_LYLE,
  FIREBREATHER_OTIS,
  FIREBREATHER_RAY,
  FIREBREATHER_WALT,
  FISHER_ANDRE,
  FISHER_ARNOLD,
  FISHER_BARNEY,
  FISHER_EDGAR,
  FISHER_HENRY,
  FISHER_JONAH,
  FISHER_JUSTIN,
  FISHER_KYLE,
  FISHER_MARTIN,
  FISHER_MARVIN,
  FISHER_RALPH,
  FISHER_RAYMOND,
  FISHER_SCOTT,
  FISHER_STEPHEN,
  FISHER_TULLY,
  FISHER_WILTON,
  GENTLEMAN_ALFRED,
  GENTLEMAN_EDWARD,
  GENTLEMAN_GREGORY,
  GENTLEMAN_PRESTON,
  GUITARIST_CLYDE,
  GUITARIST_VINCENT,
  HIKER_ANTHONY,
  HIKER_BAILEY,
  HIKER_BENJAMIN,
  HIKER_DANIEL,
  HIKER_ERIK,
  HIKER_JIM,
  HIKER_KENNY,
  HIKER_LEONARD,
  HIKER_MICHAEL,
  HIKER_PARRY,
  HIKER_PHILLIP,
  HIKER_RUSSELL,
  HIKER_SIDNEY,
  HIKER_TIM,
  HIKER_TIMOTHY,
  CAMPER_BARRY,
  CAMPER_DEAN,
  CAMPER_ELLIOT,
  CAMPER_IVAN,
  CAMPER_JERRY,
  CAMPER_LLOYD,
  CAMPER_QUENTIN,
  CAMPER_ROLAND,
  CAMPER_SID,
  CAMPER_SPENCER,
  CAMPER_TED,
  CAMPER_TODD,
  PICNICKER_BROOKE,
  PICNICKER_CINDY,
  PICNICKER_DEBRA,
  PICNICKER_EDNA,
  PICNICKER_ERIN,
  PICNICKER_GINA,
  PICNICKER_HEIDI,
  PICNICKER_HOPE,
  PICNICKER_KIM,
  PICNICKER_LIZ,
  PICNICKER_SHARON,
  PICNICKER_TANYA,
  PICNICKER_TIFFANY,
  KIMONO_GIRL_KUNI,
  KIMONO_GIRL_MIKI,
  KIMONO_GIRL_NAOKO,
  KIMONO_GIRL_SAYO,
  KIMONO_GIRL_ZUKI,
  JUGGLER_FRITZ,
  JUGGLER_HORTON,
  JUGGLER_IRWIN,
  LASS_ALICE,
  LASS_BRIDGET,
  LASS_CARRIE,
  LASS_CONNIE,
  LASS_DANA,
  LASS_ELLEN,
  LASS_KRISE,
  LASS_LAURA,
  LASS_LINDA,
  LASS_MICHELLE,
  LASS_SHANNON,
  MEDIUM_DORIS,
  MEDIUM_GRACE,
  MEDIUM_MARTHA,
  MEDIUM_REBECCA,
  MYSTICALMAN_EUSIN,
  OFFICER_DIRK,
  OFFICER_KEITH,
  POKE_FAN_ALEX,
  POKE_FAN_ALLAN,
  POKE_FAN_BEVERLY,
  POKE_FAN_BRANDON,
  POKE_FAN_CARTER,
  POKE_FAN_COLIN,
  POKE_FAN_DEREK,
  POKE_FAN_GEORGIA,
  POKE_FAN_JAIME,
  POKE_FAN_JEREMY,
  POKE_FAN_JOSHUA,
  POKE_FAN_REX,
  POKE_FAN_ROBERT,
  POKE_FAN_RUTH,
  POKE_FAN_TREVOR,
  POKE_FAN_WILLIAM,
  POKE_MANIAC_ANDREW,
  POKE_MANIAC_BEN,
  POKE_MANIAC_BRENT,
  POKE_MANIAC_CALVIN,
  POKE_MANIAC_DONALD,
  POKE_MANIAC_ISAAC,
  POKE_MANIAC_LARRY,
  POKE_MANIAC_MILLER,
  POKE_MANIAC_RON,
  POKE_MANIAC_SHANE,
  POKE_MANIAC_ZACH,
  PSYCHIC_FIDEL,
  PSYCHIC_FRANKLIN,
  PSYCHIC_GILBERT,
  PSYCHIC_GREG,
  PSYCHIC_HERMAN,
  PSYCHIC_JARED,
  PSYCHIC_MARK,
  PSYCHIC_NATHAN,
  PSYCHIC_NORMAN,
  PSYCHIC_PHIL,
  PSYCHIC_RICHARD,
  PSYCHIC_RODNEY,
  ROCKET_EXECUTIVE_1,
  ROCKET_EXECUTIVE_2,
  ROCKET_EXECUTIVE_3,
  ROCKET_EXECUTIVE_4,
  SAGE_CHOW,
  SAGE_EDMOND,
  SAGE_GAKU,
  SAGE_JEFFREY,
  SAGE_JIN,
  SAGE_KOJI,
  SAGE_LI,
  SAGE_MASA,
  SAGE_NEAL,
  SAGE_NICO,
  SAGE_PING,
  SAGE_TROY,
  SCHOOLBOY_ALAN,
  SCHOOLBOY_BILLY,
  SCHOOLBOY_CHAD,
  SCHOOLBOY_DANNY,
  SCHOOLBOY_DUDLEY,
  SCHOOLBOY_JACK,
  SCHOOLBOY_JOE,
  SCHOOLBOY_JOHNNY,
  SCHOOLBOY_KIPP,
  SCHOOLBOY_NATE,
  SCHOOLBOY_RICKY,
  SCHOOLBOY_TOMMY,
  SKIER_CLARISSA,
  SKIER_ROXANNE,
  TEACHER_COLETTE,
  TEACHER_HILLARY,
  TEACHER_SHIRLEY,
  TEAM_ROCKET_GRUNT_1,
  TEAM_ROCKET_GRUNT_2,
  TEAM_ROCKET_GRUNT_3,
  TEAM_ROCKET_GRUNT_4,
  TEAM_ROCKET_GRUNT_5,
  TEAM_ROCKET_GRUNT_6,
  TEAM_ROCKET_GRUNT_7,
  TEAM_ROCKET_GRUNT_8,
  TEAM_ROCKET_GRUNT_9,
  TEAM_ROCKET_GRUNT_10,
  TEAM_ROCKET_GRUNT_11,
  TEAM_ROCKET_GRUNT_12,
  TEAM_ROCKET_GRUNT_13,
  TEAM_ROCKET_GRUNT_14,
  TEAM_ROCKET_GRUNT_15,
  TEAM_ROCKET_GRUNT_16,
  TEAM_ROCKET_GRUNT_17,
  TEAM_ROCKET_GRUNT_18,
  TEAM_ROCKET_GRUNT_19,
  TEAM_ROCKET_GRUNT_20,
  TEAM_ROCKET_GRUNT_21,
  TEAM_ROCKET_GRUNT_22,
  TEAM_ROCKET_GRUNT_23,
  TEAM_ROCKET_GRUNT_24,
  TEAM_ROCKET_GRUNT_25,
  TEAM_ROCKET_GRUNT_26,
  TEAM_ROCKET_GRUNT_27,
  TEAM_ROCKET_GRUNT_28,
  TEAM_ROCKET_GRUNT_29,
  TEAM_ROCKET_GRUNT_30,
  TWINS_AMY_AND_MAY,
  TWINS_JO_AND_ZOE,
  TWINS_MEG_AND_PEG,
  TWINS_ANN_AND_ANNE,
  TWINS_LEA_AND_PIA,
  SAILOR_ERNEST,
  SAILOR_EUGENE,
  SAILOR_GARRETT,
  SAILOR_HARRY,
  SAILOR_HUEY,
  SAILOR_JEFF,
  SAILOR_KENNETH,
  SAILOR_KENT,
  SAILOR_STANLY,
  SAILOR_TERRELL,
  SCIENTIST_JED,
  SCIENTIST_MARC,
  SCIENTIST_MITCH,
  SCIENTIST_RICH,
  SCIENTIST_ROSS,
  SUPER_NERD_ERIC,
  SUPER_NERD_HUGH,
  SUPER_NERD_MARKUS,
  SUPER_NERD_PAT,
  SUPER_NERD_SAM,
  SUPER_NERD_SHAWN,
  SUPER_NERD_TERU,
  SUPER_NERD_TOM,
  SWIMMER_BERKE,
  SWIMMER_BRIANA,
  SWIMMER_CAMERON,
  SWIMMER_CHARLIE,
  SWIMMER_DAWN,
  SWIMMER_DENISE,
  SWIMMER_DIANA,
  SWIMMER_ELAINE,
  SWIMMER_GEORGE,
  SWIMMER_HAROLD,
  SWIMMER_JEROME,
  SWIMMER_KARA,
  SWIMMER_KAYLEE,
  SWIMMER_KIRK,
  SWIMMER_LORI,
  SWIMMER_MATHEW,
  SWIMMER_NICOLE,
  SWIMMER_NIKKI,
  SWIMMER_PARKER,
  SWIMMER_PAULA,
  SWIMMER_RANDALL,
  SWIMMER_SETH,
  SWIMMER_SIMON,
  SWIMMER_SUSIE,
  SWIMMER_TUCKER,
  SWIMMER_WENDY,
  YOUNGSTER_ALBERT,
  YOUNGSTER_GORDON,
  YOUNGSTER_IAN,
  YOUNGSTER_JASON,
  YOUNGSTER_JIMMY,
  YOUNGSTER_JOEY,
  YOUNGSTER_MIKEY,
  YOUNGSTER_OWEN,
  YOUNGSTER_SAMUEL,
  YOUNGSTER_WARREN,
]

export default data

export {
  BEAUTY_CASSIE,
  BEAUTY_JULIA,
  BEAUTY_OLIVIA,
  BEAUTY_SAMANTHA,
  BEAUTY_VALERIE,
  BEAUTY_VICTORIA,
  BIKER_CHARLES,
  BIKER_DWAYNE,
  BIKER_GLENN,
  BIKER_HARRIS,
  BIKER_JOEL,
  BIKER_RILEY,
  BIKER_ZEKE,
  BIRD_KEEPER_ABE,
  BIRD_KEEPER_BOB,
  BIRD_KEEPER_BORIS,
  BIRD_KEEPER_BRET,
  BIRD_KEEPER_BRYAN,
  BIRD_KEEPER_DENIS,
  BIRD_KEEPER_JOSE,
  BIRD_KEEPER_HANK,
  BIRD_KEEPER_PERRY,
  BIRD_KEEPER_PETER,
  BIRD_KEEPER_ROD,
  BIRD_KEEPER_ROY,
  BIRD_KEEPER_THEO,
  BIRD_KEEPER_TOBY,
  BIRD_KEEPER_VANCE,
  BLACK_BELT_KENJI,
  BLACK_BELT_KIYO,
  BLACK_BELT_LAO,
  BLACK_BELT_LUNG,
  BLACK_BELT_NOB,
  BLACK_BELT_WAI,
  BLACK_BELT_YOSHI,
  BOARDER_BRAD,
  BOARDER_DOUGLAS,
  BOARDER_RONALD,
  BUG_CATCHER_AL,
  BUG_CATCHER_ARNIE,
  BUG_CATCHER_BENNY,
  BUG_CATCHER_DON,
  BUG_CATCHER_DOUG,
  BUG_CATCHER_ED,
  BUG_CATCHER_JOSH,
  BUG_CATCHER_KEN,
  BUG_CATCHER_ROB,
  BUG_CATCHER_WADE,
  BUG_CATCHER_WAYNE,
  BURGLAR_CORAY,
  BURGLAR_DUNCAN,
  BURGLAR_EDDIE,
  ACE_TRAINER_AARON,
  ACE_TRAINER_ALLEN,
  ACE_TRAINER_BETH,
  ACE_TRAINER_BLAKE,
  ACE_TRAINER_BRIAN,
  ACE_TRAINER_CARA,
  ACE_TRAINER_CAROL,
  ACE_TRAINER_CODY,
  ACE_TRAINER_CYBIL,
  ACE_TRAINER_DARIN,
  ACE_TRAINER_EMMA,
  ACE_TRAINER_FRAN,
  ACE_TRAINER_GAVEN,
  ACE_TRAINER_GWEN,
  ACE_TRAINER_IRENE,
  ACE_TRAINER_JAKE,
  ACE_TRAINER_JENN,
  ACE_TRAINER_JOYCE,
  ACE_TRAINER_KATE,
  ACE_TRAINER_KELLY,
  ACE_TRAINER_KEVIN,
  ACE_TRAINER_LOIS,
  ACE_TRAINER_LOLA,
  ACE_TRAINER_MEGAN,
  ACE_TRAINER_MIKE,
  ACE_TRAINER_NICK,
  ACE_TRAINER_PAUL,
  ACE_TRAINER_QUINN,
  ACE_TRAINER_REENA,
  ACE_TRAINER_RYAN,
  ACE_TRAINER_SEAN,
  FIREBREATHER_BILL,
  FIREBREATHER_BURT,
  FIREBREATHER_LYLE,
  FIREBREATHER_OTIS,
  FIREBREATHER_RAY,
  FIREBREATHER_WALT,
  FISHER_ANDRE,
  FISHER_ARNOLD,
  FISHER_BARNEY,
  FISHER_EDGAR,
  FISHER_HENRY,
  FISHER_JONAH,
  FISHER_JUSTIN,
  FISHER_KYLE,
  FISHER_MARTIN,
  FISHER_MARVIN,
  FISHER_RALPH,
  FISHER_RAYMOND,
  FISHER_SCOTT,
  FISHER_STEPHEN,
  FISHER_TULLY,
  FISHER_WILTON,
  GENTLEMAN_ALFRED,
  GENTLEMAN_EDWARD,
  GENTLEMAN_GREGORY,
  GENTLEMAN_PRESTON,
  GUITARIST_CLYDE,
  GUITARIST_VINCENT,
  HIKER_ANTHONY,
  HIKER_BAILEY,
  HIKER_BENJAMIN,
  HIKER_DANIEL,
  HIKER_ERIK,
  HIKER_JIM,
  HIKER_KENNY,
  HIKER_LEONARD,
  HIKER_MICHAEL,
  HIKER_PARRY,
  HIKER_PHILLIP,
  HIKER_RUSSELL,
  HIKER_SIDNEY,
  HIKER_TIM,
  HIKER_TIMOTHY,
  CAMPER_BARRY,
  CAMPER_DEAN,
  CAMPER_ELLIOT,
  CAMPER_IVAN,
  CAMPER_JERRY,
  CAMPER_LLOYD,
  CAMPER_QUENTIN,
  CAMPER_ROLAND,
  CAMPER_SID,
  CAMPER_SPENCER,
  CAMPER_TED,
  CAMPER_TODD,
  PICNICKER_BROOKE,
  PICNICKER_CINDY,
  PICNICKER_DEBRA,
  PICNICKER_EDNA,
  PICNICKER_ERIN,
  PICNICKER_GINA,
  PICNICKER_HEIDI,
  PICNICKER_HOPE,
  PICNICKER_KIM,
  PICNICKER_LIZ,
  PICNICKER_SHARON,
  PICNICKER_TANYA,
  PICNICKER_TIFFANY,
  KIMONO_GIRL_KUNI,
  KIMONO_GIRL_MIKI,
  KIMONO_GIRL_NAOKO,
  KIMONO_GIRL_SAYO,
  KIMONO_GIRL_ZUKI,
  JUGGLER_FRITZ,
  JUGGLER_HORTON,
  JUGGLER_IRWIN,
  LASS_ALICE,
  LASS_BRIDGET,
  LASS_CARRIE,
  LASS_CONNIE,
  LASS_DANA,
  LASS_ELLEN,
  LASS_KRISE,
  LASS_LAURA,
  LASS_LINDA,
  LASS_MICHELLE,
  LASS_SHANNON,
  MEDIUM_DORIS,
  MEDIUM_GRACE,
  MEDIUM_MARTHA,
  MEDIUM_REBECCA,
  MYSTICALMAN_EUSIN,
  OFFICER_DIRK,
  OFFICER_KEITH,
  POKE_FAN_ALEX,
  POKE_FAN_ALLAN,
  POKE_FAN_BEVERLY,
  POKE_FAN_BRANDON,
  POKE_FAN_CARTER,
  POKE_FAN_COLIN,
  POKE_FAN_DEREK,
  POKE_FAN_GEORGIA,
  POKE_FAN_JAIME,
  POKE_FAN_JEREMY,
  POKE_FAN_JOSHUA,
  POKE_FAN_REX,
  POKE_FAN_ROBERT,
  POKE_FAN_RUTH,
  POKE_FAN_TREVOR,
  POKE_FAN_WILLIAM,
  POKE_MANIAC_ANDREW,
  POKE_MANIAC_BEN,
  POKE_MANIAC_BRENT,
  POKE_MANIAC_CALVIN,
  POKE_MANIAC_DONALD,
  POKE_MANIAC_ISAAC,
  POKE_MANIAC_LARRY,
  POKE_MANIAC_MILLER,
  POKE_MANIAC_RON,
  POKE_MANIAC_SHANE,
  POKE_MANIAC_ZACH,
  PSYCHIC_FIDEL,
  PSYCHIC_FRANKLIN,
  PSYCHIC_GILBERT,
  PSYCHIC_GREG,
  PSYCHIC_HERMAN,
  PSYCHIC_JARED,
  PSYCHIC_MARK,
  PSYCHIC_NATHAN,
  PSYCHIC_NORMAN,
  PSYCHIC_PHIL,
  PSYCHIC_RICHARD,
  PSYCHIC_RODNEY,
  ROCKET_EXECUTIVE_1,
  ROCKET_EXECUTIVE_2,
  ROCKET_EXECUTIVE_3,
  ROCKET_EXECUTIVE_4,
  SAGE_CHOW,
  SAGE_EDMOND,
  SAGE_GAKU,
  SAGE_JEFFREY,
  SAGE_JIN,
  SAGE_KOJI,
  SAGE_LI,
  SAGE_MASA,
  SAGE_NEAL,
  SAGE_NICO,
  SAGE_PING,
  SAGE_TROY,
  SCHOOLBOY_ALAN,
  SCHOOLBOY_BILLY,
  SCHOOLBOY_CHAD,
  SCHOOLBOY_DANNY,
  SCHOOLBOY_DUDLEY,
  SCHOOLBOY_JACK,
  SCHOOLBOY_JOE,
  SCHOOLBOY_JOHNNY,
  SCHOOLBOY_KIPP,
  SCHOOLBOY_NATE,
  SCHOOLBOY_RICKY,
  SCHOOLBOY_TOMMY,
  SKIER_CLARISSA,
  SKIER_ROXANNE,
  TEACHER_COLETTE,
  TEACHER_HILLARY,
  TEACHER_SHIRLEY,
  TEAM_ROCKET_GRUNT_1,
  TEAM_ROCKET_GRUNT_2,
  TEAM_ROCKET_GRUNT_3,
  TEAM_ROCKET_GRUNT_4,
  TEAM_ROCKET_GRUNT_5,
  TEAM_ROCKET_GRUNT_6,
  TEAM_ROCKET_GRUNT_7,
  TEAM_ROCKET_GRUNT_8,
  TEAM_ROCKET_GRUNT_9,
  TEAM_ROCKET_GRUNT_10,
  TEAM_ROCKET_GRUNT_11,
  TEAM_ROCKET_GRUNT_12,
  TEAM_ROCKET_GRUNT_13,
  TEAM_ROCKET_GRUNT_14,
  TEAM_ROCKET_GRUNT_15,
  TEAM_ROCKET_GRUNT_16,
  TEAM_ROCKET_GRUNT_17,
  TEAM_ROCKET_GRUNT_18,
  TEAM_ROCKET_GRUNT_19,
  TEAM_ROCKET_GRUNT_20,
  TEAM_ROCKET_GRUNT_21,
  TEAM_ROCKET_GRUNT_22,
  TEAM_ROCKET_GRUNT_23,
  TEAM_ROCKET_GRUNT_24,
  TEAM_ROCKET_GRUNT_25,
  TEAM_ROCKET_GRUNT_26,
  TEAM_ROCKET_GRUNT_27,
  TEAM_ROCKET_GRUNT_28,
  TEAM_ROCKET_GRUNT_29,
  TEAM_ROCKET_GRUNT_30,
  TWINS_AMY_AND_MAY,
  TWINS_JO_AND_ZOE,
  TWINS_MEG_AND_PEG,
  TWINS_ANN_AND_ANNE,
  TWINS_LEA_AND_PIA,
  SAILOR_ERNEST,
  SAILOR_EUGENE,
  SAILOR_GARRETT,
  SAILOR_HARRY,
  SAILOR_HUEY,
  SAILOR_JEFF,
  SAILOR_KENNETH,
  SAILOR_KENT,
  SAILOR_STANLY,
  SAILOR_TERRELL,
  SCIENTIST_JED,
  SCIENTIST_MARC,
  SCIENTIST_MITCH,
  SCIENTIST_RICH,
  SCIENTIST_ROSS,
  SUPER_NERD_ERIC,
  SUPER_NERD_HUGH,
  SUPER_NERD_MARKUS,
  SUPER_NERD_PAT,
  SUPER_NERD_SAM,
  SUPER_NERD_SHAWN,
  SUPER_NERD_TERU,
  SUPER_NERD_TOM,
  SWIMMER_BERKE,
  SWIMMER_BRIANA,
  SWIMMER_CAMERON,
  SWIMMER_CHARLIE,
  SWIMMER_DAWN,
  SWIMMER_DENISE,
  SWIMMER_DIANA,
  SWIMMER_ELAINE,
  SWIMMER_GEORGE,
  SWIMMER_HAROLD,
  SWIMMER_JEROME,
  SWIMMER_KARA,
  SWIMMER_KAYLEE,
  SWIMMER_KIRK,
  SWIMMER_LORI,
  SWIMMER_MATHEW,
  SWIMMER_NICOLE,
  SWIMMER_NIKKI,
  SWIMMER_PARKER,
  SWIMMER_PAULA,
  SWIMMER_RANDALL,
  SWIMMER_SETH,
  SWIMMER_SIMON,
  SWIMMER_SUSIE,
  SWIMMER_TUCKER,
  SWIMMER_WENDY,
  YOUNGSTER_ALBERT,
  YOUNGSTER_GORDON,
  YOUNGSTER_IAN,
  YOUNGSTER_JASON,
  YOUNGSTER_JIMMY,
  YOUNGSTER_JOEY,
  YOUNGSTER_MIKEY,
  YOUNGSTER_OWEN,
  YOUNGSTER_SAMUEL,
  YOUNGSTER_WARREN,
}
