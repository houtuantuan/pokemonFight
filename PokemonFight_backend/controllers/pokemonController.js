let jsonData = require('../file.json')

const getAllPokemons = function (req, res, next) {
  let searchedData
  if (req.query.pokemonName) {
     searchedData = jsonData.filter(el => {
      return el.name.english
        .toLowerCase()
        .includes(req.query.pokemonName.toLowerCase())
    })
  }else {
    searchedData=jsonData;
  }
  const mappedData = searchedData
    .slice(req.query.itemOffset, req.query.endOffset)
    .map(el => {
      return { id: el.id, name: el.name.english }
    })
  res.send({
    total: searchedData.length,
    current: mappedData
  })
}
const getOnePokemon = function (req, res, next) {
  console.log(typeof jsonData)
  const pokemons = jsonData

  const pokemon = pokemons.find(el => el.id == req.params.id)
  res.send(pokemon)
  console.log(pokemon)
}
const getInfo = function (req, res, next) {
  const pokemons = jsonData
  const infomation = req.params.info
  const pokemon = pokemons.filter(el => el.id == req.params.id)
  console.log(pokemon[0])
  res.send(pokemon[0][infomation])
}
module.exports = { getAllPokemons, getOnePokemon, getInfo }