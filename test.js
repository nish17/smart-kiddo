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
      if (strArray[j].match(str)) return `${strArray[j]}, ${allPokemonsWithDescription[j]}`;
  }
}
  // let name = this.event.request.intent.slots.Pokemon.value;
  let name = 'Furret';
  let sPokemon = searchStringInArray(name, allPokemons);

console.log(sPokemon);