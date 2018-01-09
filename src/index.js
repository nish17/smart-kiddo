  'use strict';
  const Alexa = require('alexa-sdk');

  const APP_ID = 'amzn1.ask.skill.f325ef48-8396-4b23-9664-83a2a8a5018d';

  const SKILL_NAME = 'smart kiddo';
  const GET_FACT_MESSAGE = "Here's your fact: ";
  const HELP_MESSAGE = 'You can say tell me a new year fact, or, you can say exit... What can I help you with?';
  const HELP_REPROMPT = 'What can I help you with?';
  const STOP_MESSAGE = 'Goodbye!';
  const allPokemons = [
    'Chikorita',
    'Bayleef',
    'Meganium',  
    'Cyndaquil', 
    'Quilava',
    'Typhlosion',
    'Totodile',  
    'Croconaw',
    'Feraligatr',
    'Sentret',
    "Furret",
    'Hoothoot',
    'Hoothoot',
    'Noctowl',
    'Ledyba',
    'Ledian',
    'Spinarak',
    'Ariados',
    'Corbat',
    'Chinchou',
    'Lanturn',
    'Pichu',
    'Cleffa',
    'Igglybuff',
    'Togepi',
    'Natu',
    'Xatu',
    'Mareep',
    'Flaaffy',
    'Ampharos',
    'Bellossom',
    'Pachirisu',
    'Altaria',
    'Magnezone',
    'Pangoro',
    'Electrode',
    'Escavalier',
    'Rhydon',
    'Togepi',
    'Houndoom',
    'Milotic',
    'Drifloon',
    'Machamp',
    'Tyrantrum',
    'Crobat',
    'Vikavolt',
    'Talonflame',
    'Smeargle',
    'Mudkip',
    'Porygon',
    'Palossand',
    'Castform',
    'Tyranitar',
    'Tapu Koko',
    'Sableye',

  ];
  const allPokemonsWithDescription = [
    'Chikorita is a Grass type PokÈmon of generation 2 of species Leaf pokemon with abilities Overgrow and Leaf guard.',
    'Bayleef  is a Grass type PokÈmon of generation 2 of species Leaf pokemon with abilities Overgrow and Leaf guard.',
    'Meganium  is a Grass type PokÈmon of generation 2 of species Herb pokemon with abilities Overgrow and Leaf guard.',
    'Cyndaquil  is a Fire type PokÈmon of generation 2 of species Fire Mouse pokemon with abilities Blaze and Flash Fire.',
    'Quilava  is a Fire type PokÈmon of generation 2 of species Volcano pokemon with abilities Blaze and Flash Fire.',
    "Typhlosion is a Fire type PokÈmon of generation 2 of species Volcano pokemon with abilities Blaze and Flash Fire.",
    "Totodile  is a Water type PokÈmon of generation 2 of species Big Jaw pokemon with abilities Torrent and Sheer Force.",
    "Croconaw  is a Water type PokÈmon of generation 2 of species Big Jaw pokemon with abilities Torrent and Sheer Force.",
    "Feraligatr  is a Water type PokÈmon of generation 2 of species Big Jaw pokemon with abilities Torrent and Sheer Force.",
    "Sentret is a Normal type PokÈmon of generation 2 of species Scout pokemon with abilities Keen Eye, Run Away and Frisk .",
    "Furret is a Normal type PokÈmon of generation 2 of species Long Body pokemon pokemon with abilities Keen Eye, Run Away and Frisk .",
    "Hoothoot is a Normal/Flying type PokÈmon of generation 2 of species Owl pokemon with abilitiesInsomnia, Keen Eye and Tinted Lens.",
    "Noctowl is a Normal/Flying type Pokémon of generation 2 of species Owl pokemon with abilities Insomnia, Keen Eye and Tinted Lens.",
    "Ledyba is a Bug/Flying type Pokémon of generation 2 of species Five Star pokemon with abilities Early Bird, Swarm and Rattled.",
    "Ledian is a Bug/Flying type Pokémon of generation 2 of species Five Star pokemon with abilities Early Bird, Swarm and Rattled.",
    "Spinarak is a Bug/Poison type Pokémon of generation 2 of species String Spit pokemon with abilities Insomnia, Swarm and Sniper.",
    "Ariados is a Bug/Poison type Pokémon of generation 2 of species Long Leg pokemon with abilities Insomnia, Swarm and Sniper.",
    "Corbat is a Poison/Flying type Pokémon of generation 2 of species Bat pokemon with abilities Inner Focus and Infilator.",
    "Chinchou is a Water/Electric type Pokémon of generation 2 of species Anguler pokemon with abilities Illuminate, Volt Absorb and Water Absorb.",
    "Lanturn is a Water/Electric type Pokémon of generation 2 of species Light pokemon with abilities Illuminate, Volt Absorb and Water Absorb.",
    "Pichu is a Electric type Pokémon of generation 2 of species Tiny Mouse pokemon with abilities Static and Lightning Rod.",
    "Cleffa is a Fairy type Pokémon of generation 2 of species Star Shape pokemon with abilities Cute Charm, Magic Guard and Friend Guard.",
    "Igglybuff is a Normal/Fairy type Pokémon of generation 2 of species Balloon pokemon with abilities Cute Charm, Magic Guard and Friend Guard.",
    "Togepi is a Fairy type Pokémon of generation 2 of species Spike Ball pokemon with abilities Hustle, Serene Grace and Super Luck .",
    "Natu is a Psychic/Flyong type Pokémon of generation 2 of species Tiny Bird pokemon with abilities Early Bird, Synchronize and Magic Bounce.",
    "Xatu is a Psychic/Flyong type Pokémon of generation 2 of species Mystic pokemon with abilities Early Bird, Synchronize and Magic Bounce.",
    "Mareep is a Electric type Pokémon of generation 2 of species Wool pokemon with abilities Static and Plus.",
    "Flaaffy is a Electric type Pokémon of generation 2 of species Wool pokemon with abilities Static and Plus.",
    "Ampharos is a Electric type Pokémon of generation 2 of species Light pokemon with abilities Static and Plus.",
    "Bellossom is a Grass type Pokémon of generation 2 of species Flower pokemon with abilities Chlorophyll and Healer.",
    'Pachirisu is an Electric type Pokémon introduced in Generation 4. It is known as the EleSquirrel Pokémon',
    'Altaria is a Dragon/Flying type Pokémon introduced in Generation 3. It is known as the Humming Pokémon',
    'Magnezone is an Electric/Steel type Pokémon introduced in Generation 4. It is known as the Magnet Area Pokémon.',
    'Pangoro is a Fighting/Dark type Pokémon introduced in Generation 6. It is known as the Daunting Pokémon.',
    'Electrode is an Electric type Pokémon introduced in Generation 1. It is known as the Ball Pokémon',
    'Escavalier is a Bug/Steel type Pokémon introduced in Generation 5. It is known as the Cavalry Pokémon.',
    'Rhydon is a Ground/Rock type Pokémon introduced in Generation 1. It is known as the Drill Pokémon.',
    'Togepi is a Fairy type Pokémon introduced in Generation 2. It is known as the Spike Ball Pokémon',
    'Houndoom is a Dark/Fire type Pokémon introduced in Generation 2. It is known as the Dark Pokémon',
    'Milotic is a Water type Pokémon introduced in Generation 3. It is known as the Tender Pokémon',
    'Drifloon is a Ghost/Flying type Pokémon introduced in Generation 4. It is known as the Balloon Pokémon.',
    'Machamp is a Fighting type Pokémon introduced in Generation 1. It is known as the Superpower Pokémon.',
    'Tyrantrum is a Rock/Dragon type Pokémon introduced in Generation 6. It is known as the Despot Pokémon',
    'Crobat is a Poison/Flying type Pokémon introduced in Generation 2. It is known as the Bat Pokémon',
    'Vikavolt is a Bug/Electric type Pokémon introduced in Generation 7. It is known as the Stag Beetle Pokémon',
    'Talonflame is a Fire/Flying type Pokémon introduced in Generation 6. It is known as the Scorching Pokémon.',
    'Smeargle is a Normal type Pokémon introduced in Generation 2. It is known as the Painter Pokémon',
    'Mudkip is a Water type Pokémon introduced in Generation 3. It is known as the Mud Fish Pokémon',
    'Porygon is a Normal type Pokémon introduced in Generation 1. It is known as the Virtual Pokémon',
    'Palossand is a Ghost/Ground type Pokémon introduced in Generation 7. It is known as the Sand Castle Pokémon',
    'Castform is a Normal type Pokémon introduced in Generation 3. It is known as the Weather Pokémon',
    'Tyranitar is a Rock/Dark type Pokémon introduced in Generation 2. It is known as the Armor Pokémon',
    'Tapu Koko is an Electric/Fairy type Pokémon introduced in Generation 7. It is known as the Land Spirit Pokémon',
    'Sableye is a Dark/Ghost type Pokémon introduced in Generation 3. It is known as the Darkness Pokémon',
    

  ];

  function searchStringInArray (str, strArray) {
  for (var j=0; j<strArray.length; j++) {
      if (strArray[j].match(str)) {
          return `${strArray[j]}, ${allPokemonsWithDescription[j]}`;
          break;
      }
  }
  }

  exports.handler = function(event, context, callback) {
  var alexa = Alexa.handler(event, context);
  alexa.appId = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
  };

  const handlers = {
  'LaunchRequest': function () {
      this.emit('GetNewFactIntent');
  },
  'pokemonFactsIntent': function () {
      const factArr = facts;
      const factIndex = Math.floor(Math.random() * factArr.length);
      const randomFact = factArr[factIndex];
      const speechOutput = GET_FACT_MESSAGE + randomFact;

      this.response.cardRenderer(SKILL_NAME, randomFact);
      this.response.speak(speechOutput);
      this.emit(':responseReady');
  },
  'dragonBallZIntent': function () {
    const factArr = facts;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    this.response.cardRenderer(SKILL_NAME, randomFact);
    this.response.speak(speechOutput);
    this.emit(':responseReady');
  },
  'specificPokemonIntent': function () {

  let name = this.event.request.intent.slots.Pokemon.value;
  let sPokemon = searchStringInArray(name, allPokemons);
  this.response.cardRenderer(SKILL_NAME, sPokemon);
  this.response.speak(sPokemon);
  this.emit(':responseReady');





  },      
  'AMAZON.HelpIntent': function () {
      const speechOutput = HELP_MESSAGE;
      const reprompt = HELP_REPROMPT;

      this.response.speak(speechOutput).listen(reprompt);
      this.emit(':responseReady');
  },
  'AMAZON.CancelIntent': function () {
      this.response.speak(STOP_MESSAGE);
      this.emit(':responseReady');
  },
  'AMAZON.StopIntent': function () {
      this.response.speak(STOP_MESSAGE);
      this.emit(':responseReady');
  },
  };