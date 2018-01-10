"use strict";
const Alexa = require("alexa-sdk");
const APP_ID = "amzn1.ask.skill.f325ef48-8396-4b23-9664-83a2a8a5018d";
// var {allSuperHeroesWithDescription, allSuperHeroes} = require('./data/superHeroes');
// var {allPokemonsWithDescription, allPokemons} = require('./data/pokemons');
const SKILL_NAME = "smarT kIddO";
const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = "HI there!! You can ask me about your favorite pokemon character, or your favorite superhero character or else you can say exit... What can I help you with?";
const HELP_REPROMPT = "What can I help you with?";
const STOP_MESSAGE = "Goodbye!";

const allPokemons = ["Chikorita","Bayleef","Meganium","Cyndaquil","Quilava","Typhlosion","Totodile","Croconaw","Feraligatr","Sentret","Furret","Hoothoot","Hoothoot",
    "Noctowl","Ledyba","Ledian","Spinarak","Ariados","Corbat","Chinchou","Lanturn","Pichu","Cleffa","Igglybuff","Togepi","Natu","Xatu","Mareep","Flaaffy","Ampharos",
  "Bellossom","Pachirisu","Altaria","Magnezone","Pangoro","Electrode","Escavalier","Rhydon","Togepi","Houndoom","Milotic","Drifloon","Machamp","Tyrantrum","Crobat","Vikavolt",
  "Talonflame","Smeargle","Mudkip","Porygon","Palossand","Castform","Tyranitar","Tapu Koko","Sableye","Eelektross","Shuckle","Kabutops","Zoroark","Azumarill","Magcargo",
  "Yveltal","Bidoof","Ditto","Aegislash","Jolteon","Ho-oh","Bewear","Arcanine","Glalie","Steelix","Slowpoke","Scizor","Yamask","Vivillon","Empoleon","Gliscor","Hawlucha",
  "Omanyte","Silvally","Tauros","Chandelure","Ferrothorn","Giratina","Espurr","Heracross","Serperior","Wishiwashi","Shedinja","Rattata","Snorlax","Lucario","Eevee","Alakazam",
  "Gyarados","Dragonite","Venusaur","Mewtwo","Pikachu","Suicune","Charizard","Rayquaza","Gengar","Blaziken","Mimikyu","Greninja","Garchomp"
];
const allPokemonsWithDescription = [
  "Chikorita is a Grass type PokÈmon of generation 2 of species Leaf pokemon with abilities Overgrow and Leaf guard.",
  "Bayleef  is a Grass type PokÈmon of generation 2 of species Leaf pokemon with abilities Overgrow and Leaf guard.",
  "Meganium  is a Grass type PokÈmon of generation 2 of species Herb pokemon with abilities Overgrow and Leaf guard.",
  "Cyndaquil  is a Fire type PokÈmon of generation 2 of species Fire Mouse pokemon with abilities Blaze and Flash Fire.",
  "Quilava  is a Fire type PokÈmon of generation 2 of species Volcano pokemon with abilities Blaze and Flash Fire.",
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
  "Pachirisu is an Electric type Pokémon introduced in Generation 4. It is known as the EleSquirrel Pokémon",
  "Altaria is a Dragon/Flying type Pokémon introduced in Generation 3. It is known as the Humming Pokémon",
  "Magnezone is an Electric/Steel type Pokémon introduced in Generation 4. It is known as the Magnet Area Pokémon.",
  "Pangoro is a Fighting/Dark type Pokémon introduced in Generation 6. It is known as the Daunting Pokémon.",
  "Electrode is an Electric type Pokémon introduced in Generation 1. It is known as the Ball Pokémon",
  "Escavalier is a Bug/Steel type Pokémon introduced in Generation 5. It is known as the Cavalry Pokémon.",
  "Rhydon is a Ground/Rock type Pokémon introduced in Generation 1. It is known as the Drill Pokémon.",
  "Togepi is a Fairy type Pokémon introduced in Generation 2. It is known as the Spike Ball Pokémon",
  "Houndoom is a Dark/Fire type Pokémon introduced in Generation 2. It is known as the Dark Pokémon",
  "Milotic is a Water type Pokémon introduced in Generation 3. It is known as the Tender Pokémon",
  "Drifloon is a Ghost/Flying type Pokémon introduced in Generation 4. It is known as the Balloon Pokémon.",
  "Machamp is a Fighting type Pokémon introduced in Generation 1. It is known as the Superpower Pokémon.",
  "Tyrantrum is a Rock/Dragon type Pokémon introduced in Generation 6. It is known as the Despot Pokémon",
  "Crobat is a Poison/Flying type Pokémon introduced in Generation 2. It is known as the Bat Pokémon",
  "Vikavolt is a Bug/Electric type Pokémon introduced in Generation 7. It is known as the Stag Beetle Pokémon",
  "Talonflame is a Fire/Flying type Pokémon introduced in Generation 6. It is known as the Scorching Pokémon.",
  "Smeargle is a Normal type Pokémon introduced in Generation 2. It is known as the Painter Pokémon",
  "Mudkip is a Water type Pokémon introduced in Generation 3. It is known as the Mud Fish Pokémon",
  "Porygon is a Normal type Pokémon introduced in Generation 1. It is known as the Virtual Pokémon",
  "Palossand is a Ghost/Ground type Pokémon introduced in Generation 7. It is known as the Sand Castle Pokémon",
  "Castform is a Normal type Pokémon introduced in Generation 3. It is known as the Weather Pokémon",
  "Tyranitar is a Rock/Dark type Pokémon introduced in Generation 2. It is known as the Armor Pokémon",
  "Tapu Koko is an Electric/Fairy type Pokémon introduced in Generation 7. It is known as the Land Spirit Pokémon",
  "Sableye is a Dark/Ghost type Pokémon introduced in Generation 3. It is known as the Darkness Pokémon",
  "Eelektross is an Electric type Pokémon introduced in Generation 5. It is known as the EleFish Pokémon",
  "Shuckle is a Bug/Rock type Pokémon introduced in Generation 2. It is known as the Mold Pokémon",
  "Kabutops is a Rock/Water type Pokémon introduced in Generation 1. It is known as the Shellfish Pokémon",
  "Zoroark is a Dark type Pokémon introduced in Generation 5. It is known as the Illusion Fox Pokémon",
  "Azumarill is a Water/Fairy type Pokémon introduced in Generation 2. It is known as the Aqua Rabbit Pokémon",
  "Magcargo is a Fire/Rock type Pokémon introduced in Generation 2. It is known as the Lava Pokémon.",
  "Yveltal is a Dark/Flying type Pokémon introduced in Generation 6. It is known as the Destruction Pokémon",
  "Bidoof is a Normal type Pokémon introduced in Generation 4. It is known as the Plump Mouse Pokémon.",
  "Ditto is a Normal type Pokémon introduced in Generation 1. It is known as the Transform Pokémon",
  "Aegislash is a Steel/Ghost type Pokémon introduced in Generation 6. It is known as the Royal Sword Pokémon",
  "Jolteon is an Electric type Pokémon introduced in Generation 1. It is known as the Lightning Pokémon",
  "Ho-oh is a Fire/Flying type Pokémon introduced in Generation 2. It is known as the Rainbow Pokémon",
  "Bewear is a Normal/Fighting type Pokémon introduced in Generation 7. It is known as the Strong Arm Pokémon",
  "Arcanine is a Fire type Pokémon introduced in Generation 1. It is known as the Legendary Pokémon",
  "Glalie is an Ice type Pokémon introduced in Generation 3. It is known as the Face Pokémon",
  "Steelix is a Steel/Ground type Pokémon introduced in Generation 2. It is known as the Iron Snake Pokémon",
  "Slowpoke is a Water/Psychic type Pokémon introduced in Generation 1. It is known as the Dopey Pokémon",
  "Scizor is a Bug/Steel type Pokémon introduced in Generation 2. It is known as the Pincer Pokémon",
  "Yamask is a Ghost type Pokémon introduced in Generation 5. It is known as the Spirit Pokémon",
  "Vivillon is a Bug/Flying type Pokémon introduced in Generation 6. It is known as the Scale Pokémon",
  "Empoleon is a Water/Steel type Pokémon introduced in Generation 4. It is known as the Emperor Pokémon",
  "Gliscor is a Ground/Flying type Pokémon introduced in Generation 4. It is known as the Fang Scorp Pokémon",
  "Hawlucha is a Fighting/Flying type Pokémon introduced in Generation 6. It is known as the Wrestling Pokémon",
  "Omanyte is a Rock/Water type Pokémon introduced in Generation 1. It is known as the Spiral Pokémon",
  "Silvally is a Normal type Pokémon introduced in Generation 7. It is known as the Synthetic Pokémon",
  "Tauros is a Normal type Pokémon introduced in Generation 1. It is known as the Wild Bull Pokémon",
  "Chandelure is a Ghost/Fire type Pokémon introduced in Generation 5. It is known as the Luring Pokémon",
  "Ferrothorn is a Grass/Steel type Pokémon introduced in Generation 5. It is known as the Thorn Pod Pokémon",
  "Giratina is a Ghost/Dragon type Pokémon introduced in Generation 4. It is known as the Renegade Pokémon.",
  "Espurr is a Psychic type Pokémon introduced in Generation 6. It is known as the Restraint Pokémon",
  "Heracross is a Bug/Fighting type Pokémon introduced in Generation 2. It is known as the Single Horn Pokémon.",
  "Serperior is a Grass type Pokémon introduced in Generation 5. It is known as the Regal Pokémon.",
  "Wishiwashi is a Water type Pokémon introduced in Generation 7. It is known as the Small Fry Pokémon.",
  "Shedinja is a Bug/Ghost type Pokémon introduced in Generation 3. It is known as the Shed Pokémon",
  "Rattata is a Normal type Pokémon introduced in Generation 1. It is known as the Mouse Pokémon.",
  "Snorlax is a Normal type Pokémon introduced in Generation 1. It is known as the Sleeping Pokémon.",
  "Lucario is a Fighting/Steel type Pokémon introduced in Generation 4. It is known as the Aura Pokémon.",
  "Eevee is a Normal type Pokémon introduced in Generation 1. It is known as the Evolution Pokémon.",
  "Alakazam is a Psychic type Pokémon introduced in Generation 1. It is known as the Psi Pokémon.",
  "Gyarados is a Water/Flying type Pokémon introduced in Generation 1. It is known as the Atrocious Pokémon.",
  "Dragonite is a Dragon/Flying type Pokémon introduced in Generation 1. It is known as the Dragon Pokémon",
  "Venusaur is a Grass/Poison type Pokémon introduced in Generation 1. It is known as the Seed Pokémon.",
  "Mewtwo is a Psychic type Pokémon introduced in Generation 1. It is known as the Genetic Pokémon.",
  "Pikachu is an Electric type Pokémon introduced in Generation 1. It is known as the Mouse Pokémon.",
  "Suicune is a Water type Pokémon introduced in Generation 2. It is known as the Aurora Pokémon.",
  "Charizard is a Fire/Flying type Pokémon introduced in Generation 1. It is known as the Flame Pokémon.",
  "Rayquaza is a Dragon/Flying type Pokémon introduced in Generation 3. It is known as the Sky High Pokémon.",
  "Gengar is a Ghost/Poison type Pokémon introduced in Generation 1. It is known as the Shadow Pokémon.",
  "Blaziken is a Fire/Fighting type Pokémon introduced in Generation 3. It is known as the Blaze Pokémon.",
  "Mimikyu is a Ghost/Fairy type Pokémon introduced in Generation 7. It is known as the Disguise Pokémon.",
  "Greninja is a Water/Dark type Pokémon introduced in Generation 6. It is known as the Ninja Pokémon.",
  "Garchomp is a Dragon/Ground type Pokémon introduced in Generation 4. It is known as the Mach Pokémon."
];


const allSuperHeroes = [
    'Superman','Batman','Spider-Man', 'Thor','Hal Jordan','Wonder Woman','Captain America','Martian Manhunter','Dick Grayson','Wally West', 'Kyle Rayner', 'Flash',
    'Thing', 'Mr. Fanatastic', 'Invisible Woman', 'Human Torch', 'Silver Surfer', 'Wolverine', 'Iron Man', 'Supergirl', 'Superboy', 'Daredevil', 'Tim Drake', 'Hulk',
    'Aquaman', 'Terry McGinnis', 'Plastic Man','Green Arrow', 'Cyborg', 'Hercules','Billy Batson','Black Canary', 'Orion','Black Panther','Jay Garrick','Leonardo',
    'Alan Scott','Raphael','Raven','Donna Troy','Zatanna','Beast Boy','Donatello','Starfire','Red Tornado','Steel','Michelangelo','Barbara Gordon','Vixen','Professor X',
    'Bucky Barnes','Cassandra Cain','Ray Palmer','Hank Pym','Doctor Strange','John Stewart','Captain Atom','Hawkeye','Roy Harper','Etrigan','Firestorm','Hawkman','Bart Allen',
    'Blue Beetle (Reyes)','Nick Fury','Christopher Kent','Damian Wayne','Vision','Wasp','Phantom Stranger','Huntress (Bertinelli)','Black Lightning',
    'Mr.Miracle','Big Barda','Zauriel','Beast','Nova','Skaar','Power Girl','Jon Kent','Beta Ray Bill','Iron Fist','Booster Gold','Elektra','Thunderbolt Ross','Hawkgirl','Lightray',
    'Geo-Force','Damage','Mr.Terrific','Captain Britain','Mon-El','Knight (Sheldrake)','Black Widow','Stargirl','Adam Strange','Kaine','Congorilla','Animal Man','Swamp Thing'
];

const allSuperHeroesWithDescription = [
    "Superman : Rocketed to Earth as an infant from the doomed planet Krypton, Kal-El was adopted by the loving Kent family and raised in America's heartland as Clark Kent. Using his immense solar-fueled powers, he became Superman to defend mankind against all manner of threats while championing truth, justice and the American way!",
    "Batman : Bruce Wayne, who witnessed the murder of his multi-millionaire parents as a child, swore to avenge their deaths. He trained extensively to achieve mental and physical perfection, mastering martial arts, detective skills, and criminal psychology. Costumed as a bat to prey on criminals's fears, and utilizing a high-tech arsenal, he became the legendary Batman.",
    'Spider-Man : Peter Parker was bitten by a radioactive spider as a teenager, granting him spider-like powers. After the death of his Uncle Ben, which he could have prevented, Peter learned that "with great power, comes great responsibility." Swearing to always protect the innocent from harm, Peter Parker became the Amazing Spider-Man!',
    "Thor : Thor is the Asgardian God of Thunder and the son of Odin, the All-Father of Asgard, and the Elder Earth-Goddess Gaea. Combining the power of both worlds, Thor is arguably the greatest and mightiest defender of both. Armed with his powerful enchanted Uru hammer Mjolnir, Thor is the mightiest warrior of Asgard, a founding member of the Avengers and one of the strongest beings on Earth.",
    "Hal Jordan : With the ability to overcome great fear and harness the power of will, test-pilot Hal Jordan was chosen to be the Green Lantern of Sector 2814 inheriting the ring of the dying alien Green Lantern, Abin Sur. Through sheer will power and determination, Hal has established an impressive record of heroism across the galaxy with the help of his fellow Green Lanterns as well as his peers in the Justice League.",
    "Wonder Woman : The princess of the Amazons, armed with powers of a god, Wonder Woman is one of Earth's most powerful defenders of peace and equality and a member of the Justice League. She is often considered an archetype for the comic book superheroine. She stands for Love, peace, and above all else, truth! Her original origin depicted her as a clay figure brought to life by the gods, but in recent years she has been depicted as the daughter of Zeus and the Amazon queen Hippolyta.",
    "Captain America : During World War II, Steve Rogers volunteered to receive the experimental Super-Soldier Serum. Enhanced to the pinnacle of human physical potential and armed with an unbreakable shield, he became Captain America. After a failed mission left him encased in ice for decades, he was found and revived by the Avengers, later becoming the team's leader.",
    "Martian Manhunter : Decades ago, J'onn J'onzz was teleported to Earth from Mars and was left stranded. Since then he has used his extraordinary abilities to protect and serve the people of Earth.",
    "Dick Grayson : As the first Robin, Dick Grayson was the most famous sidekick in all of fiction. When the boy became a man, he became the independent hero known as Nightwing.",
    `Wally West : Struck by the same lightning bolt that turned his uncle Barry Allen into the Flash, Wallace Rudolph "Wally" West took the name Kid Flash and became Barry's sidekick and the member of the Teen Titans. Eventually, Wally became the Flash to honor his uncle's memory, who died saving the Universe. He also became a member of the Justice League. He married a woman named Linda Park and had two kids, Jai and Iris West II. Currently, Wally was pulled from the Speed Force by Barry and is one of two fastest men alive.`,
    "Kyle Rayner : Originally thought to be chosen by chance, Ganthet chose Kyle Rayner because he had the ability to harness the powers of the emotional spectrum. Once the Torchbearer of the Green Lantern Corps, Kyle graduated to the role Ganthet had intended for him: the White Lantern. After the White Ring is separated into seven rings, Kyle returns to being a Green Lantern Corpsman.",
    "Flash : Having discovered his mother murdered and his father blamed for the act, forensic scientist Barry Allen sought to clear his father's name and find the real killer. After being doused in chemicals and struck by lightning, Barry was granted the gift of super-speed. Now he protects his hometown of Central City as The Flash, the fastest man alive and founding member of the Justice League.",
    "Thing : Ben Grimm - The Thing - is the original, quintessential tough-guy of the Marvel Universe. But, because of his transformation, he's also the tragic member of the Fantastic Four. Ben was an ace test-pilot until exposure to intense cosmic radiation mutated him into a rock-skinned monster with immense superhuman strength. Ben's exterior is much harder than stone and he has a gruff disposition. But, within himself, he has a heart of gold.",
    "Mr. Fantastic : Reed Richards, also known as Mr. Fantastic, is the leader of the Fantastic Four. He can stretch his body to great distances due to his exposure to cosmic rays while in space. He is also considered to be one of the smartest men alive." ,
    "Invisible Woman : Susan Storm is a founding member of the Fantastic Four and later the Future Foundation. She is able to create invisible force fields of any shape she conceives and able to turn herself and anything she's in contact with invisible.",
    "Human Torch : The second most powerful member of the Fantastic Four and the brother of Sue Richards. Due to an accident caused by cosmic radiation in space, he can manipulate fire, turn his entire body into it and fly.",
    "Silver Surfer : Norrin Radd of Zenn-La is the mighty herald of Galactus, the devourer of worlds. Gifted with the Power Cosmic and a trusty board that's faster than light speed which he can summon at will. He travels the universe as the Silver Surfer.",
    `Wolverine : A long-lived mutant with the rage of a beast and the soul of a Samurai, James "Logan" Howlett's past is filled with blood, war and betrayal. Possessing an accelerated healing factor, keenly enhanced senses and bone claws in each hand that, along with his skeleton, are coated in adamantium. Wolverine is, without question, the ultimate weapon.`,
    "Iron Man : Tony Stark was an arrogant son of wealthy, weapon manufacturer Howard Stark. Tony cared only about himself. However, he had a change of heart after he was kidnapped by terrorists and gravely injured. Stark was pressured to create a weapon of mass destruction. Instead, he created a suit of armor powerful enough for him to escape. Tony uses his vast resources and intellect to make the world a better place as the Invincible Iron Man. His super hero identity led him to become a founding member of the Avengers.",
    "Supergirl : Kara Zor-El is Superman's cousin and last survivor of Krypton's Argo City. She has a brash and defiant personality that she developed in response to the destruction of Krypton. Currently, she is operating out of National City alongside the D.E.O.",
    "Superboy : Kon-El/Conner Kent is a human/Kryptonian hybrid clone and was created to be the ultimate living weapon.",
    `Daredevil : As a child, Matt Murdock was blinded by radioactive waste while trying to save an elderly stranger about to get hit by a truck carrying the dangerous material. In turn, his other senses were heightened to superhuman sharpness and he gained a form of "radar sense". By day, he is a successful trial lawyer. But by night, he guards Hell's Kitchen as the man without fear known as Daredevil.`,
    "Tim Drake : At the age of nine, Timothy Drake cleverly deduced the identities of Batman and Robin. Four years later, after the death of Jason Todd, Tim convinced Batman that he should be the new Robin. Eventually resigning from the role, he is now Red Robin, leader of the Teen Titans.",
    "Hulk : After being bombarded with a massive dose of gamma radiation while saving a young man's life during the testing of an experimental bomb, Dr. Robert Bruce Banner was transformed into the Incredible Hulk: a green behemoth who is the living personification of rage and pure physical strength.",
    "Aquaman : The son of an Atlantean queen and a lighthouse keeper from the town of Amnesty Bay, Arthur Curry would grow up to become the superhero Aquaman, and later take on his birthright as the King of Atlantis. He is a founding member of the Justice League and is among DC Comics' most recognized heroes.",
    "Terry McGinnis : Born with a partial strand of the original Batman's DNA, Terry McGinnis was a reformed juvenile delinquent who stole the Batman suit to avenge the murder of his father. Under Wayne's guidance, Terry became The Tomorrow Knight of futuristic Neo-Gotham: Batman Beyond.",
    `Plastic Man : Sleazy thief Patrick "Eel" O'Brien was saved by Batman from an acid vat. This vat gave him the powers to bend his body into any imaginable form. He stands today as the comedian in any team he's in. Beneath his joking exterior, he is a valuable asset in any situation.`,
    "Green Arrow : Oliver Queen was a spoiled, thrill-seeking playboy, until he was left stranded on a deserted island for several years. There, he trained to become a master archer in order to survive. After his return home, he used his new-found skills and his wealth to became the costumed vigilante known as Green Arrow.",
    "Cyborg : Half man, half machine - all hero! After a near fatal incident, Victor Stone was cybernetically enhanced by his father. He now possesses the ability to communicate, manipulate, and interface with nearly all forms of technology. As he is constantly upgrading, he promises to defend the future from any threat. He is also a founding member of both, the Justice League and the Teen Titans.",
    "Hercules : One of six Olympian sons of Zeus, Hercules was born the savior of the Gods and mankind. Known as the Prince of Power, Hercules is one of the strongest beings in existence, an Olympian God and a modern superhero recognized throughout the world for his might. He has been a champion of mankind since ancient times and continues to defend the world in the modern age - most frequently as a member of the Avengers.",
    `Billy Batson : Deemed worthy of becoming the champion of the ancient Wizard Mamaragan, whenever he utters the word "Shazam" young Billy Batson is struck by a magical thunderbolt and gains vast divine powers and abilities. In wake of Darksied war these capacities now stem from S'ivaa, H'ronmeer, Anapel, Zonuz; Yuga Khan, Atë, and Mamaragan e.i. The Wizard, as well as transforming him into Magic's Champion, the World's Mightiest Mortal, Shazam!`,
    "Black Canary : Dinah Lance was born into a family of crime fighters; her mother was a vigilante and her father is a cop. She grew up with the company of heroes, and after years of training, followed in her parent's footsteps by assuming the costume, identity, and legacy of her mother Dinah Drake, the Black Canary.",
    "Orion : The son of Darkseid and ward of Highfather, Orion is New Genesis' greatest defender and the fiercest warrior of the Fourth World. Known as 'The Dog of War', Orion constantly struggles to maintain the balance between his peaceful upbringing and brutal nature.",
    "Black Panther : T'Challa is the Black Panther, king of Wakanda, one of the most technologically advanced nations on Earth. He is among the top intellects and martial artists of the world, a veteran Avenger, and a member of the Illuminati. Using his powers and abilities, he has pledged his fortune, powers, and life to the service of all mankind.",
    "Jay Garrick : Jay Garrick is the original, Golden Age, super-speedster, and was the first to have the mantle of the Flash and a founder of the Justice Society of America. It was Jay Garrick's legendary heroics that inspired Barry Allen.",
    `Leonardo : Leonardo is the calm, focused, and disciplined leader of his brothers, the Teenage Mutant Ninja Turtles. Nicknamed "Leo," he is usually seen with a blue mask and twin swords.`,
    "Alan Scott : Alan Scott, the bearer of the mystical Starheart, is the original Golden Age Green Lantern and a founding member of the Justice Society of America. An all-time great, Alan continues to fight for truth, justice and freedom well into old age as a member of the Justice Society. He has now been introduced as an iconic gay character in DC's new reboot, The New 52.",
    `Raphael : Often misunderstood, or dismissed as the dark one, Raphael is known to go to the extremes with his anger. He has a hard time handling his temper, pressured from the unfair facts of life. Most known for his twin sai, red bandanna, and the nickname "Raph" from his brothers and friends.`,
    `Raven : Raven battles the forces of evil alongside her adoptive family, the Teen Titans, while trying to control her baser, antagonistic instincts she inherited from her demonic father, Trigon.`,
    `Donna Troy : Starting as a Wonder Woman doppelganger and later sidekick, Donna Troy grew up to became a essential part of the Wonder Woman myths and a pivotal member of the Teen Titans originals. Reinvented in the New 52 as the misguided "perfect Amazon", created by a vengeful former friend of Hippolyta's to take away the Amazonian throne from Wonder Woman.`,
    "Zatanna : The daughter of John Zatara, Zatanna is a powerful magician who casts spells by speaking backwards and works as both a stage performer and a member of the Justice League of America (presently Justice League Dark).",
    "Beast Boy : The classically green-skinned member of the The Teen Titans, Beast Boy has the power to transform into any creature of any size.",
    `Donatello : Donatello is the scientist and engineer of the turtles. Most known for his Bo Staff, purple bandanna, and the nickname "Donnie" or "Donny" as called by his brothers and friends. He is responsible for all the turtles vehicles of transportation.`,
    "Starfire : Formerly warrior Princess Koriand'r of the now-destroyed planet Tamaran, Starfire found a new home on Earth, and a new family in the Teen Titans. She has also served with the Outsiders, Justice League, R.E.B.E.L.S. and the Outlaws.",
    "Red Tornado : An android created by the supervillian T.O. Morrow to infiltrate the Justice Society of America. The android has since become a noble superhero and member of the Justice League.",
    "Steel : Inspired by Superman, John Henry Irons mimicked his powers with technology. However, his greatest powers are his heart, mind, and determination.",
    `Michelangelo : Mikey is the comedian of the brothers, always making a joke. He is the fastest fighter of the group with his two nunchaku. Most known for his orange bandanna, the nickname "Mikey" as called by his Brothers and Friends, and the signature phrase of cowabunga which is used in a good amount of his incarnations. He is often considered the original Ninja Turtle because of the first concept art of a unnamed turtle that had nunchucks strapped to his arms.`,
    "Barbara Gordon : Barbara Gordon was the first modern age Batgirl until she was brutally shot by the Joker, rendering her paralyzed from the waist down. Barbara reinvented herself as Oracle, providing intelligence to the DCU heroes and leading the Birds of Prey. She has recently become Batgirl once again to protect Gotham City.",
    "Vixen : Mari Jiwe McCabe, better known as Vixen, is able to channel the powers of virtually any creature in the animal kingdom with but a thought. Over the course of her life she has been a member of the JLA and the Suicide Squad, a model, and a successful business woman.",
    "Professor X : Professor Charles Xavier is the creator of the X-Men and founder of the Xavier School for Gifted Youngsters. His dream of peaceful coexistence between mutants and humanity has long been the driving force for the X-Men. An immensely powerful telepath and scientific genius, Xavier was among the world's greatest masterminds. Killed at the hands of a Phoenix crazed Cyclops, Xavier's memory and dream still remains and motivates his X-Men to keep fighting for a world that fears and hates them.",
    "Bucky Barnes : Believed dead near the end of World War II only to have been found and brainwashed by the Soviets for the next 50 years, Captain America's former sidekick now continues to defend his country from the shadows against those who would threaten it as legendary spy and assassin, the Winter Soldier. He became the new Captain America to honor his friend Steve and he joined the Avengers. When Steve returned as Captain America, Bucky took on the identity of the Winter Soldier once again.",
    "Cassandra Cain : The daughter of two notorious assassins, David Cain and Lady Shiva, Cassandra left her father as a child after she killed a man and saw his pain and fear while he died. After saving Commissioner Gordon's life, she became the new Batgirl with Batman and Oracle's blessing, and was later adopted by Bruce Wayne. Later still, she gave the role of Batgirl to her friend Stephanie Brown, and became Black Bat.",
    "Ray Palmer : Ray Palmer is a scientist superhero––and longtime Justice League member––who devised a means of miniaturization through dwarf star matter technology. From the Microverse to the greater world, he fights for good as the mighty Atom!",
    "Hank Pym : Hank Pym is a genius, a founding member of the Avengers, the creator of Pym Particles and of Ultron, a sufferer of Bipolar disorder, and a modern-day superhero. He has acted under many memorable identities such as Ant-Man, Giant Man, Goliath, Yellowjacket, and the Wasp. He is also the Earth's Scientist Supreme, as decreed by Eternity.",
    "Doctor Strange : Dr. Stephen Strange was once a gifted but egotistical surgeon who sought out the Ancient One to heal his hands after they were wounded in a car accident. Instead, the Ancient One trained him to become Master of the Mystic Arts and the Sorcerer Supreme of Earth.",
    "John Stewart : Formerly an architect, social activist, and U.S. Marine sniper, John Stewart was selected by the Guardians of the Universe to be one of the Green Lanterns for Sector 2814. His distinguished service in the Corps has resulted in a place among the Oan Honor Guard and the position of chief trainer for new Lantern recruits.",
    "Captain Atom : Nathaniel Adam was coerced into an experiment which bonded alien metal to his skin and sent him 18 years into the future, giving birth to Captain Atom, a superhero fueled by the Quantum Field.",
    "Hawkeye : Trained by criminals and inspired by heroes, Clint Barton has grown from a troubled youth into one of the greatest heroes on Earth. The world knows him best as Hawkeye: Earth's Mightiest Marksman. A member of the Avengers for many years, he has left the team on occasion because of team friction. But he always returns, ready to face any threat.",
    "Roy Harper : Green Arrow's first sidekick Speedy, and later Arsenal, and then Red Arrow, Roy Harper has grown to become one of the most accomplished marksmen in the DC Universe. Roy now goes by the name Arsenal once more.",
    "Etrigan : One of the most notorious of Hell's demons, Etrigan's soul was merged with the body of a human man, Jason Blood, who calls upon the demon's terrifying power to fight the forces of darkness.",
    `Firestorm : Originally a composite being, Firestorm had power over fire and heat, and could alter the atomic structure of objects. As of "The New 52" multiple Firestorms exist and Ronnie and Jason as individual Firestorms can combine to create Fury, a giant walking nuclear reactor.`,
    "Hawkman : Carter Hall, now infused with the mysterious Nth Metal, is granted flight, strength and a living armor. He battles dangerous threats, both alien and mystical, as the savage Hawkman.",
    "Bart Allen : Hailing from the 30th century, Bart Allen is the grandson of the Flash, Barry Allen and Iris Allen. Originally using the name Impulse and trained by Max Mercury, Bart utilizes the same powers of super-speed possessed by his grandfather and fights crime alongside the Teen Titans, know as Kid Flash and Wally West's sidekick.",
    "Blue Beetle (Reyes) : Just a regular high school student from El Paso, Texas, Jaime gained the Scarab after Ted Kord lost it. With the Scarab he has great power and uses that power to protect the innocent.",
    "Nick Fury : Nicholas Joseph Fury served in World War II as the leader of the Howling Commandos. He later became an agent, and eventually director, of S.H.I.E.L.D. Fury is one of the greatest strategic minds in the world, a born leader and a master of espionage. He currently serves as a replacement Watcher.",
    "Christopher Kent : Born in the Phantom Zone, Lor-Zod is the son of General Zod and Ursa",
    "Damian Wayne : Damian Wayne is the son of Bruce Wayne and Talia al Ghul. Trained by the League of Assassins all his life, Damian joined his father’s side in the war against crime by becoming the fifth Robin.",
    `Vision : Vision is an artificial intelligence, a "synthezoid" created by the villain Ultron and an Avenger who possesses the power to alter his density at will. Having gained a modicum of humanity, Vision is always afraid he may one day lose touch with it.`,
    `Wasp : Genetically altered by Dr. Henry Pym, Janet Van Dyne gained the ability to alter her size, fly at rapid speeds and fire bio-electric energy "stings". Calling herself "the Wasp", she became Pym's superhero partner. Later, she became a founding member and the first female member of the Avengers.`,
    "Phantom Stranger : One of the most enigmatic beings in the universe, the Phantom Stranger only appears when events of great magnitudes necessitate his direct involvement. Mysterious and all knowing, at one with the cosmos.",
    "Huntress (Bertinelli) : Helena Bertinelli, born into one of Gotham's mafia families, became a spy and vigilante, destroying those that had killed her family. As a key member of the Birds of Prey, she has moved toward brutal, but non-lethal methods for fighting crime.",
    "Black Lightning : Jefferson Michael Pierce aka Black Lightning, is a teacher and former Olympic Gold Medal-winning athlete. He fights crime, using his electrokinetic powers. ",
    "Mr. Miracle : The son of Highfather, Scott Free was traded as an infant for Darkseid's child, Orion, to end the war between the New Gods of Apokolips and New Genesis. Scott later fled to Earth where he took on the mantle of Mister Miracle, and is considered the greatest escape artist in the universe. He is the husband of former Female Fury, Big Barda.",
    "Big Barda : Bred for battle on the hellish world of Apokolips, Big Barda became one of her world's greatest warriors and served as the leader of Darkseid's personal guard, the Female Furies. Eventually Barda found love, and fled Apokolips with her future husband, Mr. Miracle. Barda has since made Earth her primary home and has served as member of the Justice League.",
    "Zauriel : Zauriel was once a member of the Eagle Host, one of the Four Angel Hosts of Heaven. Then he fell in love with a mortal female and willingly gave up his Divinity to be with her. Now mortal, he lives among us as Heaven's Mortal Champion.",
    "Beast : One of the founding X-Men, Dr. Hank McCoy is a mutant possessing animal-like strength and agility. Despite being covered in blue fur and resembling a ferocious beast, he possesses an astounding intellect and a superb wit. Beast is currently helping run the Jean Grey School, while also serving with the Avengers.",
    "Nova : Richard Rider was a young teenager that was granted the power of a Nova Centurion. He eventually became Nova-Prime, leader of the Nova Corps.",
    "Skaar : Skaar is the son of the Hulk and Caiera the Oldstrong, retaining the powers of both his parents. He traveled to Earth to strike his revenge against his father, but upon realization that his father was a good person, joined forces with him instead. Recently however, he was depowered by Doctor Green.",
    "Power Girl : The alternate version of Supergirl from Earth-2, Kara Zor-L is more mature and experienced than her Earth-0 counterpart. The best friend of Batman's Earth-2 daughter, Huntress, she operates as one of her Earth's greatest heroes.",
    "Jon Kent : The son of Superman (Kal-El) and Lois Lane, and the Superboy of his timeline",
    "Beta Ray Bill : The cyborg champion of the Korbinites, Beta Ray Bill guarded his people as they fled attack by demons. When he encountered Thor and proved worthy to wield Mjolnir, Odin bestowed upon him the powers of Thor and created an equally powerful hammer for Bill, the Stormbreaker.",
    "Iron Fist : The latest in a long line of warriors who wielded their power against the wicked, Danny Rand is the immortal Iron Fist: protector of the mystical city of K'un Lun. He channels a soul of a dragon making his fists like unto iron, and is one of the greatest martial artists the world has ever known.",
    "Booster Gold : Humiliated in his own time-period, the 25th century, Michael Jon Carter stole future technology and a security robot named Skeets and traveled back into the 20th century to become the greatest hero you've never heard of: Booster Gold!",
    "Elektra : The lethal scarlet assassin. Daredevil's most fearsome enemy as well as his former lover and most renowned as being the greatest assassin in the world.",
    `Thunderbolt Ross : Thaddeus "Thunderbolt" Ross is former U.S. military general. He is father of Bruce Banner's love Betty Ross and was archenemy of the Incredible Hulk. Ross made a deal with villains to be transformed into a Hulk himself. As the ruthless and cunning Red Hulk, he attempted to destroy his nemesis and take control of the country before seeking redemption as an Avenger. After leaving the team,he formed his own group of Thunderbolts with other Anti-Heroes. He was recently depowered by Doctor Green.`,
    "Hawkgirl : Hawkgirl is the reincarnated spirit of Chay-Ara. Born on Thanagar, she gained the rank of lieutenant in her world and was subsequently sent to Earth on a mission, but during her stay, she grew to love Earth and care for its inhabitants, eventually becoming known to the people as the superheroine Hawkgirl.",
    "Lightray : Solis is a fun-loving New God and a good friend of Orion. He helps to balance the negativity of his friend, Orion with his own positive thought.",
    "Geo-Force : Brion Markov is the king of Markovia. Thanks to breeding and science, he has the powers of the planet Earth, including gravity, earth control, lava blasts and super-strength. He's also co-leader of the Outsiders and a founding member.",
    "Damage : The son of the Golden Age Atom, Grant Emerson became a hero after the Zero Hour triggered his powers. He has been a member of the Titans, the Freedom Fighters, and the Justice Society of America.",
    `Mr. Terrific : Michael Holt aka Mr. Terrific is the 3rd smartest man alive. Mr. Terrific embodies his Golden Age predecessor's slogan of "Fair Play", and is currently the White King of Checkmate.`,
    "Captain Britain : Chosen by Merlyn, Brian Braddock became Captain Britain: protector of Great Britain and the Omniverse. He is a founding member and leader of Excalibur, twin brother of the X-Man Psylocke, an agent of MI:13, and is currently serving as a member of the Captain Britain Corps.",
    "Mon-El : Lar Gand was an explorer from the planet Daxam who sacrificed himself to save Earth. Lar, whom came to be known as Mon-El, was a member of the Justice League and friend of Superman in the modern era and is a member of the Legion of Superheroes in the future.",
    `Knight (Sheldrake) : Knight is a British vigilante and member of the international crime-fighting group, "Batman, Incorporated". He is usually referred to as the Batman of England.`,
    "Black Widow : A former KGB agent Natasha Romanova, better known as Black Widow, is one of the best agents S.H.I.E.L.D. has ever had. She's a longtime member of the Avengers as well as the leader of the short-lived Los Angeles-based superhero team called the Champions.",
    "Stargirl : Current bearer of the Starman legacy, teenager Courtney Whitmore, serves as a valued member of the Justice League United.",
    "Adam Strange : A sci-fi character that started during the 50s has held true to the traditions of the typical sci-fi hero archetype with a love story. Adam Strange is also Life's thinker of the Aberrant Six.",
    "Kaine : Kaine was the first clone of Spider-Man created by the Jackal. He was suffering from clone degeneration and was used as a test subject until he fled. He became an assassin and spent years tormenting his clone brother Ben Reilly until he was eventually cured of his cellular degeneration and has taken up the mantle his now dead brother as the new Scarlet Spider.",
    "Congorilla : A trained tracker, explorer and expert marksman, Congo Bill is a superb athlete and excellent hand to hand combatant who was at one time able to swap bodies with a powerful enchanted Golden Gorilla. He now possesses the body of the Golden Gorilla permanently after his human body died.",
    "Animal Man : As a happy-go-lucky hero and devoted family man, Buddy Baker can mimic the powers of any animal on Earth and beyond. His powers come from a connection with the morphogenetic field of Earth also known as the Life Web or the Red.",
    "Swamp Thing : Botanist Alec Holland became the avatar of the Green, known as the Swamp Thing, following his death in a swamp as a result of a horrific accident. With the ability to control any form of plant life, Swamp Thing uses his powers to protect both the human and the plant worlds.",
];



function searchStringInArray(str, strArray,strwithDArray) {
  for (var j = 0; j < strArray.length; j++) {
    if (strArray[j].match(str)) {
      return `${strArray[j]}, ${strwithDArray[j]}`;
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
//     if(name === undefined) var speechOutput = `That's an interesting pokemon name`;
//     else var speechOutput = searchStringInArray(name, allPokemons,allPokemonsWithDescription);
//     this.response.cardRenderer(SKILL_NAME, speechOutput);
    this.response.speak(name);
    this.emit(":responseReady");
  },
  specificSuperHeroIntent: function() {
    var name = this.event.request.intent.slots.superhero.value;
    if(name === undefined) var speechOutput = `That's an interesting SuperHero name`;
    else var speechOutput = searchStringInArray(name, allSuperHeroes,allSuperHeroesWithDescription);
    this.response.cardRenderer(SKILL_NAME, speechOutput);
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
