  'use strict';
  const Alexa = require('alexa-sdk');

  const APP_ID = 'amzn1.ask.skill.f325ef48-8396-4b23-9664-83a2a8a5018d';

  const SKILL_NAME = 'smart kiddo';
  const GET_FACT_MESSAGE = "Here's your fact: ";
  const HELP_MESSAGE = 'You can say tell me a new year fact, or, you can say exit... What can I help you with?';
  const HELP_REPROMPT = 'What can I help you with?';
  const STOP_MESSAGE = 'Goodbye!';
  const facts = [
  'Pikachu is an Electric type Pokémon introduced in Generation 1. It is known as the Mouse Pokémon.'
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '.'
  ];
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
    'Hoothoot'
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
    "Hoothoot is a Normal/Flying type PokÈmon of generation 2 of species Owl pokemon with abilitiesInsomnia, Keen Eye and Tinted Lens."
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