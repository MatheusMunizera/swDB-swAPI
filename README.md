<p align="center">
   <a target="_blank" href="https://matheusmunizera.github.io/swAPI/">
    <img src="https://media0.giphy.com/media/l1uguGf2RVIsTXNDO/giphy.gif"/>
  </a>
</p>

# 🌠 StarWars API 
A open-source REST API created from [SWAPI](https://swapi.dev/documentation) with new attributes and updated informations.

You can make the request by a single JSON with <a href="#chains-routes">all the information</a> or a JSON with only the information <a href="#chains-by-id">based on the ID</a>.

## Base Url
`https://matheusmunizera.github.io/swAPI/api`

# :chains: Routes
GET all characters as a single JSON object

eg. [`/allCharacters.json`](https://matheusmunizera.github.io/swAPI/api/allCharacters.json)

GET all vehicles as a single JSON object

eg. [`/allVehicles.json`](https://matheusmunizera.github.io/swAPI/api/allVehicles.json)

GET all planets as a single JSON object

eg. [`/allPlanets.json`](https://matheusmunizera.github.io/swAPI/api/allPlanets.json)

GET all species as a single JSON object

eg. [`/allSpecies.json`](https://matheusmunizera.github.io/swAPI/api/allSpecies.json)

# :chains: By ID
GET complete informations by id

eg. [`/characters/1.json`](https://matheusmunizera.github.io/swAPI/api/characters/1.json)
```json
{
  "id": 1,
  "name": "Luke Skywalker",
  "height": 1.72,
  "mass": 73,
  "gender": "male",
  "homeworld": "tatooine",
  "wiki": "http://starwars.wikia.com/wiki/Luke_Skywalker",
  "image": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
  "born": 19,
  "bornLocation": "polis massa",
  "died": 34,
  "diedLocation": "ahch-to",
  "species": "human",
  "hairColor": "blond",
  "eyeColor": "blue",
  "skinColor": "light",
  "cybernetics": "Prosthetic right hand",
  "affiliations": [
    "Alliance to Restore the Republic",
    "Red Squadron",
    "Rogue Squadron",
    "Massassi Group",
    "Leia Organa's team",
    "Endor strike team",
    "Jedi Order",
    "Bright Tree tribe",
    "New Republic",
    "Resistance"
  ],
  "masters": [
    "Obi-Wan Kenobi",
    "Yoda"
  ],
  "apprentices": [
    "Leia Organa",
    "Ben Solo (along with a dozen apprentices)",
    "Rey"
  ],
  "formerAffiliations": [],
  "resume": "Luke Skywalker foi um fazendeiro Tatooine que cresceu de origens humildes para se tornar um dos maiores Jedi que a galáxia já conheceu. Junto com seus amigos Princesa Leia e Han Solo, Luke lutou contra o malvado Império, descobriu a verdade sobre sua linhagem e acabou com a tirania dos Sith. Uma geração depois, a localização do famoso mestre Jedi foi um dos maiores mistérios da galáxia. Assombrado pela queda de Ben Solo para o mal e convencido de que os Jedi tinham que acabar, Luke buscou o exílio em um mundo distante, ignorando os pedidos de ajuda da galáxia. Mas sua solidão seria interrompida - e Luke Skywalker tinha um papel final e importante a desempenhar na luta entre o bem e o mal."
}
```


# Credits
[SWAPI](https://swapi.dev/documentation)<br>
[Matheus Muniz](https://github.com/MatheusMunizera)



