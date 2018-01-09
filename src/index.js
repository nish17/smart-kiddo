"use strict";
const Alexa = require("alexa-sdk");
const APP_ID = "amzn1.ask.skill.f325ef48-8396-4b23-9664-83a2a8a5018d";
var {allSuperHeroesWithDescription, allSuperHeroes} = require('./data/superHeroes');
var {allPokemonsWithDescription, allPokemons} = require('./data/pokemons');
const SKILL_NAME = "smarT kIddO";
const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = "HI there!! You can ask me about your favorite pokemon character, or your favorite superhero character or else you can say exit... What can I help you with?";
const HELP_REPROMPT = "What can I help you with?";
const STOP_MESSAGE = "Goodbye!";
function searchStringInArray(str, strArray,strwithDArray) {
  for (var j = 0; j < strArray.length; j++) {
    if (strArray[j].match(str)) {
      return `${strArray[j]}, ${strwithDArray[j]}`;
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
  LaunchRequest: function() {
    this.emit("GetNewFactIntent");
  },
  pokemonFactsIntent: function() {
    const factArr = allPokemonsWithDescription;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    this.response.cardRenderer(SKILL_NAME, randomFact);
    this.response.speak(speechOutput);
    this.emit(":responseReady");
  },
  superHeroIntent: function() {
    const factArr = allSuperHeroesWithDescription;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    this.response.cardRenderer(SKILL_NAME, randomFact);
    this.response.speak(speechOutput);
    this.emit(":responseReady");
  },
  specificPokemonIntent: function() {
    let name = this.event.request.intent.slots.Pokemon.value;
    let sPokemon = searchStringInArray(name, allPokemons,allPokemonsWithDescription);
    this.response.cardRenderer(SKILL_NAME, sPokemon);
    this.response.speak(sPokemon);
    this.emit(":responseReady");
  },
  specificSuperHeroIntent: function() {
    let name = this.event.request.intent.slots.superhero.value;
    let superhero = searchStringInArray(name, allSuperHeroes,allSuperHeroesWithDescription);
    this.response.cardRenderer(SKILL_NAME, superhero);
    this.response.speak(superhero);
    this.emit(":responseReady");
  },
  "AMAZON.HelpIntent": function() {
    const speechOutput = HELP_MESSAGE;
    const reprompt = HELP_REPROMPT;

    this.response.speak(speechOutput).listen(reprompt);
    this.emit(":responseReady");
  },
  "AMAZON.CancelIntent": function() {
    this.response.speak(STOP_MESSAGE);
    this.emit(":responseReady");
  },
  "AMAZON.StopIntent": function() {
    this.response.speak(STOP_MESSAGE);
    this.emit(":responseReady");
  }
};
