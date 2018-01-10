// let APPID;
const APPID = require('./src/APP_ID');
if(APPID){var {allSuperHeroesWithDescription, allSuperHeroes} = require('./src/data/superHeroes');
var {allPokemonsWithDescription, allPokemons} = require('./src/data/pokemons');

function searchStringInArray(str, strArray,strwithDArray) {
  for (var j = 0; j < strArray.length; j++) {
    if (strArray[j].match(str)) {
      return `${strwithDArray[j]}`;
    }
  }
}

  // let name = this.event.request.intent.slots.Pokemon.value;
  let name = 'Furret';
  let sPokemon = searchStringInArray(name, allPokemons, allPokemonsWithDescription);
  console.log(sPokemon);
  let sname = 'Flash'
  let sPokemons = searchStringInArray(sname, allSuperHeroes,allSuperHeroesWithDescription);
  console.log(sPokemons);
  console.log(allPokemons.length, allPokemonsWithDescription.length);
  console.log(allSuperHeroes.length, allSuperHeroesWithDescription.length);}