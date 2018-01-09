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
  'Bellossom'
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
  "Bellossom is a Grass type Pokémon of generation 2 of species Flower pokemon with abilities Chlorophyll and Healer."
];
const 
function searchStringInArray (str, strArray) {
  for (var j=0; j<strArray.length; j++) {
      if (strArray[j].match(str)) return `${strArray[j]}, ${allPokemonsWithDescription[j]}`;
  }
}
  // let name = this.event.request.intent.slots.Pokemon.value;
  let name = 'Furret';
  let sPokemon = searchStringInArray(name, allPokemons);

console.log(sPokemon);