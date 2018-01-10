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
      return strArray[j] + " " + strwithDArray[j];
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
  GetNewFactIntent: function(){
    let speechOutput = HELP_MESSAGE;
    this.response.speak(speechOutput);
    this.emit(":responseReady");
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
    var name = this.event.request.intent.slots.Pokemon.value;
    var speechOutput = name;
    if(name === undefined) speechOutput = `That's an interesting pokemon name`;
    for (var j = 0; j < allPokemons.length; j++) {
        if (allPokemons[j].match(name)) {
            var speechOutput = allPokemonsWithDescription[j];
        }
      }
    speechOutput = searchStringInArray(name, allPokemons,allPokemonsWithDescription);
    this.response.cardRenderer(SKILL_NAME, speechOutput);
//     if(name === undefined) var speechOutput = `That's an interesting pokemon name`;
//     else var speechOutput = searchStringInArray(name, allPokemons,allPokemonsWithDescription);
//     this.response.cardRenderer(SKILL_NAME, speechOutput);
    this.response.speak(name);
    this.emit(":responseReady");
  },
  specificSuperHeroIntent: function() {
    var name = this.event.request.intent.slots.superhero.value;
    var speechOutput;
    var Flashname = 'flash';
    if(name === undefined) speechOutput = `That's an interesting SuperHero name`;
    else speechOutput = searchStringInArray(name, allSuperHeroes,allSuperHeroesWithDescription);
    this.response.cardRenderer(SKILL_NAME, name);
    this.response.speak(name);
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
