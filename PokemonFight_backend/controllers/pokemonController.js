let jsonData = require('../file.json')

const getAllPokemons = function (req, res, next) {
  const mappedData = jsonData.map(el => {
    return { id: el.id, name: el.name.english }
  })
  res.send(mappedData)
}

const getOnePokemon = function (req, res, next) {
  console.log(typeof jsonData)
  const pokemons = jsonData

  const pokemon = pokemons.filter(el => el.id == req.params.id)
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
