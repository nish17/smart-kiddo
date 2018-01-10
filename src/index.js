"use strict";
const Alexa = require("alexa-sdk");
const APPID = require('APP_ID');
const APP_ID = APPID;
var {allSuperHeroesWithDescription, allSuperHeroes} = require('./data/superHeroes');
var {allPokemonsWithDescription, allPokemons} = require('./data/pokemons');
const SKILL_NAME = "smarT kIddO";
const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = "HI there!! You can ask me about your favorite pokemon character, or your favorite superhero character or else you can say exit... What can I help you with?";
const HELP_REPROMPT = "What can I help you with?";
const STOP_MESSAGE = "Goodbye!";

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